import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <section
      className="h-[90vh] lg:h-[722px] bg-hero bg-cover bg-center bg-no-repeat"
      id="home"
    >
      {/* Slider */}
      <div className="container mx-auto h-full">
        <HeroSlider />
      </div>
    </section>
  );
};

export default Hero;
