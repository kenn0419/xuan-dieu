import Team from "../components/team.component";

const TeamPage = () => {
  return (
    <section className="py-30 bg-gradient-to-br from-[#0e0e23] to-[#18013a]">
      <div className="p-2 lg:p-0 w-full">
        <h2 className="flex flex-col lg:text-5xl text-2xl gap-3 mb-10 text-center font-hemi-head animate-fade-in">
          <span>GẶP GỠ ĐỘI NGŨ CỦA CHÚNG TÔI</span>
          <span className="text-primary uppercase">
            Năng động - Say mê - Chuyên nghiệp
          </span>
        </h2>
        <div>
          <Team />
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
