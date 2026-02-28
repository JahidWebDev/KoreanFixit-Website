import React, { useState, useRef, useEffect } from "react";

import emailjs from "@emailjs/browser";


import { NavLink } from "react-router-dom";
import logo from "../image/Ko-Fixit-Logo.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import banner from "../image/Aboutus_Banner2.png";
import bannertwo from "../image/Aboutus_Bannertwo.png";
import { FaWhatsapp } from "react-icons/fa";

import orangeBlob from "../image/Icon.png";
import blueBlob from "../image/Icon-.png";

const About = () => {


  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { type: "image", src: banner },
    { type: "image", src: bannertwo },
  ];

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 3000); // 5 seconds per slide

    return () => clearInterval(interval);
  }, [slides.length]);

  // =================================================

  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", formData, "YOUR_PUBLIC_KEY")
      .then(
        () => {
          alert("Message Sent Successfully ✅");
          setIsOpen(false);
          setFormData({ name: "", email: "", phone: "", message: "" });
        },
        (error) => {
          alert("Failed to send ❌");
          console.log(error);
        },
      );
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

      {/* Hero Banner */}
  <section className="relative min-h-[90vh] flex items-center text-white">
  {/* Slides */}
  {slides.map((slide, i) => {
    const isActive = activeSlide === i;

    return (
      <LazyLoadImage
        key={i}
        src={slide.src}
        alt={`hero-slide-${i}`}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ${
          isActive ? "opacity-100" : "opacity-0"
        }`}
      />
    );
  })}

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-[#1F1954]/10"></div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-6 w-full">
    {/* Top Left PNG Image */}
  </div>

  {/* WhatsApp Floating Button */}
  <a
    href="https://wa.me/880189-8795761"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 right-6 bg-[#2DB14A] w-14 h-14 flex items-center justify-center rounded-full shadow-lg hover:scale-110 transition z-50"
  >
    <FaWhatsapp className="text-white text-2xl" />
  </a>
</section>

      {/* Additional Sections would go here */}
      <section className="  py-20">
        <div className="max-w-7xl mx-auto px-6">
          {/* ===============================
        Our Technology & Strength
    ================================= */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* ===== LEFT SIDE : IMAGE / SHAPE ===== */}
            <div>
              {/* Section Label */}
              <p className="text-[26px] font-semibold text-[#009EB9] mb-8 mt-6">
                Our Technology & Strength
              </p>

              {/* Main Heading */}
              <h1 className="text-[24px] md:text-[26px] font-normal text-[#2E2E2E] leading-relaxed mb-6">
                <span className="block font-semibold text-[#1F1F1F] mb-2">
                  We combine
                </span>
                Korean-grade raw materials <br />
                Japanese formulation technology <br />
                International quality control standards <br />
                Climate-adapted performance for Bangladesh
              </h1>

              {/* Paragraph */}
              <p className="text-[16.5px] md:text-[17px] text-[#6B7280] leading-7 max-w-xl">
                This powerful combination allows us to deliver products that
                significantly enhance the strength, workability, durability, and
                water resistance of concrete structures.
              </p>
            </div>

            {/* ===== RIGHT SIDE : TEXT CONTENT ===== */}
            <div className=" mr-20 mb-20">
              <div className="relative w-full h-full min-h-[500px] overflow-hidden">
                {/* Top Left Image Blob */}
                <div>
                  <img
                    src={orangeBlob}
                    alt="orange blob"
                    className="absolute top-20 left-10 w-60 rotate-[-10deg]"
                  />
                </div>

                {/* Bottom Right Image Blob */}
                <div>
                  <img
                    src={blueBlob}
                    alt="blue blob"
                    className="absolute bottom-0  right-10 w-44 rotate-[15deg]"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ===============================
        What We Do
    ================================= */}
          <div className="mt-24">
            <h3 className="text-[#00A6C6] text-xl font-semibold mb-6">
              What We Do?
            </h3>

            <p className="text-gray-700 mb-6">
              We specialize in high-performance solutions including:
            </p>

            <ul className="space-y-2 text-gray-700">
              <li>Concrete Admixtures</li>
              <li>Waterproofing Systems</li>
              <li>Damp-Proof Coatings</li>
              <li>Surface Protection Solutions</li>
              <li>Structural Repair Products</li>
            </ul>

            <p className="mt-6 text-gray-600 max-w-4xl">
              Each product is carefully formulated to meet the technical demands
              of residential, commercial, and infrastructure projects.
            </p>
          </div>

          {/* ===============================
        Who We Serve
    ================================= */}
          <div className="mt-24 text-center">
            <h3 className="text-[#00A6C6] text-2xl font-semibold mb-6">
              Who We Serve
            </h3>

            <p className="mb-6 text-gray-700">We work closely with:</p>

            <ul className="space-y-2 text-gray-700">
              <li>Engineers</li>
              <li>Contractors</li>
              <li>Developers</li>
              <li>Builders</li>
              <li>Industrial Project Owners</li>
            </ul>

            <p className="mt-8 text-gray-600 max-w-3xl mx-auto">
              Our goal is to provide practical, cost-effective, and
              performance-driven construction chemical solutions for every
              project size.
            </p>
          </div>

          {/* ===============================
        Our Vision
    ================================= */}
          <div className="mt-24">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 max-w-4xl">
              To become one of the leading and most reliable construction
              chemical brands in Bangladesh by delivering innovative,
              high-quality, and sustainable building solutions.
            </p>
          </div>

          {/* ===============================
        Our Commitment
    ================================= */}
          <div className="mt-16">
            <h3 className="text-[#00A6C6] text-xl font-semibold mb-6">
              Our Commitment
            </h3>

            <ul className="space-y-2 text-gray-700">
              <li>Premium Raw Materials</li>
              <li>Advanced Formulation Technology</li>
              <li>Consistent Product Performance</li>
              <li>Technical Support & Guidance</li>
              <li>Long-Term Structural Protection</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
