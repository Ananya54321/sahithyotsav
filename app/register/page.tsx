"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  Loader2,
  Feather,
  BookOpen,
  PencilLine,
  AlertCircle,
} from "lucide-react";
import Container from "../components/Container";
import { eventsList } from "../data/schedule";
import FloatingParticles from "../components/FloatingParticles";
import { OrnamentalDivider } from "../components/DecorativeSVGs";

const LS_KEY = "sahithyotsav_registration";

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
  general?: string;
}

const yearOptions = [
  "1st Year",
  "2nd Year",
  "3rd Year",
  "4th Year",
  "Post Graduate",
  "Other",
];

const defaultFormData: FormData = {
  fullName: "",
  email: "",
  phone: "",
  college: "",
  yearOfStudy: "",
  events: [],
};

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [successAction, setSuccessAction] = useState<"created" | "updated">(
    "created"
  );

  // On mount: check localStorage for an existing submission
  useEffect(() => {
    try {
      const saved = localStorage.getItem(LS_KEY);
      if (saved) {
        const parsed: FormData = JSON.parse(saved);
        setFormData(parsed);
        setIsEditMode(true);
      }
    } catch {
      // Ignore parse errors
    }
  }, []);

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
    setErrors({});

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, isEdit: isEditMode }),
      });

      const data = await res.json();

      if (res.status === 409) {
        // Duplicate email
        setErrors({ email: data.error });
        setIsSubmitting(false);
        return;
      }

      if (!res.ok) {
        setErrors({
          general: data.error ?? "Something went wrong. Please try again.",
        });
        setIsSubmitting(false);
        return;
      }

      // Success — persist to localStorage
      localStorage.setItem(LS_KEY, JSON.stringify(formData));
      setSuccessAction(data.action ?? "created");
      setIsSubmitting(false);
      setIsSuccess(true);
    } catch {
      setErrors({ general: "Network error. Please check your connection." });
      setIsSubmitting(false);
    }
  };

  const handleCancelEdit = () => {
    localStorage.removeItem(LS_KEY);
    setFormData(defaultFormData);
    setIsEditMode(false);
    setErrors({});
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
      <div className="relative min-h-screen paper-texture py-16 flex items-center overflow-hidden page-edge">
        <FloatingParticles count={12} />
        <Container>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="max-w-md mx-auto text-center vintage-card rounded-2xl p-10 gradient-border"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-green-600" />
            </motion.div>
            <h2 className="font-serif text-3xl font-bold text-[#2c1810] mb-4">
              {successAction === "updated"
                ? "Registration Updated!"
                : "Registration Successful!"}
            </h2>
            <p className="text-[#7a6b5d] mb-4">
              {successAction === "updated"
                ? `Your registration has been updated, ${formData.fullName}!`
                : `Thank you for registering, ${formData.fullName}! We've recorded your details.`}
            </p>
            <p className="text-sm text-[#7a6b5d] italic mb-6">
              We look forward to seeing you at Sahithyotsav 2026!
            </p>
            <button
              onClick={() => {
                setIsSuccess(false);
                setIsEditMode(true);
              }}
              className="text-sm text-[#8b6914] underline underline-offset-2 hover:text-[#2c1810] transition-colors"
            >
              Edit my registration
            </button>
          </motion.div>
        </Container>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen paper-texture py-16 overflow-hidden page-edge">
      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 50%, rgba(44, 24, 16, 0.05) 100%)",
        }}
      />

      {/* Scattered background icons */}
      <Feather className="absolute top-24 right-6 w-16 h-16 text-[#8b6914]/[0.05] rotate-[20deg]" />
      <BookOpen className="absolute bottom-20 left-8 w-20 h-20 text-[#8b6914]/[0.04] rotate-[-10deg]" />

      <FloatingParticles count={8} />

      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="inline-block px-5 py-2 mb-6 text-sm font-medium text-[#8b6914] glass rounded-full tracking-wider uppercase">
            {isEditMode ? "Update Registration" : "Join Us"}
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-ink mb-4">
            {isEditMode ? (
              <>
                Edit Your <span className="text-gold-gradient">Entry</span>
              </>
            ) : (
              <>
                Register <span className="text-gold-gradient">Now</span>
              </>
            )}
          </h1>
          <OrnamentalDivider className="my-6" />
          <p className="text-[#7a6b5d] text-lg max-w-2xl mx-auto">
            {isEditMode
              ? "Update your details below. Your previous registration will be replaced."
              : "Secure your spot at Sahithyotsav 2026. Fill in your details and select the events you wish to participate in."}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-2xl mx-auto"
        >
          {/* Edit mode banner */}
          <AnimatePresence>
            {isEditMode && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-5 flex items-start gap-3 px-5 py-4 rounded-xl bg-[#8b6914]/10 border border-[#8b6914]/25"
              >
                <PencilLine className="w-5 h-5 text-[#8b6914] mt-0.5 flex-shrink-0" />
                <div className="flex-1 text-sm text-[#2c1810]">
                  <span className="font-semibold">Editing existing registration.</span>{" "}
                  Your data is pre-filled from your previous submission. Submit to update.
                </div>
                <button
                  onClick={handleCancelEdit}
                  className="text-xs text-[#7a6b5d] hover:text-red-500 transition-colors underline underline-offset-2 flex-shrink-0 mt-0.5"
                >
                  Cancel edit
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          <form
            onSubmit={handleSubmit}
            className="vintage-card rounded-2xl p-7 sm:p-10 gradient-border"
          >
            <div className="space-y-6">
              {/* General error */}
              <AnimatePresence>
                {errors.general && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    {errors.general}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Full Name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-[#2c1810] mb-2"
                >
                  Full Name <span className="text-[#8b6914]">*</span>
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 rounded-xl bg-[#f5f0e8] border ${
                    errors.fullName ? "border-red-400" : "border-[#8b6914]/15"
                  } text-[#2c1810] placeholder-[#7a6b5d]/60 focus:border-[#8b6914] transition-colors`}
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

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-[#2c1810] mb-2"
                >
                  Email Address <span className="text-[#8b6914]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isEditMode}
                  className={`w-full px-4 py-3 rounded-xl bg-[#f5f0e8] border ${
                    errors.email ? "border-red-400" : "border-[#8b6914]/15"
                  } text-[#2c1810] placeholder-[#7a6b5d]/60 focus:border-[#8b6914] transition-colors ${
                    isEditMode ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                  placeholder="your.email@example.com"
                />
                {isEditMode && (
                  <p className="text-xs text-[#7a6b5d] mt-1 italic">
                    Email cannot be changed. Cancel edit to register with a different email.
                  </p>
                )}
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

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-[#2c1810] mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#f5f0e8] border border-[#8b6914]/15 text-[#2c1810] placeholder-[#7a6b5d]/60 focus:border-[#8b6914] transition-colors"
                  placeholder="+91 98765 43210"
                />
              </div>

              {/* College */}
              <div>
                <label
                  htmlFor="college"
                  className="block text-sm font-medium text-[#2c1810] mb-2"
                >
                  CVR College Of Engineering
                </label>
                <input
                  type="text"
                  id="college"
                  name="college"
                  value={formData.college}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#f5f0e8] border border-[#8b6914]/15 text-[#2c1810] placeholder-[#7a6b5d]/60 focus:border-[#8b6914] transition-colors"
                  placeholder="Enter your CVR College Of Engineering"
                />
              </div>

              {/* Year of Study */}
              <div>
                <label
                  htmlFor="yearOfStudy"
                  className="block text-sm font-medium text-[#2c1810] mb-2"
                >
                  Year of Study
                </label>
                <select
                  id="yearOfStudy"
                  name="yearOfStudy"
                  value={formData.yearOfStudy}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-xl bg-[#f5f0e8] border border-[#8b6914]/15 text-[#2c1810] focus:border-[#8b6914] transition-colors appearance-none"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%238b6914' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                    backgroundSize: "16px",
                  }}
                >
                  <option value="">Select your year</option>
                  {yearOptions.map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </select>
              </div>

              {/* Events */}
              <div>
                <label className="block text-sm font-medium text-[#2c1810] mb-3">
                  Events Interested In{" "}
                  <span className="text-[#8b6914]">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {eventsList.map((event) => (
                    <label
                      key={event}
                      className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all duration-300 ${
                        formData.events.includes(event)
                          ? "border-[#8b6914] bg-[#8b6914]/[0.06]"
                          : "border-[#8b6914]/15 hover:border-[#8b6914]/30 bg-[#f5f0e8]"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={formData.events.includes(event)}
                        onChange={() => handleEventToggle(event)}
                        className="w-4 h-4 rounded border-[#8b6914]/30 text-[#8b6914] bg-[#fffdf7] focus:ring-[#8b6914]/30 focus:ring-offset-0"
                      />
                      <span className="text-sm text-[#2c1810]">{event}</span>
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

              {/* Submit */}
              <div className="flex flex-col gap-3">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                  className={`w-full py-4 rounded-xl font-medium transition-all duration-300 ${
                    isSubmitting
                      ? "bg-[#8b6914]/30 text-[#7a6b5d] cursor-not-allowed"
                      : "bg-[#2c1810] text-[#fffdf7] hover:bg-[#1a0f08] shadow-lg hover:shadow-xl"
                  }`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {isEditMode ? "Updating..." : "Submitting..."}
                    </span>
                  ) : isEditMode ? (
                    "Update Registration"
                  ) : (
                    "Submit Registration"
                  )}
                </motion.button>

                {isEditMode && (
                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="w-full py-3 rounded-xl font-medium text-sm text-[#7a6b5d] hover:text-red-500 border border-[#8b6914]/15 hover:border-red-300 transition-all duration-300"
                  >
                    Cancel Edit & Start Fresh
                  </button>
                )}
              </div>
            </div>
          </form>

          <p className="text-center text-[#7a6b5d] text-sm mt-6 italic">
            By registering, you agree to our terms and conditions.
          </p>
        </motion.div>
      </Container>
    </div>
  );
}
