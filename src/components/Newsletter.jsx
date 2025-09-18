// src/components/Newsletter.jsx
import { motion } from "framer-motion";
import newsletterImg from "../assets/basket-icon.png";

const Newsletter = () => {
  return (
    <section className="bg-yellow-50 py-16 px-6 flex justify-center">
      <motion.div
        className="bg-green-700 rounded-2xl shadow-2xl max-w-5xl w-full p-10 md:p-16 flex flex-col md:flex-row items-center gap-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* Illustration */}
        <motion.img
          src={newsletterImg}
          alt="Newsletter Illustration"
          className="w-40 md:w-56 flex-shrink-0 drop-shadow-lg"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />

        {/* Text + Form */}
        <div className="flex-1 text-center md:text-left">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-300 mb-4">
            Stay Updated with Pepper & Palm 🌴
          </h2>

          {/* Subtext */}
          <p className="text-white mb-8">
            Get our weekly specials and exclusive offers straight to your inbox.
          </p>

          {/* Form */}
          <form className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-full border-none focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <motion.button
              type="submit"
              className="px-8 py-3 rounded-full bg-yellow-400 text-green-900 font-semibold shadow-md hover:bg-yellow-500 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
};

export default Newsletter;
