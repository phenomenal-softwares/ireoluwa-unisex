import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";

const testimonials = [
  {
    id: 1,
    name: "Amaka Johnson",
    role: "Fashion Enthusiast",
    text: "The quality of the outfits is amazing! Ireoluwa Unisex Store keeps me stylish and confident. 💜",
    avatar: "/avatars/testi-1.jpg",
  },
  {
    id: 2,
    name: "Chinedu Okeke",
    role: "Entrepreneur",
    text: "I was impressed with the fast delivery and premium designs. Perfect for both work and casual wear.",
    avatar: "/avatars/testi-2.jpg",
  },
  {
    id: 3,
    name: "Fatima Sule",
    role: "Student",
    text: "I love the unisex collection. Comfortable, trendy, and budget-friendly. Highly recommended!",
    avatar: "/avatars/testi-3.jpg",
  },
  {
    id: 4,
    name: "James Adeyemi",
    role: "Engineer",
    text: "Excellent fabric and neat finishing. I get compliments every time I wear my new outfits. 🌟",
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
    <section className="py-20 bg-[#E6E6FA]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#5D3A6A] mb-12">
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
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-[#5D3A6A]"
              />
              <p className="text-gray-700 italic mb-4">“{t.text}”</p>
              <div className="flex mb-2 text-[#FFD700]">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <FiStar key={i} size={18} fill="currentColor" />
                  ))}
              </div>
              <h4 className="font-semibold text-[#5D3A6A]">{t.name}</h4>
              <span className="text-sm text-gray-500">{t.role}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
