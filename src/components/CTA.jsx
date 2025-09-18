import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bgImage from "../assets/chef-2.jpg";

const CTA = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(2,129,116,0.85), rgba(255,227,179,0.6)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="px-6 max-w-3xl">
        {/* Headline */}
        <motion.h2
          className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Craving Naija Flavor? 🍲
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-lg md:text-xl mb-10 drop-shadow"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Delicious meals delivered fresh to your door. Experience Pepper & Palm
          today!
        </motion.p>

        {/* Button */}
        <motion.button
          className="px-8 py-4 text-lg font-semibold rounded-full bg-yellow-400 text-green-900 shadow-xl hover:shadow-2xl hover:scale-105 transition"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/dishes">
          Order Now
          </Link>
        </motion.button>
      </div>
    </section>
  );
};

export default CTA;
