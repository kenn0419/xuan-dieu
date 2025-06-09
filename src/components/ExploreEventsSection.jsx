const ExploreEventsSection = () => {
  const events = [
    { id: 1, title: "Trending Events", image: "path/to/event1.webp" },
    { id: 2, title: "Trending Events", image: "path/to/event2.webp" },
    { id: 3, title: "Trending Events", image: "path/to/event3.webp" },
    { id: 4, title: "Trending Events", image: "path/to/event4.webp" },
    { id: 5, title: "Trending Events", image: "path/to/event5.webp" },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-white text-center mb-12">
          Explore our <span className="text-orange-500">Virtual Events</span>
        </h2>

        {/* Event Categories - adjust as needed */}
        <div className="flex justify-center space-x-8 mb-12">
          <button className="text-white text-lg font-semibold border-b-2 border-orange-500 pb-2">
            Trending Events
          </button>
          <button className="text-gray-400 text-lg hover:text-white pb-2">
            Trending Events
          </button>
          <button className="text-gray-400 text-lg hover:text-white pb-2">
            Trending Events
          </button>
          <button className="text-gray-400 text-lg hover:text-white pb-2">
            Trending Events
          </button>
        </div>

        {/* Event Carousel */}
        <div className="relative">
          <div className="flex overflow-x-scroll scrollbar-hide space-x-6 p-4">
            {events.map((event) => (
              <div
                key={event.id}
                className="flex-shrink-0 w-80 bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={event.image} // Replace with actual event images
                  alt={event.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-white">
                    {event.title}
                  </h3>
                  {/* Add more event details here if needed */}
                </div>
              </div>
            ))}
          </div>
          {/* Navigation Arrows (Optional: implement carousel logic for these) */}
          <button className="absolute top-1/2 left-0 -translate-y-1/2 bg-gray-700 bg-opacity-70 rounded-full p-3 text-white z-10">
            &lt;
          </button>
          <button className="absolute top-1/2 right-0 -translate-y-1/2 bg-gray-700 bg-opacity-70 rounded-full p-3 text-white z-10">
            &gt;
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExploreEventsSection;
