"use client";

import { useEffect, useState } from "react";

const CAPACITY = 6;

type Booking = {
  "Check-in Date"?: string;
  "Check-in date"?: string;
  "Check-out Date"?: string;
  "Check-out date"?: string;
};

type Day = {
  date: Date;
  dogs: number;
};

export default function MiniAvailabilityCalendar() {
  const [days, setDays] = useState<Day[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://script.google.com/macros/s/AKfycbyVzkvG7MuR2OH-BgW8fUSILqtchouy90yzbAINVN5avGqVS8smCtpkXQPTib2cUyGe4Q/exec")
      .then((res) => res.json())
      .then((bookings: Booking[]) => {
        if (!Array.isArray(bookings)) return;

        const valid = bookings.filter(
          (b) => b["Check-in Date"] || b["Check-in date"]
        );

        generateDays(valid);
      })
      .catch((err) => {
        console.error("Failed to fetch bookings:", err);
      })
      .finally(() => setLoading(false));
  }, []);

  // ✅ SAFE DATE PARSER
  function parseDate(input: string | undefined): Date | null {
    if (!input) return null;

    const d = new Date(input);

    if (!isNaN(d.getTime())) return d;

    // fallback dd/mm/yyyy
    const parts = input.split("/");
    if (parts.length === 3) {
      return new Date(`${parts[2]}-${parts[1]}-${parts[0]}`);
    }

    return null;
  }

  function generateDays(bookings: Booking[]) {
    const today = new Date();
    const result: Day[] = [];

    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      date.setHours(0, 0, 0, 0);

      let dogs = 0;

      bookings.forEach((b) => {
        const start = parseDate(
          b["Check-in Date"] || b["Check-in date"]
        );
        const end = parseDate(
          b["Check-out Date"] || b["Check-out date"]
        );

        if (!start || !end) return;

        start.setHours(0, 0, 0, 0);
        end.setHours(0, 0, 0, 0);

        if (date >= start && date <= end) {
          dogs += 1;
        }
      });

      result.push({ date: new Date(date), dogs });
    }

    setDays(result);
  }

  // ✅ COLOR LOGIC
  function getGradient(dogs: number) {
    const ratio = dogs / CAPACITY;

    if (ratio >= 1) return "bg-red-500 text-white";
    if (ratio >= 0.7) return "bg-orange-500 text-white";
    if (ratio >= 0.4) return "bg-yellow-400 text-gray-900";
    return "bg-green-500 text-white";
  }

  function isToday(date: Date) {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  }

  function getNextAvailable(days: Day[]) {
    return days.find((d) => d.dogs < CAPACITY);
  }

  const next = getNextAvailable(days);

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-600 mb-2">
          📅 Next 7 Days Availability
        </h2>

        <p className="text-gray-500 text-sm mb-6">
          Home-style care — only 6 dogs at a time 🐾
        </p>

        {/* LOADING STATE */}
        {loading ? (
          <p className="text-gray-400">Loading availability...</p>
        ) : (
          <div className="bg-white border border-gray-200 rounded-3xl shadow-xl p-6">

            {/* GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4">

              {days.map((d, i) => (
                <div
                  key={i}
                  title={`${d.dogs}/${CAPACITY} dogs booked`}
                  className={`
                    h-24 rounded-2xl flex flex-col items-center justify-center
                    font-semibold shadow-md transition-all duration-300
                    hover:scale-105
                    ${getGradient(d.dogs)}
                    ${isToday(d.date) ? "ring-2 ring-nani-blue scale-105" : ""}
                  `}
                >
                  {/* DAY */}
                  <p className="text-xs font-semibold">
                    {d.date.toLocaleDateString("en-IN", {
                      weekday: "short",
                    })}
                  </p>

                  {/* DATE */}
                  <p className="text-xl font-extrabold leading-none">
                    {d.date.getDate()}
                  </p>

                  {/* COUNT */}
                  <p className="text-xs font-medium mt-1">
                    {d.dogs}/{CAPACITY}
                  </p>
                </div>
              ))}

            </div>

            {/* LEGEND */}
            <div className="flex justify-center gap-6 text-sm mt-6 text-gray-600">
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                Available
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                Filling fast
              </span>
              <span className="flex items-center gap-2">
                <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                Full
              </span>
            </div>

            {/* NEXT AVAILABLE */}
            {next && (
              <p className="mt-6 text-sm text-gray-600">
                Next available:{" "}
                <span className="font-semibold text-nani-blue">
                  {next.date.toLocaleDateString("en-IN", {
                    day: "numeric",
                    month: "long",
                  })}
                </span>
              </p>
            )}

          </div>
        )}

      </div>
    </section>
  );
}