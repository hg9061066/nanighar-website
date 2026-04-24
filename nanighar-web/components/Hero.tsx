"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 bg-[#001A3D] overflow-hidden">
     <div className="absolute inset-0 bg-black/40 z-0" />
      {/* Background Overlay Gradient (STRONGER for readability) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#001A3D] via-[#001A3D]/90 to-transparent z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT: TEXT */}
        <div> 
          <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-2xl leading-tight drop-shadow-lg">
            Because your dog deserves a <br />
            <span className="text-blue-300 italic">
              home, not a cage.
            </span>
          </h1>

          <p className="mt-6 text-lg text-blue-100 max-w-md leading-relaxed">
            At Nanighar, your dog lives, plays, and rests like family—
            with love, freedom, and constant care.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            
            {/* Primary CTA */}
            <a
              href="#booking"
              className="text-gray-900 mb-4 bg-white text-center px-7 py-3 rounded-full font-bold border-2 border-white shadow-[0_8px_25px_rgba(0,0,0,0.4)] hover:bg-gray-100 hover:scale-105 hover:shadow-[0_12px_35px_rgba(0,0,0,0.5)] transition-all duration-300"
            >
              Book a Stay
            </a>

            {/* Secondary CTA */}
            <a
              href="https://wa.me/919243560988"
              className="text-gray-900 mb-4 bg-green-500 text-center px-7 py-3 rounded-full font-bold border-2 border-white shadow-[0_8px_25px_rgba(0,0,0,0.4)] hover:bg-gray-100 hover:scale-105 hover:shadow-[0_12px_35px_rgba(0,0,0,0.5)] transition-all duration-300"
            >
              WhatsApp Us
            </a>
          </div>

          {/* Trust Line */}
          <p className="mt-6 text-sm text-blue-200">
            ⭐ Loved by 50+ pet parents • 📸 Daily updates guaranteed
          </p>
        </div>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="relative h-[400px] lg:h-[500px] w-full">
          
          {/* Glow Background */}
          <div className="absolute -inset-6 bg-blue-500/10 blur-3xl rounded-[3rem]" />

          {/* Image Card */}
          <div className="relative h-full w-full rounded-[3rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] border border-white/10">
            <Image
              src="/hero-dog.jpg"
              alt="Happy dog relaxing at Nanighar home environment"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}