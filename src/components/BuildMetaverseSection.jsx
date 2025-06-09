const BuildMetaverseSection = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
        {/* Left Image (Man with VR and buildings) */}
        <div className="md:w-1/2 flex justify-center mb-10 md:mb-0">
          <img
            src="path/to/your/build-metaverse-image.webp" // Replace with your actual image
            alt="We Build The Metaverse"
            className="w-[600px] h-auto object-cover rounded-lg shadow-2xl"
          />
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 text-left md:pl-10">
          <h2 className="text-5xl font-bold leading-tight mb-6 text-white">
            We Build The <span className="text-orange-500">Metaverse</span>
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Create and customize a unique full body avatar, or select from a
            wide range of pre-designed avatars. Let your inner model come. Stand
            out from the crowd and really look the part by creating your digital
            twin in the Metaverse!
          </p>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300">
            Explore Now →
          </button>
        </div>
      </div>
    </section>
  );
};

export default BuildMetaverseSection;
