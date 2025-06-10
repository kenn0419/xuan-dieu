import sectionThumbnail from "../assets/images/Betterimage.ai_1749393457957-removebg-preview.png";
import TrendingEventsSlider from "./TrendingEventSlider";

const BuildMetaverseSection = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex justify-center mb-10 md:mb-0">
          <img
            src={sectionThumbnail}
            alt="We Build The Metaverse"
            className="w-[1000px] object-cover rounded-lg shadow-2xl"
          />
        </div>

        <div className="md:w-1/2 text-end md:pl-10">
          <h2 className="text-6xl font-semibold leading-tight mb-6 text-white">
            We Build The <span className="text-orange-500">Metaverse</span>
          </h2>
          <p className="text-[17px] text-gray-300 mb-8">
            Create and customize your unique full-body Avatar or select a
            version from our library! You could even import your VRM model to
            now. Stand out from the crowd and can look like anime versions of
            themselves.
          </p>
          <button className="bg-primary hover:bg-orange-700 text-black font-normal py-3 px-8 rounded-full shadow-lg transition duration-300">
            Explore Now →
          </button>
        </div>
      </div>
      <TrendingEventsSlider />
    </section>
  );
};

export default BuildMetaverseSection;
