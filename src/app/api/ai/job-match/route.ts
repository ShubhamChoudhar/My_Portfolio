import { NextResponse } from "next/server";
import { aiAssistantKnowledge } from "@/data/portfolioData";
import { buildProfileContext } from "@/lib/profileContext";
import { getOpenAIClient, getOpenAIModel } from "@/lib/openaiClient";

export const runtime = "nodejs";

type JobMatchPayload = {
  jobDescription?: string;
};

type JobMatchResponse = {
  score: number;
  matched: string[];
  missing: string[];
  summary: string;
  suggestions: string[];
};

function fallbackKeywordMatch(jobDescription: string): JobMatchResponse {
  const text = jobDescription.toLowerCase();
  const matched = aiAssistantKnowledge.keywords.filter((keyword) =>
    text.includes(keyword),
  );
  const missing = aiAssistantKnowledge.keywords.filter(
    (keyword) => !text.includes(keyword),
  );

  const score = Math.round((matched.length / aiAssistantKnowledge.keywords.length) * 100);

  return {
    score,
    matched: matched.slice(0, 10),
    missing: missing.slice(0, 10),
    summary:
      "AI fallback analysis completed using keyword overlap between the job description and portfolio profile.",
    suggestions: [
      "Highlight the most relevant project outcomes for this role.",
      "Tailor your resume summary with domain-specific keywords.",
      "Prioritize measurable impact metrics in outreach or interviews.",
    ],
  };
}

function clampScore(value: number) {
  if (Number.isNaN(value)) {
    return 0;
  }
  return Math.max(0, Math.min(100, Math.round(value)));
}

export async function POST(request: Request) {
  let jobDescription = "";

  try {
    const body = (await request.json()) as JobMatchPayload;
    jobDescription = body.jobDescription?.trim() || "";

    if (!jobDescription) {
      return NextResponse.json(
        { error: "Job description is required." },
        { status: 400 },
      );
    }

    const client = getOpenAIClient();
    const model = getOpenAIModel();

    const systemPrompt = [
      "You are an expert technical recruiter assistant.",
      "Compare the candidate profile against the given job description.",
      "Return strict JSON only with keys: score, matched, missing, summary, suggestions.",
      "score must be 0-100 number.",
      "matched and missing must be arrays of short strings.",
      "suggestions must contain exactly 3 short actionable bullet-style strings.",
      "Profile Context:",
      buildProfileContext(),
    ].join("\n");

    const completion = await client.chat.completions.create({
      model,
      temperature: 0.2,
      max_tokens: 500,
      messages: [
        { role: "system", content: systemPrompt },
        {
          role: "user",
          content: `Job Description:\n${jobDescription}`,
        },
      ],
      response_format: { type: "json_object" },
    });

    const rawText = completion.choices[0]?.message?.content;

    if (!rawText) {
      return NextResponse.json(fallbackKeywordMatch(jobDescription));
    }

    const parsed = JSON.parse(rawText) as Partial<JobMatchResponse>;
    const safe: JobMatchResponse = {
      score: clampScore(Number(parsed.score ?? 0)),
      matched: Array.isArray(parsed.matched)
        ? parsed.matched.filter((item): item is string => typeof item === "string").slice(0, 10)
        : [],
      missing: Array.isArray(parsed.missing)
        ? parsed.missing.filter((item): item is string => typeof item === "string").slice(0, 10)
        : [],
      summary:
        typeof parsed.summary === "string" && parsed.summary.trim()
          ? parsed.summary.trim()
          : "Role fit estimated from skills and project overlap.",
      suggestions: Array.isArray(parsed.suggestions)
        ? parsed.suggestions
            .filter((item): item is string => typeof item === "string")
            .slice(0, 3)
        : [
            "Emphasize matching stack and measurable impact.",
            "Align your resume summary to the job priorities.",
            "Prepare project examples tied to business outcomes.",
          ],
    };

    return NextResponse.json(safe);
  } catch (error) {
    console.error("AI job match error:", error);

    if (jobDescription) {
      const fallback = fallbackKeywordMatch(jobDescription);
      return NextResponse.json(fallback);
    }

    return NextResponse.json(
      {
        error:
          "AI job match is unavailable right now. Check OPENAI_API_KEY and retry.",
      },
      { status: 500 },
    );
  }
}
