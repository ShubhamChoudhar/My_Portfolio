"use client";

import { type FormEvent, useMemo, useState } from "react";
import {
  Bot,
  Briefcase,
  Loader2,
  SendHorizonal,
  Sparkles,
  WandSparkles,
} from "lucide-react";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";

type ChatMessage = {
  role: "assistant" | "user";
  content: string;
};

type JobMatchResult = {
  score: number;
  matched: string[];
  missing: string[];
  summary: string;
  suggestions: string[];
};

const quickPrompts = [
  "Give me a recruiter summary about Shubham.",
  "What are his strongest technical skills?",
  "Which project is best for a fintech role?",
  "Write a 60-second interview introduction.",
];

async function requestChatReply(messages: ChatMessage[]) {
  const response = await fetch("/api/ai/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages }),
  });

  const data = (await response.json()) as { reply?: string; error?: string };

  if (!response.ok || !data.reply) {
    throw new Error(data.error || "Unable to get AI response.");
  }

  return data.reply;
}

async function requestJobMatch(jobDescription: string) {
  const response = await fetch("/api/ai/job-match", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jobDescription }),
  });

  const data = (await response.json()) as JobMatchResult & { error?: string };

  if (!response.ok) {
    throw new Error(data.error || "Unable to analyze job description.");
  }

  return data;
}

export default function AIAssistantSection() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi, I’m Shubham’s AI portfolio assistant. Ask me about experience, projects, strengths, role fit, or interview-ready summaries.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [jobDescription, setJobDescription] = useState("");
  const [jobMatch, setJobMatch] = useState<JobMatchResult | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [jobMatchError, setJobMatchError] = useState("");

  const chatSuggestions = useMemo(() => quickPrompts, []);

  const sendPrompt = async (prompt: string) => {
    const trimmed = prompt.trim();
    if (!trimmed || isThinking) {
      return;
    }

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: trimmed },
    ];

    setMessages(nextMessages);
    setInput("");
    setIsThinking(true);

    try {
      const reply = await requestChatReply(nextMessages);
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            error instanceof Error
              ? error.message
              : "AI assistant is temporarily unavailable.",
        },
      ]);
    } finally {
      setIsThinking(false);
    }
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    void sendPrompt(input);
  };

  const runJobMatch = async () => {
    if (!jobDescription.trim() || isAnalyzing) {
      return;
    }

    setIsAnalyzing(true);
    setJobMatchError("");

    try {
      const result = await requestJobMatch(jobDescription.trim());
      setJobMatch(result);
    } catch (error) {
      setJobMatchError(
        error instanceof Error
          ? error.message
          : "Unable to analyze the job description right now.",
      );
    } finally {
      setIsAnalyzing(false);
    }
  };

  return (
    <section
      id="ai-assistant"
      className="scroll-mt-28 px-4 py-20 md:py-24"
      aria-label="AI Assistant"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <SectionHeading title="AI Portfolio Assistant" />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-[0_20px_65px_rgba(8,14,34,0.45)] backdrop-blur-xl md:p-6">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-cyan-200" />
                <h3 className="text-lg font-semibold text-slate-100">Ask the AI Assistant</h3>
              </div>
            </div>

            <div className="mt-5 max-h-[360px] space-y-3 overflow-y-auto rounded-2xl border border-white/10 bg-slate-950/70 p-4">
              {messages.map((message, index) => (
                <div
                  key={`${message.role}-${index}`}
                  className={`max-w-[92%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed md:text-[0.95rem] ${
                    message.role === "assistant"
                      ? "bg-white/5 text-slate-200"
                      : "ml-auto bg-cyan-500/15 text-cyan-100"
                  }`}
                >
                  {message.content}
                </div>
              ))}
              {isThinking ? (
                <div className="inline-flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-2 text-sm text-slate-300">
                  <Sparkles className="h-4 w-4 text-cyan-200" />
                  Thinking...
                </div>
              ) : null}
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {chatSuggestions.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs text-slate-300 transition hover:border-cyan-300/35 hover:text-cyan-100"
                  onClick={() => {
                    void sendPrompt(prompt);
                  }}
                >
                  {prompt}
                </button>
              ))}
            </div>

            <form onSubmit={onSubmit} className="mt-4 flex gap-2">
              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask about experience, projects, skills, or role fit..."
                className="w-full rounded-xl border border-white/15 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/25"
                aria-label="Ask AI assistant"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-4 text-slate-950 transition hover:brightness-110"
                aria-label="Send prompt"
                disabled={isThinking}
              >
                {isThinking ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <SendHorizonal className="h-4 w-4" />
                )}
              </button>
            </form>
          </Reveal>

          <div className="space-y-6">
            <Reveal className="rounded-3xl border border-white/10 bg-slate-900/65 p-5 backdrop-blur-xl md:p-6">
              <div className="flex items-center gap-2">
                <Briefcase className="h-5 w-5 text-cyan-200" />
                <h3 className="text-lg font-semibold text-slate-100">AI Job Match Analyzer</h3>
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Paste a job description and get an AI-generated fit score against Shubham&apos;s profile.
              </p>

              <textarea
                value={jobDescription}
                onChange={(event) => setJobDescription(event.target.value)}
                rows={6}
                placeholder="Paste job description here..."
                className="mt-4 w-full resize-none rounded-xl border border-white/15 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-400 focus:border-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/25"
              />

              <button
                type="button"
                onClick={() => {
                  void runJobMatch();
                }}
                className="mt-3 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-4 py-2 text-sm font-semibold text-slate-950 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
                disabled={isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Analyzing...
                  </>
                ) : (
                  <>
                    <WandSparkles className="h-4 w-4" />
                    Analyze Match
                  </>
                )}
              </button>

              {jobMatchError ? (
                <p className="mt-3 text-sm text-rose-300">{jobMatchError}</p>
              ) : null}

              {jobMatch ? (
                <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-cyan-500/5 p-4 text-sm">
                  <p className="text-slate-100">
                    Match Score: <span className="font-semibold text-cyan-200">{jobMatch.score}%</span>
                  </p>
                  <p className="mt-2 text-slate-300">Summary: {jobMatch.summary}</p>
                  <p className="mt-2 text-slate-300">
                    Matched Keywords: {jobMatch.matched.length ? jobMatch.matched.join(", ") : "None"}
                  </p>
                  <p className="mt-2 text-slate-400">
                    Suggested Additions: {jobMatch.missing.length ? jobMatch.missing.join(", ") : "Strong alignment"}
                  </p>

                  <ul className="mt-3 space-y-1 text-slate-300">
                    {jobMatch.suggestions.map((tip) => (
                      <li key={tip} className="before:mr-2 before:text-cyan-300 before:content-['•']">
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
