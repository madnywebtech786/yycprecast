import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
const Footer = () => (
  <footer className="bg-gradient-2 border-t-4 border-primary rounded-t-xl">
    <div className=" p-4 md:p-8 lg:p-12 2xl:p-20 !pb-5">
      <div className="grid md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center mb-6">
            <span className="text-2xl font-space font-bold text-white">
              YYC PRECAST
            </span>
          </div>
          <p className="text-white mb-6">
            Precision-engineered precast concrete solutions for architectural
            excellence and structural integrity.
          </p>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-white  transition-colors"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="#"
              className="text-white  transition-colors"
            >
              <Instagram size={20} />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="/"
                className="text-white  transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-white  transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="text-white  transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="text-white  transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold text-lg mb-6">Services</h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="/services/precast-concrete-steps"
                className="text-white  transition-colors"
              >
                Precast Concrete Steps
              </Link>
            </li>
            <li>
              <Link
                href="/services/window-well"
                className="text-white  transition-colors"
              >
                Window Well
              </Link>
            </li>
            <li>
              <Link
                href="/services/precast-parking-curbs"
                className="text-white  transition-colors"
              >
                Precast Parking Curbs
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-bold text-lg mb-6">Contact Info</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Phone className="h-5 w-5 text-white mt-1 mr-3 flex-shrink-0" />
              <span className="text-white">(403) 852-1114</span>
            </li>
            <li className="flex items-start">
              <Mail className="h-5 w-5 text-white mt-1 mr-3 flex-shrink-0" />
              <span className="text-white">yycprecast@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t-2 border-primary mt-12 pt-8 text-center text-white">
        <p>&copy; 2023 YYC PRECAST. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
