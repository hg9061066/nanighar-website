"use client";

import { useEffect, useState } from "react";

const CAPACITY = 6;

type Booking = {
  "Check-in Date": string;
  "Check-out Date": string;
};

export default function AvailabilityCalendar() {
  const [days, setDays] = useState<any[]>([]);
  const [nextAvailable, setNextAvailable] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbyVzkvG7MuR2OH-BgW8fUSILqtchouy90yzbAINVN5avGqVS8smCtpkXQPTib2cUyGe4Q/exec") // ← paste here
      .then(res => res.json())
      .then((data: Booking[]) => {
        generateCalendar(data);
      });
  }, []);

  function generateCalendar(bookings: Booking[]) {
    const today = new Date();
    const next7Days: Date[] = [];

    for (let i = 0; i < 7; i++) {
      const d = new Date();
      d.setDate(today.getDate() + i);
      next7Days.push(d);
    }

    const calculated = next7Days.map(date => {
      let dogs = 0;

      bookings.forEach(b => {
        const start = new Date(b["Check-in Date"]);
        const end = new Date(b["Check-out Date"]);

        if (date >= start && date <= end) {
          dogs += 1; // ✅ 1 form = 1 dog
        }
      });

      let status = "available";
      if (dogs >= 6) status = "full";
      else if (dogs >= 4) status = "few";

      return {
        date,
        dogs,
        status,
      };
    });

    setDays(calculated);

    const next = calculated.find(d => d.status !== "full");
    if (next) {
      setNextAvailable(formatDate(next.date));
    }
  }

  function formatDate(date: Date) {
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
    });
  }

  function getColor(status: string) {
    if (status === "full") return "bg-red-100 text-red-600";
    if (status === "few") return "bg-yellow-100 text-yellow-600";
    return "bg-green-100 text-green-600";
  }

  return (
    <div className="bg-white p-6 rounded-3xl shadow-lg border border-gray-200">

      {/* TITLE */}
      <h3 className="text-lg font-bold text-nani-blue text-center mb-4">
        Availability This Week
      </h3>

      {/* PREMIUM MESSAGE */}
      <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 text-center">
        <p className="text-green-700 font-semibold">
          🐾 Only 6 dogs at a time — personalized home care
        </p>
        <p className="text-sm text-green-600 mt-1">
          Real-time availability updates
        </p>
      </div>

      {/* CALENDAR */}
      <div className="grid grid-cols-4 md:grid-cols-7 gap-3 text-center">
        {days.map((d, i) => (
          <div
            key={i}
            className={`p-3 rounded-xl text-sm font-semibold ${getColor(d.status)}`}
          >
            <p>{formatDate(d.date)}</p>
            <p className="text-xs mt-1">
              {d.status === "full"
                ? "Full"
                : d.status === "few"
                ? "Few left"
                : "Available"}
            </p>
          </div>
        ))}
      </div>

      {/* NEXT AVAILABLE */}
      {nextAvailable && (
        <div className="mt-6 text-center">
          <p className="text-red-600 font-semibold">
            ⚡ Next available: {nextAvailable}
          </p>
        </div>
      )}
    </div>
  );
}