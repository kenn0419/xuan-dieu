const GlowBorder = () => {
  return (
    <div className="absolute top-1/2 left-1/2 z-[999] w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 400 400">
        <rect
          x="0"
          y="0"
          width="400"
          height="400"
          rx="0"
          ry="0"
          className="glow-path"
        />
      </svg>
    </div>
  );
};

export default GlowBorder;
