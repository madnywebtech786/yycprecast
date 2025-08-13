import { motion } from "framer-motion";

export const ProcessSection = () => (
  <div className=" p-6 md:p-8 lg:p-12 2xl:p-20 bg-white">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="inline-block px-4 py-1 bg-primary text-white rounded-full text-sm font-medium mb-4">
        OUR PROCESS
      </span>
      <h2 className="text-3xl lg:text-4xl font-space font-bold mb-6">
        <span className="text-black">The</span>
        <span className="text-primary mx-2">YYC PRECAST</span>
        <span className="text-black">Methodology</span>
      </h2>
      <p className="text-xl text-black">
        A smooth, well-planned process from first contact to final installation,
        ensuring your precast steps, window wells, or parking curbs are
        delivered and installed efficiently and safely.
      </p>
    </div>

    <div className="relative">
      <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent transform -translate-y-1/2"></div>

      <div className="grid lg:grid-cols-3 gap-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-2 rounded-2xl p-8 border border-gray-700/50 step-card relative z-10"
        >
          <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-6">
            1
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">
            Site Assessment & Planning
          </h3>
          <p className="text-gray-300">
            Our team begins by confirming your order details and, if required,
            visiting your site to take precise measurements. We also provide
            guidance on preparing your location for easy delivery and safe
            installation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-gradient-2 rounded-2xl p-8 border border-gray-700/50 step-card relative z-10"
        >
          <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-6">
            2
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">
            Expert Manufacturing & Preparation
          </h3>
          <p className="text-gray-300">
            Using high-quality molds and precision casting techniques, we
            produce your custom precast components. For stair installations, we
            coordinate crane delivery and prepare the site by removing old steps
            if necessary.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-2 rounded-2xl p-8 border border-gray-700/50 step-card relative z-10"
        >
          <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold mb-6">
            3
          </div>
          <h3 className="text-2xl font-bold mb-4 text-white">
            Professional Installation
          </h3>
          <p className="text-gray-300">
            Our crew expertly positions each unit, ensuring correct placement,
            stability, and slope. We address any unique site challenges on the
            spot, making sure the final result is both safe and built to last.
          </p>
        </motion.div>
      </div>
    </div>
  </div>
);

export default ProcessSection;
