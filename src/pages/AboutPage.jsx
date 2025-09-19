import { motion } from "framer-motion";
import { FaLeaf, FaTruck, FaTshirt, FaSmile, FaShoppingBag } from "react-icons/fa";
import storeImg from "../assets/fashion-model.jpg";

function AboutPage() {
  return (
    <div className="pt-20 bg-purple-50">
      {/* Hero Section */}
      <section className="relative h-72 flex items-center justify-center bg-purple-900 text-white text-center">
        <div className="absolute inset-0 bg-black/30"></div>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex gap-3 items-center text-4xl md:text-5xl font-extrabold z-10"
        >
          About Us <FaShoppingBag />
        </motion.h1>
      </section>

      {/* Journey Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          src={storeImg}
          alt="Our Store"
          className="w-full rounded-2xl shadow-lg"
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        />
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold text-purple-900 mb-4">Style with Purpose</h2>
          <p className="text-gray-700 leading-relaxed">
            At <span className="font-semibold text-purple-800">Ireoluwa Unisex Store</span>, 
            fashion is more than clothing — it’s a reflection of individuality, 
            confidence, and culture. From timeless essentials to bold statement pieces, 
            we curate collections that celebrate everyday style while keeping affordability in mind.
          </p>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-purple-900 mb-12">Why Shop With Us?</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <FaLeaf />, title: "Quality Fabrics" },
              { icon: <FaTshirt />, title: "Trendy & Timeless" },
              { icon: <FaTruck />, title: "Swift Delivery" },
              { icon: <FaSmile />, title: "Customer Care" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-purple-100 rounded-2xl shadow hover:shadow-lg transition"
              >
                <div className="text-purple-700 text-4xl mb-4 flex justify-center">
                  {item.icon}
                </div>
                <h3 className="font-semibold text-lg text-purple-800">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-purple-800 text-white p-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Upgrade Your Wardrobe?</h2>
        <p className="mb-6 text-lg">
          Explore our latest arrivals and find styles made just for you.
        </p>
        <a
          href="/shop"
          className="px-6 py-3 bg-purple-200 text-purple-900 rounded-lg font-semibold hover:bg-purple-300 transition"
        >
          Browse Collection
        </a>
      </section>
    </div>
  );
}

export default AboutPage;
