import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All",
  description: "All page – showcase additional content for Connplex Cinemas.",
};

export default function AllPage() {
  return (
    <section className="container mx-auto min-h-screen flex flex-col items-center justify-center text-center py-20">
      <h1 className="text-5xl font-bold" style={{ color: "var(--primary-gold)" }}>
        All
      </h1>
      <p className="mt-6 text-lg" style={{ color: "var(--text-secondary)" }}>
        This page is a placeholder. Replace this text with the content you’d like to display beneath the hero section.
      </p>
    </section>
  );
}
