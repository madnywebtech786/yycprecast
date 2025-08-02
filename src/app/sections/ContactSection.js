"use client";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const ContactSection = ({ files, setFiles }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
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
    <div className=" p-6 md:p-8 lg:p-12 2xl:p-20 bg-gradient-3">
      <div className="text-center max-w-3xl mx-auto mb-16 backdrop-blur-md">
        <span className="inline-block px-4 py-1 bg-primary text-white rounded-full text-sm font-medium mb-4">
          GET IN TOUCH
        </span>
        <h2 className="text-3xl lg:text-4xl font-space font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
            Let's Build
          </span>
          <span className="text-primary-light ml-2">Something Amazing</span>
        </h2>
        <p className="text-xl text-gray-300">
          Ready to transform your project with precision-engineered precast
          solutions? Contact our team today for a consultation.
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-effect rounded-2xl p-8 border border-primary/20"
        >
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full border border-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="john@example.com"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border border-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Service Required
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full border border-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors appearance-none bg-no-repeat bg-[right_1rem_center] pr-10"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%239ca3af'><path d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/></svg>\")",
                  }}
                >
                  <option className="text-primary" value="">Select Service</option>
                  <option className="text-primary" value="precast-steps">Precast Concrete Steps</option>
                  <option className="text-primary" value="window-well">Window Wells</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                className="w-full border border-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                placeholder="Please describe your project requirements, dimensions, and any specific challenges..."
                required
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Attachment (PDF, JPG, PNG)
              </label>
              <div
                className="file-upload-area rounded-xl p-6 text-center cursor-pointer border-dashed border-2 border-gray-700 hover:border-primary transition-colors"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
              >
                <input
                  type="file"
                  className="hidden"
                  id="contact-file-upload"
                  accept=".pdf,.jpg,.jpeg,.png"
                  multiple
                  onChange={handleFileUpload}
                />
                <div className="flex flex-col items-center">
                  <FileText className="h-10 w-10 text-primary mb-3" />
                  <p className="text-gray-300">
                    Drag & drop files here or{" "}
                    <span className="text-primary font-medium">browse</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Supports PDF, JPG, PNG (Max 10MB)
                  </p>
                </div>
              </div>
            </div>

            <motion.button
              type="submit"
              className="w-full bg-white text-primary-dark font-bold py-3 px-4 rounded-xl transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Submit Request
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
