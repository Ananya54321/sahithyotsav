"use client";

import Link from "next/link";
import { Mail, MapPin, Calendar, BookOpen } from "lucide-react";
import Container from "./Container";
import { OrnamentalDivider } from "./DecorativeSVGs";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#2c1810] text-[#e8e0d0] pt-16 pb-8 overflow-hidden">
      {/* Gold gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#8b6914]/50 to-transparent" />

      <Container>
        <OrnamentalDivider className="mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 sm:gap-8">
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-4 text-[#c6a75e] flex items-center gap-2">
              <BookOpen size={20} />
              Sahithyotsav 2026
            </h3>
            <p className="text-[#a89880] text-sm leading-relaxed">
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
                    className="text-[#a89880] hover:text-[#c6a75e] transition-colors duration-300 text-sm inline-block relative group"
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
              <li className="flex items-center gap-3 text-[#a89880] text-sm">
                <Calendar size={16} className="text-[#c6a75e]/60 flex-shrink-0" />
                <span>March 13-14, 2026</span>
              </li>
              <li className="flex items-center gap-3 text-[#a89880] text-sm">
                <MapPin size={16} className="text-[#c6a75e]/60 flex-shrink-0" />
                <span>CVR College Of Engineering, Ibrahimpatnam</span>
              </li>
              <li className="flex items-center gap-3 text-[#a89880] text-sm">
                <Mail size={16} className="text-[#c6a75e]/60 flex-shrink-0" />
                <span>cvrldc@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-[#7a6b5d] text-sm">
            &copy; {currentYear} Sahithyotsav. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
