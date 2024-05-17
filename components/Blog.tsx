"use client";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "./CustomButton";
import SwiperNavButtons from "./SwiperNavButtons";

const blogData = [
  {
    img: "/img/blog/post1.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/img/blog/post2.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/img/blog/post3.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/img/blog/post4.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
  {
    img: "/img/blog/post1.jpg",
    date: "March 10, 2024",
    title: "Maintain a perfect structure after workout",
    href: "",
  },
];
const Blog = () => {
  return (
    <section className="bg-primary-300 text-white py-24" id="blog">
      <div className="container mx-auto">
        <h2 className="text-center h2 mb-5">BLOGS</h2>
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 15,
              },
              1024: {
                slidesPerView: 3,
              },
              1400: {
                slidesPerView: 4,
              },
            }}
            className="h-[420px] md:max-w-[660px] lg:max-w-none mb-8"
          >
            {blogData.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <div className="flex flex-col justify-start h-full max-w-[320px] mx-auto">
                    <Image
                      src={item.img}
                      alt="img"
                      width={320}
                      height={266}
                      className="mb-6"
                    />
                    <div className="flex flex-col items-center">
                      <p className="max-w-[380px] uppercase text-[12px] text-center  tracking-[3px] mb-1">
                        {item.date}
                      </p>
                      <Link
                        className="hover:text-accent transition-all duration-300"
                        href={item.href}
                      >
                        <h5 className="h5 text-center">{item.title}</h5>
                      </Link>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <SwiperNavButtons
              containerStyles="absolute left-0 right-0 bottom-[16rem] w-full max-w-[370px] sm:max-w-[620px] md:max-w-[960px] xl:max-w-[1320px] mx-auto z-50 flex justify-between gap-1"
              btnStyles="bg-accent text-white w-[56px] h-[56px] flex justify-center items-center hover:bg-accent transition-all duration-300"
              iconStyles="text-2xl"
            />
          </Swiper>
        </div>
        <div>
          <CustomButton
            text="View All"
            containerStyles="block w-[196px] h-[62px] mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Blog;
