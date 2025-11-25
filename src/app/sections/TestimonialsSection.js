import { motion } from 'framer-motion';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "YYC PRECAST transformed our residential project timeline. Their precast stair systems installed in 1/3 the time of traditional methods, with zero quality compromises. The engineering support was exceptional.",
      name: "John Smith",
      title: "Project Director, Skyline Developments",
      avatar: "https://placehold.co/100x100/2a4d91/ffffff?text=J"
    }
  ];

  return (
    <div className=" p-6 md:p-8 lg:p-12 2xl:p-20 bg-gradient-1">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block px-4 py-1 bg-primary text-white rounded-full text-sm font-medium mb-4">CLIENT VOICES</span>
        <h2 className="text-3xl lg:text-4xl font-space font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">Trusted by Industry</span> 
          <span className="text-primary-light ml-2">Leaders</span>
        </h2>
        <p className="text-xl text-white">
          Hear from the architects, contractors, and developers who rely on YYC PRECAST for critical project components.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? 0 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`testimonial-card bg-white rounded-2xl p-10 border my-4 border-gray-800 relative ${
                  index > 0 ? 'hidden md:block' : ''
                }`}
              >
                <div className="text-6xl text-primary/40 absolute top-6 right-6">"</div>
                <p className="text-primary text-lg mb-6 relative z-10 pl-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <h4 className="font-bold text-primary-dark">{testimonial.name}</h4>
                    <div className="text-gray-400">{testimonial.title}</div>
                  </div>
                </div>
              </motion.div>
            ))}
            
    
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsSection