import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import topsImg from "../assets/tops.jpg";
import bottomsImg from "../assets/bottoms.jpg";
import footwearImg from "../assets/footwear.jpg";
import accessoriesImg from "../assets/accessories.jpg";
import nativeImg from "../assets/native.jpg";
import suitImg from "../assets/suits.jpg";

const categories = [
  {
    id: 1,
    name: "Suits & Blazers",
    slug: "suits",
    desc: "Sharp, tailored suits & blazers.",
    image: suitImg,
  },
  {
    id: 2,
    name: "Tops",
    slug: "tops",
    desc: "Stylish shirts, blouses & more.",
    image: topsImg,
  },
  {
    id: 3,
    name: "Bottoms",
    slug: "bottoms",
    desc: "Trousers, skirts & versatile styles.",
    image: bottomsImg,
  },
  {
    id: 4,
    name: "Footwear",
    slug: "footwear",
    desc: "Sneakers, heels, sandals & more.",
    image: footwearImg,
  },
  {
    id: 5,
    name: "Accessories",
    slug: "accessories",
    desc: "Bags, belts, jewelry & finishing touches.",
    image: accessoriesImg,
  },
  {
    id: 6,
    name: "Native Wear",
    slug: "native",
    desc: "Elegant traditional outfits for special moments.",
    image: nativeImg,
  },
];

export default function ProductCategories() {
  return (
    <section className="py-16 bg-[#E6E6FA]">
      <div className="max-w-7xl mx-auto px-4">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center text-[#5D3A6A] mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Browse Collections
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <motion.div
              key={cat.id}
              className="relative rounded-2xl overflow-hidden shadow-lg group"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.12, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Link to={`/shop?category=${cat.slug}`}>
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-56 object-cover transform group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-50 transition duration-500 flex flex-col items-center justify-center text-center text-white p-4">
                  <h3 className="text-xl font-bold mb-2">{cat.name}</h3>
                  <p className="text-sm">{cat.desc}</p>
                </div>

                <div className="absolute bottom-4 right-4 bg-[#5D3A6A] hover:bg-[#4B2E58] text-white text-xs px-3 py-1 rounded-full shadow-md opacity-95 group-hover:opacity-100 transition">
                  Shop Now
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
