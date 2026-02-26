
import React from 'react'


import { NavLink } from 'react-router-dom'; // ঠিক package use করো, 'react-router' নয়
import logo from "../image/Ko-Fixit-Logo.png";

const FaqsKo = () => {
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
        FAQs
      </h1>
      <p className="text-gray-500 mt-3 text-sm md:text-base">
        Frequently Asked Questions about Korean Fixit products and services
      </p>
    </div>

    {/* FAQ List */}
    <div className="p-8 md:p-12 space-y-8  ">
      
      {/* Question 1 */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          1. What products does Korean Fixit offer?
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          We offer concrete admixtures, waterproofing systems, damp-proof coatings, and surface protection solutions.
        </p>
      </div>

      {/* Question 2 */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          2. Do you provide delivery outside Dhaka?
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Yes, we deliver across Bangladesh.
        </p>
      </div>

      {/* Question 3 */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          3. How can I place an order?
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          You can contact us via phone or email.
        </p>
      </div>

      {/* Question 4 */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          4. Do you provide technical support?
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Yes, we provide basic product guidance and application support.
        </p>
      </div>

      {/* Question 5 */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-2">
          5. How long does delivery take?
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Usually 2–7 working days depending on location.
        </p>
      </div>

    </div>
  </div>
</section>
         
        </div>
  )
}

export default FaqsKo