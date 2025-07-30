import { Phone, Mail,Facebook,Instagram } from "lucide-react";
const Footer = ({ handleScroll }) => (
  <footer className="py-16 bg-gray-950 border-t border-gray-800">
    <div className="container mx-auto p-4 md:p-8 lg:p-12 2xl:p-20">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center mb-6">
            <span className="text-2xl font-space font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
              YYC PRECAST
            </span>
          </div>
          <p className="text-gray-400 mb-6">
            Precision-engineered precast concrete solutions for architectural
            excellence and structural integrity.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Facebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Instagram size={20} />
              
            </a>

          </div>
        </div>

        <div>
          <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#home"
                onClick={(e) => handleScroll(e, "home")}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                onClick={(e) => handleScroll(e, "about")}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#services"
                onClick={(e) => handleScroll(e, "services")}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#projects"
                onClick={(e) => handleScroll(e, "projects")}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                onClick={(e) => handleScroll(e, "testimonials")}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Testimonials
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold text-lg mb-6">Services</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="#precast-steps"
                onClick={(e) => handleScroll(e, "services")}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Precast Concrete Steps
              </a>
            </li>
            <li>
              <a
                href="#window-well"
                onClick={(e) => handleScroll(e, "services")}
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Window Well Covers
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Custom Solutions
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Architectural Elements
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Infrastructure Components
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Phone className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-400">4038521114</span>
            </li>
            <li className="flex items-start">
              <Mail className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-400">yycprecast2@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
        <p>
          &copy; 2023 YYC PRECAST. All rights reserved. Precision-engineered
          precast concrete solutions for Western Canada.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
