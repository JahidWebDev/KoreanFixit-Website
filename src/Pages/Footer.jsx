import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[var(--color-primary-dark)] text-white">

      {/* Top Footer */}
      <div className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h3 className="text-4xl font-extrabold text-[var(--color-secondary)] mb-4">
              Korean Fixit
            </h3>
            <p className="text-base md:text-lg leading-relaxed text-white/90">
              Trusted Korean-standard repair, installation, and maintenance
              services delivering quality, safety, and reliability nationwide.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-1xl font-semibold mb-4">Services</h4>
            <ul className="space-y-3 text-white">
              <li className="hover:text-[var(--color-secondary)] text-amber-50 cursor-pointer transition-colors duration-300 text-lg">
                Appliance Repair
              </li>
              <li className="hover:text-[var(--color-secondary)] text-amber-50 cursor-pointer transition-colors duration-300 text-lg">
                Installation Service
              </li>
              <li className="hover:text-[var(--color-secondary)] text-amber-50 cursor-pointer transition-colors duration-300 text-lg">
                Maintenance & Support
              </li>
              <li className="hover:text-[var(--color-secondary)] text-amber-50 cursor-pointer transition-colors duration-300 text-lg">
                HVAC Solutions
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-1xl font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              <li className="hover:text-[var(--color-secondary)] text-amber-50 cursor-pointer transition-colors duration-300 text-lg">
                About Us
              </li>
              <li className="hover:text-[var(--color-secondary)] text-amber-50 cursor-pointer transition-colors duration-300 text-lg">
                Our Business
              </li>
              <li className="hover:text-[var(--color-secondary)] text-amber-50 cursor-pointer transition-colors duration-300 text-lg">
                Careers
              </li>
              <li className="hover:text-[var(--color-secondary)] text-amber-50 cursor-pointer transition-colors duration-300 text-lg">
                Contact
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-1xl font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-lg">
              <li className="text-amber-50 ">📍 Dhaka, Bangladesh</li>
              <li  className="text-amber-50 ">📞 +880 1234-567890</li>
              <li  className="text-amber-50 ">✉️ support@koreanfixit.com</li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t  border-white/20">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-base ">
          <p className=" text-amber-50">
            © {new Date().getFullYear()} Korean Fixit. All rights reserved.
          </p>
          <div className="flex gap-6">
            <span className="hover:text-[var(--color-secondary)] cursor-pointer transition-colors duration-300">
              Privacy Policy
            </span>
            <span className="hover:text-[var(--color-secondary)] cursor-pointer transition-colors duration-300">
              Terms of Service
            </span>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
