import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Shield, Zap, Globe, Award } from "lucide-react";
import VideoHero from "@/components/VideoHero";
import ParticleCanvas from "@/components/ParticleCanvas";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";

const WAVE_VIDEO = "https://www.sbmoffshore.com/wp-content/uploads/2024/09/SBMO_WEB24_TOP-wave_Clip_MINI.mp4";

const stats = [
  { value: 45, suffix: "+", label: "Years of Excellence" },
  { value: 120, suffix: "+", label: "Global Projects" },
  { value: 38, suffix: "", label: "Nations Served" },
  { value: 99, suffix: ".2%", label: "Operational Uptime" },
];

const services = [
  {
    icon: "⬡",
    title: "Drilling Operations",
    desc: "State-of-the-art drilling vessels and platforms operating in ultra-deepwater environments worldwide.",
    link: "/services",
  },
  {
    icon: "◈",
    title: "FPSO Solutions",
    desc: "Floating Production Storage and Offloading units engineered for maximum yield and reliability.",
    link: "/services",
  },
  {
    icon: "◇",
    title: "Subsea Engineering",
    desc: "Advanced subsea systems integrating cutting-edge technology with decades of deepwater expertise.",
    link: "/services",
  },
];

const projects = [
  {
    name: "ATLAS DEEPWATER",
    location: "Gulf of Mexico",
    depth: "3,200m",
    year: "2024",
    status: "Active",
  },
  {
    name: "NEPTUNE FPSO",
    location: "Pre-Salt Brazil",
    depth: "2,100m",
    year: "2023",
    status: "Active",
  },
  {
    name: "MERIDIAN ULTRA",
    location: "North Sea, UK",
    depth: "2,800m",
    year: "2024",
    status: "Active",
  },
];

const news = [
  {
    category: "Operations",
    date: "April 10, 2026",
    title: "Horizon Drilling Achieves Record 500-Day Continuous Operation Milestone",
    excerpt: "Our flagship drillship completes an unprecedented continuous operation streak in the Gulf of Mexico.",
  },
  {
    category: "Technology",
    date: "March 28, 2026",
    title: "Next-Generation Blowout Preventer System Successfully Deployed",
    excerpt: "The HD-BOP 7000 system sets new industry standards for deepwater safety and reliability.",
  },
  {
    category: "Sustainability",
    date: "March 15, 2026",
    title: "Carbon Neutrality Roadmap 2030: Our Commitment to the Future",
    excerpt: "Horizon Drilling announces ambitious targets to reduce emissions by 60% by the end of the decade.",
  },
];

