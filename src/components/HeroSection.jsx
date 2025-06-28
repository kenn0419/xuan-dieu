import { FaArrowRightLong } from "react-icons/fa6";
import robotThumbnail from "../assets/images/robot-thumbnail-left.png";
import robotLeftThumbnail from "../assets/images/robot-thumbnail.png";
import heroBackground from "../assets/images/hero_section_bg.jpg";
import StatsSection from "./StatsSection";

const HeroSection = () => (
  <section className="bg-gradient-to-r from-[#0f0f2d] via-[#1b1530] to-[#0f0f2d] pt-[86px] relative">
    <div className="hidden md:absolute top-0 left-0 w-100 h-70 bg-[#116491] opacity-70 blur-[100px] rounded-full pointer-events-none z-0"></div>
    <div className="hidden md:absolute top-1/4 left-1/2 w-100 h-70 bg-primary opacity-40 blur-[100px] rounded-full pointer-events-none z-0"></div>
    <div className="hidden md:absolute top-1/2 right-0 w-100 h-150 bg-[#116491] opacity-70 blur-[100px] rounded-full pointer-events-none z-0"></div>
    <div className="space-y-6 mt-6 md:w-[1300px] mx-auto">
      <img
        src={heroBackground}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <h1 className="md:text-8xl text-3xl font-semibold leading-snug text-center flex flex-col relative font-hemi-head uppercase mb-40">
        <span className="">
          Công nghệ <span className="text-primary">★</span> Tương Lai
        </span>
        <span>
          Xuân Diệu <span className="text-primary">Media</span>
        </span>
        {/* <span className="relative">
          Company
          <span className="absolute left-1/8 bottom-2 md:bottom-6 md:left-1/5">
            <img
              src={heroImage}
              alt="Hero image"
              className="md:w-[150px] w-20 object-contain"
            />
          </span>
        </span> */}
      </h1>
    </div>
    <div className="bg-gradient-to-r from-[#1E1F33] to-black/40 w-full md:w-7xl shadow-r-md h-[150px] mt-10 p-10">
      <h4 className="flex flex-col gap-3 text-lg items-start w-2xl mx-auto font-hemi-head">
        <span>Chúng tôi không chỉ tạo ra công nghệ</span>
        <span>Chúng tôi tái định nghĩa sự kết nối bằng trí tuệ nhân tạo</span>
      </h4>
    </div>
    <img
      src={robotLeftThumbnail}
      alt="VR Person"
      className="md:h-[400px] h-[230px] object-cover ml-32 absolute bottom-1/3 md:bottom-1/4 -left-35 md:-left-20"
    />
    <StatsSection />
    <img
      src={robotThumbnail}
      alt="VR Person"
      className="md:h-[700px] h-[400px] object-cover absolute bottom-20 md:bottom-5 right-0"
    />
  </section>
);

export default HeroSection;
