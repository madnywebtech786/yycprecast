import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ProjectsSection = ({ handleScroll }) => {
  const projects = [
    {
      title: 'Urban Residential Complex',
      location: 'Calgary, AB',
      image:
        'https://placehold.co/800x600/2a4d91/ffffff?text=Urban+Residential+Complex',
    },
    {
      title: 'Commercial Office Tower',
      location: 'Vancouver, BC',
      image:
        'https://placehold.co/800x600/1a2a6c/ffffff?text=Commercial+Office+Tower',
    },
    {
      title: 'Municipal Infrastructure',
      location: 'Edmonton, AB',
      image:
        'https://placehold.co/800x600/3763ba/ffffff?text=Municipal+Infrastructure',
    },
    {
      title: 'Luxury Residential Estate',
      location: 'Banff, AB',
      image:
        'https://placehold.co/800x600/2a4d91/ffffff?text=Luxury+Residential+Estate',
    },
    {
      title: 'Educational Institution',
      location: 'Victoria, BC',
      image:
        'https://placehold.co/800x600/1a2a6c/ffffff?text=Educational+Institution',
    },
    {
      title: 'Hospital Expansion',
      location: 'Red Deer, AB',
      image:
        'https://placehold.co/800x600/3763ba/ffffff?text=Hospital+Expansion',
    },
  ];

  return (
    <div className='container mx-auto p-6 md:p-8 lg:p-12 2xl:p-20'>
      <div className='text-center max-w-3xl mx-auto mb-16'>
        <span className='inline-block px-4 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium mb-4'>
          PROJECT GALLERY
        </span>
        <h2 className='text-3xl lg:text-4xl font-space font-bold mb-6'>
          <span className='bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300'>
            Precision in
          </span>
          <span className='text-primary ml-2'>Every Project</span>
        </h2>
        <p className='text-xl text-gray-300'>
          Explore our portfolio of innovative precast concrete solutions that
          redefine architectural possibilities.
        </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16'>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className='gallery-item rounded-2xl overflow-hidden glass-effect border border-gray-800'
          >
            <div className='relative group'>
              <img
                src={project.image}
                alt={project.title}
                className='w-full h-64 object-cover transform transition-transform duration-700 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity'>
                <div className='absolute bottom-6 left-6'>
                  <h3 className='text-xl font-bold text-white'>
                    {project.title}
                  </h3>
                  <p className='text-gray-300'>{project.location}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className='text-center'>
        <motion.a
          href='#'
          className='inline-flex items-center bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary text-white font-bold py-3 px-8 rounded-xl transition-all'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          View Full Portfolio
          <ChevronRight className='h-5 w-5 ml-2' />
        </motion.a>
      </div>
    </div>
  );
};

export default ProjectsSection