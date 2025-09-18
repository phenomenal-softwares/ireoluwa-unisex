import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTopButton from "./ScrollToTopButton";
import CartSidebar from "./CartSidebar";

const Layout = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => setIsCartOpen(prev => !prev);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Pass toggle to Navbar */}
      <Navbar onCartToggle={toggleCart} />

      {/* Main content */}
      <main className="flex-grow">{children}</main>

      <Footer />
      <ScrollToTopButton />

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={toggleCart} />
    </div>
  );
};

export default Layout;
