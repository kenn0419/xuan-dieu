import galary1 from "../assets/images/event_galery_1.jpg";
import galary2 from "../assets/images/event_galery_2.jpg";
import galary3 from "../assets/images/event_galery_3.jpg";
import galary4 from "../assets/images/event_galery_4.jpg";
const EventGallery = () => {
  return (
    <section className="py-20 px-6">
      <div className="lg:w-6xl mx-auto text-center">
        <h2 className="text-5xl lg:text-6xl font-medium text-white mb-12 font-hemi-head uppercase">
          Sự Kiện
        </h2>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col lg:flex-row justify-between gap-5">
            <img
              src={galary3}
              className="lg:w-1/2 h-[300px] object-cover rounded-xl"
              alt=""
            />
            <img
              src={galary2}
              className="lg:w-1/2 h-[300px] object-cover rounded-xl"
              alt=""
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-5">
            <img
              src={galary4}
              className="lg:w-1/3 h-[300px] object-cover rounded-xl"
              alt=""
            />
            <img
              src={galary1}
              className="lg:w-2/3 h-[300px] object-cover rounded-xl"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventGallery;
