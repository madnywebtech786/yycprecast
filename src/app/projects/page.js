"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, Grid3X3 } from "lucide-react";
import Image from "next/image";
import Breadcrumb from "../components/Breadcrumb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Keyboard } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const projects = [
  { id: 1, src: "/images/projects/p1.webp", title: "Modern Precast Steps", category: "Residential" },
  { id: 2, src: "/images/projects/p2.webp", title: "Commercial Installation", category: "Commercial" },
  { id: 3, src: "/images/projects/p3.webp", title: "Window Well Project", category: "Residential" },
  { id: 4, src: "/images/projects/p4.webp", title: "Custom Concrete Design", category: "Custom" },
  { id: 5, src: "/images/projects/p5.webp", title: "Parking Curb Installation", category: "Commercial" },
  { id: 6, src: "/images/projects/p6.webp", title: "Residential Steps", category: "Residential" },
  { id: 7, src: "/images/projects/p7.webp", title: "Large Scale Project", category: "Commercial" },
  { id: 8, src: "/images/projects/p8.webp", title: "Premium Finish Steps", category: "Custom" },
  { id: 9, src: "/images/projects/p9.webp", title: "Elegant Entryway", category: "Residential" },
];

export default function ProjectsPage() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);

  const categories = ["All", "Residential", "Commercial", "Custom"];

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  const openLightbox = (index) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <div className="min-h-screen bg-white">
      <Breadcrumb name="Our Projects" />

      {/* Hero Section */}
      <section className="p-6 md:p-8 lg:p-12 2xl:p-20">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            PORTFOLIO
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Explore Our <span className="text-primary">Craftsmanship</span>
          </h2>
          <p className="text-gray-600 text-lg">
            Discover our completed projects showcasing quality precast concrete
            solutions for residential and commercial properties across Calgary.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/30"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Futuristic Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[280px]"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative group cursor-pointer ${
                  index === 0 && activeFilter === "All" ? "sm:col-span-2 sm:row-span-2" : ""
                }`}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => openLightbox(projects.findIndex(p => p.id === project.id))}
              >
                <div
                  className="relative overflow-hidden rounded-2xl h-full"
                >
                  {/* Image */}
                  <Image
                    src={project.src}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                  {/* Futuristic Corner Accents */}
                  <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-white/50 group-hover:border-primary group-hover:w-12 group-hover:h-12 transition-all duration-500" />
                  <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-white/50 group-hover:border-primary group-hover:w-12 group-hover:h-12 transition-all duration-500" />
                  <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-white/50 group-hover:border-primary group-hover:w-12 group-hover:h-12 transition-all duration-500" />
                  <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-white/50 group-hover:border-primary group-hover:w-12 group-hover:h-12 transition-all duration-500" />

                  {/* Scan Line Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-b from-primary/20 to-transparent h-1/4 opacity-0 group-hover:opacity-100"
                    animate={
                      hoveredId === project.id
                        ? { y: ["0%", "400%"] }
                        : { y: "0%" }
                    }
                    transition={{
                      duration: 1.5,
                      repeat: hoveredId === project.id ? Infinity : 0,
                      ease: "linear",
                    }}
                  />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
             

                    {/* View Button */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={
                        hoveredId === project.id
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 20 }
                      }
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2 text-white/90"
                    >
                      <ZoomIn className="w-4 h-4" />
                      <span className="text-sm">Click to view</span>
                    </motion.div>
                  </div>

                  {/* Glowing Border on Hover */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary/50 group-hover:shadow-[0_0_30px_rgba(55,99,186,0.3)] transition-all duration-500" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "500+", label: "Projects Completed" },
            { number: "15+", label: "Years Experience" },
            { number: "100%", label: "Client Satisfaction" },
            { number: "50+", label: "Cities Served" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 text-center group hover:border-primary/30 transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <h4 className="text-3xl lg:text-4xl font-bold text-primary mb-2 relative z-10">
                {stat.number}
              </h4>
              <p className="text-gray-600 font-medium relative z-10">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="absolute top-6 right-6 z-[110] w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors duration-300"
              onClick={closeLightbox}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {/* Image Counter */}
            <div className="absolute top-6 left-6 z-[110] px-4 py-2 rounded-full bg-white/10 text-white text-sm">
              {selectedImage + 1} / {projects.length}
            </div>

            {/* Swiper Gallery */}
            <div
              className="w-full h-full max-w-6xl mx-auto px-4 py-20"
              onClick={(e) => e.stopPropagation()}
            >
              <Swiper
                modules={[Navigation, Pagination, EffectFade, Keyboard]}
                navigation={{
                  prevEl: ".swiper-button-prev-custom",
                  nextEl: ".swiper-button-next-custom",
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                keyboard={{ enabled: true }}
                initialSlide={selectedImage}
                spaceBetween={30}
                className="h-full rounded-2xl overflow-hidden"
              >
                {projects.map((project, index) => (
                  <SwiperSlide key={project.id}>
                    <div className="relative w-full h-full flex items-center justify-center">
                      <div className="relative w-full h-[70vh] max-h-[800px]">
                        <Image
                          src={project.src}
                          alt={project.title}
                          fill
                          className="object-contain"
                          priority={index === selectedImage}
                        />
                      </div>
                    
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Custom Navigation Buttons */}
              <button className="swiper-button-prev-custom absolute left-8 top-1/2 -translate-y-1/2 z-[110] w-14 h-14 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white transition-all duration-300 group">
                <ChevronLeft className="w-7 h-7 group-hover:scale-110 transition-transform" />
              </button>
              <button className="swiper-button-next-custom absolute right-8 top-1/2 -translate-y-1/2 z-[110] w-14 h-14 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white transition-all duration-300 group">
                <ChevronRight className="w-7 h-7 group-hover:scale-110 transition-transform" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
