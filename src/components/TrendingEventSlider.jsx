import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";

import { Autoplay, FreeMode } from "swiper/modules";
import image1 from "../assets/images/XD.jpg";
import image2 from "../assets/images/XUNI-LogoGuideline_page-0012.jpg";
import image3 from "../assets/images/Logo-Ong-Kinh-01.jpg";
import image4 from "../assets/images/Gamelade_sign.jpg";
import image5 from "../assets/images/982742b6edc65a9803d7.jpg";
const TrendingEventsSlider = () => {
  const trendingEvents = [
    // { id: 1, iconSrc: image2, title: "             " },
    { id: 2, iconSrc: image1, title: "xuandieu.com.vn", link: "/" },
    {
      id: 3,
      iconSrc: image3,
      title: "ongkinh.vn",
      link: "https://ongkinh.vn/",
    },
    {
      id: 4,
      iconSrc: image4,
      title: "gamelade.vn",
      link: "https://gamelade.vn/",
    },
    {
      id: 5,
      iconSrc: image5,
      title: "techlade.vn",
      link: "https://techlade.vn/",
    },
    // { id: 6, iconSrc: image2, title: "             " },
    { id: 7, iconSrc: image1, title: "xuandieu.com.vn", link: "/" },
    {
      id: 8,
      iconSrc: image3,
      title: "ongkinh.vn",
      link: "https://ongkinh.vn/",
    },
    {
      id: 9,
      iconSrc: image4,
      title: "gamelade.vn",
      link: "https://gamelade.vn/",
    },
    {
      id: 10,
      iconSrc: image5,
      title: "techlade.vn",
      link: "https://techlade.vn/",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden py-10">
      <div className="transform -rotate-2 bg-gradient-to-br from-[#901118] to-[#521F49]">
        <div className="flex justify-center relative before:absolute after:absolute before:left-0 after:right-0 before:w-40 after:w-40 before:z-10 after:z-10 before:top-0 after:top-0 before:h-full after:h-full before:bg-gradient-to-r before:from-[#31191D] before:to-transparent after:bg-gradient-to-l after:from-[#31191D] after:to-transparent">
          <div className="w-full">
            <Swiper
              modules={[Autoplay, FreeMode]}
              slidesPerView="auto"
              spaceBetween={50}
              freeMode={true}
              loop={true}
              autoplay={{
                delay: 1,
                disableOnInteraction: false,
                pauseOnMouseEnter: false,
              }}
              speed={3000}
              grabCursor={false}
              allowTouchMove={false}
              className="!py-5"
            >
              {trendingEvents.map((event) => (
                <SwiperSlide
                  key={event.id}
                  className="!flex !items-center !gap-2 !w-auto !cursor-pointer"
                  onClick={() => (window.location.href = event.link)}
                >
                  <img
                    src={event.iconSrc}
                    alt="Trending Image"
                    className="w-15 h-15 rounded-full object-cover"
                  />
                  <p className="text-white font-semibold text-xl whitespace-nowrap">
                    {event.title}
                  </p>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingEventsSlider;
