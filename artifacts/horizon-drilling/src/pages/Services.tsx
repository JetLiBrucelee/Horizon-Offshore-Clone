import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Drill, Anchor, Waves, Ship, Cpu, BarChart3, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "wouter";

const services = [
  {
    icon: Drill,
    title: "Drilling Operations",
    tagline: "Ultra-deepwater capability to 4,000m",
    desc: "Horizon Drilling operates one of the world's most technically advanced fleets of drillships and semi-submersible rigs. Our vessels are designed for the most demanding ultra-deepwater environments, equipped with dual-activity capability, managed pressure drilling, and next-generation BOP systems.",
    capabilities: [
      "Ultra-deepwater drilling to 4,000m",
      "Dual-activity and managed pressure drilling",
      "High-pressure/high-temperature wells",
      "Extended-reach drilling programs",
      "Arctic-capable equipment packages",
    ],
    specs: [
      { label: "Max Water Depth", value: "4,000m" },
      { label: "Max Drilling Depth", value: "12,000m" },
      { label: "Hook Load", value: "2.5M lbs" },
      { label: "Variable Deck Load", value: "20,000 MT" },
    ],
  },
  {
    icon: Anchor,
    title: "FPSO Solutions",
    tagline: "Floating production from concept to first oil",
    desc: "Our FPSO program covers the complete lifecycle — from engineering and procurement through construction, hook-up, commissioning, and long-term operations. Horizon Drilling's FPSO fleet processes over 900,000 barrels of oil per day across three continents.",
    capabilities: [
      "FPSO design, procurement, and construction",
      "Pre-salt deepwater configuration",
      "Turret and spread-moored solutions",
      "Process optimization and debottlenecking",
      "Life extension and upgrade programs",
    ],
    specs: [
      { label: "Max Storage", value: "2.2M BBL" },
      { label: "Processing Capacity", value: "200K BOPD" },
      { label: "Mooring Depth", value: "3,000m" },
      { label: "Design Life", value: "30 Years" },
    ],
  },
  {
    icon: Waves,
    title: "Subsea Engineering",
    tagline: "Integrated subsea systems and integrity management",
    desc: "Our subsea division manages complete infrastructure from wellhead to riser — designing, installing, and maintaining subsea trees, manifolds, umbilicals, risers, and flowlines across the world's most complex deepwater fields.",
    capabilities: [
      "Subsea tree design and installation",
      "SURF (Subsea Umbilicals, Risers, Flowlines)",
      "Integrity monitoring and IRM programs",
      "Intervention and workover systems",
      "Digital twin and sensor integration",
    ],
    specs: [
      { label: "Max Installation Depth", value: "3,500m" },
      { label: "Riser Systems", value: "SCR/TTR/WCR" },
      { label: "Umbilical Length", value: "Up to 60km" },
      { label: "ROV Capability", value: "3,000m" },
    ],
  },
  {
    icon: Ship,
    title: "Marine Operations",
    tagline: "Fleet management and marine logistics",
    desc: "Supporting our entire fleet are over 40 marine support vessels — from anchor handling tugs and platform supply vessels to accommodation vessels and pipe-layers. Our marine logistics network ensures seamless operations worldwide.",
    capabilities: [
      "Anchor handling and towing operations",
      "Platform supply and logistics",
      "Accommodation and hospitality services",
      "Emergency response and standby",
      "Dynamic positioning Class 2 and 3",
    ],
    specs: [
      { label: "Support Vessels", value: "40+" },
      { label: "DP Class", value: "DP2 / DP3" },
      { label: "Accommodation", value: "Up to 800 POB" },
      { label: "Bulk Capacity", value: "8,000 MT" },
    ],
  },
  {
    icon: BarChart3,
    title: "Well Management",
    tagline: "Integrated well planning and reservoir optimization",
    desc: "From well planning and drilling program design to production optimization and abandonment — our integrated well management team works alongside client reservoir engineers to maximize recovery while minimizing cost and risk.",
    capabilities: [
      "Well design and engineering",
      "Drilling program optimization",
      "Cementing and completion design",
      "Production logging and surveillance",
      "Well abandonment and decommissioning",
    ],
    specs: [
      { label: "Wells Drilled", value: "3,200+" },
      { label: "Success Rate", value: "98.7%" },
      { label: "Avg NPT", value: "< 1.2%" },
      { label: "Reservoir Types", value: "All" },
    ],
  },
  {
    icon: Cpu,
    title: "Digital Solutions",
    tagline: "AI-powered monitoring and predictive operations",
    desc: "Our HD Digital platform integrates real-time sensor data across the entire fleet — enabling predictive maintenance, autonomous drilling optimization, and remote operations management from our global digital operations centers.",
    capabilities: [
      "Real-time drilling automation (wits/WITSML)",
      "Predictive maintenance AI engine",
      "Remote monitoring and operations",
      "Digital twin asset modeling",
      "Cybersecurity and data integrity",
    ],
    specs: [
      { label: "Data Points", value: "2M/sec" },
      { label: "Uptime Improvement", value: "+12%" },
      { label: "Cost Reduction", value: "Up to 18%" },
      { label: "Remote Sites", value: "6 Centers" },
    ],
  },
];

