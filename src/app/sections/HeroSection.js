"use client";
import { ArrowRight, FileText } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

const HeroSection = ({ handleScroll }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [serverMessage, setServerMessage] = useState(null);

  const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10MB
  const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];

  function handleInputChange(e) {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function validate() {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    else {
      const phoneRe = /^[+0-9()\-\s]{6,30}$/;
      if (!phoneRe.test(formData.phone)) newErrors.phone = "Enter a valid phone number.";
    }
    if (!formData.service) newErrors.service = "Please select a service.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    if (files.length < 1) newErrors.files = "Please attach at least one file.";

    for (let i = 0; i < files.length; i++) {
      const f = files[i];
      if (!allowedTypes.includes(f.type)) {
        newErrors.files = `File "${f.name}" must be PDF, JPG or PNG.`;
        break;
      }
      if (f.size > MAX_FILE_BYTES) {
        newErrors.files = `File "${f.name}" exceeds the 10MB limit.`;
        break;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleFileAdd(newFiles) {
    if (!newFiles) return;
    const arr = Array.from(newFiles);
    const merged = [...files];
    for (const f of arr) {
      if (!merged.some((m) => m.name === f.name && m.size === f.size)) merged.push(f);
    }
    setFiles(merged);
    setErrors((prev) => ({ ...prev, files: "" }));
  }

  function handleFileUpload(e) {
    handleFileAdd(e.target.files);
    e.currentTarget.value = "";
  }

  function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  }

  function handleDrop(e) {
    e.preventDefault();
    handleFileAdd(e.dataTransfer.files);
  }

  function removeFile(index) {
    setFiles((s) => s.filter((_, i) => i !== index));
  }

  async function handleSubmit() {
    // no form element — call this directly from button onClick
    setServerMessage(null);
    if (!validate()) return;

    setSubmitting(true);

    try {
      const fd = new FormData();
      fd.append("name", formData.name);
      fd.append("phone", formData.phone);
      fd.append("service", formData.service);
      fd.append("message", formData.message);
      files.forEach((f) => fd.append("attachments", f));

      const res = await fetch("/api/contact", {
        method: "POST",
        body: fd,
      });

      if (res.ok) {
        setServerMessage("Your request has been sent — we will contact you soon.");
        setFormData({ name: "", phone: "", service: "", message: "" });
        setFiles([]);
      } else {
        const json = await res.json().catch(() => null);
        setServerMessage(json?.error || "Server error — please try again later.");
      }
    } catch (err) {
      setServerMessage(err.message || "Network error");
    } finally {
      setSubmitting(false);
    }
  }

  // small helper: returns extension (or empty string)
  function getExt(filename = "") {
    const idx = filename.lastIndexOf(".");
    return idx !== -1 ? filename.slice(idx + 1).toLowerCase() : "";
  }

  function humanFileSize(bytes) {
    if (bytes === 0) return "0 B";
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    const sizes = ["B", "KB", "MB", "GB", "TB"];
    return (bytes / Math.pow(1024, i)).toFixed(i ? 1 : 0) + " " + sizes[i];
  }

  return (
    <section id="home" className="hero min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="h-auto lg:min-h-screen w-full mx-auto p-6 md:px-8 lg:px-12 2xl:px-20 relative z-10 mt-40">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-0">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <span className="inline-block px-4 py-1 bg-primary text-white rounded-full text-sm font-medium mb-4">
              PRECISION ENGINEERING
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-space font-bold mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                Revolutionizing
              </span>
              <br />
              <span className="text-white">Precast Concrete</span>
              <br />
              <span className="text-white">Solutions in Calgary</span>
            </h1>
            <p className="text-xl text-white mb-8 max-w-2xl">
              We create high-strength precast concrete steps, window wells, and
              parking curbs crafted with precision to withstand Alberta’s
              toughest climates. Our products combine durability, style, and
              fast installation, making them ideal for residential, commercial,
              and custom projects across Calgary and surrounding areas.
            </p>
            <div className="flex gap-4 lg:gap-4">
              <motion.a
                href="#contact"
                onClick={(e) => handleScroll(e, "contact")}
                className="bg-gradient-to-r from-primary to-primary-dark hover:from-primary-light hover:to-primary text-white font-bold py-3 px-4 lg:px-8 rounded-xl transition-all inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Request Quote
                <ArrowRight className="h-5 w-5 ml-2" />
              </motion.a>
              <motion.a
                href="#services"
                onClick={(e) => handleScroll(e, "services")}
                className="border-2 border-primary hover:bg-primary/10 text-white font-bold py-3 px-4 lg:px-8 rounded-xl transition-all"
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
            className=" w-full lg:w-1/2"
          >
            <div className="relative">
              <div className="relative z-20 backdrop-blur-lg lg:w-4/5 mx-auto !h-1/2 rounded-2xl p-4 !border-2 !border-white shadow-2xl">
                <h2 className="text-2xl font-bold mb-6 text-white">Request a Quote</h2>

                {/* NOTE: removed <form> — using button onClick to submit */}
                <div className="space-y-4" role="form" aria-label="Request a quote form">
                  <div className="flex gap-5">
                    <div className="w-full">
                      <label className="block text-sm font-medium text-white mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full border border-white !text-white placeholder:text-white rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div className="w-full">
                      <label className="block text-sm font-medium text-white mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full border border-white !text-white placeholder:text-white rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                      {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Service Required</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full border border-white !text-white placeholder:text-white rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors appearance-none bg-no-repeat bg-[right_1rem_center] pr-10"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%239ca3af'><path d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/></svg>\")",
                      }}
                    >
                      <option className="text-primary" value="">Select Service</option>
                      <option className="text-primary" value="precast-steps">Precast Concrete Steps</option>
                      <option className="text-primary" value="window-well">Window Well</option>
                      <option className="text-primary" value="precast-parking-curbs">Precast Parking Curbs</option>
                    </select>
                    {errors.service && <p className="text-red-400 text-xs mt-1">{errors.service}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="3"
                      className="w-full border border-white !text-white placeholder:text-white rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                      placeholder="Tell us about your project..."
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-white mb-2">Attachment (PDF, JPG, PNG)</label>
                    <div
                      className=" rounded-xl p-4 text-center cursor-pointer border-dashed border-2 border-white hover:border-primary transition-colors"
                      onDragOver={handleDragOver}
                      onDrop={handleDrop}
                      onClick={() => document.getElementById("file-upload").click()}
                    >
                      <input
                        type="file"
                        className="hidden"
                        id="file-upload"
                        accept=".pdf,.jpg,.jpeg,.png"
                        multiple
                        onChange={handleFileUpload}
                        aria-label="Attach files"
                      />
                      <div className="flex flex-col items-center">
                        <FileText className="h-6 w-6 text-white mb-3" />
                        <p className="text-white">
                          Drag & drop files here or <span className="text-primary font-medium">browse</span>
                        </p>
                        <p className="text-xs text-white mt-1">Supports PDF, JPG, PNG (Max 10MB)</p>
                      </div>
                    </div>

                    {errors.files && <p className="text-red-400 text-xs mt-2">{errors.files}</p>}

                    {/* Attached files list (shows name, extension, size) */}
                    {files.length > 0 && (
                      <ul className="mt-3 space-y-2">
                        {files.map((f, i) => (
                          <li
                            key={`${f.name}-${f.size}`}
                            className="flex items-center justify-between bg-white/5 rounded-md px-3 py-2 text-xs"
                          >
                            <div className="flex items-center gap-3 truncate">
                              <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-white/10 text-white text-xs font-medium">
                                {getExt(f.name) || "file"}
                              </span>
                              <div className="truncate">
                                <div className="font-medium truncate">{f.name}</div>
                                <div className="text-[11px] text-white/70">{humanFileSize(f.size)}</div>
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() => removeFile(i)}
                                className="text-red-400 text-sm"
                                aria-label={`Remove ${f.name}`}
                              >
                                Remove
                              </button>
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}

                    <p className="text-xs text-white mt-2">* File attachment is required for quote processing</p>
                  </div>

                  {serverMessage && <p className="text-sm text-white mt-2">{serverMessage}</p>}

                  <motion.button
                    type="button"
                    onClick={handleSubmit}
                    disabled={submitting}
                    className="w-full bg-white text-primary-dark font-bold py-3 px-4 rounded-xl transition-all disabled:opacity-50"
                    whileHover={{ scale: submitting ? 1 : 1.02 }}
                    whileTap={{ scale: submitting ? 1 : 0.98 }}
                    aria-disabled={submitting}
                  >
                    {submitting ? "Submitting..." : "Submit Request"}
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
