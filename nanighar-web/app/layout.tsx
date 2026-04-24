import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";

const quicksand = Quicksand({ 
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: "Nanighar Dog Home | A Home Away From Home",
  description: "Premium dog boarding with Nani-level care and comfort.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${quicksand.variable} font-sans`}>

        {/* 🎵 Background Music */}
        <audio autoPlay loop muted id="bg-music">
          <source src="/audio/bg-music.mp3" type="audio/mpeg" />
        </audio>

        {children}

      </body>
    </html>
  );
}