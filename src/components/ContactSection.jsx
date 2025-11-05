import React from 'react';
import SectionHeading from '../reUsable/SectionHeading';
import { FaDribbble, FaInstagram } from 'react-icons/fa';
import { LiaBehanceSquare } from 'react-icons/lia';
import Buttons from '../reUsable/Buttons';
import { motion as Motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section id="contact" className="py-6 mb-16">
      <div className="w-11/12 md:w-[90%] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Left Side */}
          <Motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              tag="Contact"
              title="Let's Get in Touch"
              className="w-9/12 sm:w-full mb-4"
            />
            <Motion.p
              className="text-xl text-[#909dac] mb-11"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
            >
              Have a question, feedback, or interested in collaborating? We'd love to hear from you!
            </Motion.p>

            <Motion.div
              className="flex gap-4 flex-wrap"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {/* Medium */}
              <a href="#" className="flex items-center gap-2 px-5 py-2 rounded-full border border-black/50 text-black/50 font-bold text-sm  transition-all">
                <FaInstagram size={20} className='stroke-[6]' />
                <span>Medium</span>
              </a>
              {/* Dribble */}
              <a href="#" className="flex items-center gap-2 px-5 py-2 rounded-full border border-black/50 text-black/50 font-bold text-sm  transition-all">
                <FaDribbble size={20} className='stroke-[6]' />
                <span>Dribble</span>
              </a>
              {/* Behance */}
              <a href="#" className="flex items-center gap-2 px-5 py-2 rounded-full border border-black/50 text-black/50 font-bold text-sm  transition-all">
                <LiaBehanceSquare size={24} />
                <span>Behance</span>
              </a>
            </Motion.div>
          </Motion.div>

          {/* Right Side */}
          <Motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-3xl border border-gray-200 p-6 shadow-sm">
              <form className="space-y-5">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full border-b border-gray-200 focus:border-black outline-none bg-transparent py-3 px-2 text-sm text-gray-700"
                />
                <div className="flex flex-col md:flex-row gap-5">
                  <input
                    type="text"
                    name="phone"
                    placeholder="Phone*"
                    required
                    className="w-full border-b border-gray-200 focus:border-black outline-none bg-transparent py-3 px-2 text-sm text-gray-700"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email*"
                    required
                    className="w-full border-b border-gray-200 focus:border-black outline-none bg-transparent py-3 px-2 text-sm text-gray-700"
                  />
                </div>
                <textarea
                  name="message"
                  rows="2"
                  placeholder="Message*"
                  required
                  className="w-full border-b border-gray-200 focus:border-black outline-none bg-transparent py-3 px-2 text-sm text-gray-700 resize-none"
                ></textarea>
                <Buttons
                  text="Send a Message"
                  className="lg:mr-auto  md:my-0 my-7"
                />
              </form>
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
