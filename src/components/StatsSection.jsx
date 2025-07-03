const StatsSection = () => {
  return (
    <section className="bg-gradient-to-r from-[#1E1F33] to-black/40 lg:p-12 p-7 mt-10 w-full xl:w-7xl shadow-xl flex items-center">
      <div className="w-full lg:w-2/5 flex lg:justify-end gap-3 lg:gap-0 items-center">
        <div className="flex flex-col">
          <h2 className="text-5xl font-bold text-primary mb-2">74K+</h2>
          <p className="xl:text-lg text-gray-300">Người Tiếp Cận</p>
        </div>
        <div className="w-px h-20 bg-primary lg:mx-8"></div>
        <div className="flex flex-col">
          <h2 className="text-5xl font-bold text-primary mb-2">75K+</h2>
          <p className="xl:text-lg text-gray-300">Người Truy Cập</p>
        </div>
      </div>
      <div className="flex-auto"></div>
    </section>
  );
};

export default StatsSection;
