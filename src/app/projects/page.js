"use client";
import { motion } from "framer-motion";
import React from "react";
import Breadcrumb from "../components/Breadcrumb";

export default function page() {
  const projects = [
    {
      id: 1,
      img: "/images/wall-covers.png",
      alt: "Window Well Covers",
      title: "Window Well Covers",
      subtitle: "Safety meets elegance for basement windows",
      desc: `Our window well covers combine structural integrity with modern aesthetics. Engineered to withstand heavy snow loads while providing unobstructed natural light and ventilation to basement spaces.`,
    },
    {
      id: 2,
      img: "/images/wall-covers.png",
      alt: "Precast Concrete Steps",
      title: "Precast Concrete Steps",
      subtitle: "Durable steps for every entryway",
      desc: `Custom precast concrete steps designed for strength and longevity. Each piece is precision-cast for a perfect fit, offering a low-maintenance, high-impact entrance solution.`,
    },
    {
      id: 3,
      img: "/images/wall-covers.png",
      alt: "Foundation Wall Panels",
      title: "Foundation Wall Panels",
      subtitle: "Insulated and reinforced solutions",
      desc: `Superior insulated wall panels that streamline your build while enhancing energy efficiency. Reinforced steel cores ensure lasting support and peace of mind for any structure.`,
    },
    {
      id: 4,
      img: "/images/wall-covers.png",
      alt: "Architectural Concrete Blocks",
      title: "Architectural Concrete Blocks",
      subtitle: "Aesthetic blocks with structural performance",
      desc: `Our architectural blocks combine form and function—available in a variety of textures and colors to suit your design while meeting rigorous load-bearing requirements.`,
    },
  ];

  return (
    <>
      <Breadcrumb name={"Our Projects"} />
      <div className="bg-gray-900 p-6 md:p-8 lg:p-12 2xl:p-20">
        {projects.map((project, index) => {
          const isEven = (index + 1) % 2 === 0;
          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`
              flex gap-10 
              flex-col 
              lg:flex-row 
              ${isEven ? "lg:flex-row-reverse" : ""} 
              items-center 
              overflow-hidden 
              service-card
              mb-32
            `}
            >
              <div className="w-full lg:w-1/2 max-h-[500px] rounded-2xl overflow-hidden relative">
                <img
                  src={project.img}
                  alt={project.alt}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-40"></div>
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-gray-300">{project.subtitle}</p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 lg:p-8">
                <h2 className="text-4xl font-bold text-white mb-6">
                  {project.title}
                </h2>
                <p className="text-white">{project.desc}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </>
  );
}
