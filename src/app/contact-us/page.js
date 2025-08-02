"use client";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";
import React, { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";

export default function page() {
  const [formData, setFormData] = useState({
    name: "",
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
    <>
      <Breadcrumb name={"Contact Us"} />
      <div className=" p-6 md:p-8 lg:p-12 2xl:p-20">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className=" w-full lg:w-1/2 mx-auto"
        >
          <div className="relative">
            <div className="w-36 h-36 rounded-full z-10 absolute -top-5 left-2 bg-gradient-2 zoom-animation"></div>
            <div className="w-36 h-36 rounded-full z-10 absolute -bottom-5 right-2 bg-gradient-2 zoom-animation"></div>

            <div className="relative z-20 bg-gradient-1  backdrop-blur-sm lg:w-4/5 mx-auto !h-1/2 rounded-2xl p-4 shadow-2xl">
              <h2 className="text-2xl font-bold mb-6 text-white">
                Request a Quote
              </h2>
              <form className="space-y-4">
                <div className="flex gap-5">
                  <div className="w-full">
                    <label className="block text-sm font-medium text-white mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full border border-white bg-white/20 !text-white placeholder:text-white  rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="w-full">
                    <label className="block text-sm font-medium text-white mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border border-white bg-white/20 !text-white placeholder:text-white  rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="+1 (555) 123-4567"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full border border-white bg-white/20 !text-white placeholder:text-white  rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors appearance-none bg-no-repeat bg-[right_1rem_center] pr-10"
                    style={{
                      backgroundImage:
                        "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%239ca3af'><path d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/></svg>\")",
                    }}
                  >
                    <option className="text-primary" value="">Select Service</option>
                    <option className="text-primary" value="precast-steps">
                      Precast Concrete Steps
                    </option>
                    <option className="text-primary" value="window-well">Window Wells</option>
                    <option className="text-primary" value="custom">Custom Solutions</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="3"
                    className="w-full border border-white bg-white/20 !text-white placeholder:text-white  rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                    placeholder="Tell us about your project..."
                    required
                  ></textarea>
                </div>

                <div>
                  <label className="block text-sm font-medium text-white mb-2">
                    Attachment (PDF, JPG, PNG)
                  </label>
                  <div
                    className="file-upload-area bg-white/20 rounded-xl p-4 text-center cursor-pointer border-dashed border-2 border-white hover:border-primary transition-colors"
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                  >
                    <input
                      type="file"
                      className="hidden"
                      id="file-upload"
                      accept=".pdf,.jpg,.jpeg,.png"
                      multiple
                      required
                      onChange={handleFileUpload}
                    />
                    <div className="flex flex-col items-center">
                      <FileText className="h-6 w-6 text-white mb-3" />
                      <p className="text-white">
                        Drag & drop files here or{" "}
                        <span className="text-primary font-medium">browse</span>
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        Supports PDF, JPG, PNG (Max 10MB)
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    * File attachment is required for quote processing
                  </p>
                </div>

                <motion.button
                  type="submit"
                  className="w-full bg-white text-primary-dark hover:from-primary-light hover:to-primary font-bold py-3 px-4 rounded-xl transition-all"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Submit Request
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
