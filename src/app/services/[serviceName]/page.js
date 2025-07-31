"use client";
import React from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Breadcrumb from "@/app/components/Breadcrumb";

export default function page() {
  const params = useParams();
  const name = params.serviceName;
  return (
    <>
      <Breadcrumb name={name.replace("-", " ")} />
      <div className="bg-gray-900 p-6 md:p-8 lg:p-12 2xl:p-20">
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
                <p className="text-gray-300">
                  Architectural precision for residential & commercial
                  applications
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
              <h2 className="text-4xl font-bold text-white mb-6">
                Precast Concrete Steps
              </h2>
              <p className="text-white mb-6">
                Our precast concrete steps are manufactured with exacting
                tolerances using high-strength concrete mixes. Customizable in
                size, finish, and reinforcement to match any architectural
                requirement while exceeding safety standards.Our precast
                concrete steps are manufactured with exacting tolerances using
                high-strength concrete mixes. Customizable in size, finish, and
                reinforcement to match any architectural requirement while
                exceeding safety standards.
              </p>
              <ul className="space-y-3 mb-8 text-white">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-white mr-2 mt-1 flex-shrink-0" />
                  <span>Customizable dimensions & finishes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-white mr-2 mt-1 flex-shrink-0" />
                  <span>Reinforced for heavy load capacity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-white mr-2 mt-1 flex-shrink-0" />
                  <span>Slip-resistant surface options</span>
                </li>
              </ul>
            </div>
          </motion.div>
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
              <h2 className="text-4xl font-bold text-white mb-6">
                Window Well Covers
              </h2>
              <p className="text-white mb-6">
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
                  <CheckCircle2 className="h-5 w-5 text-white mr-2 mt-1 flex-shrink-0" />
                  <span className="text-white">
                    Custom-fit for any window well
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-white mr-2 mt-1 flex-shrink-0" />
                  <span className="text-white">
                    Vandal-resistant polycarbonate options
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-white mr-2 mt-1 flex-shrink-0" />
                  <span className="text-white">Quick installation system</span>
                </li>
              </ul>
            </div>
          </motion.div>
        ) : (
          ""
        )}
      </div>
    </>
  );
}