export default function Home() {
  return (
    <main className="bg-[#0A0E1A] text-white">
      {/* Hero */}
      <section className="relative h-screen min-h-[700px] flex items-center overflow-hidden">
        <VideoHero />
        <ParticleCanvas />
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 w-full">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-12 bg-[#F59E0B]" />
              <span className="font-mono-custom text-[#F59E0B] text-xs tracking-[0.3em] uppercase">Since 1979</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9 }}
              className="font-condensed font-black text-6xl sm:text-7xl md:text-8xl lg:text-[110px] leading-none tracking-tight uppercase mb-6 text-glow-teal"
            >
              Redefining<br />
              <span className="text-[#F59E0B]">Offshore</span><br />
              Excellence
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="text-white/60 text-lg max-w-xl mb-10 leading-relaxed"
            >
              Horizon Drilling & Co engineers and operates the world's most advanced offshore drilling systems — safely, reliably, and sustainably.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/fleet">
                <button className="font-condensed font-bold text-sm tracking-[0.15em] uppercase px-8 py-4 bg-[#F59E0B] text-white hover:bg-[#D97706] transition-all duration-300 glow-teal flex items-center gap-2">
                  Explore Our Fleet <ArrowRight size={16} />
                </button>
              </Link>
              <Link href="/projects">
                <button className="font-condensed font-bold text-sm tracking-[0.15em] uppercase px-8 py-4 border border-white/30 text-white hover:border-[#C8A96E] hover:text-[#C8A96E] transition-all duration-300 flex items-center gap-2">
                  Our Projects <ArrowRight size={16} />
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span className="font-mono-custom text-white/30 text-xs tracking-[0.3em] uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <ChevronDown size={20} className="text-[#F59E0B]" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#0D1629] border-t border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <div className="font-condensed font-black text-5xl lg:text-6xl text-[#F59E0B] mb-2 font-mono-custom">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="font-condensed font-semibold text-sm tracking-[0.15em] uppercase text-white/50">
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-[#0A0E1A]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="accent-line" />
              <span className="font-mono-custom text-[#F59E0B] text-xs tracking-[0.3em] uppercase">Core Capabilities</span>
            </div>
            <h2 className="font-condensed font-black text-5xl lg:text-7xl uppercase tracking-tight mb-4">
              What We Do
            </h2>
            <p className="text-white/50 text-lg max-w-2xl mb-16 leading-relaxed">
              Horizon Drilling delivers integrated offshore energy solutions — from ultra-deepwater drilling to complete FPSO management.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ScrollReveal key={s.title} delay={i * 0.15}>
                <Link href={s.link}>
                  <div className="group relative p-8 bg-[#0D1629] border border-white/5 hover:border-[#F59E0B]/40 transition-all duration-500 cursor-pointer overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#F59E0B]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="relative z-10">
                      <div className="text-4xl text-[#F59E0B] mb-6">{s.icon}</div>
                      <h3 className="font-condensed font-bold text-2xl uppercase tracking-wide mb-4 group-hover:text-[#F59E0B] transition-colors duration-300">{s.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed mb-6">{s.desc}</p>
                      <div className="flex items-center gap-2 text-[#C8A96E] text-xs font-condensed font-bold tracking-[0.2em] uppercase">
                        <span>Learn More</span>
                        <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 h-0.5 bg-[#F59E0B] w-0 group-hover:w-full transition-all duration-500" />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section — Wave background */}
      <section className="relative py-32 overflow-hidden">
        <video
          src={WAVE_VIDEO}
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          style={{ pointerEvents: "none" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E1A] via-[#0A0E1A]/80 to-[#0A0E1A]" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-2xl">
            <ScrollReveal>
              <div className="flex items-center gap-3 mb-4">
                <div className="accent-line" />
                <span className="font-mono-custom text-[#C8A96E] text-xs tracking-[0.3em] uppercase">Our Commitment</span>
              </div>
              <h2 className="font-condensed font-black text-5xl lg:text-7xl uppercase tracking-tight mb-6">
                Safety First.<br /><span className="text-[#F59E0B]">Always.</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                With a zero-incident culture embedded at every level of our operations, Horizon Drilling maintains the offshore industry's most rigorous safety standards — protecting people, assets, and the environment.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Shield, label: "Zero LTI Record", value: "2,847 Days" },
                  { icon: Award, label: "Industry Awards", value: "47+" },
                  { icon: Globe, label: "Compliance Certs", value: "ISO 9001/14001" },
                  { icon: Zap, label: "Emergency Response", value: "< 4 Minutes" },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} className="flex items-start gap-3">
                    <div className="w-8 h-8 border border-[#F59E0B]/30 flex items-center justify-center flex-shrink-0">
                      <Icon size={14} className="text-[#F59E0B]" />
                    </div>
                    <div>
                      <div className="font-condensed font-bold text-lg text-[#C8A96E]">{value}</div>
                      <div className="text-white/40 text-xs tracking-wide">{label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="section-padding bg-[#0D1629]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-12">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="accent-line" />
                  <span className="font-mono-custom text-[#F59E0B] text-xs tracking-[0.3em] uppercase">Portfolio</span>
                </div>
                <h2 className="font-condensed font-black text-5xl lg:text-6xl uppercase tracking-tight">Featured Projects</h2>
              </div>
              <Link href="/projects" className="hidden md:block">
                <button className="font-condensed font-bold text-sm tracking-[0.15em] uppercase px-6 py-3 border border-white/20 text-white/60 hover:border-[#F59E0B] hover:text-[#F59E0B] transition-all duration-300 flex items-center gap-2">
                  View All <ArrowRight size={14} />
                </button>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <ScrollReveal key={p.name} delay={i * 0.1}>
                <div className="group relative bg-[#0A0E1A] border border-white/5 hover:border-[#F59E0B]/30 transition-all duration-500 overflow-hidden">
                  {/* Image placeholder with gradient */}
                  <div className="h-48 bg-gradient-to-br from-[#1E2D4A] to-[#0A0E1A] relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 border border-[#F59E0B]/20 rotate-45 flex items-center justify-center">
                        <div className="w-16 h-16 border border-[#F59E0B]/40 rotate-0 flex items-center justify-center">
                          <span className="font-condensed font-black text-[#F59E0B]/60 text-xl -rotate-45">HD</span>
                        </div>
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="font-condensed font-bold text-xs tracking-wider px-3 py-1 bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/30">
                        {p.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="font-mono-custom text-[#C8A96E] text-xs mb-2">{p.year} — {p.location}</div>
                    <h3 className="font-condensed font-bold text-xl uppercase tracking-wide mb-2 group-hover:text-[#F59E0B] transition-colors">{p.name}</h3>
                    <div className="flex items-center gap-2 text-white/40 text-xs">
                      <span>Water Depth: {p.depth}</span>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="section-padding bg-[#0A0E1A]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="flex items-center justify-between mb-12">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="accent-line" />
                  <span className="font-mono-custom text-[#F59E0B] text-xs tracking-[0.3em] uppercase">Latest News</span>
                </div>
                <h2 className="font-condensed font-black text-5xl lg:text-6xl uppercase tracking-tight">Industry Insights</h2>
              </div>
              <Link href="/news" className="hidden md:block">
                <button className="font-condensed font-bold text-sm tracking-[0.15em] uppercase px-6 py-3 border border-white/20 text-white/60 hover:border-[#F59E0B] hover:text-[#F59E0B] transition-all duration-300 flex items-center gap-2">
                  All News <ArrowRight size={14} />
                </button>
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((n, i) => (
              <ScrollReveal key={n.title} delay={i * 0.1}>
                <Link href="/news">
                  <div className="group p-6 bg-[#0D1629] border border-white/5 hover:border-[#F59E0B]/30 transition-all duration-500 cursor-pointer">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="font-condensed font-bold text-xs tracking-[0.15em] uppercase px-3 py-1 bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20">
                        {n.category}
                      </span>
                      <span className="font-mono-custom text-white/30 text-xs">{n.date}</span>
                    </div>
                    <h3 className="font-condensed font-bold text-xl uppercase tracking-wide mb-3 group-hover:text-[#F59E0B] transition-colors leading-tight">
                      {n.title}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed">{n.excerpt}</p>
                    <div className="mt-4 flex items-center gap-2 text-[#C8A96E] text-xs font-condensed font-bold tracking-[0.2em] uppercase">
                      <span>Read More</span>
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-24 bg-gradient-to-r from-[#0A0E1A] via-[#1E2D4A] to-[#0A0E1A] border-t border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <ScrollReveal>
            <div className="accent-line mx-auto mb-6" />
            <h2 className="font-condensed font-black text-5xl lg:text-7xl uppercase tracking-tight mb-6">
              Ready to Go <span className="text-[#F59E0B]">Deeper?</span>
            </h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto mb-10">
              Partner with Horizon Drilling for your next offshore project. Our team of experts is ready to engineer a solution for you.
            </p>
            <Link href="/contact">
              <button className="font-condensed font-bold text-base tracking-[0.15em] uppercase px-12 py-5 bg-[#F59E0B] text-white hover:bg-[#D97706] transition-all duration-300 glow-teal inline-flex items-center gap-3">
                Start a Conversation <ArrowRight size={18} />
              </button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
