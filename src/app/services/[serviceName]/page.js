"use client";
import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Breadcrumb from "@/app/components/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";

export default function page() {
  const params = useParams();
  const name = params.serviceName;
  const universalGallery = [
    "/images/standard.png",
    "/images/universal.png",
    "/images/standard.png",
    "/images/universal.png",
  ];
  const standardGallery = [
    "/images/standard.png",
    "/images/universal.png",
    "/images/standard.png",
    "/images/universal.png",
  ];
  return (
    <>
      <Breadcrumb name={name.replace("-", " ")} />
      <div className=" p-6 md:p-8 lg:p-12 2xl:p-20">
        {name == "precast-concrete-steps" ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex gap-10 flex-col lg:flex-row items-center overflow-hidden service-card"
          >
            <div className="w-full lg:w-1/2 max-h-[500px] rounded-2xl overflow-hidden relative">
              <img
                src="/images/steps.png"
                alt="Precast Concrete Steps"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-40"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold text-white">
                  Precast Concrete Steps
                </h3>
                <p className="text-white">
                  Architectural precision for residential & commercial
                  applications
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Precast Concrete Steps
              </h2>
              <p className="text-black mb-6">
                Our precast concrete steps are manufactured with exacting
                tolerances using high-strength concrete mixes. Customizable in
                size, finish, and reinforcement to match any architectural
                requirement while exceeding safety standards.Our precast
                concrete steps are manufactured with exacting tolerances using
                high-strength concrete mixes. Customizable in size, finish, and
                reinforcement to match any architectural requirement while
                exceeding safety standards.
              </p>
              <ul className="space-y-3 mb-8 text-primary">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Customizable dimensions & finishes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Reinforced for heavy load capacity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span>Slip-resistant surface options</span>
                </li>
              </ul>
            </div>
          </motion.div>
        ) : (
          ""
        )}
        {name == "precast-concrete-steps" ? (
          <div className="grid lg:grid-cols-2 gap-10 mt-20">
            <div className="relative rounded-xl border-2 border-primary overflow-hidden group">
              <Image
                src={"/images/universal.png"}
                width={300}
                height={300}
                className="w-full h-full max-h-[350px] object-cover relative z-10 rounded-xl group-hover:scale-110 duration-200"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-20 rounded-xl"></div>

              <div className="absolute bottom-6 left-6 z-30">
                <h3 className="text-2xl font-bold text-white">
                  Universal Precast Concrete Steps
                </h3>
                <p className="text-white">
                  Architectural precision for residential & commercial
                  applications
                </p>
                <Link href={"/services/universal-precast-steps"}>
                  <button className="p-2 text-primary bg-white text-xs rounded-2xl mt-3 cursor-pointer ">
                    Read More
                  </button>
                </Link>
              </div>
            </div>

            <div className="relative rounded-xl border-2 border-primary overflow-hidden group">
              <Image
                src={"/images/standard.png"}
                width={300}
                height={300}
                className="w-full h-full max-h-[350px] object-cover relative z-10 rounded-xl group-hover:scale-110 duration-200"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-20 rounded-xl"></div>

              <div className="absolute bottom-6 left-6 z-30">
                <h3 className="text-2xl font-bold text-white">
                  Standard Precast Concrete Steps
                </h3>
                <p className="text-white">
                  Architectural precision for residential & commercial
                  applications
                </p>
                <Link href={"/services/standard-precast-steps"}>
                  <button className="p-2 text-primary bg-white text-xs rounded-2xl mt-3 cursor-pointer ">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {name == "window-well-covers" ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-10 flex-col lg:flex-row items-center overflow-hidden service-card"
          >
            <div className="w-full lg:w-1/2 max-h-[500px] rounded-2xl overflow-hidden relative">
              <img
                src="/images/wall-covers.png"
                alt="Window Well Covers"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-40"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold text-white">
                  Window Well Covers
                </h3>
                <p className="text-gray-300">
                  Safety meets elegance for basement windows
                </p>
              </div>
            </div>
            <div className=" w-full lg:w-1/2  lg:p-8">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Window Well Covers
              </h2>
              <p className="text-black mb-6">
                Our window well covers combine structural integrity with modern
                aesthetics. Engineered to withstand heavy snow loads while
                providing unobstructed natural light and ventilation to basement
                spaces. Our window well covers combine structural integrity with
                modern aesthetics. Engineered to withstand heavy snow loads
                while providing unobstructed natural light and ventilation to
                basement spaces.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-primary">
                    Custom-fit for any window well
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-primary">
                    Vandal-resistant polycarbonate options
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                  <span className="text-primary">
                    Quick installation system
                  </span>
                </li>
              </ul>
            </div>
          </motion.div>
        ) : (
          ""
        )}

        {name == "universal-precast-steps" ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex gap-10 flex-col lg:flex-row items-center overflow-hidden service-card"
            >
              <div className="w-full lg:w-1/2 max-h-[500px] rounded-2xl overflow-hidden relative">
                <img
                  src="/images/wall-covers.png"
                  alt="Universal Precast Concrete Steps"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-40"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white">
                    Universal Precast Concrete Steps
                  </h3>
                  <p className="text-gray-300">
                    Safety meets elegance for basement windows
                  </p>
                </div>
              </div>
              <div className=" w-full lg:w-1/2  lg:p-8">
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Universal Precast Concrete Steps
                </h2>
                <p className="text-black mb-6">
                  Our window well covers combine structural integrity with
                  modern aesthetics. Engineered to withstand heavy snow loads
                  while providing unobstructed natural light and ventilation to
                  basement spaces. Our window well covers combine structural
                  integrity with modern aesthetics. Engineered to withstand
                  heavy snow loads while providing unobstructed natural light
                  and ventilation to basement spaces.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-primary">
                      Custom-fit for any window well
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-primary">
                      Vandal-resistant polycarbonate options
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-primary">
                      Quick installation system
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <Swiper
              spaceBetween={10}
              slidesPerView={3}
              breakpoints={{
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 3 },
              }}
              className="mt-20  max-h-[450px]"
              modules={[Autoplay]}
              autoplay={{ delay: 3000 }}
              loop={true}
            >
              {universalGallery.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <Image
                    src={src}
                    width={400}
                    height={400}
                    className="w-full  max-h-[450px] rounded-xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        ) : (
          ""
        )}

        {name == "standard-precast-steps" ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex gap-10 flex-col lg:flex-row items-center overflow-hidden service-card"
            >
              <div className="w-full lg:w-1/2 max-h-[500px] rounded-2xl overflow-hidden relative">
                <img
                  src="/images/wall-covers.png"
                  alt="Standard Precast Concret Steps"
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-40"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white">
                    Standard Precast Concrete Steps
                  </h3>
                  <p className="text-gray-300">
                    Safety meets elegance for basement windows
                  </p>
                </div>
              </div>
              <div className=" w-full lg:w-1/2  lg:p-8">
                <h2 className="text-4xl font-bold text-primary mb-6">
                  Standard Precast Concrete Steps
                </h2>
                <p className="text-black mb-6">
                  Our window well covers combine structural integrity with
                  modern aesthetics. Engineered to withstand heavy snow loads
                  while providing unobstructed natural light and ventilation to
                  basement spaces. Our window well covers combine structural
                  integrity with modern aesthetics. Engineered to withstand
                  heavy snow loads while providing unobstructed natural light
                  and ventilation to basement spaces.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-primary">
                      Custom-fit for any window well
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-primary">
                      Vandal-resistant polycarbonate options
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-primary">
                      Quick installation system
                    </span>
                  </li>
                </ul>
              </div>
            </motion.div>

            <Swiper
              spaceBetween={10}
              slidesPerView={3}
              breakpoints={{
                640: { slidesPerView: 1 },
                1024: { slidesPerView: 3 },
              }}
              className="mt-20  max-h-[450px]"
              modules={[Autoplay]}
              autoplay={{ delay: 3000 }}
              loop={true}
            >
              {standardGallery.map((src, idx) => (
                <SwiperSlide key={idx}>
                  <Image
                    src={src}
                    width={400}
                    height={400}
                    className="w-full  max-h-[450px] rounded-xl"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
