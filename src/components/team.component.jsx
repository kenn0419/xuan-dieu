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

import xuanChinh from "../assets/images/xuan-chinh.jpg";
import dieuHuyen from "../assets/images/dieu-huyen.jpg";
import nguyet from "../assets/images/nguyet.jpg";
import long from "../assets/images/Long.jpg";
import di from "../assets/images/Di.jpg";
import bao from "../assets/images/Bao.jpg";
import vy from "../assets/images/Vy.jpg";
import nguyen from "../assets/images/Nguyen.jpg";
import hau from "../assets/images/Hau.jpg";

const teamMembers = [
  {
    id: 1,
    image: xuanChinh,
  },
  {
    id: 2,
    image: dieuHuyen,
  },
  {
    id: 3,
    image: nguyet,
  },
  {
    id: 4,
    image: long,
  },
  {
    id: 5,
    image: di,
  },
  {
    id: 6,
    image: bao,
  },
  {
    id: 7,
    image: vy,
  },
  {
    id: 8,
    image: nguyen,
  },
  {
    id: 9,
    image: hau,
  },
];

const Team = () => {
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
    <div>
      {/* <div className="flex items-center justify-between mt-5">
        <button
          className="bg-gradient-to-r from-[#D40814] via-50%-[#DF4158] via-80%-[#F2715C] to-[#EE4121] px-8 py-3 rounded-3xl text-lg 
    text-black cursor-pointer flex gap-1 items-center font-semibold"
        >
          Nhân sự
        </button>
        <div className="flex gap-5">
          <div className="swiper-button-prev-custom cursor-pointer w-10 h-10 bg-[#87A0BE] rounded-full flex items-center justify-center shadow">
            <svg fill="#000000" width="25px" height="25px" viewBox="0 0 15 15">
              <path d="M6.70711 2.29289C6.31658 1.90237 5.68342 1.90237 5.29289 2.29289L0.792893 6.79289C0.40237 7.18342 0.40237 7.81658 0.792893 8.20711L5.29289 12.7071C5.68342 13.0976 6.31658 13.0976 6.70711 12.7071C7.09763 12.3166 7.09763 11.6834 6.70711 11.2929L4 8.5H13.5C14.0523 8.5 14.5 8.05228 14.5 7.5C14.5 6.94772 14.0523 6.5 13.5 6.5H4L6.70711 3.70711C7.09763 3.31658 7.09763 2.68342 6.70711 2.29289Z" />
            </svg>
          </div>
          <div className="swiper-button-next-custom cursor-pointer w-10 h-10 bg-[#87A0BE] rounded-full flex items-center justify-center shadow">
            <svg fill="#000000" width="25px" height="25px" viewBox="0 0 15 15">
              <path d="M8.29289 2.29289C8.68342 1.90237 9.31658 1.90237 9.70711 2.29289L14.2071 6.79289C14.5976 7.18342 14.5976 7.81658 14.2071 8.20711L9.70711 12.7071C9.31658 13.0976 8.68342 13.0976 8.29289 12.7071C7.90237 12.3166 7.90237 11.6834 8.29289 11.2929L11 8.5H1.5C0.947715 8.5 0.5 8.05228 0.5 7.5C0.5 6.94772 0.947715 6.5 1.5 6.5H11L8.29289 3.70711C7.90237 3.31658 7.90237 2.68342 8.29289 2.29289Z" />
            </svg>
          </div>
        </div>
      </div> */}
      <div className="lg:mx-auto">
        <Swiper
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setActiveIndex(swiper.realIndex);
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          centeredSlides={true}
          loop={true}
          className="!h-[600px] !flex !items-center"
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
                " z-30 scale-110 -translate-y-4 mt-10 w-[500px] h-[500px]";
            } else if (isPrev || isNext) {
              slideClass += " z-20 scale-95 translate-y-2 opacity-50";
            } else {
              slideClass += " z-10 scale-90 translate-y-6 opacity-60";
            }

            return (
              <SwiperSlide
                key={member.id}
                className="!flex !justify-center !items-center"
              >
                <div
                  className={`${slideClass} overflow-visible w-[400px] relative flex items-center`}
                >
                  <div className="frame-team-left"></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover bg-left-top"
                  />
                  {/* <div className="absolute z-80 -top-10 -left-5 w-4/5">
                    <img
                      src={member.image}
                      alt=""
                      className="w-[300px] object-contain"
                    />
                    <div className="absolute top-20 -right-15 flex flex-col">
                      <h2 className="font-hemi-head text-lg">{member.name}</h2>
                      <p>{member.position}</p>
                    </div>
                  </div> */}
                  <div className="frame-team-right"></div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
