import React, { useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import logo from "../image/Ko-Fixit-Logo.png";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_a4t7uq6",
        "template_3wjfacu",
        form.current,
        "jpez9azGNJatkyjQE",
      )
      .then(
        () => {
          setIsSending(false);
          setSent(true);
          form.current.reset();
          setTimeout(() => setSent(false), 4000);
        },
        (error) => {
          setIsSending(false);
          alert("Failed to send message: " + error.text);
        },
      );
  };

  return (
    <section className="relative bg-[#f8f9fb]">
      {/* Banner */}
      <div>
        {/* Banner Text */}

        {/* Navbar */}
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
      </div>

      {/* CONTACT FORM SECTION */}
      <section
        
        className="     py-20 sm:py-28 md:py-45 px-4 sm:px-10 md:px-20 lg:px-55"
      >
       

        <div className="grid md:grid-cols-2 gap-10 md:gap-16">
          {/* Left Form */}
          <div className="bg-black text-white backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl p-6 sm:p-8 md:p-10 w-full max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-2">Send A Message</h3>
            <p className="text-sm text-gray-300 mb-6">
              Unlock your potential with expert guidance! Schedule a free
              consultation toward personal and business success.
            </p>

            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                  required
                  className="bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 "
                />
                <input
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  required
                  className="bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 "
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  className="bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 "
                />
                <input
                  type="tel"
                  name="company"
                  placeholder="Phone Number"
                  className="bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 "
                />
              </div>

              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                required
                className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400 "
              ></textarea>
              <button
                type="submit"
                disabled={isSending}
                className={`flex items-center justify-center gap-2 bg-[#FDD304] text-[#1F1954] font-semibold px-6 py-2 rounded-full transition-transform duration-200 ${
                  isSending
                    ? "opacity-70 cursor-not-allowed"
                    : "hover:scale-105 hover:opacity-90"
                }`}
              >
                {isSending ? "Sending..." : "Submit Message"}
                <ArrowRight size={18} />
              </button>

              {sent && (
                <p className="text-green-500 text-sm mt-2">
                  ✅ Message sent successfully!
                </p>
              )}
            </form>
          </div>

          {/* Right Info */}
          <div className="flex flex-col justify-center space-y-12 text-center md:text-left">
            {/* Call Us */}
            <div>
              <h4 className="font-semibold text-gray-800 text-xl mb-2">
                Call Us
              </h4>
              <p className="text-base text-gray-600 mb-3">
                Call us today for personalized support and quick assistance!
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 font-medium text-gray-900 text-lg justify-center md:justify-start">
                <Phone className="text-[#1F1954] mx-auto sm:mx-0" size={24} />
                <span>+880 1898-795761</span>
              </div>
            </div>

            <hr className="border-t border-gray-300 w-4/5 mx-auto md:mx-0" />

            {/* Email Us */}
            <div>
              <h4 className="font-semibold text-gray-800 text-xl mb-2">
                Email Us
              </h4>
              <p className="text-base text-gray-600 mb-3">
                Reach out to us anytime for product inquiries and support!
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 font-medium text-gray-900 text-lg justify-center md:justify-start">
                <Mail className="text-[#1F1954] mx-auto sm:mx-0" size={24} />
                <span>koreanfixit@gmail.com</span>
              </div>
            </div>

            <hr className="border-t border-gray-300 w-4/5 mx-auto md:mx-0" />

            {/* Visit Us */}
            <div>
              <h4 className="font-semibold text-gray-800 text-xl mb-2">
                Visit Us
              </h4>
              <p className="text-base text-gray-600 mb-3">
                Visit our office for direct consultation and support!
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-3 font-medium text-gray-900 text-lg justify-center md:justify-start">
                <MapPin className="text-[#1F1954] mx-auto sm:mx-0" size={24} />
                <span>
                  1252/A5 Matikata Road, ECB Chattar, Dhaka Cantt, Dhaka
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Contact;
