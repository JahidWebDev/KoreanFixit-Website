import React from 'react'

import logo from "../image/Ko-Fixit-Logo.png";
import { NavLink } from 'react-router';


const ShippingPolicy = () => {
  return (
        <div className="min-h-screen bg-bg">
      {/* Navigation */}
      <nav className="bg-[#1F1954] sticky top-0 z-50">
        <div className="max-w-[1500px] mx-auto px-6">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center">
              <img src={logo} alt="KO FIXIT" className="h-17 w-auto" />
            </div>

            {/* Center Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              <NavLink
                to="/"
                className="text-white text-sm tracking-widest hover:text-[#FDD304] transition"
              >
                HOME
              </NavLink>
              <NavLink
                to="/products"
                className="text-white text-sm tracking-widest hover:text-[#FDD304] transition"
              >
                PRODUCTS
              </NavLink>
              <NavLink
                to="/certificate"
                className="text-white text-sm tracking-widest hover:text-[#FDD304] transition"
              >
                CERTIFICATE
              </NavLink>
              <NavLink
                to="/contact"
                className="text-white text-sm tracking-widest hover:text-[#FDD304] transition"
              >
                CONTACT
              </NavLink>
            </div>

            {/* Right Section */}
            <div className="hidden lg:flex items-center space-x-6">
              {/* Hotline */}
              <div className="text-right text-white text-sm leading-tight">
                <p className="text-white font-medium">Hotline</p>
                <p className="text-white font-semibold">+88 0189 8795 761</p>
              </div>

              {/* Search Button */}
              <button className="bg-[#FDD304] text-[#1F1954] w-47 h-10 rounded-full font-semibold text-sm flex items-center justify-start pl-6 hover:opacity-90 transition">
                SEARCH..
              </button>
            </div>
          </div>
        </div>
      </nav>
<section className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-6 lg:px-8">
    
    {/* Heading */}
    <div className="text-center mb-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
        Shipping Policy
      </h1>
      <p className="text-gray-500 mt-3 text-sm md:text-base">
        Fast, secure and reliable delivery across Bangladesh
      </p>
    </div>

    {/* Content Box */}
    <div className=" p-8 md:p-12 space-y-10">
      
      {/* Order Processing */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Order Processing
        </h2>
        <ul className="space-y-3 text-gray-600 text-sm md:text-base">
          <li>• Orders are processed within 1–3 working days after confirmation.</li>
          <li>• Delivery timelines may vary depending on location and product availability.</li>
        </ul>
      </div>

      {/* Delivery Coverage */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Delivery Coverage
        </h2>
        <ul className="space-y-3 text-gray-600 text-sm md:text-base">
          <li>• We deliver across Bangladesh.</li>
          <li>• Shipping charges may apply depending on order quantity and destination.</li>
        </ul>
      </div>

      {/* Delivery Time */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Delivery Time
        </h2>
        <ul className="space-y-3 text-gray-600 text-sm md:text-base">
          <li>• Inside major cities: 2–5 working days</li>
          <li>• Outside major cities: 3–7 working days</li>
        </ul>
      </div>

      {/* Important Notes */}
      <div>
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Important Notes
        </h2>
        <ul className="space-y-3 text-gray-600 text-sm md:text-base">
          <li>• Delivery times may be affected by public holidays, natural events, or transportation issues.</li>
          <li>• Customers are requested to inspect products at the time of delivery.</li>
        </ul>
      </div>

    </div>
  </div>
</section>
     
    </div>
  )
}

export default ShippingPolicy