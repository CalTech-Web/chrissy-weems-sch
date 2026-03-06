import Image from "next/image";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import { GraduationCap, FileText, Calendar, Clock, CheckCircle, Trophy } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero
        title="Chrissy Weems Scholarship"
        subtitle="Empowering the next generation of entrepreneurs and small business owners through a $1,000 annual award."
        ctaText="Apply Now"
        ctaHref="#apply"
      />

      <main>
        {/* About the Scholarship */}
        <section className="bg-teal-50 py-20">
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
                <blockquote className="bg-white rounded-xl px-10 py-10 shadow-md border border-gray-100 text-center">
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

        {/* Key Deadlines */}
        <section className="py-20">
          <div className="max-w-[1160px] mx-auto px-6 md:px-10">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-teal mb-10 text-center">
                <span className="inline-flex items-center gap-3">
                  <Calendar size={32} />
                  Key Deadlines
                </span>
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <ScrollReveal delay={1}>
                <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 text-center">
                  <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Calendar size={24} className="text-teal" />
                  </div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Submission Deadline</p>
                  <p className="text-xl font-bold text-gray-800">February 28, 2019</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={2}>
                <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 text-center">
                  <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Trophy size={24} className="text-teal" />
                  </div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Winner Selection</p>
                  <p className="text-xl font-bold text-gray-800">March 2019</p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={3}>
                <div className="bg-white rounded-xl p-8 shadow-md border border-gray-100 text-center">
                  <div className="w-14 h-14 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock size={24} className="text-teal" />
                  </div>
                  <p className="text-sm text-gray-500 uppercase tracking-wide mb-1">Response Period</p>
                  <p className="text-xl font-bold text-gray-800">Two Weeks</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Student studying banner */}
        <section className="relative h-[300px] md:h-[400px] overflow-hidden">
          <Image
            src="/images/student-studying.jpg"
            alt="Student studying and writing an essay at a desk"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-navy/60 flex items-center justify-center">
            <div className="text-center px-6">
              <h2 className="font-[family-name:var(--font-arizonia)] text-3xl md:text-5xl text-white mb-4">
                Your Future Starts Here
              </h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto">
                Submit your 500-word essay and take the first step toward your $1,000 scholarship.
              </p>
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="bg-teal-50 py-20">
          <div className="max-w-[1160px] mx-auto px-6 md:px-10">
            <ScrollReveal>
              <h2 className="text-3xl md:text-4xl font-bold text-teal mb-10 text-center">
                Apply Now
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={1}>
              <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-12 border border-gray-100">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-1.5 font-semibold text-sm text-gray-700">
                      Your Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-1.5 font-semibold text-sm text-gray-700">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-1.5 font-semibold text-sm text-gray-700">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all"
                    />
                  </div>
                  <div>
                    <label htmlFor="essay" className="block mb-1.5 font-semibold text-sm text-gray-700">
                      Your Essay (500 words) <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="essay"
                      name="essay"
                      rows={12}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all resize-y"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-teal hover:bg-teal-dark text-white font-semibold uppercase tracking-wide text-sm py-4 rounded-lg transition-all duration-300 hover:shadow-lg cursor-pointer"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
    </>
  );
}
