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
        A seamless journey from concept to installation, engineered for
        efficiency and excellence.
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
            Precision Engineering
          </h3>
          <p className="text-gray-300">
            Our engineers collaborate with your team to develop custom solutions
            using advanced 3D modeling software, ensuring perfect fit and
            structural integrity before manufacturing begins.
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
            Advanced Manufacturing
          </h3>
          <p className="text-gray-300">
            Utilizing state-of-the-art casting facilities with
            computer-controlled precision, we produce components with exacting
            tolerances in a climate-controlled environment.
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
            Seamless Installation
          </h3>
          <p className="text-gray-300">
            Our certified installation team handles every aspect of on-site
            assembly with military precision, ensuring your project stays on
            schedule and meets all safety standards.
          </p>
        </motion.div>
      </div>
    </div>
  </div>
);

export default ProcessSection;
