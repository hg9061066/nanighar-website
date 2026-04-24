"use client";

export default function TrustBar() {
  return (
    <div className="w-full bg-gradient-to-r from-nani-blue to-blue-700 text-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-center gap-6 text-sm md:text-base font-semibold">

        <span className="flex items-center gap-2">
          ⭐ Loved by 50+ pet parents
        </span>

        <span className="hidden md:block opacity-40">•</span>

        <span className="flex items-center gap-2">
          🐕 100+ happy stays
        </span>

        <span className="hidden md:block opacity-40">•</span>

        <span className="flex items-center gap-2">
          📸 Daily updates guaranteed
        </span>

      </div>
    </div>
  );
}