import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiShoppingBag, FiGrid } from "react-icons/fi";
import heroImg from "../assets/hero-bg.jpg"; 
import modelImg from "../assets/model.png";

function Hero() {
  function scrollToProducts() {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-violet-50 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Fashion Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-purple-900/40"></div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mt-20 pt-9 md:text-left max-w-xl"
        >
          <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg"
          >
            Style for{" "}
            <span className="text-violet-400">Everyone</span>,{" "}
            <span className="text-red-500">Everywhere.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-6 text-lg md:text-xl text-gray-200"
          >
            Discover quality fashion pieces and timeless accessories curated
            just for you.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start"
          >
            <Link
              to="/shop"
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-purple-900 text-white font-semibold shadow-lg hover:bg-purple-800 transition transform hover:scale-105"
            >
              <FiShoppingBag size={20} /> Shop Now
            </Link>
            <button
              onClick={scrollToProducts}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-violet-400 text-white font-semibold shadow-lg hover:bg-violet-500 transition transform hover:scale-105"
            >
              <FiGrid size={20} /> Browse Categories
            </button>
          </motion.div>
        </motion.div>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            src={modelImg}
            alt="Fashion Model"
            className="rounded-2xl shadow-2xl max-h-[500px] object-contain"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
