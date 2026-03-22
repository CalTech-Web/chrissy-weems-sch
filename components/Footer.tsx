import Link from "next/link";
import { MapPin, Mail, Award, ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* CTA Banner */}
      <section className="relative overflow-hidden bg-gradient-to-r from-teal-deeper via-teal to-teal-dark py-16 text-center">
        <div className="max-w-[1160px] mx-auto px-6 md:px-10">
          <h2 className="font-[family-name:var(--font-arizonia)] text-3xl md:text-5xl text-white mb-4">
            Stay Connected
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Applications are currently closed. Check back regularly for updates on the next Chrissy Weems Scholarship cycle.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-white font-semibold uppercase tracking-wider text-sm px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-gray-400 py-14">
        <div className="max-w-[1160px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            {/* Brand */}
            <div>
              <h3 className="font-[family-name:var(--font-arizonia)] text-2xl text-white mb-3">
                Chrissy Weems Scholarship
              </h3>
              <p className="text-sm leading-relaxed">
                Empowering the next generation of entrepreneurs and small business owners through education.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold uppercase tracking-wide text-sm mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:text-teal transition-colors">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-teal transition-colors">About Chrissy Weems</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-teal transition-colors">Contact Us</Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-teal transition-colors">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold uppercase tracking-wide text-sm mb-4">
                Contact Info
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3">
                  <MapPin size={16} className="text-teal shrink-0" />
                  Phoenix, Arizona
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-teal shrink-0" />
                  info@chrissyweemsscholarship.com
                </li>
                <li className="flex items-center gap-3">
                  <Award size={16} className="text-teal shrink-0" />
                  $1,000 Annual Award
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-6 text-center text-sm">
            <p>
              &copy; Chrissy Weems Scholarship. All Rights Reserved.
              <span className="mx-2">|</span>
              Built by{" "}
              <a
                href="http://caltechweb.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal hover:text-white transition-colors"
              >
                CalTech Web
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
