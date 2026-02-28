"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  CheckCircle, Loader2, AlertCircle, PencilLine,
} from "lucide-react";
import Container from "../components/Container";
import { eventsList } from "../data/schedule";

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

const yearOptions = ["1st Year", "2nd Year", "3rd Year", "4th Year", "Post Graduate", "Other"];

const defaultFormData: FormData = {
  fullName: "", email: "", phone: "", college: "", yearOfStudy: "", events: [],
};

/* Simple shared input styles */
const inputClass =
  "w-full px-4 py-3 rounded-xl bg-white border border-[#2d006b]/15 text-[#1a0040] placeholder-[#9b9b9b] text-sm focus:border-[#2d006b] transition-colors";

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>(defaultFormData);
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [successAction, setSuccessAction] = useState<"created" | "updated">("created");

  useEffect(() => {
    try {
      const saved = localStorage.getItem(LS_KEY);
      if (saved) { setFormData(JSON.parse(saved)); setIsEditMode(true); }
    } catch { /* ignore */ }
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email address";
    if (formData.events.length === 0) newErrors.events = "Please select at least one event";
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
      if (res.status === 409) { setErrors({ email: data.error }); setIsSubmitting(false); return; }
      if (!res.ok) { setErrors({ general: data.error ?? "Something went wrong." }); setIsSubmitting(false); return; }
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
    if (errors.events) setErrors((prev) => ({ ...prev, events: undefined }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  /* ── Success screen ── */
  if (isSuccess) {
    return (
      <div className="flex flex-col min-h-screen">
        {/* Purple hero */}
        <section className="relative section-purple pt-20 pb-24 overflow-hidden">
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[55px] md:h-[70px]">
              <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" fill="#f5f5f5" />
            </svg>
          </div>
          <Container className="relative z-10 text-center">
            <span className="eyebrow-label">Success</span>
            <h1 className="heading-display text-[clamp(2rem,5vw,5rem)] text-[#cbb386] mt-2">
              {successAction === "updated" ? "Registration Updated!" : "You're Registered!"}
            </h1>
          </Container>
        </section>

        {/* Light success card */}
        <section className="bg-[#f5f5f5] grow py-16">
          <Container>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="max-w-lg mx-auto royal-card p-10 text-center"
            >
              <div className="icon-circle-gold mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-[#2d006b]" />
              </div>
              <h2 className="heading-section text-2xl text-[#1a0040] mb-4">
                {successAction === "updated" ? "Details Updated" : "See You There!"}
              </h2>
              <p className="text-[#6b5f8a] mb-6">
                {successAction === "updated"
                  ? `Your registration has been updated, ${formData.fullName}!`
                  : `Thank you for registering, ${formData.fullName}! We've recorded your details.`}
              </p>
              <p className="text-sm text-[#9b9b9b] italic mb-8">
                We look forward to seeing you at Sahithyotsav 2026!
              </p>
              <button
                onClick={() => { setIsSuccess(false); setIsEditMode(true); }}
                className="btn-purple-outline"
              >
                Edit Registration
              </button>
            </motion.div>
          </Container>
        </section>
      </div>
    );
  }

  /* ── Main form ── */
  return (
    <div className="flex flex-col min-h-screen">
      {/* Purple page hero */}
      <section className="relative bg-[#2d006b] text-white pt-20 pb-28 text-center overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg viewBox="0 0 1440 70" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="w-full h-[55px] md:h-[70px]">
            <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" fill="#f5f5f5" />
          </svg>
        </div>
        <Container className="relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="eyebrow-label">{isEditMode ? "Update Your Entry" : "Join Us"}</span>
            <h1 className="heading-display text-[clamp(2.5rem,7vw,6rem)] text-[#cbb386] mt-2 mb-3">
              {isEditMode ? "Edit Registration" : "Register Now"}
            </h1>
            <p className="text-white/70 max-w-xl mx-auto text-lg">
              {isEditMode
                ? "Update your details below. Your previous registration will be replaced."
                : "Secure your spot at Sahithyotsav 2026."}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Light form section */}
      <section className="bg-[#f5f5f5] grow py-14">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="max-w-2xl mx-auto"
          >
            {/* Edit mode banner */}
            <AnimatePresence>
              {isEditMode && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-5 flex items-start gap-3 px-5 py-4 rounded-2xl bg-[#2d006b] text-white"
                >
                  <PencilLine className="w-5 h-5 text-[#cbb386] mt-0.5 flex-shrink-0" />
                  <div className="flex-1 text-sm">
                    <span className="font-bold">Editing existing registration.</span>{" "}
                    Your data is pre-filled. Submit to update.
                  </div>
                  <button onClick={handleCancelEdit} className="text-xs text-white/60 hover:text-red-300 transition-colors underline underline-offset-2 flex-shrink-0">
                    Cancel
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="royal-card p-8 sm:p-10">
              <div className="space-y-6">
                {/* General error */}
                <AnimatePresence>
                  {errors.general && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm"
                    >
                      <AlertCircle className="w-4 h-4 flex-shrink-0" />
                      {errors.general}
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Full Name */}
                <div>
                  <label htmlFor="fullName" className="block text-xs font-black uppercase tracking-widest text-[#2d006b] mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
                    Full Name <span className="text-[#d0a651]">*</span>
                  </label>
                  <input type="text" id="fullName" name="fullName" value={formData.fullName} onChange={handleInputChange}
                    className={`${inputClass} ${errors.fullName ? "border-red-400" : ""}`}
                    placeholder="Enter your full name" />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-black uppercase tracking-widest text-[#2d006b] mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
                    Email Address <span className="text-[#d0a651]">*</span>
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} disabled={isEditMode}
                    className={`${inputClass} ${errors.email ? "border-red-400" : ""} ${isEditMode ? "opacity-50 cursor-not-allowed" : ""}`}
                    placeholder="your.email@example.com" />
                  {isEditMode && <p className="text-xs text-[#9b9b9b] mt-1 italic">Email cannot be changed. Cancel edit to use a different email.</p>}
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-xs font-black uppercase tracking-widest text-[#2d006b] mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
                    Phone Number
                  </label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleInputChange}
                    className={inputClass} placeholder="+91 98765 43210" />
                </div>

                {/* College */}
                <div>
                  <label htmlFor="college" className="block text-xs font-black uppercase tracking-widest text-[#2d006b] mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
                    College
                  </label>
                  <input type="text" id="college" name="college" value={formData.college} onChange={handleInputChange}
                    className={inputClass} placeholder="Enter your college name" />
                </div>

                {/* Year of Study */}
                <div>
                  <label htmlFor="yearOfStudy" className="block text-xs font-black uppercase tracking-widest text-[#2d006b] mb-2" style={{ fontFamily: "var(--font-montserrat)" }}>
                    Year of Study
                  </label>
                  <select id="yearOfStudy" name="yearOfStudy" value={formData.yearOfStudy} onChange={handleInputChange}
                    className={`${inputClass} appearance-none`}
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%232d006b' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`,
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "right 12px center",
                      backgroundSize: "16px",
                    }}>
                    <option value="">Select your year</option>
                    {yearOptions.map((y) => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>

                {/* Events */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-widest text-[#2d006b] mb-3" style={{ fontFamily: "var(--font-montserrat)" }}>
                    Events Interested In <span className="text-[#d0a651]">*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {eventsList.map((event) => (
                      <label key={event}
                        className={`flex items-center gap-3 p-3.5 rounded-xl border cursor-pointer transition-all duration-200 ${
                          formData.events.includes(event)
                            ? "border-[#2d006b] bg-[#2d006b]/[0.05] shadow-sm"
                            : "border-[#2d006b]/15 hover:border-[#2d006b]/30 bg-white"
                        }`}>
                        <input type="checkbox" checked={formData.events.includes(event)} onChange={() => handleEventToggle(event)}
                          className="w-4 h-4 rounded border-[#2d006b]/30 text-[#2d006b] bg-white" />
                        <span className="text-sm text-[#1a0040] font-medium">{event}</span>
                      </label>
                    ))}
                  </div>
                  {errors.events && <p className="text-red-500 text-xs mt-2">{errors.events}</p>}
                </div>

                {/* Submit */}
                <div className="space-y-3 pt-2">
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                    className={`w-full py-4 rounded-full font-black text-sm tracking-widest uppercase transition-all duration-300 ${
                      isSubmitting
                        ? "bg-[#2d006b]/20 text-[#9b9b9b] cursor-not-allowed"
                        : "btn-gold"
                    }`}
                    style={{ fontFamily: "var(--font-montserrat)" }}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="w-5 h-5 animate-spin" />
                        {isEditMode ? "Updating..." : "Submitting..."}
                      </span>
                    ) : isEditMode ? "Update Registration" : "Submit Registration"}
                  </motion.button>

                  {isEditMode && (
                    <button type="button" onClick={handleCancelEdit}
                      className="w-full py-3 rounded-full text-sm font-bold text-[#6b5f8a] hover:text-red-500 border border-[#2d006b]/15 hover:border-red-300 transition-all duration-300 uppercase tracking-wider"
                      style={{ fontFamily: "var(--font-montserrat)" }}>
                      Cancel Edit &amp; Start Fresh
                    </button>
                  )}
                </div>
              </div>
            </form>

            <p className="text-center text-[#9b9b9b] text-xs mt-6 italic">
              By registering, you agree to our terms and conditions.
            </p>
          </motion.div>
        </Container>
      </section>
    </div>
  );
}
