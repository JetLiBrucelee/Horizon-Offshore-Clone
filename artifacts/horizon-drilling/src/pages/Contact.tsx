import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, ArrowRight, Globe } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { useForm } from "react-hook-form";

const offices = [
  {
    city: "Houston",
    country: "USA — Headquarters",
    address: "1500 Louisiana St, Suite 3100\nHouston, TX 77002",
    phone: "+1 (713) 555-0192",
    email: "support@horizondrillingsco.com",
    hours: "Mon – Fri: 07:00 – 18:00 CST",
  },
  {
    city: "Rotterdam",
    country: "Netherlands",
    address: "Boompjes 40, 3011 XB\nRotterdam",
    phone: "+31 10 555 0847",
    email: "support@horizondrillingsco.com",
    hours: "Mon – Fri: 08:00 – 17:00 CET",
  },
  {
    city: "Rio de Janeiro",
    country: "Brazil",
    address: "Av. Rio Branco 181, Suite 2200\nCentro, Rio de Janeiro",
    phone: "+55 21 3555 0194",
    email: "support@horizondrillingsco.com",
    hours: "Mon – Fri: 08:00 – 17:00 BRT",
  },
  {
    city: "Singapore",
    country: "Singapore",
    address: "One Raffles Quay, #28-01\nSingapore 048583",
    phone: "+65 6555 0392",
    email: "support@horizondrillingsco.com",
    hours: "Mon – Fri: 08:30 – 17:30 SGT",
  },
];

