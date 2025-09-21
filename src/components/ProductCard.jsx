import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiShoppingCart, FiMaximize2, FiStar } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";

function ProductCard({ product, onImageClick }) {
  const { addToCart } = useCart();
  const { addToast } = useToast();

  const {
    name,
    description,
    price,
    salePrice,
    onSale,
    image,
    category,
    sizes = [],
    colors = [],
    isFeatured,
    rating,
    stock,
  } = product;

  // Preselect defaults (first size and color if available)
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    if (sizes.length > 0) setSelectedSize(sizes[0]);
    if (colors.length > 0) setSelectedColor(colors[0]);
  }, [sizes, colors]);

  // Calculate discount %
  const discountPercent =
    onSale && price && salePrice ? Math.round(((price - salePrice) / price) * 100) : 0;

  const handleAddToCart = () => {
    const cartItem = {
      ...product,
      selectedSize,
      selectedColor,
    };
    addToCart(cartItem);
    addToast(`${name} (${selectedSize}, ${selectedColor}) added to cart!`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ scale: 1.03 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow flex flex-col"
    >
      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden group">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.4 }}
          src={image}
          alt={name}
          className="w-full h-full object-cover cursor-pointer"
          onClick={onImageClick}
        />

        {/* Zoom overlay */}
        <div
          onClick={onImageClick}
          className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition cursor-pointer"
        >
          <FiMaximize2 className="text-white text-2xl" />
        </div>

        {/* Category badge */}
        <span className="absolute top-3 left-3 bg-[#5D3A6A] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md capitalize">
          {category}
        </span>

        {/* Featured badge */}
        {isFeatured && (
          <span className="absolute bottom-3 left-3 bg-yellow-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            <FaStar className="inline-block mr-1" />
          </span>
        )}

        {/* Discount badge */}
        {onSale && (
          <span className="absolute top-3 right-3 bg-[#9D4EDD] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
            -{discountPercent}%
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col p-4">
        <h3 className="text-lg font-bold text-gray-800">{name}</h3>
        <p className="text-sm text-gray-500 mt-1 flex-1">{description}</p>

        {/* Sizes */}
        {sizes.length > 0 && (
          <div className="mt-3">
            <p className="text-xs text-gray-600 mb-1">Select Size:</p>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size, idx) => (
                <label key={idx}>
                  <input
                    type="radio"
                    name={`size-${product.id}`}
                    value={size}
                    checked={selectedSize === size}
                    onChange={() => setSelectedSize(size)}
                    className="hidden"
                  />
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-md cursor-pointer border ${
                      selectedSize === size
                        ? "bg-[#9D4EDD] text-white border-[#5D3A6A]"
                        : "bg-[#E6E6FA] text-[#5D3A6A] border-transparent"
                    }`}
                  >
                    {size}
                  </span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Colors */}
        {colors.length > 0 && (
          <div className="mt-3">
            <p className="text-xs text-gray-600 mb-1">Select Color:</p>
            <div className="flex gap-2">
              {colors.map((c, idx) => (
                <label key={idx} className="cursor-pointer">
                  <input
                    type="radio"
                    name={`color-${product.id}`}
                    value={c}
                    checked={selectedColor === c}
                    onChange={() => setSelectedColor(c)}
                    className="hidden"
                  />
                  <span
                    className={`w-6 h-6 rounded-full inline-block border-2 ${
                      selectedColor === c ? "border-[#5D3A6A]" : "border-gray-300"
                    }`}
                    style={{ backgroundColor: c }}
                  />
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Rating & Stock */}
        <div className="mt-3 flex items-center justify-between text-sm text-gray-600">
          {rating && (
            <div className="flex items-center gap-1">
              <FiStar className="text-[#9D4EDD]" />
              <span>{rating.toFixed(1)}</span>
            </div>
          )}
          {stock !== undefined && (
            <span className={stock > 0 ? "text-green-600" : "text-red-500"}>
              {stock > 0 ? `In Stock: ${stock}` : "Out of Stock"}
            </span>
          )}
        </div>

        {/* Footer */}
        <div className="mt-4 flex items-center justify-between">
          <div className="flex flex-col">
            {onSale ? (
              <>
                <span className="text-lg font-semibold text-[#9D4EDD]">
                  ₦{salePrice.toLocaleString()}
                </span>
                <span className="text-sm text-gray-400 line-through">
                  ₦{price.toLocaleString()}
                </span>
              </>
            ) : (
              <span className="text-lg font-semibold text-[#5D3A6A]">
                ₦{price.toLocaleString()}
              </span>
            )}
          </div>

          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={handleAddToCart}
            disabled={stock === 0}
            className={`flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-full shadow-md transition ${
              stock === 0
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-[#5D3A6A] text-white hover:bg-[#4B2E58]"
            }`}
          >
            <FiShoppingCart /> {stock === 0 ? "Sold Out" : "Add"}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default ProductCard;
