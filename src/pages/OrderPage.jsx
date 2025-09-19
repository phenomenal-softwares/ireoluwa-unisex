import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheckCircle } from "react-icons/fi";
import orderImg from "../assets/shopping-cart.jpg";

function OrderPage() {
  const { cartItems, totalPrice, clearCart } = useCart();
  const { addToast } = useToast();
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const DELIVERY_FEE = 1500;

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    setShowModal(true);
    addToast("Order placed successfully!", "success");
  };

  const handleCloseModal = () => {
    setShowModal(false);
    clearCart();
    navigate("/");
  };

  // If no cart items, show empty state
  if (cartItems.length === 0) {
    return (
      <div className="max-w-xl mx-auto px-4 py-16 text-center">
        <h2 className="text-4xl text-red-500 font-bold mt-12">
          Your cart is empty 🛒
        </h2>
        <p className="text-gray-600 my-6">
          Looks like you haven’t added any items yet.
        </p>
        <button
          onClick={() => navigate("/shop")}
          className="px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
        >
          Go to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-2xl text-purple-800 font-bold my-6">
        Order Checkout
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Order Summary (top on mobile) */}
        <div className="bg-white shadow-lg rounded-xl p-6 order-1 md:order-2">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
          <div className="space-y-4 max-h-64 overflow-y-auto pr-2">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center border-b pb-2"
              >
                <div>
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    Qty: {item.quantity} × ₦{item.price.toLocaleString()}
                  </p>
                </div>
                <span className="font-semibold">
                  ₦{(item.price * item.quantity).toLocaleString()}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>₦{totalPrice.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Delivery Fee</span>
              <span>₦{DELIVERY_FEE.toLocaleString()}</span>
            </div>
            <div className="border-t pt-3 flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>₦{(totalPrice + DELIVERY_FEE).toLocaleString()}</span>
            </div>
          </div>
        </div>

        {/* Customer Info (below summary on mobile) */}
        <form
          onSubmit={handlePlaceOrder}
          className="md:col-span-2 bg-white shadow-lg rounded-xl p-6 space-y-4 order-2 md:order-1"
        >
          <h2 className="text-lg font-semibold mb-4">Customer Information</h2>

          <div>
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              required
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Phone</label>
            <input
              type="tel"
              required
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-600"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Delivery Address
            </label>
            <textarea
              rows="3"
              required
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-600"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">
              Special Instructions
            </label>
            <textarea
              rows="2"
              placeholder="Optional"
              className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-600"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700"
          >
            Place Order
          </button>
        </form>
      </div>

      {/* Success Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 text-center relative overflow-hidden"
            >
              {/* Big checkmark */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="text-purple-600 text-6xl flex justify-center"
              >
                <FiCheckCircle />
              </motion.div>

              {/* Order image */}
              <motion.img
                src={orderImg}
                alt="Chef"
                className="w-60 mx-auto mt-4 border-4 border-purple-200 rounded-lg"
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              />

              <h2 className="text-2xl text-purple-700 font-bold mt-4">
                Order Successful!
              </h2>
              <p className="text-gray-600 mt-2">
                Your stunning looks are on the way 🚀
              </p>

              {/* Buttons */}
              <div className="mt-6 flex flex-col gap-3">
                {/* Primary */}
                <button
                  onClick={() => {
                    clearCart();
                    setShowModal(false);
                    navigate("/shop");
                  }}
                  className="w-full px-6 py-3 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition"
                >
                  Shop Again
                </button>

                {/* Secondary */}
                <button
                  onClick={handleCloseModal}
                  className="w-full px-6 py-3 text-purple-700 font-semibold rounded-lg hover:bg-gray-100 transition"
                >
                  Back to Home
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default OrderPage;
