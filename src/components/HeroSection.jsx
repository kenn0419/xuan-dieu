import { FaArrowRightLong } from "react-icons/fa6";
import heroThumbnail from "../assets/images/hero_thumbnail.png";
import robotThumbnail from "../assets/images/robot-thumbnail.png";
import robotLeftThumbnail from "../assets/images/a7654bdfd7ad60f339bc.png";
import heroBackground from "../assets/images/hero_section_bg.jpg";
import heroImage from "../assets/images/hero_section_image.png";
import StatsSection from "./StatsSection";

const HeroSection = () => (
  <section className="bg-gradient-to-r from-[#0f0f2d] via-[#1b1530] to-[#0f0f2d] pt-[86px] relative">
    <div className="hidden xl:absolute top-0 left-0 w-100 h-70 bg-[#116491] opacity-70 blur-[100px] rounded-full pointer-events-none z-0"></div>
    <div className="hidden xl:absolute top-1/4 left-1/2 w-100 h-70 bg-primary opacity-40 blur-[100px] rounded-full pointer-events-none z-0"></div>
    <div className="hidden xl:absolute top-1/2 right-0 w-100 h-150 bg-[#116491] opacity-70 blur-[100px] rounded-full pointer-events-none z-0"></div>
    <div className="space-y-6 mt-6 w-4/5 xl:w-[1300px] mx-auto">
      <img
        src={heroBackground}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <h1 className="lg:text-8xl text-4xl font-semibold leading-snug text-center flex flex-col relative font-geologica">
        <span>
          Largest <span className="text-primary">★</span> Virtual
        </span>
        <span>
          Event <span className="text-primary">Organizer</span>
        </span>
        <span>
          Company
          <span className="absolute left-0 bottom-2 lg:bottom-6 lg:left-1/5">
            <img
              src={heroImage}
              alt="Hero image"
              className="lg:w-[150px] w-20 object-contain"
            />
          </span>
        </span>
      </h1>
      {/* <div className="mt-5 flex flex-col items-center lg:block bg">
        <p className="text-sm w-md text-[#87899D] mb-4 text-justify">
          Virtual events are events that are completely hosted and run online
          with the potential for attendees to view or participate from anywhere
          in the world.
        </p>
        <button className="bg-orange-500 px-12 py-4 rounded-3xl text-sm text-black font-medium cursor-pointer flex gap-1 items-center">
          Explore now
          <FaArrowRightLong size={18} />
        </button>
      </div> */}
    </div>
    <div className="bg-gradient-to-r from-[#1E1F33] to-black/40 w-full xl:w-7xl shadow-r-md h-[150px] mt-10 "></div>
    <img
      src={robotLeftThumbnail}
      alt="VR Person"
      className="xl:h-[400px] h-[150px] object-cover ml-32 absolute bottom-1/4 -left-20"
    />
    <StatsSection />
    <img
      src={robotThumbnail}
      alt="VR Person"
      className="xl:h-[700px] h-[300px] object-cover absolute bottom-[215px] xl:bottom-0 xl:right-0 -right-5"
    />
    {/* <video autoPlay loop muted playsInline className="bg-transparent">
      <source src={robotVideo} type="video/webm" />
    </video> */}
  </section>
);

export default HeroSection;
