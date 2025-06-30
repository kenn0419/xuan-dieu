import Team from "../components/team.component";

const TeamPage = () => {
  return (
    <section className="py-30 bg-gradient-to-br from-[#0e0e23] to-[#18013a]">
      <div className="md:w-[1200px] md:mx-auto p-2 md:p-0 w-full">
        <h2 className="flex flex-col lg:text-5xl text-2xl gap-3 mb-10 text-center font-hemi-head animate-fade-in">
          <span>GẶP GỠ ĐỘI NGŨ CỦA CHÚNG TÔI</span>
          <span className="text-primary uppercase">
            Năng động - Say mê - Chuyên nghiệp
          </span>
        </h2>
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
