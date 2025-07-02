import AOS from "aos";
import "aos/dist/aos.css";
import image1 from "../assets/images/feature-icon-1.png";
import image2 from "../assets/images/feature-icon-2.png";
import image3 from "../assets/images/feature-icon-3.png";

const FeaturesSection = () => {
  const features = [
    {
      icon: image1,
      title: "Truyền Thông Marketing",
      description:
        "Chúng tôi cung cấp dịch vụ chuyên nghiệp giúp bạn tiếp thị sản phẩm / dịch vụ hoặc quảng bá thương hiệu mạnh mẽ trên mọi nền tảng mạng xã hội. Mở rộng tệp khách hàng tiềm năng một cách hiệu quả và bền vững.",
    },
    {
      icon: image2,
      title: "Tin tức",
      description:
        "Nội dung tin tức được tập trung phát triển xoay quanh ba lĩnh vực chính: công nghệ, giải trí và game – nhằm -mang đến cho người dùng thông tin chuyên sâu, cập nhật nhanh chóng và phù hợp với xu hướng hiện đại.",
    },
    {
      icon: image3,
      title: "Thương mại điện tử",
      description:
        "Chúng tôi phát triển ứng dụng mạng xã hội XUNI – nền tảng kết hợp giữa kết nối cộng đồng và thương mại điện tử nhằm hỗ trợ doanh nghiệp tối ưu hóa phân phối và hiển thị hàng hóa, đồng thời gia tăng khả năng tiếp cận khách hàng mục tiêu.",
    },
  ];

  return (
    <section
      className="py-20 px-6 bg-gradient-to-br from-black to-[#05112D]"
      id="service"
    >
      <div className="lg:w-7xl mx-auto text-center">
        <h2 className="text-4xl font-medium text-white mb-10 font-hemi-head animate-fade-out-top">
          ĐỊNH VỊ THƯƠNG HIỆU TRUYỀN THÔNG VÀ CÔNG NGHỆ
        </h2>
        <p className="text-base text-gray-300 mb-12 lg:w-[800px] mx-auto">
          Xuân Diệu Media mang đến giải pháp truyền thông tổng thể, chiến lược
          marketing số hiệu quả và nội dung báo chí sắc bén, ứng dụng trí tuệ
          nhân tạo để giúp thương hiệu lan tỏa, ghi dấu và phát triển bền vững
          trong kỷ nguyên số.
        </p>

        <div className="flex justify-center flex-col lg:flex-row gap-6 px-4 py-10 shadow-md">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative mx-auto w-2/3 lg:w-1/3 lg:h-[550px] bg-gradient-to-tr from-[#2b1e29] to-[#141321] 
            text-white p-6 pt-20 flex flex-col items-center clip-card`}
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 rounded-full golden-bar-container">
                <div className="golden-bar"></div>
              </div>
              <div className="w-[85px] h-[85px] mb-10 lg:mb-20 rounded-full bg-orange-500 flex items-center justify-center shadow-md">
                {/* {<feature.icon color="white" size={35} />} */}
                <img
                  src={feature.icon}
                  alt="feature icon"
                  className={`${
                    index == 2 ? "w-20 h-20" : "w-15 h-15"
                  } object-contain`}
                />
              </div>
              <h3 className="text-2xl font-medium mb-16 capitalize font-hemi-head">
                {feature.title}
              </h3>
              <p className="text-base text-gray-300 w-full lg:w-6/7 mx-auto text-center h-[180px]">
                {feature.description}
              </p>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-primary opacity-25 blur-[100px] rounded-full pointer-events-none z-0"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
