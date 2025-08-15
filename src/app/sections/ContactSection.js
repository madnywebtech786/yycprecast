"use client";
import { FileText } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const [files, setFiles] = useState([]); // File[]
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [serverMessage, setServerMessage] = useState(null);

  const MAX_FILE_BYTES = 10 * 1024 * 1024; // 10MB
  const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // append files, avoid duplicates by name+size
  const addFiles = (fileList) => {
    if (!fileList) return;
    const arr = Array.from(fileList);
    setFiles((prev) => {
      const merged = [...prev];
      for (const f of arr) {
        if (!merged.some((m) => m.name === f.name && m.size === f.size))
          merged.push(f);
      }
      return merged;
    });
    setErrors((prev) => ({ ...prev, files: "" }));
  };

  const handleFileUpload = (e) => {
    addFiles(e.target.files);
    e.currentTarget.value = "";
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    e.dataTransfer.dropEffect = "copy";
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addFiles(e.dataTransfer.files);
  };

  const removeFile = (index) => {
    setFiles((s) => s.filter((_, i) => i !== index));
  };

  function humanFileSize(bytes) {
    if (bytes === 0) return "0 B";
    const i = Math.floor(Math.log(bytes) / Math.log(1024));
    const sizes = ["B", "KB", "MB", "GB", "TB"];
    return (bytes / Math.pow(1024, i)).toFixed(i ? 1 : 0) + " " + sizes[i];
  }

  function getExt(filename = "") {
    const idx = filename.lastIndexOf(".");
    return idx !== -1 ? filename.slice(idx + 1).toLowerCase() : "";
  }

  function validate() {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required.";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required.";
    else {
      const phoneRe = /^[+0-9()\-\s]{6,30}$/;
      if (!phoneRe.test(formData.phone))
        newErrors.phone = "Enter a valid phone number.";
    }
    if (!formData.service) newErrors.service = "Please select a service.";
    if (!formData.message.trim()) newErrors.message = "Message is required.";
    if (files.length < 1) newErrors.files = "Please attach at least one file.";

    for (let i = 0; i < files.length; i++) {
      const f = files[i];
      if (f.size === 0) {
        newErrors.files = `File "${f.name}" is empty.`;
        break;
      }
      if (f.size > MAX_FILE_BYTES) {
        newErrors.files = `File "${f.name}" exceeds the 10MB limit.`;
        break;
      }
      if (f.type && !allowedTypes.includes(f.type)) {
        newErrors.files = `File "${f.name}" must be PDF, JPG or PNG.`;
        break;
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
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
        setServerMessage(
          "Your request has been sent — we will contact you soon."
        );
        setFormData({ name: "", phone: "", service: "", message: "" });
        setFiles([]);
        setErrors({});
      } else {
        const json = await res.json().catch(() => null);
        setServerMessage(
          json?.error || "Server error — please try again later."
        );
      }
    } catch (err) {
      setServerMessage(err?.message || "Network error");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className=" p-6 md:p-8 lg:p-12 2xl:p-20 bg-white">
      <div className="text-center max-w-3xl mx-auto mb-16 backdrop-blur-md">
        <span className="inline-block px-4 py-1 bg-primary text-white rounded-full text-sm font-medium mb-4">
          GET IN TOUCH
        </span>
        <h2 className="text-3xl lg:text-4xl font-space font-bold mb-6">
          <span className="text-black">Let's Build</span>
          <span className="text-primary-light ml-2">Something Amazing</span>
        </h2>
        <p className="text-xl text-black">
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
          className="glass-effect rounded-2xl p-8 border border-primary text-primary/20"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full border border-primary text-primary placeholder:text-primary rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="John Doe"
                  required
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full border border-primary text-primary placeholder:text-primary rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                  placeholder="+1 (555) 123-4567"
                  required
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            <div className="grid">
              <div>
                <label className="block text-sm font-medium text-primary mb-2">
                  Service Required
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full border border-primary text-primary text-primary rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors appearance-none bg-no-repeat bg-[right_1rem_center] pr-10"
                  style={{
                    backgroundImage:
                      "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%239ca3af'><path d='M15.3 9.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z'/></svg>\")",
                  }}
                >
                  <option className="text-primary" value="">
                    Select Service
                  </option>
                  <option className="text-primary" value="precast-steps">
                    Precast Concrete Steps
                  </option>
                  <option className="text-primary" value="window-well">
                    Window Well
                  </option>
                  <option
                    className="text-primary"
                    value="precast-parking-curbs"
                  >
                    Precast Parking Curbs
                  </option>
                </select>
                {errors.service && (
                  <p className="text-red-500 text-xs mt-1">{errors.service}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows="5"
                className="w-full border border-primary text-primary placeholder:text-primary rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors"
                placeholder="Please describe your project requirements, dimensions, and any specific challenges..."
                required
              ></textarea>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-2">
                Attachment (PDF, JPG, PNG)
              </label>
              <div
                className="file-upload-area rounded-xl p-6 text-center cursor-pointer  border-2 border-gray-900 border-dashed hover:border-primary transition-colors"
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                onClick={() =>
                  document.getElementById("contact-file-upload")?.click()
                }
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
                  <p className="text-primary">
                    Drag & drop files here or{" "}
                    <span className="text-primary font-medium">browse</span>
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Supports PDF, JPG, PNG (Max 10MB)
                  </p>
                </div>
              </div>
              {errors.files && (
                <p className="text-red-500 text-xs mt-2">{errors.files}</p>
              )}
              {files.length > 0 && (
                <ul className="mt-2 space-y-1">
                  {files.map((f, i) => (
                    <li
                      key={`${f.name}-${f.size}`}
                      className="flex items-center justify-between bg-primary/15 rounded-md px-3 py-2 text-xs"
                    >
                      <div className="flex items-center gap-3 truncate">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded bg-white/10 text-primary text-xs font-medium">
                          {getExt(f.name) || "file"}
                        </span>
                        <div className="truncate">
                          <div className="font-medium truncate text-primary">{f.name}</div>
                          <div className="text-[11px] text-gray-500">
                            {humanFileSize(f.size)}
                          </div>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(i)}
                        className="ml-3 text-sm text-red-400"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {serverMessage && (
              <p className="text-sm bg-green-600 rounded-md p-2 text-white mt-2">
                {serverMessage}
              </p>
            )}

            <motion.button
              type="submit"
              className="w-full bg-gradient-3 text-white font-bold py-3 px-4 rounded-xl transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={submitting}
            >
              {submitting ? "Submitting..." : "Submit Request"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactSection;
