import { motion } from "framer-motion";
import newsletterImg from "../assets/shopping-cart.jpg";

const Newsletter = () => {
  return (
    <section className="bg-[#F9F7FB] py-16 px-6 flex justify-center">
      <motion.div
        className="bg-[#360033] rounded-2xl shadow-2xl max-w-5xl w-full p-10 md:p-16 flex flex-col md:flex-row items-center gap-10"
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
          <h2 className="text-3xl md:text-4xl font-bold text-[#C8A0FF] mb-4">
            Join the Ireoluwa Insider 💌
          </h2>

          {/* Subtext */}
          <p className="text-white mb-8">
            Be the first to know about new arrivals, style drops, and exclusive offers.
          </p>

          {/* Form */}
          <form className="flex flex-col sm:flex-row items-center gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-5 py-3 rounded-full border border-[#C8A0FF] bg-white focus:outline-none focus:ring-2 focus:ring-[#C8A0FF]"
            />
            <motion.button
              type="submit"
              className="px-8 py-3 rounded-full bg-[#C8A0FF] text-[#360033] font-semibold shadow-md hover:bg-[#b080f7] transition"
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
