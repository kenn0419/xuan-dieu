const TeamCard = ({ image, name, position }) => {
  return (
    <div className="bg-[#0a0a0a] p-4 rounded-xl border border-cyan-400 shadow-[0_0_20px_#00ffff70] relative w-full max-w-[260px]">
      <div className="border-2 border-cyan-400 p-1 rounded-lg overflow-hidden shadow-[0_0_10px_#00ffff70]">
        <img
          src={image}
          alt={name}
          className="rounded-lg w-full h-auto object-cover"
        />
      </div>
      <div className="text-white text-center mt-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm">{position}</p>
      </div>
    </div>
  );
};

export default TeamCard;
