import galary1 from "../assets/images/event_galery_1.jpg";
import galary2 from "../assets/images/event_galery_2.jpg";
import galary3 from "../assets/images/event_galery_3.jpg";
import galary4 from "../assets/images/event_galery_4.jpg";
const EventGallery = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-6xl font-medium text-white mb-12">Event Gallary</h2>

        <div className="flex flex-col gap-10">
          <div className="flex gap-10 h-[300px]">
            <img src={galary3} className="w-1/2" alt="" />
            <img src={galary2} className="w-1/2" alt="" />
          </div>
          <div className="flex gap-5 h-[300px]">
            <img src={galary4} className="w-1/3" alt="" />
            <img src={galary1} className="w-2/3" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventGallery;
