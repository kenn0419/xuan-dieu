const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-gradient-to-br from-black to-[#05112D] h-[500px] text-text-light px-16 flex gap-4 relative"
    >
      <div className="absolute bottom-0 left-0 w-65 h-70 bg-orange-400 opacity-25 blur-[100px] rounded-full pointer-events-none z-0"></div>

      <div className="border-l border-[#291C27] pt-16 relative">
        <h3 className="text-3xl font-medium mb-4">Events.</h3>
        <p className="text-sm">Your seamless gateway to the world of Web3.</p>
        <p className="text-xs mt-8 font-medium absolute bottom-5 left-0 pl-8">
          2021 All Right Reserved
        </p>
      </div>

      <div className="border-l border-[#291C27] pt-16">
        <h3 className="text-xl font-medium mb-4 border-l-2 border-primary px-3">
          Our Events
        </h3>
        <ul className="space-y-2 text-sm px-3 flex flex-col gap-5 mt-6">
          <li>
            <a href="#" className="hover:text-white">
              Corporate Event
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Festival
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Celebration
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Meeting
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Fun Party
            </a>
          </li>
        </ul>
      </div>

      <div className="border-l border-[#291C27] pt-16">
        <h3 className="text-xl font-medium mb-4 border-l-2 border-primary px-3">
          Company
        </h3>
        <ul className="space-y-2 text-sm flex flex-col gap-5 mt-6 px-3">
          <li>
            <a href="#" className="hover:text-white">
              Our Team
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-white">
              Career?
            </a>
          </li>
        </ul>
      </div>

      <div className="border-x border-[#291C27] pt-16">
        <h3 className="text-xl font-medium mb-4 border-l-2 border-primary px-3">
          Contact
        </h3>
        <ul className="space-y-2 text-sm flex flex-col gap-5 mt-6 px-3">
          <li>
            <a
              href="https://instagram.com/nishar_UIUX"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              Instagram/nishar_UIUX
            </a>
          </li>
          <li>
            <a
              href="mailto:nisharmuftani007@gmail.com"
              className="hover:text-white"
            >
              nisharmuftani007@gmail.com
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
