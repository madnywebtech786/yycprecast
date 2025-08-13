import { Phone, Mail, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
const Footer = () => (
  <footer className="py-16 bg-white border-t-4 border-primary rounded-t-xl">
    <div className=" p-4 md:p-8 lg:p-12 2xl:p-20">
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
            <Link
              href="#"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-primary transition-colors"
            >
              <Instagram size={20} />
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-primary font-bold text-lg mb-6">Quick Links</h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="/"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#projects"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact-us"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-primary font-bold text-lg mb-6">Services</h3>
          <ul className="space-y-3">
            <li>
              <Link
                href="/services/precast-concrete-steps"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Precast Concrete Steps
              </Link>
            </li>
            <li>
              <Link
                href="/services/window-well-covers"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Window Well Covers
              </Link>
            </li>
            <li>
              <Link
                href="/services/precast-parking-curbs"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                Precast Parking Curbs
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-primary font-bold text-lg mb-6">Contact Info</h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <Phone className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-400">(403) 852-1114</span>
            </li>
            <li className="flex items-start">
              <Mail className="h-5 w-5 text-primary mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-400">yycprecast@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t-2 border-primary mt-12 pt-8 text-center text-gray-500">
        <p>
          &copy; 2023 YYC PRECAST. All rights reserved. Precision-engineered
          precast concrete solutions for Calgary & Surrounding Areas.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
