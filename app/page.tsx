import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import { GraduationCap, FileText, CheckCircle, Info } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero
        title="Chrissy Weems Scholarship"
        subtitle="Empowering the next generation of entrepreneurs and small business owners through a $1,000 annual award."
        ctaText="Learn More"
        ctaHref="#about"
      />

      <main>
        {/* About the Scholarship */}
        <section id="about" className="bg-teal-50 py-20">
          <div className="max-w-[1160px] mx-auto px-6 md:px-10">
            <ScrollReveal>
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-1/2">
                  <h2 className="text-3xl md:text-4xl font-bold text-teal mb-6">
                    About the Scholarship
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    The Chrissy Weems Scholarship was created to help the future entrepreneurs and small
                    business owners of our world. High school seniors accepted to colleges and current
                    college students are encouraged to apply for this $1,000 award, requiring a 500-word
                    essay submission.
                  </p>
                </div>
                <div className="md:w-1/2">
                  <Image
                    src="/images/graduation.jpg"
                    alt="Students celebrating graduation by throwing caps in the air"
                    width={800}
                    height={533}
                    className="rounded-2xl shadow-lg w-full h-auto"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Eligibility */}
        <section className="py-20">
          <div className="max-w-[1160px] mx-auto px-6 md:px-10">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4 text-center">
                <span className="inline-flex items-center gap-3">
                  <CheckCircle size={32} />
                  Eligibility Requirements
                </span>
              </h2>
              <p className="text-gray-500 text-center mb-10">Applicants must meet one of the following criteria:</p>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <ScrollReveal delay={1} className="h-full">
                <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
                  <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-5">
                    <GraduationCap size={28} className="text-teal" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">High School Seniors</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    High school senior accepted to a college or university
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={2} className="h-full">
                <div className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 h-full">
                  <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mb-5">
                    <GraduationCap size={28} className="text-teal" />
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">College Students</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Current college student not in their final year
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Essay Prompt */}
        <section className="bg-teal-50 py-20">
          <div className="max-w-[1160px] mx-auto px-6 md:px-10">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4 text-center">
                <span className="inline-flex items-center gap-3">
                  <FileText size={32} />
                  Application Guidelines
                </span>
              </h2>
              <p className="text-gray-500 text-center mb-10">
                Applicants must write a 500-word essay addressing this prompt:
              </p>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div className="max-w-2xl mx-auto relative">
                <span className="absolute -top-6 -left-2 text-8xl text-teal/15 font-serif leading-none select-none">&ldquo;</span>
                <blockquote className="bg-white rounded-xl px-6 py-8 md:px-10 md:py-10 shadow-md border border-gray-100 text-center">
                  <p className="text-xl md:text-2xl text-gray-700 italic leading-relaxed">
                    Share an adversity in your life that you have fought to overcome and what you
                    have learned from it.
                  </p>
                </blockquote>
                <span className="absolute -bottom-10 -right-2 text-8xl text-teal/15 font-serif leading-none select-none">&rdquo;</span>
              </div>
              <p className="text-gray-500 text-sm text-center mt-14">
                By applying, applicants grant permission for their name and essay to be used for
                marketing and promotional purposes.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Application Status */}
        <section className="py-20">
          <div className="max-w-[1160px] mx-auto px-6 md:px-10">
            <ScrollReveal>
              <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100 text-center">
                <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Info size={32} className="text-teal" />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-teal mb-4">
                  Applications Are Currently Closed
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  The application period for the Chrissy Weems Scholarship is currently closed. Please check back regularly for updates on the next application cycle.
                </p>
                <Link
                  href="/contact"
                  className="inline-block bg-gold hover:bg-gold-dark text-white font-semibold uppercase tracking-wider text-sm px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  Contact Us for Updates
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Student studying banner */}
        <section className="relative h-[300px] md:h-[400px] overflow-hidden">
          <Image
            src="/images/student-studying.jpg"
            alt="Student studying and writing an essay at a desk"
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/60 flex items-center justify-center">
            <div className="text-center px-6">
              <h2 className="font-[family-name:var(--font-arizonia)] text-3xl md:text-5xl text-white mb-4">
                Your Future Starts Here
              </h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto">
                Stay tuned for the next opportunity to apply for the $1,000 Chrissy Weems Scholarship.
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
