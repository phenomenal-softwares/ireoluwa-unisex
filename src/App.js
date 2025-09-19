import "yet-another-react-lightbox/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// data
import products from "./data/products";

// components
import Layout from "./components/Layout";
import LoadingScreen from "./components/LoadingScreen";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange";
import Hero from "./components/Hero";
import FeaturedProducts from "./components/FeaturedProducts";
import AboutUs from "./components/AboutUs";
import ProductCategories from "./components/ProductCategories";
import SpecialOffer from "./components/SpecialOffer";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Newsletter from "./components/Newsletter";

// pages
import ProductsPage from "./pages/ProductsPage";
import OrderPage from "./pages/OrderPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

// context
import { ToastProvider } from "./context/ToastContext";
import { CartProvider } from "./context/CartContext";

function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts products={products} />
      <AboutUs />
      <div id="products">
        <ProductCategories />
      </div>
      <SpecialOffer />
      <Testimonials />
      <CTA />
      <Newsletter />
    </>
  );
}

function App() {
  return (
    <CartProvider>
      <ToastProvider>
        <BrowserRouter>
          <ScrollToTopOnRouteChange />
          <LoadingScreen />
          <Routes>
            <Route
              path="/"
              element={
                <Layout>
                  <HomePage />
                </Layout>
              }
            />
            <Route
              path="/shop"
              element={
                <Layout>
                  <ProductsPage products={products} />
                </Layout>
              }
            />
            <Route
              path="/order"
              element={
                <Layout>
                  <OrderPage />
                </Layout>
              }
            />
            <Route
              path="/about"
              element={
                <Layout>
                  <AboutPage />
                </Layout>
              }
            />
            <Route
              path="/contact"
              element={
                <Layout>
                  <ContactPage />
                </Layout>
              }
            />
          </Routes>
        </BrowserRouter>
      </ToastProvider>
    </CartProvider>
  );
}

export default App;
