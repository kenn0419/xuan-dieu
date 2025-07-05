import { useRef, useState } from "react";
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

import xuanChinhProfile from "../assets/images/team-profile-xuan_chinh.jpg";
import dieuHuyenProfile from "../assets/images/team-profile-dieu_huyen.jpg";
import nguyetProfile from "../assets/images/team-profile-nguyet.jpg";
import longProfile from "../assets/images/team-profile-long.jpg";
import haDiProfile from "../assets/images/team-profile-ha_di.jpg";
import baoProfile from "../assets/images/team-profile-bao.jpg";
import vyProfile from "../assets/images/team-profile-vy.jpg";
import nguyenProfile from "../assets/images/team-profile-nguyet.jpg";
import hauProfile from "../assets/images/team-profile-hau.jpg";
import huyTruongProfile from "../assets/images/team-profile-huy_truong.jpg";
import haPhuongProfile from "../assets/images/team-profile-ha_phuong.jpg";
import backgroundTeam from "../assets/images/bg-team.jpg";

const teamMembers = [
  { id: 1, image: xuanChinhProfile },
  { id: 2, image: dieuHuyenProfile },
  { id: 3, image: nguyetProfile },
  { id: 4, image: longProfile },
  { id: 5, image: haDiProfile },
  { id: 6, image: baoProfile },
  { id: 7, image: vyProfile },
  { id: 8, image: nguyenProfile },
  { id: 9, image: hauProfile },
  { id: 10, image: huyTruongProfile },
  { id: 11, image: haPhuongProfile },
];

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative">
      <div
        ref={prevRef}
        className="swiper-button-prev-custom cursor-pointer w-10 h-10 bg-[#87A0BE] rounded-full xl:hidden flex items-center justify-center shadow absolute top-1/2 left-0 z-[80]"
      >
        <svg fill="#000000" width="25px" height="25px" viewBox="0 0 15 15">
          <path d="M6.70711 2.29289C6.31658 1.90237 5.68342 1.90237 5.29289 2.29289L0.792893 6.79289C0.40237 7.18342 0.40237 7.81658 0.792893 8.20711L5.29289 12.7071C5.68342 13.0976 6.31658 13.0976 6.70711 12.7071C7.09763 12.3166 7.09763 11.6834 6.70711 11.2929L4 8.5H13.5C14.0523 8.5 14.5 8.05228 14.5 7.5C14.5 6.94772 14.0523 6.5 13.5 6.5H4L6.70711 3.70711C7.09763 3.31658 7.09763 2.68342 6.70711 2.29289Z" />
        </svg>
      </div>
      <div
        ref={nextRef}
        className="swiper-button-next-custom cursor-pointer w-10 h-10 bg-[#87A0BE] rounded-full xl:hidden flex items-center justify-center shadow absolute top-1/2 right-0 z-[80]"
      >
        <svg fill="#000000" width="25px" height="25px" viewBox="0 0 15 15">
          <path d="M8.29289 2.29289C8.68342 1.90237 9.31658 1.90237 9.70711 2.29289L14.2071 6.79289C14.5976 7.18342 14.5976 7.81658 14.2071 8.20711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11 8.5H1.5C0.947715 8.5 0.5 8.05228 0.5 7.5C0.5 6.94772 0.947715 6.5 1.5 6.5H11L8.29289 3.70711C7.90237 3.31658 7.90237 2.68342 8.29289 2.29289Z" />
        </svg>
      </div>
      <Swiper
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          1224: { slidesPerView: 3 },
        }}
        centeredSlides={true}
        loop={true}
        className="xl:!h-[700px] !flex !items-center"
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
            slideClass +=
              " z-30 scale-110 -translate-y-4 mt-10 xl:w-[500px] xl:h-[500px] mx-5 xl:mx-0";
          } else if (isPrev || isNext) {
            slideClass += " z-20 scale-95 translate-y-4 opacity-50";
            if (isPrev) {
              slideClass += " translate-x-3";
            } else {
              slideClass += " -translate-x-3";
            }
          } else {
            slideClass += " z-10 scale-90 translate-y-6 opacity-60";
          }

          return (
            <SwiperSlide
              key={member.id}
              className="!flex !justify-center !items-center"
            >
              <div
                className={`xl:w-[370px] w-full relative flex items-center ${slideClass}`}
              >
                <div className="frame-team-left"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover bg-left-top"
                />
                <div className="frame-team-right"></div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <img
        src={backgroundTeam}
        alt="Background"
        className=" hidden xl:block xl:absolute top-0 left-0 w-full h-full bg-center opacity-50"
      />
    </div>
  );
};

export default Team;
