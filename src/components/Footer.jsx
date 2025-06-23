import { FaLinkedinIn, FaXing, FaXTwitter, FaYoutube } from "react-icons/fa6";
import logo from "../assets/images/logo-XD.png";
import image1 from "../assets/images/XD.jpg";
import image2 from "../assets/images/XUNI-APP.jpg";
import image3 from "../assets/images/Logo-Ong-Kinh-01.jpg";
import image4 from "../assets/images/Gamelade_sign.jpg";
import image5 from "../assets/images/982742b6edc65a9803d7.jpg";

const Footer = () => {
  const medias = [
    { id: 1, iconSrc: image1, title: "xuandieu.com.vn", link: "/" },
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10 text-white">
        <div className="flex flex-col">
          <h3 className="font-bold mb-5">Contact</h3>
          <div className="flex flex-col gap-3">
            <p>Mercury Media Technology GmbH &amp; Co. KG</p>
            <p>Klostertor 1</p>
            <p>20097 Hamburg / Germany</p>
            <p className="mt-2">hello@mercurymediatechnology.com</p>
            <p>Get in touch - we speak 12 languages</p>
          </div>
        </div>

        <div className="flex justify-center">
          <div>
            <h3 className="font-bold mb-5">Solutions</h3>
            <ul className="space-y-1 flex flex-col gap-3">
              <li>Media Operations Platform</li>
              <li>Marketing Measurement</li>
              <li>Marketing Mix Modeling</li>
              <li>Media Inventory Platform</li>
              <li>Media Inhousing</li>
              <li>TV Attribution</li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center">
          <div>
            <h3 className="font-bold mb-5">Resources</h3>
            <ul className="space-y-1 flex flex-col gap-3">
              <li>Beyond Alphoria</li>
              <li>Company</li>
              <li>Career</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
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
