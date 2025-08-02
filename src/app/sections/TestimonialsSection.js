import { motion } from 'framer-motion';

export const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "YYC PRECAST transformed our high-rise project timeline. Their precast stair systems installed in 1/3 the time of traditional methods, with zero quality compromises. The engineering support was exceptional.",
      name: "John Smith",
      title: "Project Director, Skyline Developments",
      avatar: "https://placehold.co/100x100/2a4d91/ffffff?text=J"
    },
    {
      quote: "We've specified YYC PRECAST for 17 projects over 8 years. Their Window Wells solved persistent water intrusion issues we had with other suppliers. The durability and aesthetics exceed expectations every time.",
      name: "Sarah Johnson",
      title: "Senior Architect, Urban Design Collective",
      avatar: "https://placehold.co/100x100/1a2a6c/ffffff?text=S"
    },
    {
      quote: "When our municipal project faced a 30-day delay, YYC PRECAST re-engineered the solution and delivered in 10 days. Their problem-solving ability and commitment to deadlines saved the project.",
      name: "Michael Chen",
      title: "Construction Manager, City Infrastructure Group",
      avatar: "https://placehold.co/100x100/3763ba/ffffff?text=M"
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
        <p className="text-xl text-gray-300">
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
                className={`testimonial-card glass-effect rounded-2xl p-10 border my-4 border-gray-800 relative ${
                  index > 0 ? 'hidden md:block' : ''
                }`}
              >
                <div className="text-6xl text-primary/20 absolute top-6 right-6">"</div>
                <p className="text-gray-300 text-lg mb-6 relative z-10 pl-6">
                  {testimonial.quote}
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-14 h-14 rounded-full object-cover mr-4" 
                  />
                  <div>
                    <h4 className="font-bold text-white">{testimonial.name}</h4>
                    <div className="text-gray-400">{testimonial.title}</div>
                  </div>
                </div>
              </motion.div>
            ))}
            
            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button 
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === 0 ? 'bg-primary w-6' : 'bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TestimonialsSection