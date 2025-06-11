import React from "react";
import image1 from "../assets/images/1c628630545671a69c8155284132f498.jpg";
import image2 from "../assets/images/1c628630545671a69c8155284132f498.jpg";
import image3 from "../assets/images/1c628630545671a69c8155284132f498.jpg";
import image4 from "../assets/images/1c628630545671a69c8155284132f498.jpg";
import image5 from "../assets/images/1c628630545671a69c8155284132f498.jpg";
const TrendingEventsSlider = () => {
  // Dữ liệu mẫu cho các sự kiện trending
  const trendingEvents = [
    { id: 1, iconSrc: image1 },
    { id: 2, iconSrc: image2 },
    { id: 3, iconSrc: image3 },
    { id: 4, iconSrc: image4 },
    { id: 5, iconSrc: image5 },
  ];

  return (
    <div className="relative w-full overflow-hidden py-10">
      <div className="transform -rotate-2 bg-gradient-to-r from-[#31191D] to-[#4F1E18]">
        <div className="flex gap-10 px-20 py-5 overflow-x-auto whitespace-nowrap justify-between">
          {trendingEvents.map((event) => (
            <div key={event.id} className="flex items-center gap-4">
              <img
                src={event.iconSrc}
                alt="Trending Image"
                className="w-16 h-16 rounded-full object-cover"
              />
              <p className="text-white font-semibold text-xl">Trending Event</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingEventsSlider;