const subjects = [
  "General Inquiry",
  "Drilling Services",
  "FPSO Solutions",
  "Subsea Engineering",
  "Vessel Charter",
  "Partnerships",
  "Media & Press",
  "Investor Relations",
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data: Record<string, string>) => {
    setSubmitError(null);
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        setSubmitError(body.error || "Failed to send message. Please try again.");
      } else {
        setSubmitted(true);
        reset();
      }
    } catch {
      setSubmitError("Connection error. Please check your network and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-[#0A0E1A] text-white">
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(ellipse at 50% 50%, rgba(245,158,11,0.07) 0%, transparent 60%)"
        }} />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="accent-line" />
              <span className="font-mono-custom text-[#F59E0B] text-xs tracking-[0.3em] uppercase">Get in Touch</span>
            </div>
            <h1 className="font-condensed font-black text-6xl lg:text-8xl uppercase tracking-tight mb-6">
              Let's Work<br /><span className="text-[#F59E0B]">Together</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
              Whether you have a project to discuss, a technical challenge to solve, or just want to learn more about Horizon Drilling — our team is ready to help.
            </p>
            <p className="text-white/30 text-sm mt-4 font-mono-custom">Response within 1 business day guaranteed.</p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact form + info */}
      <section className="section-padding bg-[#0D1629]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <ScrollReveal direction="left">
              <div className="accent-line mb-6" />
              <h2 className="font-condensed font-black text-4xl uppercase tracking-tight mb-8">Send a Message</h2>

              {submitted ? (
                <div className="p-10 border border-[#F59E0B]/30 bg-[#F59E0B]/5 text-center">
                  <div className="font-condensed font-black text-3xl text-[#F59E0B] mb-3">Message Sent!</div>
                  <p className="text-white/60">Our team will respond within one business day. Thank you for reaching out.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-condensed text-xs tracking-[0.2em] uppercase text-white/40 mb-2 block">Full Name *</label>
                      <input
                        {...register("name", { required: "Name is required" })}
                        className={`w-full bg-[#0A0E1A] border px-4 py-3.5 text-sm text-white focus:outline-none transition-colors duration-200 ${errors.name ? "border-red-500/50" : "border-white/10 focus:border-[#F59E0B]"}`}
                        placeholder="James Calloway"
                      />
                    </div>
                    <div>
                      <label className="font-condensed text-xs tracking-[0.2em] uppercase text-white/40 mb-2 block">Company</label>
                      <input
                        {...register("company")}
                        className="w-full bg-[#0A0E1A] border border-white/10 px-4 py-3.5 text-sm text-white focus:border-[#F59E0B] focus:outline-none transition-colors duration-200"
                        placeholder="Your Company Name"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="font-condensed text-xs tracking-[0.2em] uppercase text-white/40 mb-2 block">Email *</label>
                      <input
                        {...register("email", { required: "Email is required" })}
                        type="email"
                        className={`w-full bg-[#0A0E1A] border px-4 py-3.5 text-sm text-white focus:outline-none transition-colors duration-200 ${errors.email ? "border-red-500/50" : "border-white/10 focus:border-[#F59E0B]"}`}
                        placeholder="james@company.com"
                      />
                    </div>
                    <div>
                      <label className="font-condensed text-xs tracking-[0.2em] uppercase text-white/40 mb-2 block">Phone</label>
                      <input
                        {...register("phone")}
                        className="w-full bg-[#0A0E1A] border border-white/10 px-4 py-3.5 text-sm text-white focus:border-[#F59E0B] focus:outline-none transition-colors duration-200"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="font-condensed text-xs tracking-[0.2em] uppercase text-white/40 mb-2 block">Subject</label>
                    <select
                      {...register("subject")}
                      className="w-full bg-[#0A0E1A] border border-white/10 px-4 py-3.5 text-sm text-white focus:border-[#F59E0B] focus:outline-none transition-colors duration-200"
                    >
                      <option value="">Select a subject</option>
                      {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="font-condensed text-xs tracking-[0.2em] uppercase text-white/40 mb-2 block">Message *</label>
                    <textarea
                      {...register("message", { required: "Message is required" })}
                      rows={6}
                      className={`w-full bg-[#0A0E1A] border px-4 py-3.5 text-sm text-white focus:outline-none transition-colors duration-200 resize-none ${errors.message ? "border-red-500/50" : "border-white/10 focus:border-[#F59E0B]"}`}
                      placeholder="Tell us about your project, requirements, or questions..."
                    />
                  </div>
                  {submitError && (
                    <div className="p-4 border border-red-500/30 bg-red-500/10 text-red-400 text-sm">
                      {submitError}
                    </div>
                  )}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="font-condensed font-bold text-sm tracking-[0.15em] uppercase px-12 py-4 bg-[#F59E0B] text-white hover:bg-[#D97706] disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 inline-flex items-center gap-2 glow-amber"
                  >
                    {isSubmitting ? "Sending..." : <>Send Message <ArrowRight size={16} /></>}
                  </button>
                </form>
              )}
            </ScrollReveal>

            {/* Offices */}
            <ScrollReveal direction="right">
              <div className="accent-line mb-6" />
              <h2 className="font-condensed font-black text-4xl uppercase tracking-tight mb-8">Our Offices</h2>
              <div className="space-y-6">
                {offices.map((office) => (
                  <div key={office.city} className="group p-6 bg-[#0A0E1A] border border-white/5 hover:border-[#F59E0B]/30 transition-all duration-500">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-condensed font-black text-2xl uppercase tracking-wide">{office.city}</h3>
                        <p className="font-condensed text-sm tracking-wider text-[#F59E0B]">{office.country}</p>
                      </div>
                      <Globe size={18} className="text-white/10 group-hover:text-[#F59E0B]/30 transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-start gap-3 text-sm text-white/50">
                        <MapPin size={13} className="text-[#F59E0B] mt-0.5 flex-shrink-0" />
                        <span className="whitespace-pre-line">{office.address}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-white/50">
                        <Phone size={13} className="text-[#F59E0B] flex-shrink-0" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-white/50">
                        <Mail size={13} className="text-[#F59E0B] flex-shrink-0" />
                        <span>{office.email}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-white/50">
                        <Clock size={13} className="text-[#F59E0B] flex-shrink-0" />
                        <span>{office.hours}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Map embed */}
      <section className="bg-[#060810]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
          <ScrollReveal>
            <div className="accent-line mb-4" />
            <h2 className="font-condensed font-black text-3xl uppercase tracking-tight mb-8">Houston Headquarters</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="relative border border-white/5 overflow-hidden" style={{ height: "420px" }}>
              <iframe
                title="Horizon Drilling Houston HQ"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-95.3898%2C29.7504%2C-95.3498%2C29.7704&layer=mapnik&marker=29.7604%2C-95.3698"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) saturate(0.7) brightness(0.85)", display: "block" }}
                loading="lazy"
                allowFullScreen
              />
              <div className="absolute bottom-4 right-4 bg-[#0A0E1A]/90 border border-[#F59E0B]/30 px-4 py-2 text-xs font-mono-custom text-[#F59E0B] pointer-events-none">
                29.7604° N, 95.3698° W
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
