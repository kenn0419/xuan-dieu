import { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import image1 from "../assets/images/member_image_1.jpg";
import image2 from "../assets/images/member_image_2.jpg";
import image3 from "../assets/images/member_image_3.jpg";
import image4 from "../assets/images/member_image_4.jpg";

const teamMembers = [
  {
    id: 1,
    image: image1,
    name: "Dianne Russell",
    position: "Co-Founder & CEO",
  },
  { id: 2, image: image2, name: "Mike Fisher", position: "Co-Founder & CFO" },
  { id: 3, image: image3, name: "Wade Warren", position: "Co-Founder & CTO" },
  { id: 4, image: image4, name: "Esther Howard", position: "Vice President" },
];

const TeamPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current?.params?.navigation &&
      typeof swiperRef.current.navigation.init === "function"
    ) {
      swiperRef.current.params.navigation.prevEl = ".swiper-button-prev-custom";
      swiperRef.current.params.navigation.nextEl = ".swiper-button-next-custom";
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="bg-gradient-to-r from-[#0f0f2d] via-[#1b1530] to-[#0f0f2d] py-30">
      <div className="lg:w-[1200px] lg:mx-auto w-full">
        <h2 className="my-4">Our team</h2>
        <h2 className="flex flex-col text-5xl gap-3 mb-10">
          <span>Meet our Team</span>
          <span className="text-primary">Passionate.Proactive.Expert</span>
        </h2>
        <div className="flex items-center justify-between">
          <p className="text-lg w-xl">
            We lead with care our core value and a shared passion for connecting
            the world
          </p>
          <div className="flex gap-5">
            <div className="swiper-button-prev-custom cursor-pointer w-10 h-10 bg-[#87A0BE] rounded-full flex items-center justify-center shadow">
              <svg
                fill="#000000"
                width="25px"
                height="25px"
                viewBox="0 0 15 15"
              >
                <path d="M6.70711 2.29289C6.31658 1.90237 5.68342 1.90237 5.29289 2.29289L0.792893 6.79289C0.40237 7.18342 0.40237 7.81658 0.792893 8.20711L5.29289 12.7071C5.68342 13.0976 6.31658 13.0976 6.70711 12.7071C7.09763 12.3166 7.09763 11.6834 6.70711 11.2929L4 8.5H13.5C14.0523 8.5 14.5 8.05228 14.5 7.5C14.5 6.94772 14.0523 6.5 13.5 6.5H4L6.70711 3.70711C7.09763 3.31658 7.09763 2.68342 6.70711 2.29289Z" />
              </svg>
            </div>
            <div className="swiper-button-next-custom cursor-pointer w-10 h-10 bg-[#87A0BE] rounded-full flex items-center justify-center shadow">
              <svg
                fill="#000000"
                width="25px"
                height="25px"
                viewBox="0 0 15 15"
              >
                <path d="M8.29289 2.29289C8.68342 1.90237 9.31658 1.90237 9.70711 2.29289L14.2071 6.79289C14.5976 7.18342 14.5976 7.81658 14.2071 8.20711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11 8.5H1.5C0.947715 8.5 0.5 8.05228 0.5 7.5C0.5 6.94772 0.947715 6.5 1.5 6.5H11L8.29289 3.70711C7.90237 3.31658 7.90237 2.68342 8.29289 2.29289Z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-10 lg:mx-auto">
          <Swiper
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
              setActiveIndex(swiper.realIndex);
            }}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            className="!h-[450px] !flex !items-center"
            modules={[Navigation, Autoplay, Pagination, EffectCoverflow]}
          >
            {teamMembers.map((member, index) => {
              const isActive = index === activeIndex;
              const isPrev =
                index ===
                (activeIndex - 1 + teamMembers.length) % teamMembers.length;
              const isNext = index === (activeIndex + 1) % teamMembers.length;

              let slideClass = "transition-all duration-500";

              if (isActive) {
                slideClass += " z-30 scale-110 -translate-y-4 mt-10";
              } else if (isPrev || isNext) {
                slideClass += " z-20 scale-95 translate-y-2";
              } else {
                slideClass += " z-10 scale-90 translate-y-6 opacity-60";
              }

              return (
                <SwiperSlide
                  key={member.id}
                  className="!flex !justify-center !items-center"
                >
                  <div
                    className={`${slideClass} overflow-visible w-[350px] relative flex items-center`}
                  >
                    <div className="frame-left"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full object-cover"
                    />
                    <div className="frame-right"></div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
