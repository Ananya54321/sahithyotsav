"use client";

import Link from "next/link";
import { Mail, MapPin, Calendar } from "lucide-react";
import Container from "./Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1e293b] text-white py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-[#c6a75e]">
              Literary Fest 2026
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              A celebration of literature, voices, and ideas. Join us for two days
              of inspiring events, discussions, and creative expression.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#c6a75e]">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-[#c6a75e] transition-colors text-sm"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/schedule"
                  className="text-gray-300 hover:text-[#c6a75e] transition-colors text-sm"
                >
                  Schedule
                </Link>
              </li>
              <li>
                <Link
                  href="/register"
                  className="text-gray-300 hover:text-[#c6a75e] transition-colors text-sm"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-[#c6a75e]">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-gray-300 text-sm">
                <Calendar size={16} className="text-[#c6a75e]" />
                <span>March 13-14, 2026</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300 text-sm">
                <MapPin size={16} className="text-[#c6a75e]" />
                <span>College Name, City</span>
              </li>
              <li className="flex items-center gap-2 text-gray-300 text-sm">
                <Mail size={16} className="text-[#c6a75e]" />
                <span>literaryfest@college.edu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Literary Fest. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
