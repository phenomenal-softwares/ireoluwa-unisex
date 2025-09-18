import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import ProductCard from "../components/ProductCard";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

function ProductsPage({ products }) {
  const [index, setIndex] = useState(-1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const location = useLocation();
  const navigate = useNavigate();

  // ✅ Sync state with URL params
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const category = queryParams.get("category");
    const search = queryParams.get("search");

    if (category) {
      setSelectedCategory(category.toLowerCase());
      setSearchQuery("");
    } else if (search) {
      setSearchQuery(search.toLowerCase());
      setSelectedCategory("all");
    } else {
      setSelectedCategory("all");
      setSearchQuery("");
    }
  }, [location.search]);

  // ✅ Categories from data
  const categories = ["all", ...new Set(products.map((p) => p.category))];

  // ✅ Filtering logic
  let displayedProducts = products;
  if (searchQuery) {
    displayedProducts = products.filter((p) =>
      p.name.toLowerCase().includes(searchQuery)
    );
  } else if (selectedCategory !== "all") {
    displayedProducts = products.filter(
      (p) => p.category.toLowerCase() === selectedCategory
    );
  }

  // ✅ Handle search submit
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(
        `/products?search=${encodeURIComponent(searchQuery.trim().toLowerCase())}`
      );
    }
  };

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat.toLowerCase());
    navigate(`/products?category=${cat.toLowerCase()}`);
  };

  return (
    <div className="bg-teal-50 mb-10 pt-24 px-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-teal-800 mb-3">
          Our Exclusive Collection
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
          Explore trendy, affordable, and stylish items across categories —
          from fashion wear to accessories and more.
        </p>
      </div>

      {/* ✅ Search Bar */}
      <form
        onSubmit={handleSearch}
        className="flex justify-center mb-8 max-w-xl mx-auto gap-2"
      >
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
          placeholder="Search products..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-teal-600"
        />
        <button
          type="submit"
          className="px-5 py-2 bg-teal-700 text-white rounded hover:bg-teal-800 transition"
        >
          Search
        </button>
      </form>

      {/* ✅ Filter Section */}
      <div className="mb-8">
        <motion.h2
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-lg font-semibold text-gray-700 mb-3 text-center"
        >
          Filter by categories
        </motion.h2>

        <div className="flex md:flex-wrap gap-3 justify-start md:justify-center overflow-x-scroll pb-2">
          <div className="flex gap-3 mb-8 overflow-x-auto filter-scrollbar animate-fadeIn">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full font-medium transition-all duration-300
        ${
          selectedCategory === cat
            ? "bg-teal-700 text-white shadow-md"
            : "bg-coral-100 text-gray-800 hover:bg-coral-200"
        }`}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Products Grid */}
      {displayedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {displayedProducts.map((product, i) => (
            <ProductCard
              key={product.id}
              product={product}
              onImageClick={() => setIndex(i)}
            />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-600 my-12">
          Sorry, no available products matched your search '{searchQuery}'
        </p>
      )}

      {/* ✅ Lightbox */}
      <Lightbox
        open={index >= 0}
        index={index}
        close={() => setIndex(-1)}
        plugins={[Captions]}
        slides={displayedProducts.map((p) => ({
          src: p.image,
          title: p.name,
          description: p.description,
        }))}
        on={{
          click: ({ event }) => {
            if (event.target.classList.contains("yarl__container")) {
              setIndex(-1);
            }
          },
        }}
      />
    </div>
  );
}

export default ProductsPage;
