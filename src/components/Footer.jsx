import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white pt-16 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-yellow-400 mb-3">
            Pepper & Palm 🌴
          </h2>
          <p className="text-gray-300">
            Authentic Nigerian flavors, fresh and fast.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-300 mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-yellow-400 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/dishes" className="hover:text-yellow-400 transition">
                Menu
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-yellow-400 transition">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-yellow-400 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-300 mb-4">
            Support
          </h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-yellow-400 transition">
                FAQs
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-yellow-400 transition">
                Help Center
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-yellow-400 transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-yellow-400 transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-yellow-300 mb-4">
            Follow Us
          </h3>
          <div className="flex gap-4 text-2xl">
            <a href="/" className="hover:text-yellow-400 transition">
              <FiFacebook />
            </a>
            <a href="/" className="hover:text-yellow-400 transition">
              <FiTwitter />
            </a>
            <a href="/" className="hover:text-yellow-400 transition">
              <FiInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-700 pt-6 text-center text-sm text-gray-300">
        <p>
          © {new Date().getFullYear()} Pepper & Palm. All rights reserved.
        </p>
        <p className="mt-2">
          A Product of{" "}
          <a
            href="https://www.phenomenalproductions.com.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-400 hover:underline"
          >
            Phenomenal Productions
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
