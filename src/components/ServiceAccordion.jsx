import React, { useState } from "react";
import { motion as Motion  } from "framer-motion";
import SectionHeading from "../reUsable/SectionHeading";
import serviceImg from "../assets/img/accordion/1.png";
import { HiArrowUpRight } from "react-icons/hi2";

const services = [
  {
    id: 1,
    title: "User Experience (UX)",
    description:
      "A dedicated UI/UX designer passionate about creating captivating digital experiences. With a keen eye for detail and a love for problem-solving.",
    list1: ["Wireframing and Prototyping", "Responsive Web Design", "Mobile App Design"],
    list2: ["Interaction Design", "Usability Testing", "Visual Design"],
  },
  {
    id: 2,
    title: "Front‑End Development",
    description:
      "Building responsive, accessible, and performant interfaces with modern JS frameworks.",
    list1: ["HTML5 & CSS3", "JavaScript & ES6+", "Responsive Web Design"],
    list2: ["React & Angular", "Bootstrap & Tailwind CSS", "Cross-Browser Compatibility"],
  },
  {
    id: 3,
    title: "User Experience (UX)",
    description:
      "Testing and refining prototypes to maximize usability and engagement.",
    list1: ["Wireframing and Prototyping", "Mobile App Design", "Information Architecture"],
    list2: ["Interaction Design", "Usability Testing", "Accessibility Design"],
  },
  {
    id: 4,
    title: "Website Optimization",
    description:
      "Building responsive, accessible, and performant interfaces with modern JS frameworks.",
    list1: ["Performance Optimization", "SEO Best Practices", "Image Compression"],
    list2: ["Code Minification", "Lazy Loading", "CDN Integration"],
  },
];

export default function ServiceAccordion() {
  const [activeIndex, setActiveIndex] = useState(1);

  const toggle = (id) => {
    setActiveIndex((prev) => (prev === id ? null : id));
  };

  return (
    <section id="service" className="py-9">
      <div className="w-11/12 md:w-[90%] mx-auto px-4">
        <SectionHeading
          tag="My Services"
          title="Tailored Solutions for Every Challenge"
          className="w-9/12 sm:w-7/12 mb-11"
        />

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image Section - fade in from left once */}
          <Motion.div
            className="w-full lg:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src={serviceImg}
              alt="UX wireframing"
              className="w-full rounded-lg shadow-lg"
            />
          </Motion.div>

          {/* Accordion Section - fade in from right once */}
          <Motion.div
            className="w-full lg:w-1/2 space-y-4"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {services.map((item) => (
              <Motion.div
                key={item.id}
                layout // smooth height transition
                className="rounded-lg border border-gray-200 shadow-sm bg-white"
              >
                <button
                  onClick={() => toggle(item.id)}
                  className={`w-full hover:bg-[#333333] hover:text-white text-left px-6 py-4 font-semibold text-lg flex justify-between items-center transition-colors duration-300 ${
                    activeIndex === item.id ? "bg-[#333333] text-white" : "bg-white text-[#686665]"
                  }`}
                >
                  <span className="text-2xl">{item.title}</span>
                  <span className="text-xl transition-transform duration-200">
                    <HiArrowUpRight />
                  </span>
                </button>

                {/* Toggleable content with animation */}
                {activeIndex === item.id && (
                  <Motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 py-4 text-[15px] text-[#909dac]"
                  >
                    <p className="mb-4">{item.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="list-disc list-inside space-y-2 text-[#909dac]">
                        {item.list1.map((li, index) => (
                          <li key={index}>{li}</li>
                        ))}
                      </ul>
                      <ul className="list-disc list-inside space-y-2 text-[#909dac]">
                        {item.list2.map((li, index) => (
                          <li key={index}>{li}</li>
                        ))}
                      </ul>
                    </div>
                  </Motion.div>
                )}
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </div>
    </section>
  );
}
