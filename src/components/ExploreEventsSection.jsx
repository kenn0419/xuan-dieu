import EventSlider from "./EventSlider";
import backgroundComponent from "../assets/images/bg-component.jpg";
import useInView from "../hook/useInView";

const ExploreEventsSection = () => {
  const [headingRef, headingInView] = useInView({ threshold: 0.5 }, true);

  return (
    <section className="relative" id="trending">
      <div className="xl:w-7xl mx-auto pt-20 px-3">
        <h2
          ref={headingRef}
          className={`relative z-1 xl:text-6xl text-5xl font-medium font-montserrat text-white 
            text-center mb-12 font-hemi-head uppercase transition-all duration-1000 ${
              headingInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
        >
          Lĩnh Vực Phát Triển
        </h2>
        <EventSlider />
        <img
          src={backgroundComponent}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
      </div>
    </section>
  );
};

export default ExploreEventsSection;
