import { FaLinkedinIn, FaXing, FaXTwitter, FaYoutube } from "react-icons/fa6";
import logo from "../assets/images/logo.png";
const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-gradient-to-br from-black to-[#05112D] text-gray-800 px-6 md:px-16 py-12 text-sm relative"
    >
      <div className="absolute bottom-0 left-0 w-65 h-70 bg-orange-400 opacity-25 blur-[100px] rounded-full pointer-events-none z-0"></div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10 text-white">
        {/* Contact */}
        <div>
          <h3 className="font-bold mb-5">Contact</h3>
          <div className="flex flex-col gap-3">
            <p>Mercury Media Technology GmbH &amp; Co. KG</p>
            <p>Klostertor 1</p>
            <p>20097 Hamburg / Germany</p>
            <p className="mt-2">hello@mercurymediatechnology.com</p>
            <p>Get in touch - we speak 12 languages</p>
          </div>
        </div>

        {/* Solutions */}
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

        {/* Resources */}
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

      {/* Social icons */}
      <div className="flex items-center gap-2">
        <div className="w-3/7 h-[1px] bg-gray-300"></div>
        <div className="flex-auto flex justify-center space-x-5">
          <a href="#" className="text-xl hover:text-gray-600">
            <FaLinkedinIn color="white" />
          </a>
          <a href="#" className="text-xl hover:text-gray-600">
            <FaXing color="white" />
          </a>
          <a href="#" className="text-xl hover:text-gray-600">
            <FaYoutube color="white" />
          </a>
          <a href="#" className="text-xl hover:text-gray-600">
            <FaXTwitter color="white" />
          </a>
        </div>
        <div className="w-3/7  h-[1px] bg-gray-300"></div>
      </div>

      {/* Logo & Copyright */}
      <div className="flex flex-col items-center pt-6 space-y-2">
        {/* Logo placeholder */}
        <img src={logo} alt="MMT logo" className="h-12" />
        <p className="text-xs text-center text-gray-400">
          © Copyright 2025 | Mercury Media Technology GmbH & Co. KG
        </p>
      </div>
    </footer>
  );
};

export default Footer;
