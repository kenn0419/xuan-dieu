import { FaArrowRightLong } from "react-icons/fa6";
import sectionThumbnail from "../assets/images/Betterimage.ai_1749393457957-removebg-preview.png";
import TrendingEventsSlider from "./TrendingEventSlider";

const BuildMetaverseSection = () => {
  return (
    <section className="py-20 relative">
      <div className="w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex justify-center mb-10 md:mb-0">
          <img
            src={sectionThumbnail}
            alt="We Build The Metaverse"
            className="lg:w-[1000px] w-4/5 object-cover rounded-lg shadow-2xl"
          />
        </div>

        <div className="flex flex-col items-center lg:w-1/2 lg:pl-10 lg:text-end lg:items-end">
          <h2 className="text-6xl font-semibold leading-tight mb-6 text-white text-center lg:text-end">
            We Build The <span className="text-orange-500">Metaverse</span>
          </h2>
          <p className="text-[17px] text-gray-300 mb-8 text-center lg:text-end">
            Create and customize your unique full-body Avatar or select a
            version from our library! You could even import your VRM model to
            now. Stand out from the crowd and can look like anime versions of
            themselves.
          </p>
          <button className="bg-gradient-to-br from-red-500 via-yellow-500 to-primary px-12 py-4 rounded-3xl text-sm text-black font-medium cursor-pointer flex gap-1 items-center">
            Explore now
            <FaArrowRightLong size={18} />
          </button>
        </div>
      </div>
      <TrendingEventsSlider />
    </section>
  );
};

export default BuildMetaverseSection;
