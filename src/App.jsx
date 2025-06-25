import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
  useLocation,
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
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);
  return (
    <div className="text-white bg-gradient-to-br from-black to-purple-900 relative">
      <div className="fixed right-2 bottom-20 z-[80] flex flex-col gap-5">
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
        <Link
          to={"/"}
          className="p-2 bg-gradient-to-br from-red-500 to-orange-300 rounded-full cursor-pointer flex items-center justify-center"
        >
          <FaArrowUp size={24} />
        </Link>
      </div>
      {showMenu && (
        <div
          className="absolute z-[99] right-0 top-0 w-2/5 h-full bg-white"
          ref={menuRef}
        ></div>
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
