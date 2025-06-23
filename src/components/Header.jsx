import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import logoThumbnail from "../assets/images/logo-XD.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showBackGroundHeader, setShowBackGroundHeader] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY) {
        setShowBackGroundHeader(true);
      } else {
        setShowBackGroundHeader(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (location.hash === "#introduce") {
      const section = document.getElementById("introduce");
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    } else if (location.hash === "#trending") {
      const section = document.getElementById("trending");
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    } else if (location.hash === "#service") {
      const section = document.getElementById("service");
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 200);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);
  return (
    <header
      className={`fixed top-0 left-0 w-full z-[99] shadow-2xl ${
        showBackGroundHeader ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="xl:w-[1200px] md:w-full lg:w-full mx-auto flex justify-between items-center py-2">
        <a className="cursor-pointer">
          <img
            src={logoThumbnail}
            alt="XD MEDIA"
            className="w-22 object-contain"
          />
        </a>
        <nav className="hidden xl:flex gap-6 text-lg items-center">
          <Link to={`/`}>Trang Chủ</Link>
          <a
            onClick={() => {
              const introduce = document.getElementById("introduce");
              if (introduce) {
                introduce.scrollIntoView({ behavior: "smooth" });
              } else {
                navigate("/#introduce");
              }
            }}
            className="cursor-pointer"
          >
            Giới Thiệu
          </a>
          <a
            onClick={() => {
              const trending = document.getElementById("trending");
              if (trending) {
                trending.scrollIntoView({ behavior: "smooth" });
              } else {
                navigate("/#trending");
              }
            }}
            className="cursor-pointer"
          >
            Xu Hướng
          </a>
          <a
            onClick={() => {
              const service = document.getElementById("service");
              if (service) {
                service.scrollIntoView({ behavior: "smooth" });
              } else {
                navigate("/#service");
              }
            }}
            className="cursor-pointer"
          >
            Dịch Vụ
          </a>
          <a
            onClick={() => {
              const footer = document.getElementById("footer");
              if (footer) {
                footer.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-4 py-2 text-white font-semibold rounded-md cursor-pointer 
             bg-transparent border border-primary transition duration-800 ease-in-out
             hover:bg-gradient-to-br hover:from-red-500 hover:to-orange-300 hover:text-black"
          >
            Liên Hệ
          </a>
        </nav>

        <div className="lg:hidden">
          <span className="cursor-pointer">
            <IoMenu size={30} color="black" />
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
