import EventSlider from "./EventSlider";

const ExploreEventsSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-6xl font-medium font-montserrat text-white text-center mb-12">
          Explore our Virtual Events
        </h2>
        <EventSlider />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[150px] border border-white/20 rounded-full blur-[1px]"></div>
      </div>
    </section>
  );
};

export default ExploreEventsSection;
