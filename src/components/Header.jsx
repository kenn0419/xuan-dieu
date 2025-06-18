import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import logo from "../assets/images/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showBackGroundHeader, setShowBackGroundHeader] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleLogoClick = (e) => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      e.preventDefault();
      navigate("/");
    }
  };
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
  return (
    <header
      className={`fixed top-0 left-0 w-full z-[99] shadow-2xl ${
        showBackGroundHeader ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="xl:w-[1200px] md:w-full lg:w-full mx-auto flex justify-between items-center py-2">
        <Link to={`/`} onClick={handleLogoClick}>
          <img src={logo} alt="XD MEDIA" className="w-25" />
        </Link>
        <nav className="hidden xl:flex gap-6 text-xl items-center">
          <Link to={`/`}>Trang Chủ</Link>
          <a href="#">Giới Thiệu</a>
          <a href="#">Xu Hướng</a>
          <Link to={`/teams`}>Thành viên</Link>
          <a
            onClick={() => {
              const footer = document.getElementById("footer");
              if (footer) {
                footer.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className="px-4 py-2 relative rounded-md border border-primary hover:bg-primary cursor-pointer"
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
