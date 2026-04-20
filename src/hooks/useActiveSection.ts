"use client";

import { useEffect, useMemo, useState } from "react";

export function useActiveSection(ids: string[]) {
  const [activeSection, setActiveSection] = useState(ids[0] ?? "");
  const idsKey = useMemo(() => ids.join("|"), [ids]);

  useEffect(() => {
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0.01,
      },
    );

    sections.forEach((section) => observer.observe(section));

    const onScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection(ids[0] ?? "");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [ids, idsKey]);

  return activeSection;
}
