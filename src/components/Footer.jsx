import React from "react";
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { motion as Motion } from "framer-motion";

const Footer = () => {
  return (
    <footer id="footer" className="pt-10">
      <div className="w-11/12 md:w-[90%] mx-auto px-4">
        <div className="border-t border-gray-300 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            {/* Left Text */}
            <Motion.p
              className="text-base text-black/50"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              &copy; 2025 Lucas. All rights reserved.
            </Motion.p>

            {/* Social Icons */}
            <Motion.div
              className="flex justify-end gap-6 text-xl text-black/50"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <a href="#" className="hover:text-secondary transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <FaXTwitter />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <FaInstagram />
              </a>
            </Motion.div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
