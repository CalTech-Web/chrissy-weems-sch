import type { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Contact Us - Chrissy Weems Scholarship",
  description: "Get in touch with the Chrissy Weems Scholarship team.",
};

export default function Contact() {
  return (
    <>
      <Hero title="Contact Us" />

      <main className="max-w-[1160px] mx-auto px-6 md:px-10 py-16">
        <section>
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
              <label
                htmlFor="message"
                className="block mb-1.5 font-semibold text-sm text-gray-700"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={8}
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-teal transition-colors resize-y"
              />
            </div>
            <button
              type="submit"
              className="bg-teal hover:bg-teal-dark text-white font-semibold uppercase tracking-wide text-sm px-10 py-4 rounded-md transition-colors cursor-pointer"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
