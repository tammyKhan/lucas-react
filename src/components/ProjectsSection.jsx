import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import img1 from "../assets/img/projects/1.png";
import img2 from "../assets/img/projects/2.png";
import img3 from "../assets/img/projects/3.png";
import img4 from "../assets/img/projects/4.png";
import img5 from "../assets/img/projects/5.png";
import img6 from "../assets/img/projects/6.png";
import SectionHeading from "../reUsable/SectionHeading";
import Buttons from "../reUsable/Buttons";
import { RxCross2 } from "react-icons/rx";

const projectData = [
  {
    id: 1,
    image: img1,
    tags: ["UI/UX Designer", "Product Design"],
    modalImg: img1,
    modalDesc:
      "This is a detailed description of the project including technologies, goals, and results.",
  },
  {
    id: 2,
    image: img2,
    tags: ["UI/UX Designer", "Product Design"],
    modalImg: img2,
    modalDesc:
      "This is a detailed description of the project including technologies, goals, and results.",
  },
  {
    id: 3,
    image: img3,
    tags: ["UI/UX Designer", "Product Design"],
    modalImg: img3,
    modalDesc:
      "This is a detailed description of the project including technologies, goals, and results.",
  },
  {
    id: 4,
    image: img4,
    tags: ["UI/UX Designer", "Product Design"],
    modalImg: img4,
    modalDesc:
      "This is a detailed description of the project including technologies, goals, and results.",
  },
  {
    id: 5,
    image: img5,
    tags: ["UI/UX Designer", "Product Design"],
    modalImg: img5,
    modalDesc:
      "This is a detailed description of the project including technologies, goals, and results.",
  },
  {
    id: 6,
    image: img6,
    tags: ["UI/UX Designer", "Product Design"],
    modalImg: img6,
    modalDesc:
      "This is a detailed description of the project including technologies, goals, and results.",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="py-12 w-11/12 md:w-[90%]  mx-auto">
      <div id="project" className="">
        <div className="flex flex-col md:flex-row justify-between md:items-center ">
          <SectionHeading
            tag="Latest Projects"
            title="Innovative Creations and Mastery"
            className="w-9/12 sm:w-7/12 mb-11"
          />

          {/* More Projects Button */}
          <Buttons text="More Projects" className="lg:ml-auto  md:my-0 my-7" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 ">
          {projectData.map((project) => (
            <Motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-3xl bg-white/50 shadow-md overflow-hidden group transition-all duration-300"
            >
              <div className="bg-[#fcfaf8] py-6 px-4">
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt="Project"
                    className="w-full object-cover"
                  />
                </div>

                {/* Overlay content */}
                <div className="absolute bottom-6 left-4 w-[90%] bg-black/50 backdrop-blur-md text-white opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-[400ms] py-4">
                  <div className="flex gap-2 items-center justify-center">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="border border-white rounded-full px-3 py-2 text-xs font-bold font-serif"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Floating button */}
                <button
                  className="absolute top-20 left-1/2 -translate-x-1/2 w-11 h-11 bg-black text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300"
                  onClick={() => setSelectedProject(project)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    viewBox="0 0 12 12"
                    fill="none"
                  >
                    <path
                      d="M12 0.514515V9.43267C12 9.56914 11.9459 9.7 11.8494 9.79647C11.7528 9.89294 11.6219 9.94721 11.4856 9.94721C11.3491 9.94721 11.2183 9.89294 11.1217 9.79647C11.0252 9.7 10.971 9.56914 10.971 9.43267V1.75791L0.869497 11.8508C0.77398 11.9463 0.644425 12 0.509332 12C0.374252 12 0.244696 11.9463 0.149179 11.8508C0.0536616 11.7554 0 11.6258 0 11.4907C0 11.3556 0.0536616 11.2261 0.149179 11.1306L10.2421 1.02903H2.56737C2.43092 1.02903 2.30005 0.974819 2.20356 0.878326C2.10707 0.781834 2.05286 0.650973 2.05286 0.514515C2.05286 0.378056 2.10707 0.247196 2.20356 0.150703C2.30005 0.0542101 2.43092 1.21958e-05 2.56737 0H11.4856C11.6219 1.21958e-05 11.7528 0.0542101 11.8494 0.150703C11.9459 0.247196 12 0.378056 12 0.514515Z"
                      fill="white"
                    />
                  </svg>
                </button>
              </div>
            </Motion.div>
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/70 z-[9999] flex items-center justify-center"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-white rounded-lg p-4 max-w-sm md:max-w-lg w-full relative animate-fadeIn"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-4 -right-4 bg-black text-white rounded-full w-8 h-8 flex items-center justify-center text-lg"
                onClick={() => setSelectedProject(null)}
              >
                <RxCross2 />
              </button>
              <img
                src={selectedProject.modalImg}
                alt="Full Project"
                className="w-full rounded mb-4"
              />
              <h2 className="text-3xl font-medium mb-3">Product Design</h2>
              <p className="text-[#929fae] font-medium text-base">
                {selectedProject.modalDesc}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
