import { MdEmojiEvents } from "react-icons/md";
import { SiEventbrite, SiEventstore } from "react-icons/si";

const FeaturesSection = () => {
  const features = [
    {
      icon: MdEmojiEvents,
      title: "Event Posting",
      description:
        "We build websites based on client needs and of course the target market, because that's our expertise",
    },
    {
      icon: SiEventstore,
      title: "Event Management",
      description:
        "It's undeniable, everyone now has a smartphone, and of course we can also make your product app",
    },
    {
      icon: SiEventbrite,
      title: "Event Marketing",
      description:
        "We are aware of the importance of design before making a product, that's why we provide our best service",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-black to-[#05112D]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl lg:text-6xl font-medium text-white mb-10 font-montserrat">
          Our Features
        </h2>
        <p className="text-base text-gray-300 mb-12 max-w-[800px] mx-auto">
          See a collectible you love? You can easily learn more about the NFT
          and buy it directly using fiat currency or cryptocurrency. VIVE Market
          currently accepts payments via credit card or MetaMask.
        </p>

        <div className="flex justify-center flex-col lg:flex-row gap-6 px-4 py-10 shadow-md">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative lg:w-1/3 h-[500px] bg-gradient-to-tr from-[#2b1e29] to-[#141321] 
            text-white p-6 pt-20 flex flex-col items-center clip-card`}
            >
              {index == 1 && (
                <div
                  className="absolute -bottom-0 left-1/2 -translate-x-1/2 w-full h-1 z-20 rounded-full 
                  bg-gradient-to-r from-[#02081C] via-[#FD9308] to-[#02081C] pointer-events-none"
                ></div>
              )}
              <div className="w-[80px] h-[80px] mb-20 rounded-full bg-orange-500 flex items-center justify-center shadow-md">
                {<feature.icon color="white" size={35} />}
              </div>
              <h3 className="text-2xl font-medium mb-16">{feature.title}</h3>
              <p className="text-sm text-gray-300 max-w-4/5 mx-auto">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
