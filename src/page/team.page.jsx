import Team from "../components/team.component";

const TeamPage = () => {
  return (
    <section className="py-30">
      <div className="md:w-[1200px] md:mx-auto p-2 md:p-0 w-full">
        <h2 className="my-4">Our team</h2>
        <h2 className="flex flex-col lg:text-5xl text-2xl gap-3 mb-10">
          <span>Meet our Team</span>
          <span className="text-primary">Passionate.Proactive.Expert</span>
        </h2>
        <div className="flex items-center justify-between">
          <p className="text-lg w-xl">
            We lead with care our core value and a shared passion for connecting
            the world
          </p>
        </div>
        <div>
          {[1, 2].map((item, index) => (
            <div className="flex flex-col">
              <Team key={index} />
              {index != 1 && (
                <div className="w-full h-[1px] bg-gray-100 opacity-30 mb-10"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
