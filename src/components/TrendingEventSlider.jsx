import React from "react";

const TrendingEventsSlider = () => {
  // Dữ liệu mẫu cho các sự kiện trending
  const trendingEvents = [
    { id: 1, name: "Tranding Events", iconSrc: "/images/trending-icon-1.png" },
    { id: 2, name: "Tranding Events", iconSrc: "/images/trending-icon-2.png" },
    { id: 3, name: "Tranding Events", iconSrc: "/images/trending-icon-3.png" },
    { id: 4, name: "Tranding Events", iconSrc: "/images/trending-icon-4.png" },
    { id: 5, name: "Tranding Events", iconSrc: "/images/trending-icon-5.png" },
    { id: 6, name: "Tranding Events", iconSrc: "/images/trending-icon-6.png" },
    // Thêm nhiều sự kiện hơn nếu cần
  ];

  return (
    <div className="relative w-full overflow-hidden py-10">
      <div className="transform -rotate-2 bg-gradient-to-r from-[#341B1B] to-[#2C1A2C]">
        <div className="flex gap-10 px-20 py-5 overflow-x-auto whitespace-nowrap">
          {trendingEvents.map((event) => (
            <div key={event.id} className="flex items-center gap-4">
              <img
                src={event.image}
                alt={event.label}
                className="w-16 h-16 rounded-full object-cover border-2 border-white"
              />
              <p className="text-white font-semibold text-xl">{event.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingEventsSlider;
