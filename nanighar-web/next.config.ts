import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Core Brand Colors
        'nani-blue': '#00337C',    // Your primary logo blue
        'nani-dark': '#001A3D',    // Dark Navy for Hero & Footer backgrounds
        
        // Background & Surface Colors
        'nani-sky': '#F0F7FF',     // Soft bluish background for sections
        'nani-cream': '#FAF9F6',   // Warm off-white for the About section
        
        // Utility Colors for contrast
        'nani-muted': '#4A5568',   // Muted gray-blue for sub-descriptions
        'nani-soft-blue': '#E1EFFE', // Very light blue for borders/input rings
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;