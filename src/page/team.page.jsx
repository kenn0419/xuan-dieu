import Team from "../components/team.component";
import backgroundTeam from "../assets/images/bg-team.jpg";

const TeamPage = () => {
  return (
    <section className="pt-30 pb-10 bg-gradient-to-br from-[#0e0e23] to-[#18013a]">
      <div className="p-2 lg:p-0 w-full relative">
        <h2 className="relative z-1 flex flex-col lg:text-5xl text-3xl gap-3 mb-10 text-center font-hemi-head animate-fade-in">
          <span>GẶP GỠ ĐỘI NGŨ CỦA CHÚNG TÔI</span>
          <span className="text-primary uppercase">
            Năng động - Say mê - Chuyên nghiệp
          </span>
        </h2>
        <div className="relative z-1">
          <Team />
        </div>
        <img
          src={backgroundTeam}
          alt="Background"
          className="absolute inset-0 w-full bg-center opacity-50"
        />
      </div>
    </section>
  );
};

export default TeamPage;
