import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    owner: "Anjali Sharma",
    pet: "Bruno (Labrador)",
    text: "Nanighar is truly a second home. Bruno was so happy and well-fed. I loved the daily video updates!",
    rating: 5,
  },
  {
    id: 2,
    owner: "Vikram Seth",
    pet: "Luna (Indie)",
    text: "I was worried about leaving Luna for the first time, but the 'Nani' vibes here are real. Very safe and clean.",
    rating: 5,
  },
  {
    id: 3,
    owner: "Rohan M.",
    pet: "Simba (Beagle)",
    text: "The best part is no cages! Simba made so many friends. Highly recommended for pet parents in the city.",
    rating: 5,
  },
];

export default function Experiences() {
  return (
    <section id="experiences" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Pawsitive Experiences</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Read what other pet parents have to say about their dog's stay at Nanighar.
         </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-nani-sky p-8 rounded-[2rem] border border-blue-100 hover:shadow-2xl hover:-translate-y-2 transition-shadow relative"
            >
              <Quote className="absolute top-6 right-8 text-blue-200 w-10 h-10" />
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 italic mb-6">"{review.text}"</p>
              <div>
                <p className="font-bold text-nani-blue">{review.owner}</p>
                <p className="text-sm text-blue-600 font-medium">Parent of {review.pet}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}