import { CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

const ServicesSection = () => (
  <div className=" p-6 md:p-8 lg:p-12 2xl:p-20 ">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="inline-block px-4 py-1 bg-primary text-white rounded-full text-sm font-medium mb-4"
      >
        OUR EXPERTISE
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl lg:text-4xl font-space font-bold mb-6"
      >
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
          Engineered
        </span>
        <span className="text-primary-light mx-2">Solutions</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="text-xl text-white"
      >
        Precision-crafted precast concrete products designed for performance,
        durability, and aesthetic excellence.
      </motion.p>
    </div>

    <div className="grid lg:grid-cols-3 gap-10">
      {/* Service 1 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-white relative rounded-2xl overflow-hidden service-card"
      >
        <div className="h-64 overflow-hidden relative">
          <img
            src="/images/steps.webp"
            alt="Precast Concrete Steps"
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-40"></div>
          <div className="absolute bottom-6 left-6">
            <h3 className="text-2xl font-bold text-white">
              Precast Concrete Steps
            </h3>
            <p className="text-white">
              Architectural precision for residential & commercial applications
            </p>
          </div>
        </div>
        <div className="p-5 pb-12">
          <p className="text-primary mb-6">
            Our precast concrete steps are engineered for strength, style, and
            safety. Designed to endure Alberta’s extreme weather, they come in
            customizable sizes, finishes, and reinforcement options to suit any
            project. Whether for a home entrance or a commercial site, our steps
            are ready for quick installation and longlasting performance.
          </p>
          <ul className="space-y-3 mb-8 text-primary text-sm">
            <li className="flex items-center">
              <CheckCircle2 className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
              <span>Customizable dimensions & finishes</span>
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
              <span>Reinforced for heavy load capacity</span>
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
              <span>Slip-resistant surface options</span>
            </li>
          </ul>

          <Link href={"/services/precast-concrete-steps"}>
            <button className="bg-primary text-white p-2 px-4 text-sm rounded-2xl absolute left-8 bottom-4">
              Read More
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Service 2 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white relative rounded-2xl overflow-hidden service-card"
      >
        <div className="h-64 overflow-hidden relative">
          <img
            src="/images/window-wells.webp"
            alt="Window Well"
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-40"></div>
          <div className="absolute bottom-6 left-6">
            <h3 className="text-2xl font-bold text-white">
              Precast Window Wells
            </h3>
            <p className="text-white">
              Durability and safety for basement access and light with best
              quality
            </p>
          </div>
        </div>
        <div className="p-5 pb-12">
          <p className="text-primary mb-6">
            Our precast window wells provide exceptional strength and stability,
            keeping your basement spaces safe and well-lit. Designed for quick
            installation, they offer reliable drainage and protection against
            soil pressure, even in Calgary’s freezethaw cycles. Available in
            multiple sizes and finishes to blend seamlessly with your property’s
            exterior.
          </p>
          <ul className="space-y-3 mb-8 text-sm">
            <li className="flex items-center">
              <CheckCircle2 className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
              <span className="text-primary">
                Strong, weather-resistant construction
              </span>
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
              <span className="text-primary">
                Excellent drainage to prevent water buildup
              </span>
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
              <span className="text-primary">
                Variety of sizes and finishes to match your design
              </span>
            </li>
          </ul>

          <Link href={"/services/window-well"}>
            <button className="bg-primary text-white p-2 px-4 text-sm rounded-2xl absolute left-8 bottom-4">
              Read More
            </button>
          </Link>
        </div>
      </motion.div>
      {/* Service 3 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-white relative rounded-2xl overflow-hidden service-card"
      >
        <div className="h-64 overflow-hidden relative">
          <img
            src="/images/parking-crub.webp"
            alt="Window Well"
            className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-40"></div>
          <div className="absolute bottom-6 left-6">
            <h3 className="text-2xl font-bold text-white">
              Precast Parking Curbs
            </h3>
            <p className="text-white">
              Efficient parking management with long-lasting performance
            </p>
          </div>
        </div>
        <div className="p-5 pb-12">
          <p className="text-primary mb-6 lg:mb-10">
            Our precast parking curbs are built to withstand constant vehicle
            impact, harsh weather, and years of use. Perfect for commercial
            lots, residential complexes, and public spaces, they help maintain
            organized parking while minimizing damage to vehicles and property.
          </p>
          <ul className="space-y-3 mb-8 text-sm">
            <li className="flex items-center">
              <CheckCircle2 className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
              <span className="text-primary">
                Durable, high-strength concrete for long life
              </span>
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
              <span className="text-primary">
                Easy installation and relocation
              </span>
            </li>
            <li className="flex items-center">
              <CheckCircle2 className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
              <span className="text-primary">
                Resistant to cracking, chipping, and weather damage
              </span>
            </li>
          </ul>

          <Link href={"/services/precast-parking-curbs"}>
            <button className="bg-primary text-white p-2 px-4 text-sm rounded-2xl absolute left-8 bottom-4">
              Read More
            </button>
          </Link>
        </div>
      </motion.div>
    </div>
  </div>
);
export default ServicesSection;
