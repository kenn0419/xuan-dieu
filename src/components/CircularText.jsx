import React from "react";

const CircularTextNoBackground = () => {
  const text = "METAVERSE METAVERSE METAVERSE"; // Chuỗi văn bản của bạn
  const characters = text.split("");
  const radius = 60; // Bán kính của vòng tròn văn bản (px) - Tinh chỉnh để phù hợp với kích thước mong muốn
  // Adjust angleIncrement if you repeat "METAVERSE" fewer or more times
  const angleIncrement = 360 / characters.length; // Góc cho mỗi chữ cái

  return (
    // Loại bỏ màu nền, chỉ giữ lại kích thước và căn giữa
    <div className="relative w-[150px] h-[150px] flex items-center justify-center rounded-full">
      {/* Vòng tròn bên ngoài để định vị - Không có màu nền */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full h-full">
          {characters.map((char, index) => {
            const angle = index * angleIncrement; // Góc của chữ cái
            const x = radius * Math.cos(((angle - 90) * Math.PI) / 180); // -90 để bắt đầu từ trên cùng
            const y = radius * Math.sin(((angle - 90) * Math.PI) / 180);

            // Điều chỉnh góc quay của từng chữ cái để chúng "đứng" thẳng và nhìn từ ngoài vào
            // Bạn có thể cần tinh chỉnh 90deg hoặc -90deg tùy thuộc vào font và sở thích
            const letterRotation = angle + 90; // Ví dụ: xoay chữ để nó hướng ra ngoài

            return (
              <span
                key={index}
                className="absolute text-white text-sm font-semibold whitespace-nowrap origin-center"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: `translate(-50%, -50%) rotate(${letterRotation}deg)`,
                  // Hoặc nếu muốn chữ nhìn vào trong tâm: `rotate(${angle - 90}deg)`
                  // Hoặc nếu muốn chữ luôn thẳng: `rotate(${angle}deg)`
                }}
              >
                {char === " " ? "\u00A0" : char} {/* Xử lý khoảng trắng */}
              </span>
            );
          })}
        </div>
      </div>

      {/* Mũi tên ở giữa - Giữ nguyên SVG như đã làm trước đó */}
      <div className="relative z-10 w-10 h-10 flex items-center justify-center">
        {" "}
        {/* Kích thước mũi tên nhỏ hơn */}
        <svg
          className="w-full h-full text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Path của mũi tên, áp dụng transform để xoay lên trên */}
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
            transform="rotate(90 12 12)" // Xoay mũi tên lên trên
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default CircularTextNoBackground;
