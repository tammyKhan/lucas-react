import React from "react";
import { motion as Motion } from "framer-motion";
import SectionHeading from "../reUsable/SectionHeading";
import skill1 from "../assets/img/skill/1.svg";
import skill2 from "../assets/img/skill/2.svg";
import skill3 from "../assets/img/skill/3.svg";
import skill4 from "../assets/img/skill/4.svg";
import skill5 from "../assets/img/skill/5.svg";
import skill6 from "../assets/img/skill/6.svg";

const skills = [
  { id: 1, name: "Figma", image: skill1 },
  { id: 2, name: "Xd", image: skill2 },
  { id: 3, name: "Af effects", image: skill3 },
  { id: 4, name: "Photoshop", image: skill4 },
  { id: 5, name: "HTML5", image: skill5 },
  { id: 6, name: "CSS3", image: skill6 },
];

const SkillSection = () => {
  return (
    <section id="skills" className="py-16 md:py-24 my-6">
      <div className="w-11/12 md:w-[90%] mx-auto">
        <SectionHeading
          tag="Skills"
          title="Exploring My Diverse Skills Set"
          className="w-9/12 sm:w-6/12 mb-11"
        />

        <Motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white text-center rounded-[22px] p-5 shadow-[0px_85px_181px_rgba(21,21,21,0.05)]"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="mx-auto mb-2 h-12"
              />
              <div className="text-[#686665] text-xl font-bold">{skill.name}</div>
            </div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
};

export default SkillSection;
