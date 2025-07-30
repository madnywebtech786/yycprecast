'use client';
import { ArrowRight, FileText } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = ({ handleScroll, files, setFiles }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (e) => {
    setFiles(Array.from(e.target.files));
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFiles(Array.from(e.dataTransfer.files));
  };

  return (
    <section
      id='home'
      className='bg-gradient-1  min-h-screen flex items-center pt-16 relative overflow-hidden'
    >
      <div className='h-auto lg:h-screen w-full mx-auto p-6 md:px-8 lg:px-12 2xl:px-20 relative z-10 '>
        <div className='flex flex-col lg:flex-row items-center gap-10 lg:gap-0'>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className='w-full lg:w-1/2'
          >
            <span className='inline-block px-4 py-1 bg-primary-dark/60 text-white rounded-full text-sm font-medium mb-4'>
              PRECISION ENGINEERING
            </span>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-space font-bold mb-6'>
              <span className='bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300'>
                Revolutionizing
              </span>
              <br />
              <span className='text-white'>
                Precast Concrete
              </span>
              <br />
              <span className='text-white'>Solutions</span>
            </h1>
            <p className='text-xl text-white mb-8 max-w-2xl'>
              We deliver innovative, high-strength precast concrete products
              with military-grade precision. Engineered for durability,
              aesthetics, and seamless integration in residential and commercial
              projects.
            </p>
            <div className='flex gap-4 lg:gap-4'>
              <motion.a
                href='#contact'
                onClick={(e) => handleScroll(e, 'contact')}
                className='bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary text-white font-bold py-3 px-4 lg:px-8 rounded-xl transition-all inline-flex items-center'
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Quote
                <ArrowRight className='h-5 w-5 ml-2' />
              </motion.a>
              <motion.a
                href='#services'
                onClick={(e) => handleScroll(e, 'services')}
                className='border-2 border-primary hover:bg-primary/10 text-white font-bold py-3 px-4 lg:px-8 rounded-xl transition-all'
                whileHover={{ scale: 1.05 }}
              >
                Our Services
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className=' w-full lg:w-1/2'
          >
            <div className=' lg:w-4/5 mx-auto !h-1/2  glass-effect backdrop-blur-3xl rounded-2xl p-4 !border-2 !border-white shadow-2xl'>
              <h2 className='text-2xl font-bold mb-6 text-white'>
                Request a Quote
              </h2>
              <form className='space-y-4'>
                <div className='flex gap-5'>
                  <div className='w-full'>
                    <label className='block text-sm font-medium text-white mb-2'>
                      Full Name
                    </label>
                    <input
                      type='text'
                      name='name'
                      value={formData.name}
                      onChange={handleInputChange}
                      className='w-full border border-white !text-white placeholder:text-white  rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors'
                      placeholder='John Doe'
                      required
                    />
                  </div>

                  <div className='w-full'>
                    <label className='block text-sm font-medium text-white mb-2'>
                      Phone Number
                    </label>
                    <input
                      type='tel'
                      name='phone'
                      value={formData.phone}
                      onChange={handleInputChange}
                      className='w-full border border-white !text-white placeholder:text-white  rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors'
                      placeholder='+1 (555) 123-4567'
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className='block text-sm font-medium text-white mb-2'>
                    Service Required
                  </label>
                  <select
                    name='service'
                    value={formData.service}
                    onChange={handleInputChange}
                    className='w-full border border-white !text-white placeholder:text-white  rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors appearance-none bg-no-repeat bg-[right_1rem_center] pr-10'
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%239ca3af'><path d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/></svg>\")",
                    }}
                  >
                    <option value=''>Select Service</option>
                    <option value='precast-steps'>
                      Precast Concrete Steps
                    </option>
                    <option value='window-well'>Window Well Covers</option>
                    <option value='custom'>Custom Solutions</option>
                  </select>
                </div>

                <div>
                  <label className='block text-sm font-medium text-white mb-2'>
                    Project Details
                  </label>
                  <textarea
                    name='message'
                    value={formData.message}
                    onChange={handleInputChange}
                    rows='3'
                    className='w-full border border-white !text-white placeholder:text-white  rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors'
                    placeholder='Tell us about your project...'
                    required
                  ></textarea>
                </div>

                <div>
                  <label className='block text-sm font-medium text-white mb-2'>
                    Project Files (PDF, JPG, PNG)
                  </label>
                  <div
                    className='file-upload-area rounded-xl p-4 text-center cursor-pointer border-dashed border-2 border-white hover:border-primary transition-colors'
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                  >
                    <input
                      type='file'
                      className='hidden'
                      id='file-upload'
                      accept='.pdf,.jpg,.jpeg,.png'
                      multiple
                      required
                      onChange={handleFileUpload}
                    />
                    <div className='flex flex-col items-center'>
                      <FileText className='h-6 w-6 text-white mb-3' />
                      <p className='text-white'>
                        Drag & drop files here or{' '}
                        <span className='text-primary font-medium'>browse</span>
                      </p>
                      <p className='text-xs text-gray-500 mt-1'>
                        Supports PDF, JPG, PNG (Max 10MB)
                      </p>
                    </div>
                  </div>
                  <p className='text-xs text-gray-500 mt-2'>
                    * File attachment is required for quote processing
                  </p>
                </div>

                <motion.button
                  type='submit'
                  className='w-full bg-white text-primary-dark hover:from-primary-light hover:to-primary font-bold py-3 px-4 rounded-xl transition-all'
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit Request
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
