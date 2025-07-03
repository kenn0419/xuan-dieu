import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
  useLocation,
  useNavigate,
} from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./page/home.page";
import TeamPage from "./page/team.page";
import { useEffect, useRef, useState } from "react";
import {
  FaArrowUp,
  FaFacebookF,
  FaFacebookMessenger,
  FaPhone,
} from "react-icons/fa6";
import { SiGmail, SiZalo } from "react-icons/si";

const mediaList = [
  {
    id: 1,
    title: "zalo",
    icon: SiZalo,
    link: "",
  },
  {
    id: 2,
    title: "messenger",
    icon: FaFacebookMessenger,
    link: "",
  },
  {
    id: 3,
    title: "phone",
    icon: FaPhone,
    link: "0325563003",
  },
];
const AppContent = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const menuRef = useRef();
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setShowMenu(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <div className="text-white bg-gradient-to-br from-black to-purple-900 relative">
      <div className="fixed right-2 bottom-20 z-[99] flex flex-col gap-5">
        {mediaList.map((media) => (
          <a
            key={media.id}
            className="p-2 bg-gradient-to-br from-red-500 to-orange-300 rounded-full cursor-pointer"
            href={media.title == "phone" ? `tel:${media.link}` : media.link}
          >
            <media.icon color="white" size={25} />
          </a>
        ))}
      </div>
      <div className="fixed bottom-5 right-2 z-[80]">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="p-2 bg-gradient-to-br from-red-500 to-orange-300 rounded-full cursor-pointer flex items-center justify-center"
        >
          <FaArrowUp size={24} />
        </button>
      </div>
      {showMenu && (
        <div
          className="fixed z-[99] right-0 top-0 w-2/5 h-full bg-gradient-to-br from-red-500 to-orange-300 py-5 animate-slide-right"
          ref={menuRef}
        >
          <nav className="flex flex-col gap-6 text-lg items-center">
            <Link to={`/`} className="hover:text-primary">
              Trang Chủ
            </Link>
            <a
              onClick={() => {
                const introduce = document.getElementById("introduce");
                if (introduce) {
                  introduce.scrollIntoView({ behavior: "smooth" });
                } else {
                  navigate("/#introduce");
                }
                setShowMenu(false);
              }}
              className="cursor-pointer hover:text-primary"
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
                setShowMenu(false);
              }}
              className="cursor-pointer hover:text-primary"
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
                setShowMenu(false);
              }}
              className="cursor-pointer hover:text-primary"
            >
              Dịch Vụ
            </a>
            <a
              onClick={() => {
                const footer = document.getElementById("footer");
                if (footer) {
                  footer.scrollIntoView({ behavior: "smooth" });
                }
                setShowMenu(false);
              }}
              className="px-4 py-2 text-white font-semibold rounded-md cursor-pointer 
             bg-transparent border border-primary transition duration-800 ease-in-out
             hover:bg-gradient-to-r hover:from-[#D40814] hover:via-30%-[#DF4158] hover:via-70%-[#F2715C] hover:to-[#EE4121] hover:text-black"
            >
              Liên Hệ
            </a>
          </nav>
        </div>
      )}
      <Header onShowMenu={setShowMenu} />
      <Outlet />
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppContent />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "/teams", element: <TeamPage /> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
