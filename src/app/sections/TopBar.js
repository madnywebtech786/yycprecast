import { motion } from "framer-motion";
import { Phone, Mail, Facebook, Instagram } from "lucide-react";

const TopBar = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className="bg-gray-900/90 backdrop-blur-sm py-2 text-sm border-b border-gray-800"
  >
    <div className="container mx-auto p-4 md:px-8 lg:px-12 2xl:px-20 flex flex-wrap justify-between items-center">
      <div className="flex space-x-6">
        <a
          href="mailto:yycprecast2@gmail.com"
          className="flex items-center hover:text-primary transition-colors"
        >
          <Mail className="h-4 w-4 mr-1" />
          yycprecast2@gmail.com
        </a>
        <a
          href="tel:+14038521114"
          className="flex items-center hover:text-primary transition-colors"
        >
          <Phone className="h-4 w-4 mr-1" />
          4038521114
        </a>
      </div>
      <div className="hidden lg:flex space-x-4 mt-2 md:mt-0 ">
        <a href="#" className="hover:text-primary transition-colors">
          <Facebook size={20} />
        </a>
        <a href="#" className="hover:text-primary transition-colors">
          <Instagram size={20} />
        </a>
      </div>
    </div>
  </motion.div>
);

export default TopBar;
