"use client";

import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [visible, setVisible] = useState(true);
  const [active, setActive] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const lastScrollY = useRef(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // HERO detection
      const heroHeight = window.innerHeight * 0.8;
      setDarkMode(currentScrollY < heroHeight);

      // navbar background
      setScrolled(currentScrollY > 30);

      // hide/show navbar
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      lastScrollY.current = currentScrollY;

      // progress bar
      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setProgress((currentScrollY / totalHeight) * 100);

      // active section detection
      const sections = ["about", "DayAtNanighar", "experiences"];
      let currentSection = "";

      sections.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const rect = el.getBoundingClientRect();

        if (rect.top <= 200) {
          currentSection = id;
        }
      });

      if (currentSection) {
        setActive(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* PROGRESS BAR */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-nani-blue z-[60]"
        style={{ width: `${progress}%` }}
      />

      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out
        ${visible ? "translate-y-0" : "-translate-y-full"}
        ${
          scrolled
            ? "bg-white backdrop-blur-md shadow-md border-b border-gray-200/80 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 group-hover:scale-110 transition">
              <Image
                src="/logo.jpg"
                alt="Nanighar Logo"
                fill
                className="object-contain rounded-lg"
                priority
              />
            </div>

            <div className="flex flex-col leading-none">
              <span
                className={`text-xl font-extrabold transition ${
                  darkMode
                    ? "text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)]"
                    : "text-nani-blue"
                }`}
              >
                Nanighar
              </span>

              <span className="text-[10px] font-bold text-blue-400 uppercase tracking-widest mt-1">
                Dog Home
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center gap-10">

            {/* NAV LINKS (NO BUTTON STYLE) */}
            <div className="flex gap-8 font-medium">
              <NavLink label="About" id="about" active={active} darkMode={darkMode} />
              <NavLink label="Life" id="DayAtNanighar" active={active} darkMode={darkMode} />
              <NavLink label="Experiences" id="experiences" active={active} darkMode={darkMode} />
            </div>

            {/* CTA */}
            <a
              href="#booking"
              className={`px-7 py-3 rounded-full font-bold transition-all duration-300 ${
                darkMode
                  ? "bg-white text-nani-blue shadow-lg hover:bg-gray-600"
                  : "bg-gradient-to-r from-nani-blue via-blue-600 to-blue-700 text-white px-7 py-3 rounded-full font-semibold text-center shadow-lg hover:shadow-[0_10px_25px_rgba(0,51,124,0.3)] hover:-translate-y-0.5 transition-all duration-300 active:scale-95"
              }`}
            >
              Book a Slot
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            className={`md:hidden p-2 rounded-xl transition ${
              darkMode
                ? "text-white hover:bg-white/10"
                : "text-nani-blue hover:bg-nani-sky"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-white p-6 flex flex-col gap-6 md:hidden shadow-xl">
            <a href="#about" onClick={() => setIsOpen(false)}>About</a>
            <a href="#DayAtNanighar" onClick={() => setIsOpen(false)}>Life</a>
            <a href="#experiences" onClick={() => setIsOpen(false)}>Experiences</a>

            <a
              href="#booking"
              className="bg-nani-blue text-white text-center py-4 rounded-2xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </a>
          </div>
        )}
      </nav>
    </>
  );
}

/* NAV LINK (FINAL - NO BUTTON STYLE) */
function NavLink({
  label,
  id,
  active,
  darkMode,
}: {
  label: string;
  id: string;
  active: string;
  darkMode: boolean;
}) {
  const isActive = active === id;

  return (
    <a
      href={`#${id}`}
      className={`relative font-medium transition-all duration-300 ${
        darkMode
          ? "text-white"
          : "text-gray-700 hover:text-nani-blue"
      }`}
    >
      {label}

      {/* underline */}
      <span
        className={`absolute left-0 -bottom-1 h-[2px] bg-nani-blue transition-all duration-300 ${
          isActive ? "w-full" : "w-0"
        }`}
      />
    </a>
  );
}