import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import riceImg from "../assets/jollof-chicken.jpg";

export default function SpecialOffer() {
  return (
    <section className="relative py-16 px-6 md:px-20 overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#028174] via-[#0a6b8b] to-[#ffe3b3] bg-[length:200%_200%] animate-gradientMove"></div>

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
            🔥 Today’s Special 🔥
          </p>
          <h2 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Jollof Rice & Chicken Feast
          </h2>
          <p className="text-lg max-w-lg">
            Enjoy the rich flavors of Nigerian Jollof rice paired with juicy,
            spicy grilled chicken. A feast you can’t resist!
          </p>

          {/* Price */}
          <div className="flex items-center space-x-4">
            <span className="line-through text-2xl opacity-75">₦3500</span>
            <span className="text-4xl font-extrabold">₦2500</span>
          </div>

          {/* CTA */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-8 py-3 bg-white text-[#028174] font-bold text-lg rounded-xl shadow-lg hover:bg-yellow-50 transition"
          >
            <Link to={"/dishes?category=rice"}>Order Now</Link>
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
            src={riceImg}
            alt="Special Offer"
            className="rounded-3xl shadow-2xl w-full object-cover"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
}
