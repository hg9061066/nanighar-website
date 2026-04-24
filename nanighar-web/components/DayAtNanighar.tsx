"use client";
import Image from "next/image";

export default function DayAtNanighar() {
  const images = [
    "/images/day/evening.jpeg",
    "/images/day/walk.jpg",
    "/images/day/playtime1.jpg",
    "/images/day/cute1.jpg",
    "/images/day/playtime2.jpg",
    "/images/day/new.jpg",
  ];

  return (
    <section className="py-24 bg-white relative z-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            A Day at Nanighar 🐾
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Real moments. Real happiness. No cages, just a home.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6 auto-rows-[220px]">

          {/* HERO */}
          <div className="md:col-span-2 md:row-span-2 rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group">
            <Image
              src={images[0]}
              alt="Evening playtime at Nanighar"
              width={800}
              height={600}
              priority
              className="w-full h-full object-contain group-hover:scale-105 transition duration-500 ease-out"
            />
          </div>

          {/* RIGHT COLUMN */}
          {[images[1], images[2]].map((src, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-md bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group"
            >
              <Image
                src={src}
                alt={`Nanighar moment ${i + 1}`}
                width={400}
                height={300}
                className="w-full h-full object-contain group-hover:scale-105 transition duration-500 ease-out"
              />
            </div>
          ))}

          {/* BOTTOM ROW */}
          {[images[3], images[5], images[4]].map((src, i) => (
            <div
              key={i}
              className="rounded-2xl overflow-hidden shadow-md bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center group"
            >
              <Image
                src={src}
                alt={`Nanighar dog life ${i + 3}`}
                width={400}
                height={300}
                className="w-full h-full object-contain group-hover:scale-105 transition duration-500 ease-out"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}