import type { Metadata } from "next";
import Hero from "@/components/Hero";
import { Heart, Briefcase, Sparkles, Users, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Chrissy Weems - Chrissy Weems Scholarship",
  description:
    "Learn about Chrissy Weems, CEO of Origami Owl, passionate entrepreneur, and founder of the Chrissy Weems Scholarship.",
};

export default function About() {
  return (
    <>
      <Hero title="About Chrissy Weems" />

      <main className="max-w-[1160px] mx-auto px-6 md:px-10 py-16">
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-teal mb-4 pb-3 border-b-2 border-gray-100">
            <span className="inline-flex items-center gap-2">
              <Briefcase size={28} />
              Professional Background
            </span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Chrissy Weems is a passionate interior designer and successful female entrepreneur based
            in Phoenix, Arizona. She serves as CEO of Origami Owl, a jewelry company, and holds a
            Fine Arts degree from the University of Phoenix.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-teal mb-4 pb-3 border-b-2 border-gray-100">
            <span className="inline-flex items-center gap-2">
              <Sparkles size={28} />
              Business Founding
            </span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Chrissy and her daughter Bella established the jewelry business on Black Friday 2010,
            initially operating as a mall kiosk. The company has grown substantially, now boasting
            over 500,000 Facebook followers.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-teal mb-4 pb-3 border-b-2 border-gray-100">
            <span className="inline-flex items-center gap-2">
              <Heart size={28} />
              Inspiration and Values
            </span>
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Her daughter Bella inspired much of her entrepreneurial spirit, having saved money to
            purchase a used car at age 14. The company creates customizable lockets featuring
            miniature charms, personalized chains, and glass pieces designed to commemorate
            cherished moments.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Chrissy credits hard work, inventory management expertise, and understanding money&apos;s
            value in business. The team focuses on &ldquo;creating jewelry that connects people with
            the moments they cherish in life.&rdquo;
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-teal mb-4 pb-3 border-b-2 border-gray-100">
            <span className="inline-flex items-center gap-2">
              <Users size={28} />
              Community Initiatives
            </span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Origami Owl established the Owlette program supporting youth under 17 in the US and
            Canada to start businesses. The company partners with CHILDHELP to assist children in
            need.
          </p>
        </section>

        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-teal mb-4 pb-3 border-b-2 border-gray-100">
            <span className="inline-flex items-center gap-2">
              <Award size={28} />
              The Scholarship
            </span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The $1,000 Chrissy Weems Scholarship was established to support the education of up and
            coming entrepreneurs and business owners. It is awarded annually to high school seniors
            or current college students, requiring a 500-word essay submission.
          </p>
        </section>
      </main>
    </>
  );
}
