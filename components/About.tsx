"use client";
import React from "react";
import { FaDumbbell, FaUsers } from "react-icons/fa";
import { IoIosPricetags } from "react-icons/io";
import Achievements from "./Achievements";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variant";
const featured = [
  {
    icon: <FaUsers />,
    title: "award-winning trainers",
    subtitile:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Naiores totam dispatched et accus tempus null",
  },
  {
    icon: <IoIosPricetags />,
    title: "excellent prices",
    subtitile:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Naiores totam dispatched et accus tempus null",
  },
  {
    icon: <FaDumbbell />,
    title: "modern equipment",
    subtitile:
      "Lorem ipsum dolor sit amet consectetur adipiscing elit. Naiores totam dispatched et accus tempus null",
  },
];
const About = () => {
  return (
    <section className="pt-8 pb-14 lg:pt-16 lg:pb-28" id="about">
      <div className="container mx-auto">
        <div className="flex flex-col gap-2 items-center mb-8">
          <motion.h2
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="h2 text-center"
          >
            ABOUT US
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.2 }}
            className="max-w-[600px] mx-auto"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur
            eveniet, architecto provident minus vero sint?
          </motion.p>
        </div>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16"
        >
          {featured.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center gap-4 border p-10"
            >
              <div className="text-4xl bg-primary-300 text-white w-[80px] h-[80px] flex justify-center rounded-full items-center">
                {item.icon}
              </div>
              <div className="flex flex-col justify-center gap-2 text-center">
                <h4 className="h4 text-accent r mb-2">{item.title}</h4>
                <p>{item.subtitile}</p>
              </div>
            </div>
          ))}
        </motion.div>
        <Achievements />
      </div>
    </section>
  );
};

export default About;
