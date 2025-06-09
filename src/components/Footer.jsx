const Footer = () => {
  return (
    <footer className="bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 text-gray-400">
        {/* Section 1: Events */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-6">Events</h3>
          <p className="mb-4">Your gateway to the world of Web3.</p>
          <div className="flex space-x-4">
            {/* Social Media Icons - replace with actual icons */}
            <a href="#" className="hover:text-white transition duration-300">
              <i className="fab fa-facebook-f"></i>{" "}
              {/* Example: Use Font Awesome */}
            </a>
            <a href="#" className="hover:text-white transition duration-300">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="hover:text-white transition duration-300">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Section 2: Our Events */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-6">Our Events</h3>
          <ul>
            <li className="mb-3">
              <a href="#" className="hover:text-white transition duration-300">
                Tech Conference
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="hover:text-white transition duration-300">
                Art Exhibition
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="hover:text-white transition duration-300">
                Concert
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="hover:text-white transition duration-300">
                Fun Party
              </a>
            </li>
          </ul>
        </div>

        {/* Section 3: Company */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-6">Company</h3>
          <ul>
            <li className="mb-3">
              <a href="#" className="hover:text-white transition duration-300">
                About Us
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="hover:text-white transition duration-300">
                Contact Us
              </a>
            </li>
            <li className="mb-3">
              <a href="#" className="hover:text-white transition duration-300">
                Support
              </a>
            </li>
          </ul>
        </div>

        {/* Section 4: Contact */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-6">Contact</h3>
          <p className="mb-3">
            <i className="fas fa-map-marker-alt mr-2"></i>{" "}
            {/* Example: Use Font Awesome */}
            02/100, M.P. Nagar, Ujjain, India
          </p>
          <p className="mb-3">
            <i className="fas fa-envelope mr-2"></i>
            metaventurer001@gmail.com
          </p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-500">
        <p>&copy; 2024 All Right Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
