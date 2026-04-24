"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AvailabilityBanner from "@/components/MiniAvailabilityCalendar";
import MiniAvailabilityCalendar from "@/components/MiniAvailabilityCalendar";
import About from "@/components/About";
import DayAtNanighar from "@/components/DayAtNanighar";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import TrustBar from "@/components/TrustBar";
import { Phone } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* TRUST BAR */}
      <TrustBar />

      {/* AVAILABILITY */}
      <AvailabilityBanner />

      {/* ABOUT */}
      <section id="about" className="scroll-mt-28">
        <About />
      </section>

      {/* DAY AT NANIGHAR */}
      <section id="DayAtNanighar" className="scroll-mt-28">
        <DayAtNanighar />
      </section>

      {/* EXPERIENCES */}
      <section id="experiences" className="scroll-mt-28">
        <Experiences />
      </section>

      {/* BOOKING SECTION */}
      <section id="booking" className="py-20 md:py-24 bg-nani-sky scroll-mt-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* LEFT SIDE */}
            <div>

              <MiniAvailabilityCalendar />

              <div className="mb-5">
                <p className="text-gray-600 text-xl">
                  Starting at ₹699/night (food included)
                </p>
              </div>

              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">
                Reservations
              </span>

              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                A vacation your dog will actually enjoy.
              </h2>

              <p className="text-lg text-gray-700 mb-8 leading-relaxed max-w-md">
                Fill out this quick form, and we'll check availability.
                Nani limits guests to ensure personal care.
              </p>

              <div className="bg-white p-5 rounded-[2rem] shadow-lg border border-gray-100 flex items-center gap-4 hover:scale-[1.03] transition">

                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600">
                  <Phone size={24} fill="currentColor" />
                </div>

                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">
                    Direct Hotline
                  </p>
                  <p className="text-xl font-bold text-gray-900">
                    +91 9243560988
                  </p>
                </div>

              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-xl border border-blue-100 relative">

              <div className="absolute -top-5 -right-5 text-5xl opacity-100 rotate-12 select-none">
                🐾
              </div>

              <div className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl border border-blue-100 text-center">

                {/* ICON */}
                <div className="text-5xl mb-4">📋</div>

                {/* TITLE */}
                <h3 className="text-2xl font-extrabold text-gray-900 mb-3">
                  Complete Your Booking Form
                </h3>

                {/* DESCRIPTION */}
                <p className="text-gray-600 mb-6">
                  Fill out our quick 2-minute form so we can prepare the best stay for your dog.
                </p>

                {/* TRUST */}
                <div className="flex justify-center gap-4 text-xs text-gray-500 mb-6">
                  <span>🐾 Cageless care</span>
                  <span>📸 Daily updates</span>
                  <span>🏡 Home environment</span>
                </div>

                {/* MAIN CTA */}
                <a
                  href="https://forms.gle/kWYGHTStdBGhMXTWA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gradient-to-r from-nani-blue to-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-[0_10px_25px_rgba(0,51,124,0.3)] hover:-translate-y-0.5 transition-all duration-300"
                >
                  Fill Booking Form →
                </a>

                {/* SECONDARY CTA */}
                <a
                  href="https://wa.me/919243560988"
                  className="block mt-5 text-gray-600 font-semibold hover:underline"
                >
                  Or book instantly on WhatsApp →
                </a>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 🔊 SOUND TOGGLE */}
      <button
        onClick={() => {
          const audio = document.getElementById("bg-music") as HTMLAudioElement;
          if (!audio) return;

          if (audio.muted) {
            audio.muted = false;
            audio.volume = 0.5;
            audio.play();
          } else {
            audio.muted = true;
          }
        }}
        className="fixed bottom-24 right-6 bg-white text-gray-600 shadow-lg px-4 py-2 rounded-full text-sm z-50 hover:scale-105 transition"
      >
        🔊 Sound
      </button>

      {/* FLOATING WHATSAPP */}
      <a
        href="https://wa.me/919243560988"
        className="fixed bottom-6 right-6 bg-green-500 text-white px-5 py-4 rounded-full shadow-2xl z-50 hover:scale-110 transition"
      >
        💬 Chat with Nani
      </a>

      {/* FOOTER */}
      <Footer />

    </main>
  );
}