"use client";

import Link from "next/link";
import { Mail, MapPin, Calendar } from "lucide-react";
import Container from "./Container";
import { OrnamentalDivider } from "./DecorativeSVGs";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#060911] text-[#e8e4dd] pt-16 pb-8 overflow-hidden">
      {/* Gold gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#c6a75e]/40 to-transparent" />

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-[#c6a75e]/[0.03] rounded-full blur-[120px]" />

      <Container>
        <OrnamentalDivider className="mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-8">
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-4 text-gold-gradient">
              Sahithyotsav 2026
            </h3>
            <p className="text-[#e8e4dd]/40 text-sm leading-relaxed">
              A celebration of literature, voices, and ideas. Join us for two
              days of inspiring events, discussions, and creative expression.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#c6a75e] text-sm tracking-wider uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/schedule", label: "Schedule" },
                { href: "/register", label: "Register" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#e8e4dd]/40 hover:text-[#c6a75e] transition-colors duration-300 text-sm inline-block relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#c6a75e] group-hover:w-full transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#c6a75e] text-sm tracking-wider uppercase">
              Contact
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-[#e8e4dd]/40 text-sm">
                <Calendar size={16} className="text-[#c6a75e]/60 flex-shrink-0" />
                <span>March 13-14, 2026</span>
              </li>
              <li className="flex items-center gap-3 text-[#e8e4dd]/40 text-sm">
                <MapPin size={16} className="text-[#c6a75e]/60 flex-shrink-0" />
                <span>College Name, City</span>
              </li>
              <li className="flex items-center gap-3 text-[#e8e4dd]/40 text-sm">
                <Mail size={16} className="text-[#c6a75e]/60 flex-shrink-0" />
                <span>sahithyotsav@college.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#c6a75e]/10 text-center">
          <p className="text-[#e8e4dd]/30 text-sm">
            &copy; {currentYear} Sahithyotsav. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
