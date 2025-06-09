const EventGallery = () => {
  // Dummy data for gallery images - replace with actual images
  const galleryImages = [
    "path/to/gallery-image-1.webp",
    "path/to/gallery-image-2.webp",
    "path/to/gallery-image-3.webp",
    "path/to/gallery-image-4.webp",
    "path/to/gallery-image-5.webp",
    "path/to/gallery-image-6.webp",
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-white mb-12">
          Event <span className="text-orange-500">Gallery</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-xl group"
            >
              <img
                src={image} // Replace with actual gallery images
                alt={`Event Gallery ${index + 1}`}
                className="w-full h-72 object-cover transform group-hover:scale-110 transition duration-500 ease-in-out"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 ease-in-out">
                {/* You can add an icon or text overlay here */}
                <p className="text-white text-xl font-semibold">View Event</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventGallery;
