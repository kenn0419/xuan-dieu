import EventSlider from "./EventSlider";
import backgroundComponent from "../assets/images/bg-component.jpg";

const ExploreEventsSection = () => {
  return (
    <section className="relative" id="trending">
      <div className="xl:w-7xl mx-auto py-20 px-3">
        <h2 className="lg:text-6xl text-4xl font-medium font-montserrat text-white text-center mb-12 font-hemi-head uppercase">
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
