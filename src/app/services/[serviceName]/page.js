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
    "/images/universal1.webp",
    "/images/universal2.webp",
    "/images/universal3.webp",
    "/images/universal4.webp",
  ];
  const standardGallery = [
    "/images/standard.webp",
    "/images/standard3.webp",
    "/images/standard4.webp",
    "/images/standard2.webp",
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
              <Image
                width={800}
                height={800}
                src="/images/precast.webp"
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
                At YYC Precast, our precast concrete steps are engineered for
                strength, safety, and visual appeal. Designed to handle
                Calgary’s freeze-thaw cycles, they resist cracking, chipping,
                and shifting over time. Manufactured in a controlled
                environment, each step is reinforced with steel for added
                durability and finished to meet strict safety standards,
                including slip resistance. Whether for a new build, renovation,
                or replacement, our steps are ready for quick installation,
                saving time and labour costs without compromising on quality.
                <br />
                <br />
                We offer two main categories to meet your needs Universal
                Precast Concrete Steps, which are designed to fit a wide range
                of entryways with minimal adjustments, and Standard Precast
                Concrete Steps, ideal for common residential and
                light-commercial applications. Both options are available in a
                variety of dimensions, finishes, and reinforcement levels,
                ensuring the perfect match for your property. From single-step
                landings to multi-step assemblies, YYC Precast delivers
                precision craftsmanship with every installation.
              </p>
            </div>
          </motion.div>
        ) : (
          ""
        )}
        {name == "precast-concrete-steps" ? (
          <div className="grid lg:grid-cols-2 gap-10 mt-20">
            <div className="relative rounded-xl border-2 border-primary overflow-hidden group">
              <Image
                src={"/images/universal.webp"}
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
                src={"/images/standard.webp"}
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
        {name == "window-well" ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-10 flex-col lg:flex-row items-center overflow-hidden service-card"
          >
            <div className="w-full lg:w-1/2 max-h-[500px] rounded-2xl overflow-hidden relative">
              <Image
                width={800}
                height={800}
                src="/images/window-wells.webp"
                alt="Window Well"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-40"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold text-white">
                  Window Wells
                </h3>
                <p className="text-gray-300">
                  Safety meets elegance for basement windows
                </p>
              </div>
            </div>
            <div className=" w-full lg:w-1/2  lg:p-8">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Window Wells
              </h2>
              <p className="text-black mb-6">
                Our precast window wells combine durability, safety, and
                function, making them the perfect choice for Calgary homes and
                commercial buildings. Constructed from high-strength concrete,
                they are designed to withstand soil pressure, heavy snow loads,
                and years of exposure to harsh weather. Each window well offers
                excellent drainage to prevent water buildup, while allowing
                maximum light into basement areas for a brighter, safer space.
                <br />
                <br />
                Available in multiple sizes and finishes, our window wells can
                be tailored to complement your property’s exterior. They install
                quickly and cleanly, reducing disruption to your project
                timeline. Whether you’re replacing an old steel well or adding a
                new basement escape route, YYC Precast’s solutions are
                engineered for long-term performance and visual appeal.
              </p>
            </div>
          </motion.div>
        ) : (
          ""
        )}

        {name == "precast-parking-curbs" ? (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-10 flex-col lg:flex-row items-center overflow-hidden service-card"
          >
            <div className="w-full lg:w-1/2 max-h-[500px] rounded-2xl overflow-hidden relative">
              <Image
                width={800}
                height={800}
                src="/images/parking-crub.webp"
                alt="Precast Parking Curbs"
                className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-40"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-bold text-white">
                  Precast Parking Curbs
                </h3>
                <p className="text-gray-300">
                  Efficient parking management with long-lasting performance
                </p>
              </div>
            </div>
            <div className=" w-full lg:w-1/2  lg:p-8">
              <h2 className="text-4xl font-bold text-primary mb-6">
                Precast Parking Curbs
              </h2>
              <p className="text-black mb-6">
                YYC Precast parking curbs are built for resilience and
                reliability, offering a simple yet highly effective way to
                organize parking areas and protect surrounding structures. Made
                with high-strength, weather-resistant concrete, they can handle
                constant vehicle impact without cracking or chipping, even in
                Calgary’s extreme temperature shifts. Their consistent
                dimensions and weight make them easy to install, move, or
                reposition as needed.
                <br />
                <br />
                Perfect for commercial parking lots, residential complexes, and
                public spaces, our parking curbs help keep vehicles in
                designated spots, reducing accidental damage to landscaping,
                signage, and buildings. They are available in standard sizes and
                can be finished with reflective paint or embedded markers for
                enhanced visibility and safety. With YYC Precast, you get a
                product that is low-maintenance, long-lasting, and built to
                perform in Alberta’s demanding conditions.
              </p>
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
                <Image
                  width={800}
                  height={800}
                  src="/images/universal.webp"
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
                  Our Universal Steps are designed for maximum versatility,
                  fitting a variety of entryway layouts without the need for
                  custom sizing. Perfect for contractors and property managers,
                  these steps offer a standard rise and run that meets most
                  building requirements, making them a cost-effective and
                  time-saving choice.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-primary">
                      Fits multiple building layouts with minimal adjustments
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-primary">
                      Ideal for replacement or quick installs
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-primary">
                      High-strength reinforcement for heavy traffic use
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-primary">
                      Available in slip-resistant finishes for added safety
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
                <Image
                  width={800}
                  height={800}
                  src="/images/standard.webp"
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
                  Our Standard Steps are built to meet common residential and
                  light-commercial specifications, offering a perfect balance of
                  affordability and performance. With a variety of tread widths,
                  heights, and finish options, they provide a durable and
                  attractive entry solution for any property.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-primary">
                      Economical choice without sacrificing quality
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-primary">
                      Multiple width and height options available
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-primary">
                      Smooth or textured finishes to match building style
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0" />
                    <span className="text-primary">
                      Low maintenance and weather-resistant
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
