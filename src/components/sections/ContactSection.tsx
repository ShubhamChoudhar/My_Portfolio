"use client";

import { type FormEvent, useEffect, useState } from "react";
import { Loader2, Mail, Phone } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { contactInfo } from "@/data/portfolioData";

type SubmitState = {
  type: "idle" | "success" | "error";
  message: string;
};

export default function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<SubmitState>({
    type: "idle",
    message: "",
  });

  useEffect(() => {
    if (submitState.type === "idle") {
      return;
    }

    const timer = window.setTimeout(() => {
      setSubmitState({ type: "idle", message: "" });
    }, 2000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [submitState]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setSubmitState({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
        }),
      });

      const data = (await response.json()) as { error?: string; success?: boolean };

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Unable to submit the form right now.");
      }

      setSubmitState({
        type: "success",
        message: "Message sent successfully.",
      });
    } catch (error) {
      setSubmitState({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Something went wrong while sending your message.",
      });
    } finally {
      setName("");
      setEmail("");
      setMessage("");
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="scroll-mt-28 px-4 py-20 md:py-24"
      aria-label="Contact"
    >
      <div className="mx-auto w-full max-w-6xl">
        <Reveal>
          <SectionHeading
            title="Let’s Build Something Valuable"
            description="I’m open to impactful software roles, collaborations, and product-focused conversations."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="rounded-3xl border border-white/10 bg-slate-900/65 p-7 backdrop-blur-xl">
            <h3 className="text-xl font-semibold text-slate-100">Contact Details</h3>
            <div className="mt-6 space-y-4">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:border-cyan-300/45 hover:text-cyan-100"
              >
                <Mail className="h-4 w-4" />
                {contactInfo.email}
              </a>
              <a
                href={`tel:${contactInfo.phone}`}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:border-cyan-300/45 hover:text-cyan-100"
              >
                <Phone className="h-4 w-4" />
                {contactInfo.phone}
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:border-cyan-300/45 hover:text-cyan-100"
              >
                <FaLinkedinIn className="h-4 w-4" />
                LinkedIn
              </a>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-slate-200 transition hover:border-cyan-300/45 hover:text-cyan-100"
              >
                <FaGithub className="h-4 w-4" />
                GitHub
              </a>
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/75 to-slate-950/80 p-7 backdrop-blur-xl"
          >
            <h3 className="text-xl font-semibold text-slate-100">Send a Message</h3>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/15 bg-slate-950/70 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/15 bg-slate-950/70 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  placeholder="Tell me about your project or role."
                  className="w-full resize-none rounded-xl border border-white/15 bg-slate-950/70 px-4 py-3 text-slate-100 placeholder:text-slate-400 focus:border-cyan-300/50 focus:outline-none focus:ring-2 focus:ring-cyan-400/30"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>

              {submitState.type !== "idle" ? (
                <p
                  role="status"
                  className={`text-sm ${
                    submitState.type === "success" ? "text-emerald-300" : "text-rose-300"
                  }`}
                >
                  {submitState.message}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
