import { useEffect, useState } from "react";

const Header = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-2 shadow-2xl ${
        show ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="w-[1500px] mx-auto flex justify-between items-center px-6 py-4">
        <nav className="flex gap-6 text-base">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Trending</a>
          <a href="#footer">Contact</a>
        </nav>
        <div className="text-2xl font-medium">
          Events<span className="text-primary">.</span>
        </div>
        <div className="flex gap-6">
          <button className="text-sm cursor-pointer">Sign In</button>
          <button className="px-4 py-2 border text-sm cursor-pointer">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
