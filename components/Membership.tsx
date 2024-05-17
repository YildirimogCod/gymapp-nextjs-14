import React from "react";
import MembershipSlider from "./MembershipSlider";

const Membership = () => {
  return (
    <section
      className="py-2 lg:py-0 lg:h-[115vh] bg-membership bg-cover bg-center relative before:w-full before:h-full before:bg-black/50 before:absolute before:top-0 before:z-10"
      id="prices"
    >
      <div
        className="container mx-auto px-0 text-white h-full flex flex-col xl:
      pt-24 relative z-20"
      >
        <h2 className="h2 text-white text-center mb-8 ">Membership</h2>
        <div>
          <MembershipSlider />
        </div>
      </div>
    </section>
  );
};

export default Membership;
