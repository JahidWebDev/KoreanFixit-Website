import React from "react";

import logo from "../image/Ko-Fixit-Logo.png";
import { NavLink } from "react-router";

const RefundPolicy = () => {
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
      <section className="  py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Return & Refund Policy
            </h1>
            <p className="text-gray-500 mt-3 text-sm md:text-base">
              Please review our return and refund guidelines carefully
            </p>
          </div>

          {/* Content */}
          <div className="p-8 md:p-12 space-y-10">
            {/* Return Eligibility */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Return Eligibility
              </h2>
              <ul className="space-y-3 text-gray-600 text-sm md:text-base">
                <li>• The item received is damaged or defective.</li>
                <li>• The wrong product was delivered.</li>
                <li>• The issue is reported within 48 hours of delivery.</li>
              </ul>
            </div>

            {/* Non-Returnable Conditions */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Non-Returnable Conditions
              </h2>
              <ul className="space-y-3 text-gray-600 text-sm md:text-base">
                <li>• Used or opened products.</li>
                <li>• Damage caused by improper handling or storage.</li>
                <li>• Change of mind after delivery.</li>
              </ul>
            </div>

            {/* Refund Process */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Refund Process
              </h2>
              <ul className="space-y-3 text-gray-600 text-sm md:text-base">
                <li>
                  • Once the returned product is inspected and approved, refunds
                  will be processed within 7–10 working days.
                </li>
                <li>
                  • Refunds will be issued via the original payment method or
                  bank transfer.
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">
                For Return Requests, Contact
              </h2>
              <p className="text-gray-600 text-sm md:text-base">
                📧 koreanfixit@gmail.com
              </p>
              <p className="text-gray-600 text-sm md:text-base">
                📞 +8801898795761
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefundPolicy;
