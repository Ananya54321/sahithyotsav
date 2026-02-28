"use client";

import Link from "next/link";
import { Instagram, Twitter, Mail, BookOpen } from "lucide-react";
import Container from "./Container";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/schedule", label: "Schedule" },
  { href: "/register", label: "Register" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#2d006b] text-white pt-16 pb-8 overflow-hidden">

      {/* Large faint decorative icon — Cadbury style */}
      <div className="absolute right-0 bottom-0 w-64 h-64 opacity-[0.06] pointer-events-none">
        <BookOpen className="w-full h-full text-white" strokeWidth={0.5} />
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#f1cd76] to-[#d0a651] flex items-center justify-center">
                <BookOpen size={18} className="text-[#2d006b]" />
              </div>
              <span
                className="text-white font-black text-base tracking-tight"
                style={{ fontFamily: "var(--font-montserrat)" }}
              >
                SAHITHYOTSAV
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-[220px]">
              A celebration of literature, language, and the power of words.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4
              className="text-xs font-black uppercase tracking-[0.15em] text-[#cbb386] mb-5"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 text-sm hover:text-[#cbb386] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4
              className="text-xs font-black uppercase tracking-[0.15em] text-[#cbb386] mb-5"
              style={{ fontFamily: "var(--font-montserrat)" }}
            >
              Connect
            </h4>
            <div className="flex items-center gap-3 mb-4">
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#cbb386] hover:text-[#2d006b] transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#cbb386] hover:text-[#2d006b] transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter size={16} />
              </a>
              <a
                href="mailto:sahithyotsav@cvr.ac.in"
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-[#cbb386] hover:text-[#2d006b] transition-all duration-300"
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
            <p className="text-white/40 text-xs">
              CVR College Of Engineering
              <br />
              Hyderabad, Telangana
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            © 2026 Sahithyotsav. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            CVR College Of Engineering
          </p>
        </div>
      </Container>
    </footer>
  );
}
