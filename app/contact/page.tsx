import type { Metadata } from "next";
import Image from "next/image";
import Hero from "@/components/Hero";
import ScrollReveal from "@/components/ScrollReveal";
import { MapPin, Mail, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us - Chrissy Weems Scholarship",
  description: "Get in touch with the Chrissy Weems Scholarship team.",
};

export default function Contact() {
  return (
    <>
      <Hero title="Contact Us" compact />

      <main className="py-20">
        <div className="max-w-[1160px] mx-auto px-6 md:px-10">
          {/* Campus banner */}
          <ScrollReveal>
            <div className="relative h-[200px] md:h-[280px] rounded-2xl overflow-hidden shadow-lg mb-14">
              <Image
                src="/images/campus.jpg"
                alt="College campus building"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-navy/40" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <ScrollReveal>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                  Get in Touch
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Have questions about the Chrissy Weems Scholarship? We&apos;d love to hear from you.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={1}>
                <div className="bg-teal-50 rounded-xl p-6 flex items-start gap-4 border border-teal/10">
                  <div className="w-10 h-10 bg-teal rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Location</h3>
                    <p className="text-gray-600 text-sm">Phoenix, Arizona</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={2}>
                <div className="bg-teal-50 rounded-xl p-6 flex items-start gap-4 border border-teal/10">
                  <div className="w-10 h-10 bg-teal rounded-full flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Email</h3>
                    <p className="text-gray-600 text-sm">info@chrissyweemsscholarship.com</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={3}>
                <div className="bg-teal-50 rounded-xl p-6 flex items-start gap-4 border border-teal/10">
                  <div className="w-10 h-10 bg-teal rounded-full flex items-center justify-center shrink-0">
                    <Award size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-1">Scholarship Amount</h3>
                    <p className="text-gray-600 text-sm">$1,000 Annual Award</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={1}>
                <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-800 mb-6">Send a Message</h3>
                  <form className="space-y-5">
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
                      <label htmlFor="message" className="block mb-1.5 font-semibold text-sm text-gray-700">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={8}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-teal focus:ring-2 focus:ring-teal/20 transition-all resize-y"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-teal hover:bg-teal-dark text-white font-semibold uppercase tracking-wide text-sm py-4 rounded-lg transition-all duration-300 hover:shadow-lg cursor-pointer"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
