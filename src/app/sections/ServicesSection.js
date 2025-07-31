import { CheckCircle2, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesSection = () => (
  <div className='container mx-auto p-6 md:p-8 lg:p-12 2xl:p-20 '>
    <div className='text-center max-w-3xl mx-auto mb-16'>
      <motion.span
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className='inline-block px-4 py-1 bg-primary text-white rounded-full text-sm font-medium mb-4'
      >
        OUR EXPERTISE
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className='text-3xl lg:text-4xl font-space font-bold mb-6'
      >
        <span className='bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300'>
          Engineered
        </span>
        <span className='text-primary-light mx-2'>Solutions</span>
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className='text-xl text-gray-300'
      >
        Precision-crafted precast concrete products designed for performance,
        durability, and aesthetic excellence.
      </motion.p>
    </div>

    <div className='grid lg:grid-cols-2 gap-20'>
      {/* Service 1 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='bg-white rounded-2xl overflow-hidden service-card'
      >
        <div className='h-64 overflow-hidden relative'>
          <img
            src='/images/steps.png'
            alt='Precast Concrete Steps'
            className='w-full h-full object-cover transform hover:scale-110 transition-transform duration-700'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-40'></div>
          <div className='absolute bottom-6 left-6'>
            <h3 className='text-2xl font-bold text-white'>
              Precast Concrete Steps
            </h3>
            <p className='text-gray-300'>
              Architectural precision for residential & commercial applications
            </p>
          </div>
        </div>
        <div className='p-8'>
          <p className='text-primary mb-6'>
            Our precast concrete steps are manufactured with exacting tolerances
            using high-strength concrete mixes. Customizable in size, finish,
            and reinforcement to match any architectural requirement while
            exceeding safety standards.
          </p>
          <ul className='space-y-3 mb-8 text-primary'>
            <li className='flex items-start'>
              <CheckCircle2 className='h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0' />
              <span>Customizable dimensions & finishes</span>
            </li>
            <li className='flex items-start'>
              <CheckCircle2 className='h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0' />
              <span>Reinforced for heavy load capacity</span>
            </li>
            <li className='flex items-start'>
              <CheckCircle2 className='h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0' />
              <span>Slip-resistant surface options</span>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Service 2 */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className='bg-white rounded-2xl overflow-hidden service-card'
      >
        <div className='h-64 overflow-hidden relative'>
          <img
            src='/images/wall-covers.png'
            alt='Window Well Covers'
            className='w-full h-full object-cover transform hover:scale-110 transition-transform duration-700'
          />
          <div className='absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-40'></div>
          <div className='absolute bottom-6 left-6'>
            <h3 className='text-2xl font-bold text-white'>
              Window Well Covers
            </h3>
            <p className='text-gray-300'>
              Safety meets elegance for basement windows
            </p>
          </div>
        </div>
        <div className='p-8'>
          <p className='text-primary mb-6'>
            Our window well covers combine structural integrity with modern
            aesthetics. Engineered to withstand heavy snow loads while providing
            unobstructed natural light and ventilation to basement spaces.
          </p>
          <ul className='space-y-3 mb-8'>
            <li className='flex items-start'>
              <CheckCircle2 className='h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0' />
              <span className='text-primary'>
                Custom-fit for any window well
              </span>
            </li>
            <li className='flex items-start'>
              <CheckCircle2 className='h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0' />
              <span className='text-primary'>
                Vandal-resistant polycarbonate options
              </span>
            </li>
            <li className='flex items-start'>
              <CheckCircle2 className='h-5 w-5 text-primary mr-2 mt-1 flex-shrink-0' />
              <span className='text-primary'>Quick installation system</span>
            </li>
          </ul>
        </div>
      </motion.div>
    </div>
  </div>
);
export default ServicesSection;
