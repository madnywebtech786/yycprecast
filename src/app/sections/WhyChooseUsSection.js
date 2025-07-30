import { Truck, Leaf, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const WhyChooseUsSection = () => (
  <div className='container mx-auto p-6 md:p-8 lg:p-12 2xl:p-20'>
    <div className='text-center max-w-3xl mx-auto mb-16'>
      <span className='inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4'>
        WHY CHOOSE US
      </span>
      <h2 className='text-3xl lg:text-4xl font-space font-bold mb-6'>
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300'>
          The
        </span>
        <span className='text-primary mx-2'>YYC PRECAST</span>
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300'>
          Difference
        </span>
      </h2>
      <p className='text-xl text-gray-300'>
        We don't just manufacture precast concrete we engineer solutions that
        transform construction projects.
      </p>
    </div>

    <div className='grid lg:grid-cols-3 gap-8'>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='glass-effect rounded-xl p-8 border border-gray-700/50 step-card'
      >
        <div className='w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6'>
          <ShieldCheck className='h-6 w-6 text-primary' />
        </div>
        <h3 className='text-xl font-bold mb-4 text-white'>
          Military-Grade Quality
        </h3>
        <p className='text-gray-300'>
          Our manufacturing process exceeds ASTM standards with rigorous quality
          control at every stage, ensuring structural integrity and longevity.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='glass-effect rounded-xl p-8 border border-gray-700/50 step-card'
      >
        <div className='w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6'>
          <Truck className='h-6 w-6 text-primary' />
        </div>
        <h3 className='text-xl font-bold mb-4 text-white'>Rapid Deployment</h3>
        <p className='text-gray-300'>
          Pre-engineered solutions with 30% faster installation time compared to
          traditional concrete methods, reducing project timelines
          significantly.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className='glass-effect rounded-xl p-8 border border-gray-700/50 step-card'
      >
        <div className='w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6'>
          <Leaf className='h-6 w-6 text-primary' />
        </div>
        <h3 className='text-xl font-bold mb-4 text-white'>
          Sustainable Innovation
        </h3>
        <p className='text-gray-300'>
          Our eco-friendly concrete mixes incorporate recycled materials while
          maintaining superior strength, reducing environmental impact without
          compromise.
        </p>
      </motion.div>
    </div>
  </div>
);

export default WhyChooseUsSection;
