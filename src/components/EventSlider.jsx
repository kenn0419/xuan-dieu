import { Swiper, SwiperSlide } from "swiper/react";
import image1 from "../assets/images/1c628630545671a69c8155284132f498.jpg";
import image2 from "../assets/images/1c628630545671a69c8155284132f498.jpg";
import image3 from "../assets/images/1c628630545671a69c8155284132f498.jpg";
import image4 from "../assets/images/1c628630545671a69c8155284132f498.jpg";
import image5 from "../assets/images/1c628630545671a69c8155284132f498.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Autoplay,
} from "swiper/modules";

const EventSlider = () => {
  // Dữ liệu mẫu cho các slide
  const slides = [
    { id: 1, img: image1, alt: "Virtual Event 1" },
    { id: 2, img: image2, alt: "Virtual Event 2" },
    { id: 3, img: image3, alt: "Virtual Event 3" },
    { id: 4, img: image4, alt: "Virtual Event 4" },
    { id: 5, img: image5, alt: "Virtual Event 5" },
  ];

  return (
    <section className="py-20 px-6 relative">
      <div className="swiper-button-prev-custom cursor-pointer w-10 h-10 bg-[#87A0BE] rounded-full flex items-center justify-center shadow absolute top-1/2 left-5">
        <svg
          fill="#000000"
          width="25px"
          height="25px"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
          id="arrow"
        >
          <path d="M6.70711 2.29289C6.31658 1.90237 5.68342 1.90237 5.29289 2.29289L0.792893 6.79289C0.40237 7.18342 0.40237 7.81658 0.792893 8.20711L5.29289 12.7071C5.68342 13.0976 6.31658 13.0976 6.70711 12.7071C7.09763 12.3166 7.09763 11.6834 6.70711 11.2929L4 8.5H13.5C14.0523 8.5 14.5 8.05228 14.5 7.5C14.5 6.94772 14.0523 6.5 13.5 6.5H4L6.70711 3.70711C7.09763 3.31658 7.09763 2.68342 6.70711 2.29289Z" />
        </svg>
      </div>
      <div className="w-7xl mx-auto">
        <Swiper
          id="event_slider"
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={{
            prevEl: ".swiper-button-prev-custom",
            nextEl: ".swiper-button-next-custom",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="mySwiper h-[450px]"
          loop={true}
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              className="w-[300px] md:w-[400px] lg:w-[500px]"
            >
              <div className="relative">
                <div className="frame-left"></div>
                <img
                  src={slide.img}
                  alt={slide.alt}
                  className="w-full h-full object-cover border-[10px] border-[#291E2B]"
                />
                <div className="frame-right"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="swiper-button-next-custom cursor-pointer w-10 h-10 bg-[#87A0BE] rounded-full flex items-center justify-center shadow absolute top-1/2 -right-6 z-50">
        <svg
          fill="#000000"
          width="25px"
          height="25px"
          viewBox="0 0 15 15"
          xmlns="http://www.w3.org/2000/svg"
          id="arrow"
        >
          <path d="M8.29289 2.29289C8.68342 1.90237 9.31658 1.90237 9.70711 2.29289L14.2071 6.79289C14.5976 7.18342 14.5976 7.81658 14.2071 8.20711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11 8.5H1.5C0.947715 8.5 0.5 8.05228 0.5 7.5C0.5 6.94772 0.947715 6.5 1.5 6.5H11L8.29289 3.70711C7.90237 3.31658 7.90237 2.68342 8.29289 2.29289Z" />
        </svg>
      </div>
    </section>
  );
};

export default EventSlider;
