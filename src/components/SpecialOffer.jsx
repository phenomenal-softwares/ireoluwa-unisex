import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import outfitImg from "../assets/special-offer.jpg";

export default function SpecialOffer() {
  return (
    <section className="relative py-16 px-6 md:px-20 overflow-hidden">
      {/* Animated Gradient Background with Lavender & Plum */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#5D3A6A] via-[#7D5A9E] to-[#E6E6FA] bg-[length:200%_200%] animate-gradientMove"></div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center text-white">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="uppercase tracking-wide text-lg font-semibold">
            ✨ Limited Time Offer ✨
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Elegant Unisex Outfit
          </h2>
          <p className="text-lg max-w-lg">
            Step out in style with this premium lavender-inspired outfit. 
            Designed for comfort, confidence, and a bold fashion statement.  
          </p>

          {/* Price */}
          <div className="flex items-center space-x-4">
            <span className="line-through text-2xl opacity-75">₦18,500</span>
            <span className="text-4xl font-extrabold text-[#FFD700]">₦12,500</span>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-8 py-3 bg-white text-[#5D3A6A] font-bold text-lg rounded-xl shadow-lg hover:bg-[#F8F0FF] transition"
          >
            <Link to={"/products?category=unisex"}>Shop Now</Link>
          </motion.button>
        </motion.div>

        {/* Image with floating effect */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <motion.img
            src={outfitImg}
            alt="Special Offer Outfit"
            className="rounded-3xl shadow-2xl w-full object-cover"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
