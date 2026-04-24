"use client";

import { Heart, Shield, Camera } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-white to-nani-cream relative z-20">
      <div className="max-w-7xl mx-auto px-6 text-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 relative"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            How We Care Like Family ❤️
          </h2>

          <p className="text-gray-700 max-w-2xl mx-auto text-lg leading-relaxed">
            At Nanighar, your dog doesn’t stay in a facility — they stay in a home.
            Every moment is designed to feel safe, loving, and familiar.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">

          <Feature
            delay={0}
            icon={<Heart className="text-pink-500" size={28} />}
            title="Cageless Living"
            desc="Your dog roams freely, naps on sofas, and lives like they would at home — no cages, ever."
          />

          <Feature
            delay={0.15}
            icon={<Shield className="text-blue-500" size={28} />}
            title="24/7 Supervision"
            desc="Always under human care with constant monitoring and quick access to trusted vets if needed."
          />

          <Feature
            delay={0.3}
            icon={<Camera className="text-green-500" size={28} />}
            title="Daily Updates"
            desc="Receive photos and videos on WhatsApp so you always know your dog is happy and safe."
          />

        </div>
      </div>
    </section>
  );
}

/* 🔥 Premium Animated Card */
function Feature({
  icon,
  title,
  desc,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="
        bg-white/90 backdrop-blur-md p-8 rounded-3xl 
        border border-blue-100 shadow-md
        hover:shadow-2xl hover:border-nani-blue/30
        transition-all duration-300
        group
      "
    >
      {/* Icon */}
      <div className="w-16 h-16 bg-nani-sky/80 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition">
        {icon}
      </div>

      {/* Title */}
      <h3 className="text-xl font-extrabold mb-3 bg-gradient-to-r from-nani-blue to-blue-600 bg-clip-text text-transparent">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 leading-relaxed text-[15px]">
        {desc}
      </p>
    </motion.div>
  );
}