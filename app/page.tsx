import Hero from "@/components/Hero";
import { GraduationCap, FileText, Calendar, CheckCircle } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero title="Chrissy Weems Scholarship" />

      <main className="max-w-[1160px] mx-auto px-6 md:px-10 py-16">
        {/* About the Scholarship */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-teal mb-4 pb-3 border-b-2 border-gray-100">
            About the Scholarship
          </h2>
          <p className="text-gray-600 leading-relaxed">
            The Chrissy Weems Scholarship was created to help the future entrepreneurs and small
            business owners of our world. High school seniors accepted to colleges and current
            college students are encouraged to apply for this $1,000 award, requiring a 500-word
            essay submission.
          </p>
        </section>

        {/* Eligibility */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-teal mb-4 pb-3 border-b-2 border-gray-100">
            <span className="inline-flex items-center gap-2">
              <CheckCircle size={28} />
              Eligibility Requirements
            </span>
          </h2>
          <p className="text-gray-600 mb-4">Applicants must meet one of the following criteria:</p>
          <ul className="space-y-3 text-gray-600">
            <li className="flex items-start gap-3">
              <GraduationCap size={20} className="text-teal mt-0.5 shrink-0" />
              <span>High school senior accepted to a college or university</span>
            </li>
            <li className="flex items-start gap-3">
              <GraduationCap size={20} className="text-teal mt-0.5 shrink-0" />
              <span>Current college student not in their final year</span>
            </li>
          </ul>
        </section>

        {/* Application Guidelines */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-teal mb-4 pb-3 border-b-2 border-gray-100">
            <span className="inline-flex items-center gap-2">
              <FileText size={28} />
              Application Guidelines
            </span>
          </h2>
          <p className="text-gray-600 mb-4">
            Applicants must write a 500-word essay addressing this prompt:
          </p>
          <blockquote className="border-l-4 border-teal bg-gray-50 px-6 py-5 my-6 italic text-gray-700 text-lg">
            &ldquo;Share an adversity in your life that you have fought to overcome and what you
            have learned from it.&rdquo;
          </blockquote>
          <p className="text-gray-600">
            By applying, applicants grant permission for their name and essay to be used for
            marketing and promotional purposes.
          </p>
        </section>

        {/* Key Deadlines */}
        <section className="mb-14">
          <h2 className="text-2xl md:text-3xl font-bold text-teal mb-4 pb-3 border-b-2 border-gray-100">
            <span className="inline-flex items-center gap-2">
              <Calendar size={28} />
              Key Deadlines
            </span>
          </h2>
          <ul className="space-y-3 text-gray-600">
            <li>
              <strong>Submission Deadline:</strong> February 28, 2019
            </li>
            <li>
              <strong>Winner Selection:</strong> March 2019
            </li>
            <li>
              <strong>Response Period:</strong> Two weeks after notification to respond
            </li>
          </ul>
        </section>

        {/* Application Form */}
        <section id="apply">
          <h2 className="text-2xl md:text-3xl font-bold text-teal mb-4 pb-3 border-b-2 border-gray-100">
            Apply Now
          </h2>
          <form className="max-w-2xl space-y-6">
            <div>
              <label htmlFor="name" className="block mb-1.5 font-semibold text-sm text-gray-700">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal transition-colors"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal transition-colors"
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-1.5 font-semibold text-sm text-gray-700"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal transition-colors"
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
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal transition-colors resize-y"
              />
            </div>
            <button
              type="submit"
              className="bg-teal hover:bg-teal-dark text-white font-semibold uppercase tracking-wide text-sm px-10 py-4 rounded-md transition-colors cursor-pointer"
            >
              Submit Application
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
