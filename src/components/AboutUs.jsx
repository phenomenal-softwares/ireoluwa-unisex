import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import aboutImg from "../assets/about-us.jpg";

function AboutUs() {
  return (
    <section className="bg-[#E6E6FA] py-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src={aboutImg}
            alt="About Ireoluwa Unisex Store"
            className="rounded-2xl shadow-lg object-cover w-full h-[400px]"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#3A1D4D] mb-6">
            Our Story
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Welcome to{" "}
            <span className="font-semibold text-[#5D3A6A]">
              Ireoluwa Unisex Store
            </span>
            , where timeless style meets everyday comfort. From casual fits to
            statement pieces, we curate fashion that helps you express your true
            self with confidence.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Whether it’s a laid-back weekend look, office-ready essentials, or
            trendy accessories, every item is chosen with quality and style in
            mind. Dress with ease, stand out effortlessly, and let your wardrobe
            tell your story.
          </p>
          <Link
            to="/about"
            className="bg-[#5D3A6A] hover:bg-[#4B2E58] text-white px-6 py-3 rounded-lg font-semibold shadow-md transition"
          >
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
