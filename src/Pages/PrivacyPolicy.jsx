import React from "react";

import { NavLink } from "react-router-dom"; // ঠিক package use করো, 'react-router' নয়
import logo from "../image/Ko-Fixit-Logo.png";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fb]">
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
                to="/about"
                className="text-white text-sm tracking-widest hover:text-[#FDD304] transition"
              >
                ABOUT US
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
      <section className=" py-16  ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Privacy Policy
            </h1>
            <p className="text-gray-500 mt-3 text-sm md:text-base">
              At Korean Fixit, we respect your privacy and are committed to
              protecting your personal information
            </p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-10  ">
            {/* Information We Collect */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Information We Collect
              </h2>
              <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                <li>• Name</li>
                <li>• Phone number</li>
                <li>• Email address</li>
                <li>• Delivery address</li>
              </ul>
            </div>

            {/* How We Use Information */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                How We Use Information
              </h2>
              <ul className="space-y-2 text-gray-600 text-sm md:text-base">
                <li>• To process orders</li>
                <li>• To provide customer support</li>
                <li>• To improve our services</li>
                <li>• To send important updates (if necessary)</li>
              </ul>
            </div>

            {/* Data Protection Note */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Data Protection
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                We do not sell, trade, or share customer information with third
                parties except when required by law.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
