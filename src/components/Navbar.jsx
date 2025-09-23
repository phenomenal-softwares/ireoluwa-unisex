import { useState, useRef, useEffect } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";
import {
  FiMenu,
  FiX,
  FiShoppingCart,
  FiSearch,
  FiChevronDown,
} from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "../context/CartContext";

const categories = [
  { name: "All Products", slug: "all" },
  { name: "Suits & Blazers", slug: "suits" },
  { name: "Tops", slug: "tops" },
  { name: "Bottoms", slug: "bottoms" },
  { name: "Headwear", slug: "headwear" },
  { name: "Accessories", slug: "accessories" },
  { name: "Footwear", slug: "footwear" },
  { name: "Native Wears", slug: "native" },
  { name: "Bags", slug: "bags" },
];

function Navbar({ onCartToggle }) {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();
  const { totalItems } = useCart();

  const baseLink =
    "px-1 py-1 font-medium text-gray-100 hover:text-violet-400 relative " +
    "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-violet-400 " +
    "after:w-0 hover:after:w-full after:transition-all";

  const handleSearch = (e) => {
    e.preventDefault();
    const query = searchQuery.trim().toLowerCase();
    if (query) {
      navigate(`/shop?search=${encodeURIComponent(query)}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  // Close search dropdown on outside click or Esc key
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (window.innerWidth >= 768) {
        if (searchRef.current && !searchRef.current.contains(e.target)) {
          setSearchOpen(false);
        }
      }
    };

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setSearchOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      className="bg-purple-900 shadow-md fixed w-full z-20 top-0 left-0"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center md:hidden">
          {/* Mobile: Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold select-none">
              <span className="text-violet-400">Ireoluwa</span>{" "}
              <span className="text-white">Store</span>
            </span>
          </Link>

          {/* Mobile Icons (search + cart) */}
          <div className="flex items-center space-x-5">
            <button
              onClick={() => setSearchOpen((s) => !s)}
              aria-label="Open search"
            >
              <FiSearch className="text-gray-100 hover:text-violet-400 cursor-pointer text-xl" />
            </button>

            <button
              onClick={onCartToggle}
              className="relative text-gray-100 hover:text-violet-400"
              aria-label="Open cart"
            >
              <FiShoppingCart className="text-2xl" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-violet-400 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow">
                  {totalItems}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen((s) => !s)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FiX className="text-2xl text-gray-100" />
              ) : (
                <FiMenu className="text-2xl text-gray-100" />
              )}
            </button>
          </div>
        </div>

        {/* Desktop Navbar */}
        <div className="hidden md:grid grid-cols-3 items-center h-16">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold select-none">
              <span className="text-violet-400">Ireoluwa</span>{" "}
              <span className="text-white">Store</span>
            </span>
          </Link>

          {/* Center: Nav Links */}
          <div className="flex justify-center space-x-8">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `${baseLink} ${isActive ? "text-violet-400 after:w-full" : ""}`
              }
            >
              Home
            </NavLink>

            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setMenuOpen(true)}
              onMouseLeave={() => setMenuOpen(false)}
            >
              <button
                className={`${baseLink} ${
                  location.pathname.startsWith("/shop")
                    ? "text-violet-400 after:w-full"
                    : ""
                } flex items-center gap-1`}
                aria-haspopup="true"
                aria-expanded={menuOpen}
              >
                Shop <FiChevronDown className="mt-0.5" />
              </button>

              <AnimatePresence>
                {menuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18 }}
                    className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg py-2 w-56"
                    role="menu"
                  >
                    {categories.map((cat) => (
                      <Link
                        key={cat.slug}
                        to={`/shop?category=${cat.slug}`}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-violet-100 hover:text-violet-600"
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/order"
              className={`${baseLink} ${
                location.pathname.startsWith("/order")
                  ? "text-violet-400 after:w-full"
                  : ""
              }`}
            >
              Order
            </Link>
            <Link
              to="/about"
              className={`${baseLink} ${
                location.pathname.startsWith("/about")
                  ? "text-violet-400 after:w-full"
                  : ""
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`${baseLink} ${
                location.pathname.startsWith("/contact")
                  ? "text-violet-400 after:w-full"
                  : ""
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Right: Search + Cart */}
          <div className="flex justify-end items-center space-x-4">
            <form
              onSubmit={handleSearch}
              className="flex items-center bg-white rounded-lg px-2 py-1 w-64"
            >
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-1 px-2 py-1 text-sm text-gray-800 focus:outline-none"
              />
              <button
                type="submit"
                className="px-3 py-1 bg-purple-900 text-white rounded hover:bg-violet-500 transition"
              >
                <FiSearch />
              </button>
            </form>

            <button
              onClick={onCartToggle}
              className="relative text-gray-100 hover:text-violet-400 cursor-pointer"
              aria-label="Open cart"
            >
              <FiShoppingCart className="text-2xl" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-violet-400 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full shadow">
                  {totalItems}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Search */}
      <AnimatePresence>
        {searchOpen && (
          <motion.form
            onSubmit={handleSearch}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-purple-900 shadow-md px-4 py-3 z-50"
          >
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="flex-1 px-2 py-1 text-sm border border-gray-300 rounded 
                   focus:outline-none focus:ring-1 focus:ring-purple-900"
              />
              <button
                type="submit"
                className="px-3 py-1 bg-violet-400 text-white rounded 
                   hover:bg-violet-500 transition"
              >
                Go
              </button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-violet-50 shadow-md overflow-hidden"
          >
            <div className="flex flex-col space-y-4 py-4 px-6">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `font-medium ${
                    isActive
                      ? "text-purple-900"
                      : "text-gray-800 hover:text-violet-400"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                Home
              </NavLink>

              {/* Collapsible Products group */}
              <button
                className="flex items-center justify-between font-medium text-gray-800"
                onClick={() => setMobileMenuOpen((s) => !s)}
                aria-expanded={mobileMenuOpen}
              >
                <span
                  className={
                    location.pathname.startsWith("/shop")
                      ? "text-purple-900"
                      : ""
                  }
                >
                  Shop
                </span>
                <FiChevronDown
                  className={`transition-transform ${
                    mobileMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {mobileMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="pl-4 flex flex-col space-y-2"
                  >
                    {categories.map((cat) => (
                      <Link
                        key={cat.slug}
                        to={`/products?category=${cat.slug}`}
                        className="text-sm text-gray-700 hover:text-violet-400"
                        onClick={() => {
                          setIsOpen(false);
                          setMobileMenuOpen(false);
                        }}
                      >
                        {cat.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                to="/order"
                className={
                  location.pathname.startsWith("/order")
                    ? "text-purple-900 font-medium"
                    : "text-gray-800 hover:text-violet-400 font-medium"
                }
                onClick={() => setIsOpen(false)}
              >
                Order
              </Link>
              <Link
                to="/about"
                className={
                  location.pathname.startsWith("/about")
                    ? "text-purple-900 font-medium"
                    : "text-gray-800 hover:text-violet-400 font-medium"
                }
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={
                  location.pathname.startsWith("/contact")
                    ? "text-purple-900 font-medium"
                    : "text-gray-800 hover:text-violet-400 font-medium"
                }
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
