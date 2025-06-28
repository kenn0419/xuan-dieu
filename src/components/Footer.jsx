import { FaLinkedinIn, FaXing, FaXTwitter, FaYoutube } from "react-icons/fa6";
import logo from "../assets/images/logo-footer.png";
import image1 from "../assets/images/XD.jpg";
import image2 from "../assets/images/XUNI-APP.jpg";
import image3 from "../assets/images/Logo-Ong-Kinh-01.jpg";
import image4 from "../assets/images/Gamelade_sign.jpg";
import image5 from "../assets/images/982742b6edc65a9803d7.jpg";
import { Link } from "react-router-dom";

const Footer = () => {
  const medias = [
    // { id: 1, iconSrc: image1, title: "xuandieu.com.vn", link: "/" },
    {
      id: 2,
      iconSrc: image3,
      title: "ongkinh.vn",
      link: "https://ongkinh.vn/",
    },
    { id: 3, iconSrc: image2, title: "xuandieu.com.vn", link: "/" },
    {
      id: 4,
      iconSrc: image4,
      title: "gamelade.vn",
      link: "https://gamelade.vn/",
    },
    {
      id: 5,
      iconSrc: image5,
      title: "techlade.vn",
      link: "https://techlade.vn/",
    },
  ];
  return (
    <footer
      id="footer"
      className="bg-gradient-to-br from-black to-[#05112D] text-gray-800 px-6 md:px-16 py-12 text-sm relative"
    >
      <div className="absolute bottom-0 left-0 w-65 h-70 bg-orange-400 opacity-25 blur-[100px] rounded-full pointer-events-none z-0"></div>
      <div className="md:grid grid-cols-1 md:grid-cols-2 gap-8 mb-10 text-white">
        <div className="flex md:flex-col flex-row gap-10 md:gap-3 justify-center items-center">
          <div>
            <h3 className="font-bold mb-5 text-xl">Liên hệ</h3>
            <div className="flex flex-col gap-3">
              <p>CÔNG TY TNHH MTV XUÂN DIỆU MEDIA </p>
              <p>90/12 Hà Huy Tập, Thanh Khê Đông, Thanh Khê</p>
              <p>Đà Nẵng 550000, Việt Nam</p>
              <Link to={"/"}>xuandieu.com.vn</Link>
              <a href="mailto:info@xuandieu.com.vn">info@xuandieu.com.vn</a>
            </div>
          </div>
        </div>

        <div className="flex md:justify-center mt-5 pt-2 border-t md:mt-0 md:border-none md:pt-0">
          <div className="flex md:flex-col flex-row gap-10 md:gap-3 justify-center items-center">
            <div>
              <h3 className="font-bold mb-5 text-xl">Sáng tạo nội dung</h3>
              <ul className="space-y-1 flex flex-col gap-3">
                <li>Sản xuất video theo yêu cầu</li>
                <li>Hỗ trợ sản xuất video, hình ảnh</li>
                <li>Marketing Mix Modeling</li>
                <li>Phân phối nội dung đa nền tảng</li>
                <li>Quản lý công nghệ số</li>
              </ul>
            </div>
          </div>
        </div>

        {/* <div className="flex md:justify-center mt-5 pt-2 border-t md:mt-0 md:border-none md:pt-0">
          <div className="md:block flex gap-10">
            <h3 className="font-bold mb-5">Resources</h3>
            <ul className="space-y-1 flex flex-col gap-3">
              <li>Beyond Alphoria</li>
              <li>Company</li>
              <li>Career</li>
              <li>Contact</li>
            </ul>
          </div>
        </div> */}
      </div>

      <div className="flex justify-center items-center gap-2">
        <div className="flex-auto h-[1px] bg-gray-300"></div>
        <div className="w-[300px] flex justify-center space-x-5">
          {medias.map((media) => (
            <a
              key={media.id}
              href={media?.link}
              className="text-xl hover:text-gray-600"
            >
              <img
                src={media.iconSrc}
                alt="image1"
                className="w-10 h-10 object-cover rounded-full"
              />
            </a>
          ))}
        </div>
        <div className="flex-auto h-[1px] bg-gray-300"></div>
      </div>

      <div className="flex flex-col items-center pt-6 space-y-2">
        <img src={logo} alt="MMT logo" className="h-20" />
        <p className="text-xs text-center text-gray-400">
          © Copyright 2025 | XUANDIEU Media
        </p>
      </div>
    </footer>
  );
};

export default Footer;
