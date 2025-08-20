"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import TopBar from "./TopBar";
import Link from "next/link";
import Image from "next/image";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // State for sticky navigation
  const [isSticky, setIsSticky] = useState(false);
  // Sticky navigation effect
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 350);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div
        className={`${
          isSticky ? "fixed top-0" : "fixed top-0"
        } z-50 transition-all duration-300   w-full ${
          isSticky ? " backdrop-blur-md" : " backdrop-blur-sm"
        }`}
      >
        <TopBar />
        <nav>
          <div className="w-full p-4 md:px-8 lg:px-12 2xl:px-20 bg-white">
            <div className="flex items-center justify-between h-16">
              <Link href="/" className="flex items-center space-x-2 group">
                <Image src={'/images/logo.svg'} width={100} height={100} className="w-28 h-28" />
              </Link>

              <div className="hidden lg:flex items-center space-x-8">
                <Link
                  href="/"
                  className="nav-link relative text-primary  transition-colors font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/about-us"
                  className="nav-link relative text-primary  transition-colors font-medium"
                >
                  About Us
                </Link>

                <div className="relative group">
                  <Link
                    href="#services"
                    className="nav-link relative text-primary  transition-colors font-medium flex items-center"
                  >
                    Our Services
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </Link>
                  <div className="absolute left-0 mt-2 w-56 bg-gradient-2 rounded-xl shadow-2xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <Link
                      href="/services/precast-concrete-steps"
                      className="block px-4 py-2 text-white  transition-colors"
                    >
                      Precast Concrete Steps
                    </Link>
                    <Link
                      href="/services/window-well"
                      className="block px-4 py-2 text-white  transition-colors"
                    >
                      Window Well
                    </Link>
                    <Link
                      href="/services/precast-parking-curbs"
                      className="block px-4 py-2 text-white  transition-colors"
                    >
                      Precast Parking Curbs
                    </Link>
                  </div>
                </div>

                {/* <Link
                  href="/projects/all"
                  className="nav-link relative text-primary  transition-colors font-medium"
                >
                  Projects
                </Link> */}
                <Link
                  href="/mission"
                  className="nav-link relative text-primary  transition-colors font-medium"
                >
                  Mission
                </Link>

                <Link
                  href="/contact-us"
                  className="nav-link relative text-primary  transition-colors font-medium"
                >
                  Contact Us
                </Link>
              </div>

              <Link
                href="/contact-us"
                className="hidden lg:block bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary text-white font-medium py-2 px-5 rounded-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-primary/30"
              >
                Get Quote
              </Link>

              <button
                className="lg:hidden text-primary "
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
                className="lg:hidden"
              >
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                  <Link
                    href="/"
                    className="block px-3 py-2 rounded-md text-base font-medium text-primary  hover:bg-primary/30"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about-us"
                    className="block px-3 py-2 rounded-md text-base font-medium text-primary  hover:bg-primary/30"
                  >
                    About Us
                  </Link>
                  <div className="pl-4 border-l-2 border-primary">
                    <Link
                      href="/services/precast-concrete-steps"
                      className="block px-3 py-2 rounded-md text-base font-medium text-primary  hover:bg-primary/30"
                    >
                      Precast Concrete Steps
                    </Link>
                    <Link
                      href="/services/window-well"
                      className="block px-3 py-2 rounded-md text-base font-medium text-primary  hover:bg-primary/30"
                    >
                      Window Well
                    </Link>{" "}
                    <Link
                      href="/services/precast-parking-curbs"
                      className="block px-3 py-2 rounded-md text-base font-medium text-primary  hover:bg-primary/30"
                    >
                      Precast Parking Curbs
                    </Link>
                  </div>
                  {/* <Link
                    href="/projects/all"
                    className="block px-3 py-2 rounded-md text-base font-medium text-primary  hover:bg-primary/30"
                  >
                    Projects
                  </Link> */}
                  <Link
                    href="/mission"
                    className="block px-3 py-2 rounded-md text-base font-medium text-primary  hover:bg-primary/30"
                  >
                    Mission
                  </Link>
                  <Link
                    href="/contact-us"
                    className="block px-3 py-2 rounded-md text-base font-medium text-primary  hover:bg-primary/30"
                  >
                    Contact Us
                  </Link>
                  <Link
                    href="/contact-us"
                    className="block mt-4 w-full bg-gradient-to-r from-primary to-primary-dark text-white font-medium py-2 px-4 rounded-xl text-center"
                  >
                    Get Quote
                  </Link>
                </div>
              </motion.div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
