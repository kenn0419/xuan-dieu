import { memo } from "react";
import useInView from "../hook/useInView";

const FeatureCard = ({ feature }) => {
  const [leftRef, leftInView] = useInView({ threshold: 0.5 }, true);
  const [rightRef, rightInView] = useInView({ threshold: 0.5 }, true);
  return (
    <div
      className={`group relative mx-auto w-full md:w-2/3 xl:w-1/3 lg:h-[550px] bg-gradient-to-tr from-[#2b1e29] to-[#141321] 
                text-white p-6 pt-20 flex flex-col items-center clip-card transition-all duration-1000 ease-in-out`}
    >
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 rounded-full golden-bar-container">
        <div className="golden-bar"></div>
      </div>
      <div className="w-[85px] h-[85px] mb-10 lg:mb-20 rounded-full bg-orange-500 flex items-center justify-center shadow-md">
        <img
          src={feature.icon}
          alt="feature icon"
          className={`${
            feature.id === 3 ? "w-20 h-20" : "w-15 h-15"
          } object-contain`}
        />
      </div>
      <h3
        ref={rightRef}
        className={`text-2xl font-medium mb-10 capitalize font-hemi-head text-center transition-all duration-1000 delay-200 ${
          rightInView
            ? "xl:opacity-100 xl:translate-x-0 opacity-100 translate-y-0"
            : "xl:opacity-0 xl:translate-x-20 opacity-0 -translate-y-20"
        }`}
      >
        {feature.title}
      </h3>
      <p
        ref={leftRef}
        className={`text-base text-gray-300 w-full lg:w-6/7 mx-auto text-center h-[180px] transition-all duration-1000 delay-200 ${
          leftInView
            ? "xl:opacity-100 xl:translate-x-0 opacity-100 translate-y-0"
            : "xl:opacity-0 xl:-translate-x-20 opacity-0 -translate-y-20"
        }`}
      >
        {feature.description}
      </p>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary opacity-25 blur-[100px] rounded-full pointer-events-none z-0"></div>
    </div>
  );
};

export default memo(FeatureCard);
