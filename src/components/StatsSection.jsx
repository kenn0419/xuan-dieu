const StatsSection = () => {
  return (
    <section className="bg-gray-800 bg-opacity-70 py-12 -mt-20 relative z-20 rounded-lg mx-auto max-w-4xl shadow-xl flex justify-around items-center">
      <div className="text-center">
        <h2 className="text-5xl font-bold text-orange-500 mb-2">75K+</h2>
        <p className="text-lg text-gray-300">Events Organized</p>
      </div>
      <div className="w-px h-20 bg-gray-600 mx-8"></div> {/* Divider */}
      <div className="text-center">
        <h2 className="text-5xl font-bold text-orange-500 mb-2">105</h2>
        <p className="text-lg text-gray-300">Lands in Metaverse</p>
      </div>
    </section>
  );
};

export default StatsSection;
