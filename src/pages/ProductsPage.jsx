import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import ProductCard from "../components/ProductCard";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

function ProductsPage({ products }) {
  const [index, setIndex] = useState(-1);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;

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
      setCurrentPage(1); // reset page
    } else if (search) {
      setSearchQuery(search.toLowerCase());
      setSelectedCategory("all");
      setCurrentPage(1); // reset page
    } else {
      setSelectedCategory("all");
      setSearchQuery("");
      setCurrentPage(1);
    }
  }, [location.search]);

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

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

  // ✅ Pagination slice
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = displayedProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(displayedProducts.length / itemsPerPage);

  // ✅ Handle search submit
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(
        `/shop?search=${encodeURIComponent(searchQuery.trim().toLowerCase())}`
      );
    }
  };

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat.toLowerCase());
    navigate(`/shop?category=${cat.toLowerCase()}`);
  };

  return (
    <div className="bg-purple-50 mb-10 pt-24 px-4 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-purple-900 mb-3">
          Discover Our Fashion Collection
        </h1>
        <p className="text-lg md:text-xl text-purple-700/80 max-w-2xl mx-auto">
          From timeless essentials to statement pieces — explore stylish,
          affordable, and unisex fashion curated just for you.
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
          placeholder="Search styles, accessories, or brands..."
          className="flex-1 px-4 py-2 border border-purple-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          type="submit"
          className="px-5 py-2 bg-purple-700 text-white rounded hover:bg-purple-800 transition"
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
          className="text-lg font-semibold text-purple-800 mb-3 text-center"
        >
          Browse by Categories
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
            ? "bg-purple-700 text-white shadow-md"
            : "bg-purple-100 text-purple-800 hover:bg-purple-200"
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
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <AnimatePresence mode="wait">
              {currentProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <ProductCard
                    product={product}
                    onImageClick={() => setIndex(i + indexOfFirstItem)}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* ✅ Pagination Controls */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-8 gap-2 flex-wrap">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage((prev) => prev - 1)}
                className="px-3 py-1 bg-purple-100 text-purple-700 rounded disabled:opacity-50"
              >
                Prev
              </button>

              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`px-3 py-1 rounded transition ${
                    currentPage === i + 1
                      ? "bg-purple-700 text-white"
                      : "bg-purple-100 text-purple-700 hover:bg-purple-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage((prev) => prev + 1)}
                className="px-3 py-1 bg-purple-100 text-purple-700 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </>
      ) : (
        <p className="text-center text-purple-600 my-12">
          Sorry, no fashion items matched your search “{searchQuery}”.
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
