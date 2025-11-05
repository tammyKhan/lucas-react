import React from "react";
import { motion as Motion } from "framer-motion";
import Buttons from "../reUsable/Buttons";
import bgImage from "../assets/img/cta/1.png";

export default function CTASection() {
  return (
    <section
      id="cta_section"
      style={{ backgroundImage: `url(${bgImage})` }}
      className="relative py-24 my-16 text-white bg-cover bg-center bg-no-repeat"
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/60 opacity-90 z-0"></div>

      <div className="relative z-10 w-11/12 max-w-6xl mx-auto">
        <div className="text-center space-y-16">
          {/* Animated Heading */}
          <Motion.h2
            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-[52px] font-semibold"
          >
            Let's Get In Touch
          </Motion.h2>

          {/* Animated Button */}
          <Motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <Buttons text="Become a Client" className="mx-auto" />
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
