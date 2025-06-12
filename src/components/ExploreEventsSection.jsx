import EventSlider from "./EventSlider";

const ExploreEventsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-6xl font-medium font-montserrat text-white text-center mb-12">
          Explore our Virtual Events
        </h2>
        <EventSlider />
        <svg
          width="100%"
          height="160px"
          viewBox="0 0 700 160"
          className="absolute bottom-0"
        >
          <ellipse
            cx="350"
            cy="80"
            rx="350"
            ry="30"
            stroke="#888"
            fill="none"
            strokeWidth="1"
          />
        </svg>
      </div>
    </section>
  );
};

export default ExploreEventsSection;
