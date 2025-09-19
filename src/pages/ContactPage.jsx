import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function ContactPage() {
  return (
    <div className="pt-20 bg-purple-50">
      {/* Hero Section */}
      <section className="relative h-60 flex items-center justify-center bg-purple-800 text-white text-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative text-4xl md:text-5xl font-extrabold z-10"
        >
          Contact Us
        </motion.h1>
      </section>

      {/* Contact Info */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {[
          {
            icon: <FaMapMarkerAlt />,
            title: "Visit Us",
            detail: "22, Olademo Oluwole Street, Idumota, Lagos, Nigeria",
          },
          {
            icon: <FaPhoneAlt />,
            title: "Call Us",
            detail: "+234 800 123 4567",
          },
          {
            icon: <FaEnvelope />,
            title: "Email Us",
            detail: "support@ireoluwastore.com",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition"
          >
            <div className="text-purple-600 text-4xl mb-4 flex justify-center">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-purple-800 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600">{item.detail}</p>
          </motion.div>
        ))}
      </section>

      {/* Location Section (Map Placeholder) */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <div className="bg-purple-100 border border-purple-200 rounded-2xl shadow-lg p-8 flex flex-col items-center text-center">
          <div className="bg-purple-700 text-white w-16 h-16 flex items-center justify-center rounded-full mb-4">
            📍
          </div>
          <h3 className="text-2xl font-bold text-purple-800 mb-2">Find Us</h3>
          <p className="text-gray-700 max-w-md">
            Our store is located in the heart of Lagos Island — Idumota.
            Stop by to explore our wide range of unisex clothing and accessories.
          </p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Idumota+Lagos"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 px-6 py-3 bg-purple-700 text-white rounded-lg font-semibold hover:bg-purple-800 transition"
          >
            View on Google Maps
          </a>
        </div>
      </section>

      {/* CTA Footer */}
      <section className="bg-purple-800 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">We’d Love to Hear from You</h2>
        <p className="mb-6 text-lg">
          Visit our store, give us a call, or shop your favorite styles online!
        </p>
        <a
          href="/shop"
          className="px-6 py-3 bg-purple-300 text-purple-900 rounded-lg font-semibold hover:bg-purple-400 transition"
        >
          Browse Products
        </a>
      </section>
    </div>
  );
}

export default ContactPage;
