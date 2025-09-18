import { motion } from "framer-motion";
import { FaLeaf, FaTruck, FaUtensils, FaSmile, FaWineBottle } from "react-icons/fa";
import chefImg from "../assets/chef.png";

function AboutPage() {
  return (
    <div className="pt-20 bg-yellow-50">
      {/* Hero Section */}
      <section className="relative h-72 flex items-center justify-center bg-green-800 text-white text-center">
        <div className="absolute inset-0 bg-black/40"></div>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="relative flex gap-3 align-middle text-4xl md:text-5xl font-extrabold z-10"
        >
          Our Story <FaWineBottle />
        </motion.h1>
      </section>

      {/* Journey Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <motion.img
          src={chefImg}
          alt="Our Chef"
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
          <h2 className="text-3xl font-bold text-green-800 mb-4">Passion for Food</h2>
          <p className="text-gray-700 leading-relaxed">
            At Pepper & Palm, we believe food is more than just a meal —
            it’s a story of culture, family, and togetherness. From our humble
            beginnings, we’ve stayed true to our roots by serving dishes
            inspired by Nigerian flavors, cooked with love and fresh
            ingredients every single day.
          </p>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-12">Why Choose Us?</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <FaLeaf />, title: "Fresh Ingredients" },
              { icon: <FaUtensils />, title: "Authentic Recipes" },
              { icon: <FaTruck />, title: "Fast Delivery" },
              { icon: <FaSmile />, title: "Friendly Service" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-yellow-100 rounded-2xl shadow hover:shadow-lg transition"
              >
                <div className="text-green-700 text-4xl mb-4 flex justify-center">{item.icon}</div>
                <h3 className="font-semibold text-lg">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-green-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Hungry? Let’s Get You Started</h2>
        <p className="mb-6 text-lg">Order your favorite meal and enjoy the taste of home.</p>
        <a
          href="/dishes"
          className="px-6 py-3 bg-yellow-300 text-green-800 rounded-lg font-semibold hover:bg-yellow-400 transition"
        >
          Explore Dishes
        </a>
      </section>
    </div>
  );
}

export default AboutPage;
