"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const brandImages = [
  { src: "/img/brands/brand-1.png", href: "" },
  { src: "/img/brands/brand-2.png", href: "" },
  { src: "/img/brands/brand-3.png", href: "" },
  { src: "/img/brands/brand-4.png", href: "" },
  { src: "/img/brands/brand-5.png", href: "" },
];
const brandsVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,

    transition: {
      duration: 0.4,
      ease: "linear",
    },
  },
};
const brandItem = {
  hidden: {
    hidden: { opacity: 0, y: 20 },
  },
  show: {
    opacity: 1,

    transition: {
      duration: 0.5,
      ease: [0.25, 0.6, 0.3, 0.8],
    },
  },
};

const Brands = () => {
  return (
    <section className=" bg-white" id="contact">
      <div className="container mx-auto">
        <motion.div
          variants={brandsVariant}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className=" grid grid-cols-2 lg:grid-cols-5 py-8"
        >
          {brandImages.map((item, i) => {
            return (
              <Link key={i} href={item.href} className="group">
                <Image
                  src={item.src}
                  width={204}
                  alt="brands"
                  height={106}
                  className="opacity-50 group-hover:opacity-100 transition-all mx-auto"
                />
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Brands;
