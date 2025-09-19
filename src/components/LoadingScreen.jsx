import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import { FaShoppingBag } from "react-icons/fa";

function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden"; // prevent weird scrollbars
    } else {
      document.body.style.overflow = "";
    }
  }, [loading]);

  useEffect(() => {
    setLoading(true);

    let images = Array.from(document.images);
    let loadedCount = 0;

    const markLoaded = () => {
      loadedCount++;
      if (loadedCount === images.length) {
        setTimeout(() => setLoading(false), 400);
      }
    };

    if (images.length === 0) {
      setLoading(false);
    } else {
      images.forEach((img) => {
        if (img.complete) {
          markLoaded();
        } else {
          img.addEventListener("load", markLoaded);
          img.addEventListener("error", markLoaded);
        }
      });
    }

    return () => {
      images.forEach((img) => {
        img.removeEventListener("load", markLoaded);
        img.removeEventListener("error", markLoaded);
      });
    };
  }, [location]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 bg-purple-100 flex items-center justify-center z-[9999]"
        >
          <div className="flex flex-col items-center">
            {/* Shopping bag animation */}
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
              className="text-purple-800 text-5xl"
            >
              <FaShoppingBag />
            </motion.div>

            <p className="mt-4 text-purple-900 font-semibold animate-pulse">
              Getting your styles ready... Please wait!
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;
