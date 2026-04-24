import { Calendar, CheckCircle2, Clock } from "lucide-react";

export default function Availability() {
  // Logic toggle: true = full, false = spots available
  const isFull = false; 
  const nextOpening = "April 25th, 2026";

  return (
    <div className={`w-full p-4 rounded-2xl border flex flex-col md:flex-row items-center justify-between gap-4 ${
      isFull ? "bg-orange-50 border-orange-100" : "bg-green-100 border-green-100"
    }`}>
      <div className="flex items-center gap-3">
        {isFull ? (
          <Clock className="text-orange-600 animate-pulse" />
        ) : (
          <CheckCircle2 className="text-green-600" />
        )}
        <div>
          <p className={`font-bold ${isFull ? "text-orange-900" : "text-green-900"}`}>
            {isFull ? "Nani's House is Cozy & Full!" : "Spots Available for Dogs"}
          </p>
          <p className="text-sm opacity-80 text-gray-700">
            {isFull ? `Nearest opening: ${nextOpening}` : "We are currently accepting new bookings."}
          </p>
        </div>
      </div>
      
      <a href="#booking" className={`px-4 py-2 rounded-xl text-sm font-bold transition ${
        isFull ? "bg-orange-600 text-white" : "bg-green-600 text-white"
      }`}>
        {isFull ? "Join Waiting List" : "Reserve Today"}
      </a>
    </div>
  );
}