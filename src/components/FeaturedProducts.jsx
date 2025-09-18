import { useState } from "react";
import ProductCard from "./ProductCard"; // renamed FoodCard → ProductCard
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

function FeaturedProducts({ products = [] }) {
  const [index, setIndex] = useState(-1);

  // ✅ Only featured products (max 6)
  const featuredProducts = products.filter((p) => p.isFeatured).slice(0, 6);

  const scrollContainer = (dir) => {
    const container = document.getElementById("featured-scroll");
    if (container) {
      const scrollAmount = dir === "left" ? -260 : 260;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (!featuredProducts.length) {
    return (
      <div className="text-center py-20 text-gray-500">
        No featured products available.
      </div>
    );
  }

  return (
    <div className="py-16 bg-[#E6E6FA] relative">
      {" "}
      {/* Lavender background */}
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#5D3A6A] mb-12">
          Featured Products
        </h2>

        <div className="relative">
          <div
            id="featured-scroll"
            className="flex lg:grid gap-6 lg:gap-8 overflow-x-auto lg:overflow-x-visible scroll-smooth snap-x snap-mandatory pb-4 lg:grid-cols-3"
          >
            {featuredProducts.map((product, i) => (
              <div
                key={product.id}
                className="w-64 sm:w-72 lg:w-auto flex-shrink-0 snap-center"
              >
                <ProductCard
                  product={product}
                  onImageClick={() => setIndex(i)}
                />
              </div>
            ))}
          </div>

          {/* Mobile arrows */}
          <button
            onClick={() => scrollContainer("left")}
            className="absolute top-1/2 -translate-y-1/2 left-2 bg-[#5D3A6A] text-white p-2 rounded-full shadow-md sm:hidden hover:bg-purple-900 transition"
          >
            <FiChevronLeft size={20} />
          </button>
          <button
            onClick={() => scrollContainer("right")}
            className="absolute top-1/2 -translate-y-1/2 right-2 bg-[#5D3A6A] text-white p-2 rounded-full shadow-md sm:hidden hover:bg-purple-900 transition"
          >
            <FiChevronRight size={20} />
          </button>
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/shop"
            className="inline-block bg-[#5D3A6A] hover:bg-purple-900 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition"
          >
            View All Products
          </Link>
        </div>

        <Lightbox
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[Captions]}
          slides={featuredProducts.map((p) => ({
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
    </div>
  );
}

export default FeaturedProducts;
