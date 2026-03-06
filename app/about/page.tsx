import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import { Heart, Briefcase, Sparkles, Users, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "About Chrissy Weems - Chrissy Weems Scholarship",
  description:
    "Learn about Chrissy Weems, CEO of Origami Owl, passionate entrepreneur, and founder of the Chrissy Weems Scholarship.",
};

export default function About() {
  return (
    <>
      <Hero title="About Chrissy Weems" compact />

      <main>
        {/* Professional Background - with image */}
        <section className="bg-white py-16">
          <div className="max-w-[1160px] mx-auto px-6 md:px-10">
            <ScrollReveal delay={1}>
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center shrink-0">
                    <Briefcase size={22} className="text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Professional Background
                  </h2>
                </div>
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="md:w-1/2">
                    <p className="text-gray-600 leading-relaxed">
                      Chrissy Weems is a passionate interior designer and successful female entrepreneur based
                      in Phoenix, Arizona. She serves as CEO of Origami Owl, a jewelry company, and holds a
                      Fine Arts degree from the University of Phoenix.
                    </p>
                  </div>
                  <div className="md:w-1/2">
                    <Image
                      src="/images/entrepreneur.jpg"
                      alt="Female entrepreneur working on a laptop"
                      width={800}
                      height={534}
                      className="rounded-2xl shadow-lg w-full h-auto"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Business Founding */}
        <section className="bg-teal-50 py-16">
          <div className="max-w-[1160px] mx-auto px-6 md:px-10">
            <ScrollReveal delay={2}>
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center shrink-0">
                    <Sparkles size={22} className="text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Business Founding
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Chrissy and her daughter Bella established the jewelry business on Black Friday 2010,
                  initially operating as a mall kiosk. The company has grown substantially, now boasting
                  over 500,000 Facebook followers.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Inspiration and Values */}
        <section className="bg-white py-16">
          <div className="max-w-[1160px] mx-auto px-6 md:px-10">
            <ScrollReveal delay={1}>
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center shrink-0">
                    <Heart size={22} className="text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Inspiration and Values
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Her daughter Bella inspired much of her entrepreneurial spirit, having saved money to
                  purchase a used car at age 14. The company creates customizable lockets featuring
                  miniature charms, personalized chains, and glass pieces designed to commemorate
                  cherished moments.
                </p>
                <div className="relative mt-8">
                  <span className="absolute -top-5 -left-1 text-7xl text-teal/15 font-serif leading-none select-none">&ldquo;</span>
                  <blockquote className="bg-teal-50 rounded-xl px-8 py-8 border border-teal/10">
                    <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed text-center">
                      Creating jewelry that connects people with the moments they cherish in life.
                    </p>
                  </blockquote>
                  <span className="absolute -bottom-8 -right-1 text-7xl text-teal/15 font-serif leading-none select-none">&rdquo;</span>
                </div>
                <p className="text-gray-600 leading-relaxed mt-12">
                  Chrissy credits hard work, inventory management expertise, and understanding money&apos;s
                  value in business.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Community Initiatives */}
        <section className="bg-teal-50 py-16">
          <div className="max-w-[1160px] mx-auto px-6 md:px-10">
            <ScrollReveal delay={2}>
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center shrink-0">
                    <Users size={22} className="text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Community Initiatives
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  Origami Owl established the Owlette program supporting youth under 17 in the US and
                  Canada to start businesses. The company partners with CHILDHELP to assist children in
                  need.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* The Scholarship */}
        <section className="bg-white py-16">
          <div className="max-w-[1160px] mx-auto px-6 md:px-10">
            <ScrollReveal delay={1}>
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-teal rounded-full flex items-center justify-center shrink-0">
                    <Award size={22} className="text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    The Scholarship
                  </h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  The $1,000 Chrissy Weems Scholarship was established to support the education of up and
                  coming entrepreneurs and business owners. It is awarded annually to high school seniors
                  or current college students, requiring a 500-word essay submission.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}
