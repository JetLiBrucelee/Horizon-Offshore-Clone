import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Clock, ChevronDown, Shield, Globe, Award, Heart, Users, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "wouter";
import { useForm } from "react-hook-form";

const benefits = [
  { icon: Shield, title: "World-Class Safety", desc: "Industry-leading safety standards, comprehensive training, and a culture where every person is empowered to stop unsafe work." },
  { icon: Globe, title: "Global Careers", desc: "Opportunities across 38 nations — from Houston to Rotterdam, Rio to Singapore. Build a truly international career." },
  { icon: Award, title: "Excellence Culture", desc: "Work alongside the best in the industry. We reward performance, value expertise, and invest in our people's growth." },
  { icon: Heart, title: "Wellbeing Programs", desc: "Comprehensive health coverage, mental wellness support, rotation schedules designed for sustainable work-life balance." },
];

const jobGroups = [
  {
    category: "Offshore Operations",
    jobs: [
      { title: "Toolpusher — Ultra-Deepwater", location: "Gulf of Mexico", type: "Permanent", rotation: "28/28" },
      { title: "Senior Driller", location: "West Africa", type: "Permanent", rotation: "28/28" },
      { title: "Subsea Engineer", location: "Norwegian Sea", type: "Contract", rotation: "N/A" },
      { title: "FPSO Operations Supervisor", location: "Pre-Salt Brazil", type: "Permanent", rotation: "28/28" },
    ],
  },
  {
    category: "Engineering",
    jobs: [
      { title: "Drilling Engineer — Deepwater", location: "Houston, TX", type: "Permanent", rotation: "N/A" },
      { title: "Subsea Systems Engineer", location: "Rotterdam, NL", type: "Permanent", rotation: "N/A" },
      { title: "Naval Architect", location: "Singapore", type: "Permanent", rotation: "N/A" },
      { title: "Process Engineer — FPSO", location: "Rio de Janeiro", type: "Contract", rotation: "N/A" },
    ],
  },
  {
    category: "Technology & Digital",
    jobs: [
      { title: "Senior Data Scientist — Drilling Analytics", location: "Houston, TX", type: "Permanent", rotation: "N/A" },
      { title: "Platform Software Engineer", location: "Singapore", type: "Permanent", rotation: "N/A" },
      { title: "Cybersecurity Analyst", location: "Rotterdam, NL", type: "Permanent", rotation: "N/A" },
    ],
  },
  {
    category: "Corporate",
    jobs: [
      { title: "Commercial Manager — West Africa", location: "Lagos / Houston", type: "Permanent", rotation: "N/A" },
      { title: "HSE Manager", location: "Houston, TX", type: "Permanent", rotation: "N/A" },
      { title: "HR Business Partner", location: "Rotterdam, NL", type: "Permanent", rotation: "N/A" },
    ],
  },
];

