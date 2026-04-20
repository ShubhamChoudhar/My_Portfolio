import { NextResponse } from "next/server";
import { buildProfileContext } from "@/lib/profileContext";
import { getOpenAIClient, getOpenAIModel } from "@/lib/openaiClient";

export const runtime = "nodejs";

type ChatRole = "user" | "assistant";

type ChatMessage = {
  role?: ChatRole;
  content?: string;
};

type ChatPayload = {
  messages?: ChatMessage[];
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ChatPayload;
    const rawMessages = Array.isArray(body.messages) ? body.messages : [];

    const messages = rawMessages
      .filter(
        (message): message is { role: ChatRole; content: string } =>
          (message.role === "user" || message.role === "assistant") &&
          typeof message.content === "string" &&
          message.content.trim().length > 0,
      )
      .slice(-10)
      .map((message) => ({
        role: message.role,
        content: message.content.trim(),
      }));

    if (!messages.length) {
      return NextResponse.json(
        { error: "Please send at least one chat message." },
        { status: 400 },
      );
    }

    const client = getOpenAIClient();
    const model = getOpenAIModel();

    const systemPrompt = [
      "You are an AI portfolio assistant for Shubham Choudhary.",
      "Answer in concise, recruiter-friendly style.",
      "Use only the profile context provided.",
      "If asked for unknown details, say it is not available in profile data.",
      "Profile Context:",
      buildProfileContext(),
    ].join("\n");

    const response = await client.chat.completions.create({
      model,
      temperature: 0.3,
      max_tokens: 450,
      messages: [
        { role: "system", content: systemPrompt },
        ...messages.map((message) => ({
          role: message.role,
          content: message.content,
        })),
      ],
    });

    const reply = response.choices[0]?.message?.content?.trim();

    if (!reply) {
      return NextResponse.json(
        { error: "No response generated. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ reply });
  } catch (error) {
    console.error("AI chat error:", error);

    return NextResponse.json(
      {
        error:
          "AI assistant is unavailable right now. Check OPENAI_API_KEY and try again.",
      },
      { status: 500 },
    );
  }
}
