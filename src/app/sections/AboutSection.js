import { motion } from "framer-motion";

export const AboutSection = () => (
  <div className=" p-6 md:p-8 lg:p-12 2xl:p-20 bg-white">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-4 py-1 bg-primary text-white rounded-full text-sm font-medium mb-4">
          WHO WE ARE
        </span>
        <h2 className="text-3xl lg:text-4xl flex flex-wrap font-space font-bold mb-6">
          <span className="text-black">Precision</span>
          <span className="text-primary lg:mx-2">Craftsmanship</span>
          <span className="text-black">for Calgary’s Concrete Needs</span>
        </h2>
        <p className="text-xl text-black mb-8 max-w-2xl">
          At YYC PRECAST, we specialize in creating high-strength precast
          concrete steps, window wells, and parking curbs designed for
          durability, safety, and a perfect fit for Alberta’s climate. We
          combine advanced manufacturing with attention to detail, ensuring
          every product is ready for quick installation and long-lasting
          performance.
        </p>

        <div className="grid lg:grid-cols-2 gap-6 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-2 rounded-xl p-6 border border-gray-700/50"
          >
            <div className="text-3xl font-bold text-white mb-2">2500+</div>
            <div className="text-white">Projects Completed</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gradient-2 rounded-xl p-6 border border-gray-700/50"
          >
            <div className="text-3xl font-bold text-white mb-2">15+</div>
            <div className="text-white">Years Experience</div>
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-4">
          <motion.a
            href="#"
            className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary text-white font-bold py-3 px-8 rounded-xl transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read More
          </motion.a>
          <motion.a
            href="#contact"
            className="border-2 border-primary hover:bg-primary/10 text-primary font-bold py-3 px-8 rounded-xl transition-all"
            whileHover={{ scale: 1.05 }}
          >
            Contact Us
          </motion.a>
        </div>
      </motion.div>

      <div className="relative">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-xl overflow-hidden image-hover"
            >
              <img
                src="/images/precast.webp"
                alt="Factory"
                className="w-full h-full max-h-[400px] object-cover transform transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="rounded-xl overflow-hidden image-hover"
            >
              <img
                src="/images/about-us3.webp"
                alt="Quality Control"
                className="w-full h-full max-h-[310px] object-cover transform transition-transform duration-700 hover:scale-105"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 rounded-xl overflow-hidden image-hover"
          >
            <img
              src="/images/about-3.webp"
              alt="Team"
              className="w-full h-full max-h-[400px]  object-cover transform transition-transform duration-700 hover:scale-105"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="absolute -top-0 right-0 lg:-top-6 lg:-right-6 bg-primary text-white rounded-2xl px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-lg font-bold shadow-xl z-10"
        >
          98.7%
          <div className="text-sm font-medium">Client Satisfaction</div>
        </motion.div>
      </div>
    </div>

    <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
    <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-primary-light rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
  </div>
);

export default AboutSection;