export default function Careers() {
  const [openGroup, setOpenGroup] = useState<number | null>(0);
  const { register, handleSubmit, reset, formState: { isSubmitSuccessful } } = useForm();

  const onSubmit = (data: unknown) => {
    console.log("Application submitted", data);
    reset();
  };

  return (
    <main className="bg-[#0A0E1A] text-white">
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(ellipse at 20% 60%, rgba(200,169,110,0.07) 0%, transparent 60%)"
        }} />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="accent-line" />
              <span className="font-mono-custom text-[#00B4D8] text-xs tracking-[0.3em] uppercase">Join Our Crew</span>
            </div>
            <h1 className="font-condensed font-black text-6xl lg:text-8xl uppercase tracking-tight mb-6">
              Build Your<br /><span className="text-[#C8A96E]">Career</span><br />Offshore
            </h1>
            <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
              Horizon Drilling is home to 8,500+ professionals across 62 nationalities. We look for people who are driven, technically excellent, and ready to operate at the frontier of the offshore industry.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-[#0D1629] border-t border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "8,500+", label: "Global Employees" },
              { value: "62", label: "Nationalities" },
              { value: "94%", label: "Retention Rate" },
              { value: "38", label: "Operating Countries" },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <div className="font-condensed font-black text-4xl text-[#C8A96E] mb-1">{value}</div>
                <div className="font-condensed text-xs tracking-[0.15em] uppercase text-white/40">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-[#0A0E1A]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="accent-line mb-4" />
            <h2 className="font-condensed font-black text-5xl uppercase tracking-tight mb-12">Why Horizon Drilling?</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map(({ icon: Icon, title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 0.1}>
                <div className="group p-8 bg-[#0D1629] border border-white/5 hover:border-[#C8A96E]/30 transition-all duration-500">
                  <div className="w-12 h-12 border border-[#C8A96E]/30 flex items-center justify-center mb-6 group-hover:bg-[#C8A96E]/10 transition-colors">
                    <Icon size={20} className="text-[#C8A96E]" />
                  </div>
                  <h3 className="font-condensed font-bold text-xl uppercase tracking-wide mb-3">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-[#0D1629]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="accent-line mb-4" />
            <h2 className="font-condensed font-black text-5xl uppercase tracking-tight mb-12">Open Positions</h2>
          </ScrollReveal>

          <div className="space-y-2">
            {jobGroups.map((group, gi) => (
              <ScrollReveal key={group.category} delay={gi * 0.05}>
                <div className={`border transition-all duration-500 ${openGroup === gi ? "border-[#00B4D8]/30 bg-[#0A0E1A]" : "border-white/5 bg-[#0A0E1A]"}`}>
                  <button
                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                    onClick={() => setOpenGroup(openGroup === gi ? null : gi)}
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex items-center justify-center w-8 h-8 bg-[#00B4D8]/10 border border-[#00B4D8]/20">
                        <Users size={14} className="text-[#00B4D8]" />
                      </div>
                      <div>
                        <span className={`font-condensed font-bold text-xl uppercase tracking-wide ${openGroup === gi ? "text-[#00B4D8]" : "text-white"}`}>
                          {group.category}
                        </span>
                        <span className="ml-3 font-mono-custom text-white/30 text-xs">{group.jobs.length} open</span>
                      </div>
                    </div>
                    <motion.div animate={{ rotate: openGroup === gi ? 180 : 0 }} transition={{ duration: 0.3 }}>
                      <ChevronDown size={18} className={openGroup === gi ? "text-[#00B4D8]" : "text-white/30"} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {openGroup === gi && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35 }}
                        className="overflow-hidden"
                      >
                        <div className="border-t border-white/5">
                          {group.jobs.map((job, ji) => (
                            <div
                              key={job.title}
                              className="px-6 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-white/5 hover:bg-white/2 transition-colors duration-200 last:border-b-0"
                            >
                              <div>
                                <div className="font-condensed font-bold text-lg uppercase tracking-wide mb-1">{job.title}</div>
                                <div className="flex flex-wrap gap-4 text-xs text-white/40">
                                  <div className="flex items-center gap-1.5">
                                    <MapPin size={11} className="text-[#00B4D8]" />
                                    <span>{job.location}</span>
                                  </div>
                                  <div className="flex items-center gap-1.5">
                                    <Clock size={11} className="text-[#00B4D8]" />
                                    <span>{job.type}</span>
                                  </div>
                                  {job.rotation !== "N/A" && (
                                    <div className="flex items-center gap-1.5">
                                      <span className="text-[#00B4D8]">Rotation:</span>
                                      <span>{job.rotation}</span>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <button className="font-condensed font-bold text-xs tracking-[0.2em] uppercase px-6 py-2.5 border border-[#00B4D8] text-[#00B4D8] hover:bg-[#00B4D8] hover:text-white transition-all duration-300 flex-shrink-0">
                                Apply Now
                              </button>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="section-padding bg-[#0A0E1A]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <ScrollReveal>
              <div className="accent-line mb-4" />
              <h2 className="font-condensed font-black text-4xl uppercase tracking-tight mb-4">Send Your CV</h2>
              <p className="text-white/50 mb-10">Don't see a matching role? Send us your CV — we're always looking for exceptional talent.</p>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              {isSubmitSuccessful ? (
                <div className="p-8 border border-[#00B4D8]/30 bg-[#00B4D8]/5 text-center">
                  <div className="font-condensed font-bold text-2xl text-[#00B4D8] mb-2">Thank You!</div>
                  <p className="text-white/60">We'll review your details and be in touch within 5 business days.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-condensed text-xs tracking-[0.2em] uppercase text-white/40 mb-2 block">Full Name</label>
                      <input {...register("name", { required: true })} className="w-full bg-[#0D1629] border border-white/10 px-4 py-3 text-sm text-white focus:border-[#00B4D8] focus:outline-none transition-colors duration-200" placeholder="James Calloway" />
                    </div>
                    <div>
                      <label className="font-condensed text-xs tracking-[0.2em] uppercase text-white/40 mb-2 block">Email Address</label>
                      <input {...register("email", { required: true })} type="email" className="w-full bg-[#0D1629] border border-white/10 px-4 py-3 text-sm text-white focus:border-[#00B4D8] focus:outline-none transition-colors duration-200" placeholder="james@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="font-condensed text-xs tracking-[0.2em] uppercase text-white/40 mb-2 block">Area of Expertise</label>
                    <select {...register("expertise")} className="w-full bg-[#0D1629] border border-white/10 px-4 py-3 text-sm text-white focus:border-[#00B4D8] focus:outline-none transition-colors duration-200">
                      <option value="">Select category</option>
                      <option value="offshore">Offshore Operations</option>
                      <option value="engineering">Engineering</option>
                      <option value="technology">Technology & Digital</option>
                      <option value="corporate">Corporate</option>
                    </select>
                  </div>
                  <div>
                    <label className="font-condensed text-xs tracking-[0.2em] uppercase text-white/40 mb-2 block">Message</label>
                    <textarea {...register("message")} rows={4} className="w-full bg-[#0D1629] border border-white/10 px-4 py-3 text-sm text-white focus:border-[#00B4D8] focus:outline-none transition-colors duration-200 resize-none" placeholder="Tell us about your experience and what you're looking for..." />
                  </div>
                  <button type="submit" className="font-condensed font-bold text-sm tracking-[0.15em] uppercase px-10 py-4 bg-[#00B4D8] text-white hover:bg-[#0096C7] transition-all duration-300 inline-flex items-center gap-2">
                    Submit Application <ArrowRight size={16} />
                  </button>
                </form>
              )}
            </ScrollReveal>
          </div>
        </div>
      </section>
    </main>
  );
}
