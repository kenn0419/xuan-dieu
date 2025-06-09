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
    <section className="py-20 px-6 bg-gradient-to-br from-black to-purple-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-white mb-16">
          Our <span className="text-orange-500">Features</span>
        </h2>
        <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
          See a collectible your friend can easily obtain, know about the NFT,
          and obtain it directly using flat currency or Cryptocurrency. VIVE
          Market currently accepts payments via credit card or MetaMask.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-800 bg-opacity-70 p-8 rounded-lg shadow-lg text-left transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <h3 className="text-2xl font-semibold text-white mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
