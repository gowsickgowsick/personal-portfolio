import React, { useState } from "react";
import {
  MapPin,
  Mail,
  Phone,
  Send,
  Sun,
  Moon,
  CheckCircle2,
  Loader2,
  Facebook,
  Instagram,
  Linkedin,
  Dribbble,
  Github,
  ArrowRight,
  Briefcase,
  DollarSign
} from "lucide-react";
import { useTheme } from "./ThemeContext";

export default function Contact() {
  const { isDark, toggleTheme } = useTheme();

  // Form input states
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "Web Development",
    budget: "$2k - $5k"
  });

  // UI States
  const [activeField, setActiveField] = useState("");
  const [formStatus, setFormStatus] = useState("idle"); // idle, submitting, success
  const [errors, setErrors] = useState({});

  // Options for interactive pills
  const projectTypes = [
    "Python Full Stack Web Application",
    "Backend API Development",
    "Frontend Development",
    "Database Design & Integration",
    "Bug Fixing & Maintenance",
    "Portfolio Website"
  ];

  const budgetRanges = [
    "<₹10,000",
    "₹10,000 - ₹30,000",
    "₹30,000 - ₹50,000",
    "₹50,000+"
  ];
  // Form field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error if typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  // Select project type or budget
  const handleSelectType = (type) => {
    setFormData(prev => ({ ...prev, projectType: type }));
  };

  const handleSelectBudget = (budget) => {
    setFormData(prev => ({ ...prev, budget: budget }));
  };

  // Simple form validation
  const validateForm = () => {
    let tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) tempErrors.message = "Message cannot be empty";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Submit form simulation
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setFormStatus("submitting");

    // Simulate API request
    setTimeout(() => {
      setFormStatus("success");
      // Reset form after success message
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        projectType: "Web Development",
        budget: "$2k - $5k"
      });
    }, 1800);
  };

  return (
    <div className={`relative overflow-hidden transition-colors duration-500 py-16 px-4 md:px-8 lg:py-24 ${isDark ? "bg-[#0b0f19] text-[#e2e8f0]" : "bg-gradient-to-br from-orange-50 via-orange-100/30 to-violet-50 text-slate-800"
      }`}>

      {/* Premium Background Decorative Elements */}
      <div className="absolute top-10 left-10 w-72 h-72 rounded-full filter blur-[80px] opacity-20 animate-float-gentle mix-blend-multiply"
        style={{ backgroundColor: isDark ? "#4f46e5" : "#fed7aa" }}></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full filter blur-[100px] opacity-25 animate-float-slow mix-blend-multiply"
        style={{ backgroundColor: isDark ? "#06b6d4" : "#ddd6fe" }}></div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Contact Page Header / Hero Section */}
        <div className="flex flex-col items-center text-center mb-16 animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider mb-4 transition-all duration-300 shadow-sm"
            style={{
              borderColor: isDark ? "#334155" : "#e2e8f0",
              backgroundColor: isDark ? "rgba(30, 41, 59, 0.4)" : "rgba(255, 255, 255, 0.6)",
              color: isDark ? "#a78bfa" : "#6d28d9"
            }}>
            <span className="flex h-2 w-2 rounded-full bg-violet-500 animate-pulse"></span>
            Get in touch
          </div>

          <h2
            className={`text-4xl md:text-5xl font-extrabold tracking-tight mb-4 transition-colors duration-300 ${isDark ? "text-white" : "text-slate-900"
              }`}
          >
            Let's Build Your <span className="bg-gradient-to-r from-violet-600 to-indigo-500 bg-clip-text text-transparent">Next Web Application</span>
          </h2>

          <p
            className={`max-w-2xl text-base md:text-lg leading-relaxed mb-6 transition-colors duration-300 ${isDark ? "text-slate-400" : "text-slate-600"
              }`}
          >
            I'm available for Python Full Stack development projects, including responsive web applications, REST APIs, and database-driven solutions using Python, FastAPI, React, and SQL. Let's connect and turn your ideas into reliable, high-performance applications.
          </p>

          {/* Premium Theme Switcher Panel */}
          <div className={`flex items-center gap-3 p-1.5 rounded-full border shadow-inner transition-all duration-300 ${isDark ? "bg-slate-900/60 border-slate-700" : "bg-white/80 border-slate-200"
            }`}>
            <span className="text-xs font-medium pl-3 pr-1 text-slate-500">Theme:</span>
            <button
              onClick={toggleTheme}
              className={`relative inline-flex h-9 w-16 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-300 ease-in-out focus:outline-none ${isDark ? "bg-violet-600" : "bg-amber-400"
                }`}
              aria-label="Toggle theme mode"
            >
              <span className={`pointer-events-none relative inline-block h-8 w-8 transform rounded-full shadow ring-0 transition duration-300 ease-in-out flex items-center justify-center ${isDark ? "translate-x-7 bg-slate-950 text-violet-400" : "translate-x-0 bg-white text-amber-500"
                }`}>
                {isDark ? <Moon size={16} className="animate-spin-once" /> : <Sun size={16} />}
              </span>
            </button>
          </div>
        </div>

        {/* Main Content: Info & Form Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 items-start">

          {/* Left Column: Info Cards & Social Links (5 columns) */}
          <div className="lg:col-span-5 space-y-6 md:space-y-8 animate-slide-up" style={{ animationDelay: "150ms" }}>

            {/* Intro text */}
            <div className={`p-6 rounded-3xl transition-all duration-300 border ${isDark ? "bg-slate-900/40 border-slate-800" : "bg-white/40 border-slate-100"
              }`}>
              <h3 className="text-xl font-bold mb-3">Let's Connect</h3>
              <p
                className={`text-sm leading-relaxed ${isDark ? "text-slate-400" : "text-slate-600"
                  }`}
              >
                Whether you have a project, collaboration opportunity, or a question about Python Full Stack Development, I'd be happy to hear from you. Feel free to reach out anytime.
              </p>
            </div>

            {/* Contact Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">

              {/* Card 1: Location */}
              <div className={`p-6 rounded-3xl transition-all duration-300 flex gap-5 items-start border group glow-card-purple ${isDark ? "bg-slate-900/50 border-slate-800 hover:border-violet-500/50" : "bg-white border-slate-100 hover:border-violet-300"
                } shadow-sm hover:shadow-xl hover:-translate-y-1`}>
                <div className="p-3.5 rounded-2xl bg-violet-100 text-violet-600 dark:bg-violet-950/40 dark:text-violet-400 transition-colors duration-300 group-hover:scale-110">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Our Location</h4>
                  <p className="text-base font-bold">Kanyakumari, TN, India</p>
                  <p className={`text-xs mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>Available worldwide remotely</p>
                </div>
              </div>

              {/* Card 2: Email */}
              <a href="mailto:gowsick@example.com" className={`p-6 rounded-3xl transition-all duration-300 flex gap-5 items-start border group glow-card-emerald ${isDark ? "bg-slate-900/50 border-slate-800 hover:border-emerald-500/50" : "bg-white border-slate-100 hover:border-emerald-300"
                } shadow-sm hover:shadow-xl hover:-translate-y-1`}>
                <div className="p-3.5 rounded-2xl bg-emerald-100 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400 transition-colors duration-300 group-hover:scale-110">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Email Me</h4>
                  <p className="text-base font-bold break-all">gowsick2004bot@gmail.com</p>
                  <p className={`text-xs mt-1 flex items-center gap-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                    Drop a message <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </p>
                </div>
              </a>

              {/* Card 3: Call */}
              <a href="tel:+919876543210" className={`p-6 rounded-3xl transition-all duration-300 flex gap-5 items-start border group glow-card-sky ${isDark ? "bg-slate-900/50 border-slate-800 hover:border-sky-500/50" : "bg-white border-slate-100 hover:border-sky-300"
                } shadow-sm hover:shadow-xl hover:-translate-y-1`}>
                <div className="p-3.5 rounded-2xl bg-sky-100 text-sky-600 dark:bg-sky-950/40 dark:text-sky-400 transition-colors duration-300 group-hover:scale-110">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-1">Call/WhatsApp</h4>
                  <p className="text-base font-bold">9342282055</p>
                  <p className={`text-xs mt-1 ${isDark ? "text-slate-400" : "text-slate-500"}`}>Mon-Fri · 9AM - 6PM </p>
                </div>
              </a>

            </div>

            {/* Social Connect Container */}
            <div className={`p-6 rounded-3xl border transition-all duration-300 ${isDark ? "bg-slate-900/40 border-slate-800" : "bg-white/60 border-slate-100"
              }`}>
              <h4 className="text-sm font-bold tracking-wider text-slate-400 dark:text-slate-500 uppercase mb-4 text-center lg:text-left">
                Connect On Social Networks
              </h4>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {[
                  { icon: <Facebook size={18} />, href: "#", label: "Facebook", color: "hover:bg-blue-600 hover:text-white" },
                  { icon: <Instagram size={18} />, href: "#", label: "Instagram", color: "hover:bg-gradient-to-tr hover:from-yellow-500 hover:via-red-500 hover:to-purple-600 hover:text-white" },
                  { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn", color: "hover:bg-blue-700 hover:text-white" },
                  { icon: <Dribbble size={18} />, href: "#", label: "Dribbble", color: "hover:bg-pink-500 hover:text-white" },
                  { icon: <Github size={18} />, href: "#", label: "GitHub", color: "hover:bg-slate-800 hover:text-white" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`h-11 w-11 rounded-2xl flex items-center justify-center border transition-all duration-300 scale-100 hover:scale-110 hover:-translate-y-0.5 ${isDark
                        ? "border-slate-800 bg-slate-900/80 text-slate-400 hover:border-slate-700"
                        : "border-slate-200 bg-white text-slate-600 hover:border-slate-300"
                      } ${social.color}`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Premium Contact Form (7 columns) */}
          <div className="lg:col-span-7 animate-slide-up" style={{ animationDelay: "250ms" }}>

            <div className={`p-6 md:p-8 rounded-4xl border transition-all duration-300 ${isDark
                ? "bg-slate-900/60 border-slate-800/80 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
                : "bg-white border-slate-200/60 shadow-[0_20px_50px_rgba(109,40,217,0.06)]"
              }`}>

              {formStatus === "success" ? (
                // SUCCESS STATE PANEL
                <div className="py-12 px-4 text-center flex flex-col items-center animate-scale-in">
                  <div className="h-16 w-16 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-500 rounded-full flex items-center justify-center mb-6 animate-bounce">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">Message Sent Successfully!</h3>
                  <p className={`max-w-md mx-auto text-sm leading-relaxed mb-8 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                    Thank you for reaching out. I have received your message and will check the details shortly.
                    Let's connect soon to turn your vision into reality!
                  </p>
                  <button
                    onClick={() => setFormStatus("idle")}
                    className="px-6 py-2.5 bg-violet-600 text-white rounded-xl hover:bg-violet-700 font-semibold shadow-md transition-all duration-200 hover:scale-105 active:scale-95"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                // FORM PANEL
                <form onSubmit={handleSubmit} className="space-y-6">

                  {/* Step Header */}
                  <div>
                    <h3 className="text-xl font-bold mb-1">Tell me about your project</h3>
                    <p className={`text-xs ${isDark ? "text-slate-400" : "text-slate-500"}`}>
                      Select options and fill out the details below.
                    </p>
                  </div>

                  {/* 1. Project Type Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                      <Briefcase size={12} /> Project Type
                    </label>
                    <div className="flex flex-wrap gap-2.5">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => handleSelectType(type)}
                          className={`px-4 py-2 text-xs font-semibold rounded-full border transition-all duration-200 cursor-pointer ${formData.projectType === type
                              ? "bg-violet-600 text-white border-violet-600 shadow-md scale-105"
                              : isDark
                                ? "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"
                                : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300"
                            }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* 2. Budget Selector */}
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 flex items-center gap-1.5">
                      <DollarSign size={12} /> Estimated Budget
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {budgetRanges.map((budget) => (
                        <button
                          key={budget}
                          type="button"
                          onClick={() => handleSelectBudget(budget)}
                          className={`py-2 text-xs font-semibold rounded-xl border text-center transition-all duration-200 cursor-pointer ${formData.budget === budget
                              ? "bg-indigo-600 text-white border-indigo-600 shadow-sm scale-105"
                              : isDark
                                ? "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700"
                                : "bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300"
                            }`}
                        >
                          {budget}
                        </button>
                      ))}
                    </div>
                  </div>

                  <hr className={`border-dashed ${isDark ? "border-slate-800" : "border-slate-100"}`} />

                  {/* Name and Email side by side on Desktop */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                    {/* Name input */}
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => setActiveField("name")}
                        onBlur={() => setActiveField("")}
                        className={`w-full px-4 py-3 rounded-xl border bg-transparent text-sm transition-all duration-300 outline-none ${errors.name
                            ? "border-red-500"
                            : activeField === "name"
                              ? "border-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.15)] bg-slate-900/10"
                              : isDark
                                ? "border-slate-800 hover:border-slate-700 text-white"
                                : "border-slate-200 hover:border-slate-300 text-slate-800"
                          }`}
                        placeholder="Your Name*"
                      />
                      {errors.name && (
                        <span className="text-[10px] font-semibold text-red-500 absolute -bottom-4.5 left-1 animate-pulse">
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email input */}
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => setActiveField("email")}
                        onBlur={() => setActiveField("")}
                        className={`w-full px-4 py-3 rounded-xl border bg-transparent text-sm transition-all duration-300 outline-none ${errors.email
                            ? "border-red-500"
                            : activeField === "email"
                              ? "border-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.15)] bg-slate-900/10"
                              : isDark
                                ? "border-slate-800 hover:border-slate-700 text-white"
                                : "border-slate-200 hover:border-slate-300 text-slate-800"
                          }`}
                        placeholder="Email Address*"
                      />
                      {errors.email && (
                        <span className="text-[10px] font-semibold text-red-500 absolute -bottom-4.5 left-1 animate-pulse">
                          {errors.email}
                        </span>
                      )}
                    </div>

                  </div>

                  {/* Subject input */}
                  <div className="relative pt-2">
                    <input
                      type="text"
                      name="subject"
                      id="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField("subject")}
                      onBlur={() => setActiveField("")}
                      className={`w-full px-4 py-3 rounded-xl border bg-transparent text-sm transition-all duration-300 outline-none ${activeField === "subject"
                          ? "border-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.15)] bg-slate-900/10"
                          : isDark
                            ? "border-slate-800 hover:border-slate-700 text-white"
                            : "border-slate-200 hover:border-slate-300 text-slate-800"
                        }`}
                      placeholder="Subject (Optional)"
                    />
                  </div>

                  {/* Message input */}
                  <div className="relative pt-2">
                    <textarea
                      name="message"
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleInputChange}
                      onFocus={() => setActiveField("message")}
                      onBlur={() => setActiveField("")}
                      className={`w-full px-4 py-3 rounded-xl border bg-transparent text-sm transition-all duration-300 outline-none resize-none ${errors.message
                          ? "border-red-500"
                          : activeField === "message"
                            ? "border-violet-500 shadow-[0_0_10px_rgba(139,92,246,0.15)] bg-slate-900/10"
                            : isDark
                              ? "border-slate-800 hover:border-slate-700 text-white"
                              : "border-slate-200 hover:border-slate-300 text-slate-800"
                        }`}
                      placeholder="Tell me more about your project goals, timelines, or specifications...*"
                    />
                    {errors.message && (
                      <span className="text-[10px] font-semibold text-red-500 absolute -bottom-4.5 left-1 animate-pulse">
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={formStatus === "submitting"}
                      className={`w-full md:w-auto px-8 py-3.5 bg-violet-600 hover:bg-violet-700 text-white font-bold rounded-xl shadow-lg hover:shadow-violet-600/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 flex items-center justify-center gap-2 group cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed`}
                    >
                      {formStatus === "submitting" ? (
                        <>
                          <Loader2 size={18} className="animate-spin" />
                          Sending Message...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>

          </div>

        </div>

        {/* Embedded Map Section */}
        <div className="animate-slide-up" style={{ animationDelay: "350ms" }}>

          <div className="relative rounded-4xl overflow-hidden border shadow-lg"
            style={{
              borderColor: isDark ? "#1e293b" : "#e2e8f0"
            }}>

            {/* Google Map Iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.1919864273846!2d77.53675077591834!3d8.081881602888125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0471b058728d75%3A0xe54d24177b94420e!2sKanyakumari%20Beach!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0, filter: isDark ? "grayscale(1) invert(0.9) contrast(1.2)" : "none" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Kanyakumari Map Location"
              className="transition-all duration-500"
            ></iframe>

            {/* Floating Glass Address Info Card */}
            <div className={`absolute bottom-6 left-6 right-6 md:right-auto md:w-80 p-5 rounded-3xl transition-all duration-300 shadow-lg ${isDark ? "glass-panel-dark text-white" : "glass-panel-light text-slate-800"
              }`}>
              <div className="flex gap-3 items-start">
                <div className="p-2 bg-violet-600 text-white rounded-xl mt-0.5">
                  <MapPin size={18} />
                </div>
                <div>
                  <h5 className="font-bold text-sm">Gowsick's Design Studio</h5>
                  <p className={`text-xs mt-1 leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                    Kanyakumari, Tamil Nadu, India.
                  </p>
                  <p className={`text-[10px] mt-1.5 flex items-center gap-1 font-semibold text-violet-500`}>
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                    Open for partnerships & remote work
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
