import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

const Classes = () => {
  const classes = [
    {
      name: "bodybuilding",
      img: "/img/classes/bodybuilding.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, deleniti.",
    },
    {
      name: "cardio",
      img: "/img/classes/cardio.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, deleniti.",
    },
    {
      name: "fitness",
      img: "/img/classes/fitness.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, deleniti.",
    },
    {
      name: "crossfit",
      img: "/img/classes/crossfit.jpg",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, deleniti.",
    },
  ];
  return (
    <section id="class">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {classes.map((item, i) => {
          return (
            <div
              key={i}
              className="relative w-full h-[300px] lg:h-[485px] flex flex-col justify-center items-center"
            >
              {/* overlay */}
              <div className="w-full h-full bg-black/50 absolute top-0 z-10"></div>
              <Image src={item.img} fill className="object-cover" alt="image" />
              <div className="z-30 max-w-[380px] text-center flex flex-col justify-center items-center gap-3">
                <h3 className="h3 text-accent">{item.name}</h3>
                <p className="text-white text-center">{item.description}</p>
                <div>
                  <CustomButton
                    containerStyles="w-[164px] h-[46px]"
                    text="Read More"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Classes;
