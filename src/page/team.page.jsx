import Team from "../components/team.component";
import useInView from "../hook/useInView";

const TeamPage = () => {
  const [headingRef, headingInView] = useInView({ threshold: 0.5 }, true);

  return (
    <section className="pt-30 bg-gradient-to-br from-[#0e0e23] to-[#18013a]">
      <div className="p-2 xl:p-0 w-full relative">
        <h2
          ref={headingRef}
          className={`relative z-1 flex flex-col lg:text-5xl text-3xl gap-3 mb-10 text-center font-hemi-head transition-all duration-1000 ${
            headingInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          <span>GẶP GỠ ĐỘI NGŨ CỦA CHÚNG TÔI</span>
          <span className="text-primary uppercase">
            Năng động - Say mê - Chuyên nghiệp
          </span>
        </h2>
        <div className="relative z-1">
          <Team />
        </div>
      </div>
    </section>
  );
};

export default TeamPage;
