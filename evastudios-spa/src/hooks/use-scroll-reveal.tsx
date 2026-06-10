import { useEffect } from "react";

/**
 * Global scroll-reveal: observes every element with .reveal, .reveal-left,
 * .reveal-right, .reveal-zoom, or .reveal-stagger and toggles .is-visible
 * when they enter the viewport. Also auto-tags top-level sections so the
 * whole page animates on scroll without per-component changes.
 */
export function useScrollReveal() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Auto-tag top-level sections inside <main> if not already tagged.
    const sections = document.querySelectorAll<HTMLElement>("main > section, main > div > section");
    sections.forEach((el, i) => {
      if (
        !el.classList.contains("reveal") &&
        !el.classList.contains("reveal-left") &&
        !el.classList.contains("reveal-right") &&
        !el.classList.contains("reveal-zoom") &&
        !el.classList.contains("reveal-stagger")
      ) {
        el.classList.add(i % 2 === 0 ? "reveal" : "reveal-zoom");
      }
    });

    const targets = document.querySelectorAll(
      ".reveal, .reveal-left, .reveal-right, .reveal-zoom, .reveal-stagger"
    );

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    targets.forEach((t) => io.observe(t));

    return () => io.disconnect();
  }, []);
}
