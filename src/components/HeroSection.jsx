import { FaArrowRightLong } from "react-icons/fa6";
import robotThumbnail from "../assets/images/robot-thumbnail-left.png";
import robotLeftThumbnail from "../assets/images/robot-thumbnail.png";
import heroBackground from "../assets/images/hero_section_bg.jpg";
import StatsSection from "./StatsSection";
import useInView from "../hook/useInView";

const HeroSection = () => {
  const [headingRef, headingInView] = useInView({ threshold: 0.5 }, true);

  return (
    <section className="bg-gradient-to-r from-[#0f0f2d] via-[#1b1530] to-[#0f0f2d] pt-[86px] relative">
      <div className="space-y-6 mt-6 xl:w-[1200px] mx-auto">
        <img
          src={heroBackground}
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <h1
          ref={headingRef}
          className={`xl:text-8xl md:text-5xl text-3xl font-semibold leading-snug 
            text-center flex flex-col relative font-hemi-head uppercase mb-40 transition-all duration-1000 ${
              headingInView
                ? "opacity-100 translate-y-0"
                : "opacity-0 -translate-y-10"
            }`}
        >
          <span>
            Công nghệ <span className="text-primary">★</span> Tương Lai
          </span>
          <span>
            Xuân Diệu <span className="text-primary">Media</span>
          </span>
        </h1>
      </div>

      <div className="bg-gradient-to-r from-[#1E1F33] to-black/40 w-full lg:w-5xl shadow-r-md h-[150px] mt-10 p-10">
        <h4 className="hidden lg:flex flex-col gap-3 text-lg items-start w-2xl mx-auto font-hemi-head pl-20">
          <span>Chúng tôi không chỉ tạo ra công nghệ</span>
          <span>Chúng tôi tái định nghĩa sự kết nối bằng trí tuệ nhân tạo</span>
        </h4>
      </div>

      <img
        src={robotLeftThumbnail}
        alt="VR Person"
        className="lg:h-[400px] md:h-[270px] h-[230px] object-cover ml-32 absolute bottom-1/3 lg:bottom-1/4 -left-35 lg:-left-20"
      />
      <StatsSection />
      <img
        src={robotThumbnail}
        alt="VR Person"
        className="xl:h-[700px] lg:h-[600px] md:h-[500px] h-[350px] object-cover absolute bottom-30 md:bottom-10 lg:bottom-5 right-0"
      />
    </section>
  );
};

export default HeroSection;
