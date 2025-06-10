import heroThumbnail from "../assets/images/hero_section.png";
import heroImage from "../assets/images/hero_section_image.png";
import StatsSection from "./StatsSection";

const HeroSection = () => (
  <section className="bg-gradient-to-r from-[#0f0f2d] via-[#1b1530] to-[#0f0f2d] pt-[86px] relative">
    <div className="space-y-6 mt-6 w-[1300px] mx-auto">
      <h1 className="text-8xl font-semibold leading-snug text-center flex flex-col relative font-geologica">
        <span>
          Largest <span className="text-primary">★</span> Virtual
        </span>
        <span>
          Event <span className="text-primary">Organizer</span>
        </span>
        <span>
          Company
          <span className="absolute bottom-6 left-1/5">
            <img
              src={heroImage}
              alt="Hero image"
              className="w-[150px] object-contain"
            />
          </span>
        </span>
      </h1>
      <div className="mt-5">
        <p className="text-sm max-w-md text-[#87899D] mb-4 text-justify">
          Virtual events are events that are completely hosted and run online
          with the potential for attendees to view or participate from anywhere
          in the world.
        </p>
        <button className="bg-primary px-12 py-4 rounded-3xl text-sm text-white cursor-pointer">
          Explore now →
        </button>
      </div>
    </div>
    <div className="bg-[#1E1F33] w-7xl h-[150px] mt-10"></div>
    <StatsSection />
    <img
      src={heroThumbnail}
      alt="VR Person"
      className="h-[800px] object-cover absolute bottom-0 right-[100px]"
    />
  </section>
);

export default HeroSection;
