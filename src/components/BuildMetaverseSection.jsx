import { FaArrowRightLong } from "react-icons/fa6";
import TrendingEventsSlider from "./TrendingEventSlider";
import { useNavigate } from "react-router-dom";
import backgroundComponent from "../assets/images/bg-component.jpg";
import introduceVideo from "../assets/videos/introduce-video.mp4";
import useInView from "../hook/useInView";

const BuildMetaverseSection = () => {
  const navigate = useNavigate();

  const [leftRef, leftInView] = useInView({ threshold: 0.4 }, true);
  const [rightRef, rightInView] = useInView({ threshold: 0.4 }, true);

  return (
    <section className="relative" id="introduce">
      <img
        src={backgroundComponent}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="relative z-1 xl:w-7xl py-20 mx-auto flex flex-col xl:flex-row items-center justify-between">
        {/* Left Side - Image */}
        <div
          ref={leftRef}
          className={`flex justify-center mb-10 lg:mb-0 transition-all duration-1000 ${
            leftInView
              ? "opacity-100 translate-x-0"
              : "opacity-0 -translate-x-10"
          }`}
        >
          {/* <img
            src={sectionThumbnail}
            alt="We Build The Metaverse"
            className="xl:w-[1000px] w-4/5 object-cover rounded-lg shadow-2xl"
          /> */}
          <video
            loop
            autoPlay
            muted
            controls
            className="xl:w-[1000px] w-4/5 object-cover rounded-lg shadow-2xl"
          >
            <source src={introduceVideo} type="video/mp4" />
          </video>
        </div>

        {/* Right Side - Content */}
        <div
          ref={rightRef}
          className={`flex flex-col items-center lg:w-1/2 xl:pl-10 xl:text-end xl:items-end transition-all duration-1000 delay-200 ${
            rightInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-20"
          }`}
        >
          <h2 className="text-4xl font-semibold leading-tight mb-6 text-white text-center xl:text-end flex flex-col font-hemi-head">
            Khơi Nguồn Sáng Tạo
            <span className="text-orange-500">Dẫn Lối Tương Lai AI</span>
          </h2>
          <p className="lg:p-0 p-2 text-[17px] text-gray-300 mb-8 text-center lg:text-justify">
            Xuân Diệu Media là đơn vị phát triển trong lĩnh vực AI tại Việt Nam,
            kết hợp nghệ thuật sáng tạo với công nghệ hiện đại. Cùng đội ngũ trẻ
            trung, giàu đam mê, XUÂN DIỆU MEDIA hứa hẹn sẽ mang đến những sản
            phẩm thông minh tạo nên giá trị dành cho người dùng.
          </p>
          <button
            className="bg-gradient-to-r from-[#D40814] via-50%-[#DF4158] via-80%-[#F2715C] to-[#EE4121] px-12 py-4 rounded-3xl text-lg 
            text-black cursor-pointer flex gap-1 items-center font-semibold"
            onClick={() => navigate(`/teams`)}
          >
            Nhân sự
            <FaArrowRightLong size={18} />
          </button>
        </div>
      </div>
      <TrendingEventsSlider />
    </section>
  );
};

export default BuildMetaverseSection;
