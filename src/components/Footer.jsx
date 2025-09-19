import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-purple-900 text-purple-50 pt-16 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-purple-100 mb-3">
            Ireoluwa Unisex Store <br />👗👔
          </h2>
          <p className="text-purple-200/80">
            Elevating your style with timeless unisex fashion pieces.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-purple-200 mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-purple-300 transition">
                Home
              </a>
            </li>
            <li>
              <a href="/shop" className="hover:text-purple-300 transition">
                Shop
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-purple-300 transition">
                About Us
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-purple-300 transition">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-lg font-semibold text-purple-200 mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-purple-300 transition">
                FAQs
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-purple-300 transition">
                Shipping & Returns
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-purple-300 transition">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-purple-300 transition">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-purple-200 mb-4">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="/" className="hover:text-purple-300 transition" aria-label="Facebook">
              <FiFacebook />
            </a>
            <a href="/" className="hover:text-purple-300 transition" aria-label="Twitter">
              <FiTwitter />
            </a>
            <a href="/" className="hover:text-purple-300 transition" aria-label="Instagram">
              <FiInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-purple-800 pt-6 text-center text-sm text-purple-200/80">
        <p>© {new Date().getFullYear()} Ireoluwa Unisex Store. All rights reserved.</p>
        <p className="mt-2">
          A Brand by{" "}
          <a
            href="https://www.phenomenalproductions.com.ng"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-300 hover:underline"
          >
            Phenomenal Productions
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
