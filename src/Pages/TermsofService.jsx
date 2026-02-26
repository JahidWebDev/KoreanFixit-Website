

import React from 'react'

import logo from "../image/Ko-Fixit-Logo.png";
import { NavLink } from 'react-router';

const TermsofService = () => {
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
        Terms of Service
      </h1>
      <p className="text-gray-500 mt-3 text-sm md:text-base">
        Please read these terms carefully before using our website
      </p>
    </div>

    {/* Content */}
    <div className="p-8 md:p-12">
      <ul className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
        <li>• All product information provided is for general guidance purposes.</li>
        <li>• Technical specifications may change without prior notice.</li>
        <li>• Product application must follow recommended guidelines.</li>
        <li>• We are not responsible for damages caused by improper use or incorrect application.</li>
        <li>• Unauthorized reproduction of website content is prohibited.</li>
        <li>• Korean Fixit reserves the right to update these terms at any time without prior notice.</li>
      </ul>
    </div>

  </div>
</section>
     
    </div>
  )
}

export default TermsofService