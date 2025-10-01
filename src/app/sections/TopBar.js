import { Phone, Mail, Facebook, Instagram } from "lucide-react";

const TopBar = () => (
  <div className="bg-gradient-1 backdrop-blur-sm py-2 text-sm border-b border-primary !text-white dark:!text-white">
    <div className="w-full p-4 md:px-8 lg:px-12 2xl:px-20 flex flex-wrap justify-between items-center">
      <div className="flex space-x-6">
        <a
          href="mailto:yycprecast2@gmail.com"
          className="flex items-center  transition-colors"
        >
          <Mail className="h-4 w-4 mr-1" />
          yycprecast2@gmail.com
        </a>
        <a
          href="tel:+14038521114"
          className="flex items-center  transition-colors"
        >
          <Phone className="h-4 w-4 mr-1" />
          (403) 852-1114
        </a>
      </div>
      <div className="hidden lg:flex space-x-4 mt-2 md:mt-0 ">
        <a href="#" className=" transition-colors">
          <Facebook size={20} />
        </a>
        <a href="https://www.instagram.com/yycprecast/?igsh=MTJzcjJtMHNtMW91Ng%3D%3D#" className=" transition-colors">
          <Instagram size={20} />
        </a>
      </div>
    </div>
  </div>
);

export default TopBar;
