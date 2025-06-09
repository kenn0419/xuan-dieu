import heroThumbnail from "../assets/images/hero_section.png";
import heroImage from "../assets/images/hero_section_image.png";
import StatsSection from "./StatsSection";

const HeroSection = () => (
  <section className="p-10 bg-gradient-to-r from-[#0f0f2d] via-[#1b1530] to-[#0f0f2d] pt-[86px]">
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
      <div>
        <p className="text-sm max-w-md">
          Virtual events that are hosted online with the potential of attendees
          to view or participate from anywhere.
        </p>
        <button className="bg-primary px-6 py-2 rounded text-sm">
          Explore now →
        </button>
      </div>
      <div>
        <StatsSection />
      </div>
    </div>
    {/* <img src={heroImage} alt="VR Person" className="h-[800px] object-cover" /> */}
  </section>
);

export default HeroSection;
