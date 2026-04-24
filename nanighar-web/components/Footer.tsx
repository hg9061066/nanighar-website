"use client";

import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">

      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT */}
        <div>
          <h3 className="text-xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Nanighar Dog Home 🐾
          </h3>

          <p className="text-gray-600 mb-6 leading-relaxed max-w-md">
            A premium, cageless boarding experience for your furry family members.
            Because they deserve a vacation too.
          </p>

          {/* CONTACT */}
          <div className="space-y-4 text-gray-700">

            {/* PHONE */}
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-nani-blue" />
              <span>+91 9243560988</span>
            </div>

            {/* EMAIL */}
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-nani-blue" />
              <span>nanighar.doghome@gmail.com</span>
            </div>

            {/* ADDRESS */}
            <a
              href="https://maps.app.goo.gl/PZUnsM22c9aKETsz6"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 hover:text-nani-blue transition"
            >
              <MapPin size={18} className="text-nani-blue mt-1" />
              <span>
                5, Mhow Naka Cir, opposite Trilokchand Jain School,
                near Chattripura Police Station,
                Chhatribagh, Indore, Madhya Pradesh 452002
              </span>
              <ExternalLink size={14} className="mt-1 opacity-60" />
            </a>

            {/* INSTAGRAM */}
            <a
              href="https://www.instagram.com/nanighar.doghome/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <div className="w-9 h-9 flex items-center justify-center rounded-lg bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 text-white shadow-sm group-hover:scale-110 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </div>

              <span className="text-gray-700 group-hover:text-pink-500 transition font-medium">
                @nanighar.doghome
              </span>
            </a>

          </div>
        </div>

        {/* RIGHT - MAP */}
        <div className="w-full h-[260px] rounded-2xl overflow-hidden shadow-md border hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
          <iframe
            src="https://www.google.com/maps?q=5%20Mhow%20Naka%20Cir%20Indore&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
          />
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-gray-500">

          <p>
            © 2026 Nanighar Dog Home. Made with ❤️ for every good boy.
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-nani-blue transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-nani-blue transition">
              Terms
            </a>
          </div>

        </div>
      </div>

    </footer>
  );
}