export default function Services() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <main className="bg-[#0A0E1A] text-white">
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(ellipse at 70% 50%, rgba(0,180,216,0.08) 0%, transparent 70%)"
        }} />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="accent-line" />
              <span className="font-mono-custom text-[#00B4D8] text-xs tracking-[0.3em] uppercase">Our Services</span>
            </div>
            <h1 className="font-condensed font-black text-6xl lg:text-8xl uppercase tracking-tight mb-6">
              Full-Spectrum<br /><span className="text-[#00B4D8]">Offshore</span><br />Capability
            </h1>
            <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
              From ultra-deepwater drilling to digital operations management — Horizon Drilling delivers integrated solutions across the complete offshore value chain.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Accordion */}
      <section className="section-padding bg-[#0D1629]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="space-y-2">
            {services.map((service, i) => {
              const Icon = service.icon;
              const isOpen = expanded === i;
              return (
                <ScrollReveal key={service.title} delay={i * 0.05}>
                  <div className={`border transition-all duration-500 ${isOpen ? "border-[#00B4D8]/40 bg-[#0A0E1A]" : "border-white/5 bg-[#0A0E1A] hover:border-white/10"}`}>
                    <button
                      className="w-full flex items-center justify-between p-6 lg:p-8 text-left"
                      onClick={() => setExpanded(isOpen ? null : i)}
                    >
                      <div className="flex items-center gap-6">
                        <div className={`w-12 h-12 flex items-center justify-center border transition-colors duration-300 ${isOpen ? "border-[#00B4D8] bg-[#00B4D8]/10" : "border-white/10"}`}>
                          <Icon size={20} className={isOpen ? "text-[#00B4D8]" : "text-white/50"} />
                        </div>
                        <div>
                          <h3 className={`font-condensed font-bold text-2xl uppercase tracking-wide transition-colors duration-300 ${isOpen ? "text-[#00B4D8]" : "text-white"}`}>
                            {service.title}
                          </h3>
                          <p className="text-white/40 text-sm mt-1">{service.tagline}</p>
                        </div>
                      </div>
                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronDown size={20} className={isOpen ? "text-[#00B4D8]" : "text-white/30"} />
                      </motion.div>
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.4, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 lg:px-8 pb-8 border-t border-white/5">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
                              <div className="lg:col-span-2">
                                <p className="text-white/60 leading-relaxed mb-6">{service.desc}</p>
                                <h4 className="font-condensed font-bold text-sm tracking-[0.2em] uppercase text-[#C8A96E] mb-4">Capabilities</h4>
                                <ul className="space-y-2">
                                  {service.capabilities.map((cap) => (
                                    <li key={cap} className="flex items-start gap-3 text-sm text-white/60">
                                      <span className="text-[#00B4D8] mt-0.5 flex-shrink-0">—</span>
                                      <span>{cap}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-condensed font-bold text-sm tracking-[0.2em] uppercase text-[#C8A96E] mb-4">Technical Specs</h4>
                                <div className="space-y-3">
                                  {service.specs.map((spec) => (
                                    <div key={spec.label} className="flex justify-between items-center py-2 border-b border-white/5">
                                      <span className="text-white/40 text-xs tracking-wide">{spec.label}</span>
                                      <span className="font-mono-custom text-[#00B4D8] text-sm font-medium">{spec.value}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-24 bg-[#0A0E1A] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <ScrollReveal>
            <h2 className="font-condensed font-black text-4xl lg:text-6xl uppercase mb-6">Discuss Your Project</h2>
            <p className="text-white/50 max-w-lg mx-auto mb-8">Our team is ready to engineer a solution tailored to your offshore challenges.</p>
            <Link href="/contact">
              <button className="font-condensed font-bold text-sm tracking-[0.15em] uppercase px-10 py-4 bg-[#00B4D8] text-white hover:bg-[#0096C7] transition-all duration-300 inline-flex items-center gap-2">
                Get in Touch <ArrowRight size={16} />
              </button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
