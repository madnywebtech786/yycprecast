import { Construction, Zap, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUsSection = () => (
  <div className="w-full p-6 md:p-8 lg:p-12 2xl:p-20 bg-white">
    <div className="text-center max-w-3xl mx-auto mb-16">
      <span className="inline-block px-4 py-1 bg-primary text-white rounded-full text-sm font-medium mb-4">
        WHY CHOOSE US
      </span>
      <h2 className="text-3xl lg:text-4xl font-space font-bold mb-6">
        <span className="text-black">The</span>
        <span className="text-primary mx-2">YYC PRECAST</span>
        <span className="text-black">Advantage</span>
      </h2>
      <p className="text-xl text-black">
        From durable steps to secure window wells and sturdy parking curbs, we
        deliver precast solutions that combine speed, strength, and style
        trusted across Calgary and surrounding areas.
      </p>
    </div>

    <div className="grid lg:grid-cols-3 gap-8">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-3 hover:-translate-y-5 rounded-xl p-8 border border-gray-700/50 step-card"
      >
        <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
          <Construction className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-4 text-white">
          Built for Canadian Weather
        </h3>
        <p className="text-white">
          Our precast products are designed to handle Calgary’s toughest
          conditions from harsh freeze thaw cycles to heavy snow loads ensuring
          they stay strong, safe, and visually appealing for decades.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="bg-gradient-3 hover:-translate-y-5 rounded-xl p-8 border border-gray-700/50 step-card"
      >
        <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
          <Zap className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-4 text-white">Rapid Deployment</h3>
        <p className="text-white">
          Because our products are pre-engineered and ready to go, installation
          is up to 30% faster than traditional methods. That means less
          downtime, reduced labor costs, and quicker project completion.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-gradient-3 hover:-translate-y-5 rounded-xl p-8 border border-gray-700/50 step-card"
      >
        <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mb-6">
          <Leaf className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-bold mb-4 text-white">
          Sustainable & Smart
        </h3>
        <p className="text-white">
          We use efficient manufacturing processes and sustainable materials
          whenever possible, reducing waste while delivering top-tier quality
          and performance you can count on.
        </p>
      </motion.div>
    </div>
  </div>
);

export default WhyChooseUsSection;
