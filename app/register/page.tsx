"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Loader2 } from "lucide-react";
import Container from "../components/Container";
import { eventsList } from "../data/schedule";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  college: string;
  yearOfStudy: string;
  events: string[];
}

interface FormErrors {
  fullName?: string;
  email?: string;
  events?: string;
}

const yearOptions = [
  "1st Year",
  "2nd Year",
  "3rd Year",
  "4th Year",
  "Post Graduate",
  "Other",
];

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    college: "",
    yearOfStudy: "",
    events: [],
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.events.length === 0) {
      newErrors.events = "Please select at least one event";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleEventToggle = (event: string) => {
    setFormData((prev) => ({
      ...prev,
      events: prev.events.includes(event)
        ? prev.events.filter((e) => e !== event)
        : [...prev.events, event],
    }));
    if (errors.events) {
      setErrors((prev) => ({ ...prev, events: undefined }));
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-[#f8f6f2] py-16 flex items-center">
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto text-center bg-white rounded-2xl p-10 shadow-lg"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-green-600" />
            </motion.div>
            <h2 className="font-serif text-3xl font-bold text-[#1e293b] mb-4">
              Registration Successful!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for registering, {formData.fullName}! We&apos;ve sent a
              confirmation email to {formData.email}.
            </p>
            <p className="text-sm text-gray-500">
              We look forward to seeing you at the Literary Fest 2026!
            </p>
          </motion.div>
        </Container>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f6f2] py-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium text-[#c6a75e] bg-[#c6a75e]/10 rounded-full">
            Join Us
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#1e293b] mb-6">
            Register Now
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Secure your spot at the Literary Fest 2026. Fill in your details and
            select the events you wish to participate in.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl p-8 sm:p-10 shadow-lg border border-gray-100"
          >
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-[#1e293b] mb-2"
                >
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.fullName ? "border-red-400" : "border-gray-200"
                  } focus:border-[#c6a75e] transition-colors`}
                  placeholder="Enter your full name"
                />
                <AnimatePresence>
                  {errors.fullName && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.fullName}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#1e293b] mb-2"
                >
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email ? "border-red-400" : "border-gray-200"
                  } focus:border-[#c6a75e] transition-colors`}
                  placeholder="your.email@example.com"
                />
                <AnimatePresence>
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-500 text-sm mt-1"
                    >
                      {errors.email}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[#1e293b] mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c6a75e] transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label
                  htmlFor="college"
                  className="block text-sm font-medium text-[#1e293b] mb-2"
                >
                  College Name
                </label>
                <input
                  type="text"
                  id="college"
                  name="college"
                  value={formData.college}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c6a75e] transition-colors"
                  placeholder="Enter your college name"
                />
              </div>

              <div>
                <label
                  htmlFor="yearOfStudy"
                  className="block text-sm font-medium text-[#1e293b] mb-2"
                >
                  Year of Study
                </label>
                <select
                  id="yearOfStudy"
                  name="yearOfStudy"
                  value={formData.yearOfStudy}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#c6a75e] transition-colors bg-white"
                >
                  <option value="">Select your year</option>
                  {yearOptions.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-[#1e293b] mb-3">
                  Events Interested In <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {eventsList.map((event) => (
                    <label
                      key={event}
                      className={`flex items-center gap-3 p-3 rounded-lg border cursor-pointer transition-all ${
                        formData.events.includes(event)
                          ? "border-[#c6a75e] bg-[#c6a75e]/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.events.includes(event)}
                        onChange={() => handleEventToggle(event)}
                        className="w-4 h-4 text-[#c6a75e] border-gray-300 rounded focus:ring-[#c6a75e]"
                      />
                      <span className="text-sm text-[#1e293b]">{event}</span>
                    </label>
                  ))}
                </div>
                <AnimatePresence>
                  {errors.events && (
                    <motion.p
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="text-red-500 text-sm mt-2"
                    >
                      {errors.events}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full py-4 rounded-lg font-medium text-white transition-all ${
                  isSubmitting
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#1e293b] hover:bg-[#0f172a] shadow-lg hover:shadow-xl"
                }`}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </span>
                ) : (
                  "Submit Registration"
                )}
              </motion.button>
            </div>
          </form>

          <p className="text-center text-gray-500 text-sm mt-6">
            By registering, you agree to our terms and conditions.
          </p>
        </motion.div>
      </Container>
    </div>
  );
}
