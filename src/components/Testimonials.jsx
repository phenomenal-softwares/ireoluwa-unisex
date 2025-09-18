import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    name: "Amaka Johnson",
    role: "Food Blogger",
    text: "The best jollof rice I've ever had! Pepper & Palm brings the real Naija taste to life. 🔥",
    avatar: "/avatars/testi-1.jpg",
  },
  {
    id: 2,
    name: "Chinedu Okeke",
    role: "Businessman",
    text: "Quick delivery and absolutely delicious meals. I felt like I was back home!",
    avatar: "/avatars/testi-2.jpg",
  },
  {
    id: 3,
    name: "Fatima Sule",
    role: "Student",
    text: "Pepper soup was on point! This is now my go-to spot for comfort food.",
    avatar: "/avatars/testi-3.jpg",
  },
  {
    id: 4,
    name: "James Adeyemi",
    role: "Engineer",
    text: "Affordable, tasty, and always fresh. Highly recommend to everyone! 🌟",
    avatar: "/avatars/testi-4.jpg",
  },
];

export default function Testimonials() {
  const carouselRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    let scrollAmount = 0;

    intervalRef.current = setInterval(() => {
      if (carousel) {
        scrollAmount += carousel.offsetWidth;
        if (scrollAmount >= carousel.scrollWidth) {
          scrollAmount = 0; // reset
        }
        carousel.scrollTo({ left: scrollAmount, behavior: "smooth" });
      }
    }, 4000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="py-20 bg-yellow-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-green-800 mb-12">
          What Our Customers Say
        </h2>

        <motion.div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide cursor-grab"
          whileTap={{ cursor: "grabbing" }}
          onMouseEnter={() => clearInterval(intervalRef.current)}
          onMouseLeave={() => {
            intervalRef.current = setInterval(() => {
              const carousel = carouselRef.current;
              if (carousel) {
                carousel.scrollBy({ left: carousel.offsetWidth, behavior: "smooth" });
              }
            }, 4000);
          }}
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              className="min-w-[300px] md:min-w-[400px] bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform duration-300"
            >
              <img
                src={t.avatar}
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-green-600"
              />
              <p className="text-gray-700 italic mb-4">“{t.text}”</p>
              <div className="flex mb-2 text-yellow-500">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <FiStar key={i} size={18} fill="currentColor" />
                  ))}
              </div>
              <h4 className="font-semibold text-green-700">{t.name}</h4>
              <span className="text-sm text-gray-500">{t.role}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
