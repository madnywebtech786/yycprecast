import { motion } from 'framer-motion';

export const AboutSection = ({ handleScroll }) => (
  <div className='container mx-auto p-6 md:p-8 lg:p-12 2xl:p-20 bg-gray-900'>
    <div className='grid lg:grid-cols-2 gap-16 items-center'>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className='inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4'>
          WHO WE ARE
        </span>
        <h2 className='text-3xl lg:text-4xl flex flex-wrap font-space font-bold mb-6'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300'>
            Precision
          </span>
          <span className='text-primary lg:mx-2'>Craftsmanship</span>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300'>
            Since 2005
          </span>
        </h2>
        <p className='text-xl text-gray-300 mb-8 max-w-2xl'>
          YYC PRECAST combines decades of engineering expertise with
          cutting-edge manufacturing technology. We're not just producers of
          precast concrete.We're innovators creating sustainable,
          high-performance building solutions that stand the test of time.
        </p>

        <div className='grid lg:grid-cols-2 gap-6 mb-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='bg-white rounded-xl p-6 border border-gray-700/50'
          >
            <div className='text-3xl font-bold text-primary mb-2'>2500+</div>
            <div className='text-primary-dark'>Projects Completed</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='bg-white rounded-xl p-6 border border-gray-700/50'
          >
            <div className='text-3xl font-bold text-primary mb-2'>15+</div>
            <div className='text-primary-dark'>Years Experience</div>
          </motion.div>
        </div>

        <div className='flex flex-wrap gap-4'>
          <motion.a
            href='#'
            className='bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary text-white font-bold py-3 px-8 rounded-xl transition-all'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Read More
          </motion.a>
          <motion.a
            href='#contact'
            onClick={(e) => handleScroll(e, 'contact')}
            className='border-2 border-primary hover:bg-primary/10 text-white font-bold py-3 px-8 rounded-xl transition-all'
            whileHover={{ scale: 1.05 }}
          >
            Contact Us
          </motion.a>
        </div>
      </motion.div>

      <div className='relative'>
        <div className='grid grid-cols-2 gap-4'>
          <div className='space-y-4'>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className='rounded-xl overflow-hidden image-hover'
            >
              <img
                src='/images/team.png'
                alt='Factory'
                className='w-full h-full max-h-[400px] object-cover transform transition-transform duration-700 hover:scale-105'
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className='rounded-xl overflow-hidden image-hover'
            >
              <img
                src='/images/work.png'
                alt='Quality Control'
                className='w-full h-full max-h-[300px] object-cover transform transition-transform duration-700 hover:scale-105'
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className='mt-8 rounded-xl overflow-hidden image-hover'
          >
            <img
              src='/images/factory.png'
              alt='Team'
              className='w-full h-full  object-cover transform transition-transform duration-700 hover:scale-105'
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='absolute -top-0 right-0 lg:-top-6 lg:-right-6 bg-primary text-white rounded-2xl px-4 lg:px-6 py-2 lg:py-3 text-sm lg:text-lg font-bold shadow-xl z-10'
        >
          98.7%
          <div className='text-sm font-medium'>Client Satisfaction</div>
        </motion.div>
      </div>
    </div>

    <div className='absolute top-1/4 -left-20 w-64 h-64 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-20'></div>
    <div className='absolute bottom-1/4 -right-20 w-80 h-80 bg-primary-light rounded-full mix-blend-multiply filter blur-3xl opacity-20'></div>
  </div>
);

export default AboutSection;
