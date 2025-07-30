import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Navigation = ({
  isSticky,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  handleScroll,
}) => (
  <nav
    className={`${
      isSticky ? "fixed top-0" : "sticky top-0"
    } z-50 transition-all duration-300 w-full ${
      isSticky
        ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-800 shadow-xl"
        : "bg-gray-900/75 backdrop-blur-sm"
    }`}
  >
    <div className="container mx-auto p-4 md:px-8 lg:px-12 2xl:px-20 ">
      <div className="flex items-center justify-between h-16">
        <a href="#" className="flex items-center space-x-2 group">
          <span className="text-xl font-space font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
            YYC PRECAST
          </span>
        </a>

        <div className="hidden lg:flex items-center space-x-8">
          <a
            href="#home"
            onClick={(e) => handleScroll(e, "home")}
            className="nav-link relative text-gray-300 hover:text-white transition-colors font-medium"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={(e) => handleScroll(e, "about")}
            className="nav-link relative text-gray-300 hover:text-white transition-colors font-medium"
          >
            About Us
          </a>

          <div className="relative group">
            <a
              href="#services"
              className="nav-link relative text-gray-300 hover:text-white transition-colors font-medium flex items-center"
            >
              Our Services
              <ChevronDown className="h-4 w-4 ml-1" />
            </a>
            <div className="absolute left-0 mt-2 w-56 bg-gray-800/95 glass-effect rounded-xl shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
              <a
                href="#precast-steps"
                onClick={(e) => handleScroll(e, "services")}
                className="block px-4 py-2 text-gray-300 hover:bg-primary/20 hover:text-white transition-colors"
              >
                Precast Concrete Steps
              </a>
              <a
                href="#window-well"
                onClick={(e) => handleScroll(e, "services")}
                className="block px-4 py-2 text-gray-300 hover:bg-primary/20 hover:text-white transition-colors"
              >
                Window Well Covers
              </a>
            </div>
          </div>

          <a
            href="#projects"
            onClick={(e) => handleScroll(e, "projects")}
            className="nav-link relative text-gray-300 hover:text-white transition-colors font-medium"
          >
            Projects
          </a>
          <a
            href="#testimonials"
            onClick={(e) => handleScroll(e, "testimonials")}
            className="nav-link relative text-gray-300 hover:text-white transition-colors font-medium"
          >
            Testimonials
          </a>
          <a
            href="#contact"
            onClick={(e) => handleScroll(e, "contact")}
            className="nav-link relative text-gray-300 hover:text-white transition-colors font-medium"
          >
            Contact Us
          </a>
        </div>

        <a
          href="#contact"
          onClick={(e) => handleScroll(e, "contact")}
          className="hidden lg:block bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary text-white font-medium py-2 px-5 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-primary/30"
        >
          Get Quote
        </a>

        <button
          className="lg:hidden text-gray-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden border-t border-gray-800"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              onClick={(e) => handleScroll(e, "home")}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, "about")}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
            >
              About Us
            </a>
            <div className="pl-4 border-l-2 border-primary">
              <a
                href="#precast-steps"
                onClick={(e) => handleScroll(e, "services")}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
              >
                Precast Concrete Steps
              </a>
              <a
                href="#window-well"
                onClick={(e) => handleScroll(e, "services")}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
              >
                Window Well Covers
              </a>
            </div>
            <a
              href="#projects"
              onClick={(e) => handleScroll(e, "projects")}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
            >
              Projects
            </a>
            <a
              href="#testimonials"
              onClick={(e) => handleScroll(e, "testimonials")}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800"
            >
              Contact Us
            </a>
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "contact")}
              className="block mt-4 w-full bg-gradient-to-r from-primary to-primary-dark text-white font-medium py-2 px-4 rounded-xl text-center"
            >
              Get Quote
            </a>
          </div>
        </motion.div>
      )}
    </div>
  </nav>
);

export default Navigation;
