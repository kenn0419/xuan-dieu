const StatsSection = () => {
  return (
    <section className="bg-[#1E1F33] p-12 mt-10 w-full xl:w-7xl shadow-xl flex items-center">
      <div className="w-full xl:w-2/5 flex justify-end items-center">
        <div className="flex flex-col">
          <h2 className="text-5xl font-bold text-primary mb-2">75K+</h2>
          <p className="xl:text-lg text-gray-300">Events Organized</p>
        </div>
        <div className="w-px h-20 bg-primary lg:mx-8"></div>
        <div className="flex flex-col">
          <h2 className="text-5xl font-bold text-primary mb-2">105</h2>
          <p className="xl:text-lg text-gray-300">Lands in Metaverse</p>
        </div>
      </div>
      <div className="flex-auto"></div>
    </section>
  );
};

export default StatsSection;
