import image1 from "../assets/images/feature-icon-1.png";
import image2 from "../assets/images/feature-icon-2.png";
import image3 from "../assets/images/feature-icon-3.png";
import backgroundComponent from "../assets/images/bg-component.jpg";
import FeatureCard from "./FeatureCard";
import useInView from "../hook/useInView";

const FeaturesSection = () => {
  const features = [
    {
      id: 1,
      icon: image1,
      title: "Truyền Thông Marketing",
      description:
        "Chúng tôi cung cấp dịch vụ chuyên nghiệp giúp bạn tiếp thị sản phẩm / dịch vụ hoặc quảng bá thương hiệu mạnh mẽ trên mọi nền tảng mạng xã hội. Mở rộng tệp khách hàng tiềm năng một cách hiệu quả và bền vững.",
    },
    {
      id: 2,
      icon: image2,
      title: "Tin tức",
      description:
        "Nội dung tin tức được tập trung phát triển xoay quanh ba lĩnh vực chính: công nghệ, giải trí và game – nhằm mang đến cho người dùng thông tin chuyên sâu, cập nhật nhanh chóng và phù hợp với xu hướng hiện đại.",
    },
    {
      id: 3,
      icon: image3,
      title: "Thương mại điện tử",
      description:
        "Chúng tôi phát triển ứng dụng mạng xã hội XUNI – nền tảng kết hợp giữa kết nối cộng đồng và thương mại điện tử nhằm hỗ trợ doanh nghiệp tối ưu hóa phân phối và hiển thị hàng hóa, đồng thời gia tăng khả năng tiếp cận khách hàng mục tiêu.",
    },
  ];

  const [headingRef, headingInView] = useInView({ threshold: 0.5 }, true);

  return (
    <section className="relative" id="service">
      <img
        src={backgroundComponent}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20"
      />
      <div className="xl:w-7xl mx-auto text-center py-20 px-6">
        <h2
          ref={headingRef}
          className={`relative z-1 text-4xl xl:text-5xl font-medium text-white mb-10 font-hemi-head transition-all duration-1000 ${
            headingInView
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-10"
          }`}
        >
          ĐỊNH VỊ THƯƠNG HIỆU TRUYỀN THÔNG VÀ CÔNG NGHỆ
        </h2>
        <p className="text-base text-gray-300 mb-12 lg:w-[800px] mx-auto">
          Xuân Diệu Media mang đến giải pháp truyền thông tổng thể, chiến lược
          marketing số hiệu quả và nội dung báo chí sắc bén, ứng dụng trí tuệ
          nhân tạo để giúp thương hiệu lan tỏa, ghi dấu và phát triển bền vững
          trong kỷ nguyên số.
        </p>

        <div className="flex justify-center flex-col xl:flex-row gap-6 px-4 py-10 shadow-md">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
