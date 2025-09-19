import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import bgImage from "../assets/cta.jpg";

const CTA = () => {
  return (
    <section
      className="relative h-screen flex items-center justify-center text-center text-white"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(54, 0, 51, 0.8), rgba(200, 160, 255, 0.3)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="px-6 max-w-3xl">
        {/* Headline */}
        <motion.h2
          className="text-5xl md:text-6xl font-extrabold mb-6 tracking-wide drop-shadow-lg"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Upgrade Your Style ✨
        </motion.h2>

        {/* Subtext */}
        <motion.p
          className="text-lg md:text-xl mb-10 drop-shadow font-light"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Discover timeless fashion for him & her. Shop the Ireoluwa Collection
          today.
        </motion.p>

        {/* Button */}
        <motion.button
          className="px-10 py-4 text-lg font-semibold rounded-full bg-[#C8A0FF] text-[#360033] shadow-lg hover:shadow-2xl hover:bg-[#b080f7] transition"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link to="/shop">Shop Now</Link>
        </motion.button>
      </div>
    </section>
  );
};

export default CTA;
