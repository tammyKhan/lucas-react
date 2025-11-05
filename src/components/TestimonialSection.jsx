import React from "react";
import Slider from "react-slick";
import { motion as Motion } from "framer-motion";
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import user1 from "../assets/img/testimonial/1.svg";
import user2 from "../assets/img/testimonial/2.svg";
import user3 from "../assets/img/testimonial/3.svg";
import user4 from "../assets/img/testimonial/4.svg";
import SectionHeading from "../reUsable/SectionHeading";

const testimonials = [
  {
    id: 1,
    name: "Emma White",
    location: "Los Angeles, CA",
    image: user1,
    title: "Pure Plates, Happy Hearts",
    rating: 4,
    review: "It is a long established fact that a reader will be distracted by the readable content",
  },
  {
    id: 2,
    name: "Emma White",
    location: "Los Angeles, CA",
    image: user2,
    title: "Pure Plates, Happy Hearts",
    rating: 4,
    review: "It is a long established fact that a reader will be distracted by the readable content",
  },
  {
    id: 3,
    name: "Emma White",
    location: "Los Angeles, CA",
    image: user3,
    title: "Pure Plates, Happy Hearts",
    rating: 4,
    review: "It is a long established fact that a reader will be distracted by the readable content",
  },
  {
    id: 4,
    name: "Emma White",
    location: "Los Angeles, CA",
    image: user4,
    title: "Pure Plates, Happy Hearts",
    rating: 4,
    review: "It is a long established fact that a reader will be distracted by the readable content",
  },
];

const CustomPrevArrow = (props) => (
  <div
    className="absolute -top-16 right-16 z-10 cursor-pointer border border-gray-500 text-gray-500 p-2 rounded hover:bg-black hover:text-white hover:border-primary transition-all"
    onClick={props.onClick}
  >
    <FaArrowLeft />
  </div>
);

const CustomNextArrow = (props) => (
  <div
    className="absolute -top-16 right-4 z-10 cursor-pointer border border-gray-500 text-gray-500 p-2 rounded hover:bg-black hover:text-white hover:border-primary transition-all"
    onClick={props.onClick}
  >
    <FaArrowRight />
  </div>
);

const TestimonialSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section id="review" className="mb-20 mt-28 relative">
      <div className="w-11/12 md:w-[90%] mx-auto px-4">
        <SectionHeading
          tag="Review"
          title="What My Clients Say"
          className="w-9/12 sm:w-full mb-12"
        />

        <Motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ delay: 1, duration: 0.7 }}
  viewport={{ once: true }}
>
  <Slider {...settings} className="relative">
    {testimonials.map((item) => (
      <div key={item.id} className="px-3">
        <Motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="border border-gray-200 rounded-lg bg-white p-6 shadow-sm"
        >
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex items-center text-orange-400">
                      {[...Array(5)].map((_, i) =>
                        i < item.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                      )}
                      <span className="ml-3 text-white bg-[#686665] px-2 py-0.5 rounded text-sm">
                        {item.rating}/5
                      </span>
                    </div>
                    <div className="w-12 h-12">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="rounded-full object-cover"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg font-medium mb-3">{item.title}</h3>
                  <p className="text-[#909dac] mb-8">{item.review}</p>
                  <p className="text-base text-[#909dac]">
                    <span className="font-bold">-{item.name},</span> {item.location}
                  </p>
                </Motion.div>
              </div>
            ))}
          </Slider>
        </Motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;
