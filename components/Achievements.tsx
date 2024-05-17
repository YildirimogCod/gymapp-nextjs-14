"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";
import { FaBriefcase, FaClock, FaTrophy } from "react-icons/fa";
import { ImUsers } from "react-icons/im";

const stats = [
  { number: 19, icon: FaBriefcase, text: "training course" },
  { number: 879, icon: FaClock, text: "working hours" },
  { number: 150, icon: ImUsers, text: "happy customers" },
  { number: 9, icon: FaTrophy, text: "international awards" },
];
const Achievements = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const statsContainerVariant = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
        delay: 0.5,
        ease: "linear",
      },
    },
  };

  const statsItem = {
    hidden: { y: 20, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.6, 0.3, 0.8],
      },
    },
  };
  return (
    <section>
      <div className="container mx-auto">
        <motion.div
          variants={statsContainerVariant}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 w-full"
        >
          {stats.map((stats, i) => {
            return (
              <div key={i}>
                <motion.div
                  variants={statsItem}
                  className="border border-accent/90 w-[140px] h-[140px] mx-auto rounded-full p-1 mb-6"
                >
                  <div
                    ref={ref}
                    className="border border-accent/30 w-full h-full flex items-center justify-center text-5xl rounded-full"
                  >
                    {isInView && (
                      <CountUp start={0} end={stats.number} duration={6} />
                    )}
                  </div>
                </motion.div>
                <div className="flex flex-col justify-center items-center text-center">
                  <stats.icon className="text-3xl mb-2" />
                  <h4 className="text-center">{stats.text}</h4>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
