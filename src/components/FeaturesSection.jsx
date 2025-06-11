const FeaturesSection = () => {
  const features = [
    {
      title: "Event Posting",
      description:
        "You can easily post about an event just with one click. Simply fill all the details on the form on our platform, and it is ready to be published.",
    },
    {
      title: "Event Management",
      description:
        "It is a platform for event managers, where we offer a single and centralized view of all the events. This saves a lot of time and effort for event managers.",
    },
    {
      title: "Event Marketing",
      description:
        "We are aware of the importance of event marketing; hence we offer an event marketing tool for event organizers. Our tool can help you to sell more tickets to your events.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-br from-black to-[#05112D]">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-6xl font-medium text-white mb-10 font-montserrat">
          Our Features
        </h2>
        <p className="text-base text-gray-300 mb-12 max-w-4xl mx-auto">
          See a collectible you love? You can easily learn more about the NFT
          and buy it directly using fiat currency or cryptocurrency. VIVE Market
          currently accepts payments via credit card or MetaMask.
        </p>

        <div className="flex justify-center items-start gap-6 px-4 py-10">
          {features.map((feature) => (
            <div className="group relative w-[280px] bg-gradient-to-b from-[#1b1a25] to-[#0f0e17] text-white p-6 pt-14 polygon-card shadow-lg text-center">
              {/* Icon */}
              <div className="absolute top-[-30px] left-1/2 -translate-x-1/2 w-[60px] h-[60px] rounded-full bg-orange-500 flex items-center justify-center shadow-md">
                {feature.title}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
