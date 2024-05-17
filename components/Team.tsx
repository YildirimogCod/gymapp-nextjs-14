import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import CustomButton from "./CustomButton";

const teams = [
  {
    name: "David Williams",
    job: "Body builder coach",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, obcaecati.",
    image: "/img/trainers/david.jpg",
    social: [
      {
        icon: FaFacebook,
        href: "http://www.facebook.com/",
      },
      {
        icon: FaTwitter,
        href: "http://www.twitter.com/",
      },
      {
        icon: FaInstagram,
        href: "http://www.instagram.com/",
      },
    ],
  },
  {
    name: "Rosy Rivera",
    job: "Body builder coach",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, obcaecati.",
    image: "/img/trainers/rosy.jpg",
    social: [
      {
        icon: FaFacebook,
        href: "http://www.facebook.com/",
      },
      {
        icon: FaTwitter,
        href: "http://www.twitter.com/",
      },
      {
        icon: FaInstagram,
        href: "http://www.instagram.com/",
      },
    ],
  },
  {
    name: "Matt Stone",
    job: "Body builder coach",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, obcaecati.",
    image: "/img/trainers/matt.jpg",
    social: [
      {
        icon: FaFacebook,
        href: "http://www.facebook.com/",
      },
      {
        icon: FaTwitter,
        href: "http://www.twitter.com/",
      },
      {
        icon: FaInstagram,
        href: "http://www.instagram.com/",
      },
    ],
  },
  {
    name: "Sofia Lauran",
    job: "Body builder coach",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, obcaecati.",
    image: "/img/trainers/sofia.jpg",
    social: [
      {
        icon: FaFacebook,
        href: "http://www.facebook.com/",
      },
      {
        icon: FaTwitter,
        href: "http://www.twitter.com/",
      },
      {
        icon: FaInstagram,
        href: "http://www.instagram.com/",
      },
    ],
  },
];
const Team = () => {
  return (
    <section className="py-12 lg:h-[110vh]" id="team">
      <div className="container mx-auto h-full flex flex-col items-center justify-center">
        <h2 className="h2 mb-12 text-center">Our Trainers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-12">
          {teams.map((item, i) => {
            return (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="relative w-[240px] h-[260px]  mx-auto mb-4">
                  <Image src={item.image} fill alt="trainer" />
                </div>
                <h4 className="h4 mb-2">{item.name}</h4>
                <p className="uppercase text-xs tracking-[3px] mb-2">
                  {item.job}
                </p>
                <p className="mb-6">{item.description}</p>
                <div className="flex gap-12 justify-center">
                  {item.social.map((social, i) => {
                    return (
                      <Link
                        key={i}
                        href={social.href}
                        className="hover:text-accent transition-all"
                      >
                        <social.icon className="text-lg" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <CustomButton text="See All Trainers" containerStyles="px-6 py-2" />
      </div>
    </section>
  );
};

export default Team;
