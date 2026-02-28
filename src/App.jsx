import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Products from "./Pages/Products";
import Solutions from "./Pages/Solutions";
import Industries from "./Pages/Industries";
import Technical from "./Pages/Technical";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import ScrollToTop from "./Pages/ScrollToTop";
import ShippingPolicy from "./Pages/ShippingPolicy";
import RefundPolicy from "./Pages/RefundPolicy";
import TermsofService from "./Pages/TermsofService";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import FaqsKo from "./Pages/FaqsKo";
import Waterproofing from "./Pages/Waterproofing";
import WaterReducing from "./Pages/WaterReducing";
import DampProtect from "./Pages/DampProtect";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <ScrollToTop />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Products />} />
          <Route path="/Shipping-Policy" element={<ShippingPolicy />} />
          <Route path="/Return-&-Refund-Policy" element={<RefundPolicy />} />
          <Route path="/Terms-of-Service" element={<TermsofService />} />
          <Route path="/Privacy-Policy" element={<PrivacyPolicy />} />
          <Route path="/faqs" element={<FaqsKo/>} />
          
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services-waterproofing" element={<Waterproofing />} />
          <Route path="/services-waterreducing" element={<WaterReducing />} />
          <Route path="/services-damp-protect" element={<DampProtect/>} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;