import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ServiceAreasSection = () => (
  <div className='container mx-auto p-6 md:p-8 lg:p-12 2xl:p-20 bg-gradient-3'>
    <div className='grid lg:grid-cols-2 gap-12 items-center'>
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='relative'
      >
        <div className='glass-effect rounded-2xl overflow-hidden border border-gray-700/50'>
          <img
            src='/images/canda.png'
            alt='Service Area'
            className='w-full h-auto max-h-[550px]'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent'></div>
          <div className='absolute bottom-6 left-6'>
            <div className='bg-primary/20 text-white px-4 py-2 rounded-lg backdrop-blur-sm'>
              Calgary • Edmonton • Vancouver • Victoria
            </div>
          </div>
        </div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className='absolute -top-3 -right-2 lg:-top-6 lg:-right-6 bg-white text-gray-900 rounded-2xl px-3 lg:px-6 py-2 lg:py-3 text-sm lg:text-lg font-bold shadow-xl z-10'
        >
          99.2%
          <div className='text-sm'>On-Time Delivery</div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className='inline-block px-4 py-1 bg-primary text-white rounded-full text-sm font-medium mb-4'>
          SERVICE AREAS
        </span>
        <h2 className='text-3xl lg:text-4xl font-space font-bold mb-6'>
          <span className='mr-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300'>
            Serving
          </span>
          <span className='text-primary-light'>Western Canada</span>
        </h2>
        <p className='text-xl text-gray-300 mb-8'>
          With strategically located manufacturing facilities, we provide rapid
          delivery and installation services across Alberta and British
          Columbia, ensuring your projects stay on schedule.
        </p>

        <div className='grid lg:grid-cols-2 gap-4 mb-10'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className='bg-gray-800/50 glass-effect rounded-xl p-6 border border-gray-700/50'
          >
            <div className='text-3xl font-bold text-white mb-2'>120+</div>
            <div className='text-gray-300'>Cities Served</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className='bg-gray-800/50 glass-effect rounded-xl p-6 border border-gray-700/50'
          >
            <div className='text-3xl font-bold text-white mb-2'>48h</div>
            <div className='text-gray-300'>Max Delivery Time</div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  </div>
);
export default ServiceAreasSection;
