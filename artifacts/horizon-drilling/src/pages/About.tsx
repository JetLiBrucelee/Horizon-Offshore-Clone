import { motion } from "framer-motion";
import { ArrowRight, Shield, Zap, Globe, Leaf } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "wouter";

const PEOPLE_VIDEO = "https://www.sbmoffshore.com/wp-content/uploads/2024/09/SBMO_WEB24_TOP-plans-people_Clip_MINI.mp4";

const timeline = [
  { year: "1979", event: "Horizon Drilling founded in Houston, Texas with a single jack-up rig" },
  { year: "1987", event: "First deepwater drilling contract — Gulf of Mexico, 1,200m depth" },
  { year: "1995", event: "Expansion to North Sea and Middle East; fleet grows to 12 assets" },
  { year: "2003", event: "Launch of first-generation FPSO program in pre-salt Brazil" },
  { year: "2011", event: "Ultra-deepwater breakthrough — 3,000m+ successful campaign" },
  { year: "2018", event: "Digital transformation initiative; autonomous monitoring deployed fleet-wide" },
  { year: "2022", event: "Carbon Neutrality Roadmap 2030 announced; ESG leadership recognized" },
  { year: "2026", event: "38 nations, 120+ completed projects, industry-leading safety record" },
];

const leadership = [
  { name: "James R. Calloway", title: "Chief Executive Officer", since: "2014" },
  { name: "Elena Vasquez", title: "Chief Operating Officer", since: "2017" },
  { name: "Marcus Okonkwo", title: "Chief Technology Officer", since: "2019" },
  { name: "Sarah Chen", title: "Chief Financial Officer", since: "2020" },
];

const values = [
  {
    icon: Shield,
    title: "Safety",
    desc: "Zero compromise. Every decision, every operation, every day — safety is our absolute foundation. Our culture demands it, our people live it.",
  },
  {
    icon: Zap,
    title: "Innovation",
    desc: "We invest aggressively in next-generation drilling technology, autonomous systems, and digital intelligence to stay ahead of the curve.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    desc: "We are committed to reducing environmental impact across our global fleet, with measurable targets and transparent reporting.",
  },
  {
    icon: Globe,
    title: "Partnership",
    desc: "Long-term relationships built on trust and performance — with clients, governments, communities, and our people worldwide.",
  },
];

export default function About() {
  return (
    <main className="bg-[#0A0E1A] text-white">
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0D1629] to-[#0A0E1A]" />
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="w-full h-full" style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(245,158,11,0.3) 40px, rgba(245,158,11,0.3) 41px), repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(245,158,11,0.3) 40px, rgba(245,158,11,0.3) 41px)"
          }} />
        </div>
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="accent-line" />
              <span className="font-mono-custom text-[#F59E0B] text-xs tracking-[0.3em] uppercase">About Us</span>
            </div>
            <h1 className="font-condensed font-black text-6xl lg:text-8xl uppercase tracking-tight mb-6">
              45 Years of<br /><span className="text-[#F59E0B]">Offshore</span><br />Mastery
            </h1>
            <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
              From a single jack-up rig in the Gulf of Mexico to a global fleet of ultra-deepwater drillships and FPSOs, Horizon Drilling has set the standard for offshore excellence for nearly five decades.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-[#0D1629]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <ScrollReveal direction="left">
              <div className="accent-line mb-6" />
              <h2 className="font-condensed font-black text-5xl uppercase tracking-tight mb-6">Our Story</h2>
              <p className="text-white/60 leading-relaxed mb-6">
                Horizon Drilling was founded in 1979 by a group of petroleum engineers who believed the future of energy lay beneath the ocean floor. Starting with a single self-elevating platform in the Gulf of Mexico, we grew methodically — always reinvesting in technology, talent, and safety systems.
              </p>
              <p className="text-white/60 leading-relaxed mb-6">
                Today we operate one of the world's most advanced fleets of deepwater assets, managing complex drilling programs across 38 nations from the Arctic Circle to the Equatorial Pacific.
              </p>
              <p className="text-white/60 leading-relaxed">
                Our edge is simple: we attract exceptional engineers, operate with military-grade discipline, and never stop innovating. The result is a track record that speaks for itself — 99.2% operational uptime and zero major incidents in over a decade.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Fleet Assets", value: "24" },
                  { label: "Nationalities", value: "62+" },
                  { label: "Patents Held", value: "140+" },
                  { label: "Revenue (2025)", value: "$4.2B" },
                ].map(({ label, value }) => (
                  <div key={label} className="p-6 bg-[#0A0E1A] border border-white/5">
                    <div className="font-condensed font-black text-4xl text-[#F59E0B] mb-1">{value}</div>
                    <div className="font-condensed text-sm tracking-[0.15em] uppercase text-white/40">{label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Video mid-section */}
      <section className="relative py-40 overflow-hidden">
        <video
          src={PEOPLE_VIDEO}
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          style={{ pointerEvents: "none" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0E1A]/90 to-[#0A0E1A]/60" />
        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="max-w-xl">
              <h2 className="font-condensed font-black text-5xl lg:text-7xl uppercase tracking-tight mb-6">
                People Who<br /><span className="text-[#C8A96E]">Drive Results</span>
              </h2>
              <p className="text-white/60 text-lg leading-relaxed">
                Our 8,500+ employees represent 62 nationalities. They are the engine of every project, every innovation, every safety record we hold.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-[#0A0E1A]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="accent-line mb-4" />
            <h2 className="font-condensed font-black text-5xl uppercase tracking-tight mb-16">Our Journey</h2>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#F59E0B] via-[#C8A96E] to-transparent" />
            <div className="space-y-10">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.05}>
                  <div className={`relative flex flex-col lg:flex-row gap-8 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                    <div className={`lg:w-1/2 ${i % 2 === 0 ? "lg:text-right lg:pr-12" : "lg:pl-12"} pl-8 lg:pl-0`}>
                      <div className="font-condensed font-black text-3xl text-[#F59E0B] mb-2">{item.year}</div>
                      <p className="text-white/60 leading-relaxed">{item.event}</p>
                    </div>
                    <div className="absolute left-[-5px] lg:left-1/2 lg:-translate-x-1/2 top-1 w-3 h-3 bg-[#F59E0B] rotate-45" />
                    <div className="lg:w-1/2" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding bg-[#0D1629]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="accent-line mb-4" />
            <h2 className="font-condensed font-black text-5xl uppercase tracking-tight mb-12">Leadership</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person, i) => (
              <ScrollReveal key={person.name} delay={i * 0.1}>
                <div className="group p-6 bg-[#0A0E1A] border border-white/5 hover:border-[#F59E0B]/30 transition-all duration-500">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#1E2D4A] to-[#0A0E1A] border border-[#F59E0B]/20 flex items-center justify-center mb-4 mx-auto">
                    <span className="font-condensed font-black text-xl text-[#F59E0B]/60">
                      {person.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="font-condensed font-bold text-lg uppercase tracking-wide mb-1">{person.name}</div>
                    <div className="text-[#F59E0B] text-xs font-condensed tracking-wider mb-2">{person.title}</div>
                    <div className="font-mono-custom text-white/30 text-xs">Since {person.since}</div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[#0A0E1A]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="accent-line mb-4" />
            <h2 className="font-condensed font-black text-5xl uppercase tracking-tight mb-12">Our Values</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon: Icon, title, desc }, i) => (
              <ScrollReveal key={title} delay={i * 0.1}>
                <div className="group p-8 bg-[#0D1629] border border-white/5 hover:border-[#F59E0B]/30 transition-all duration-500">
                  <div className="w-12 h-12 border border-[#F59E0B]/40 flex items-center justify-center mb-6 group-hover:bg-[#F59E0B]/10 transition-colors duration-300">
                    <Icon size={20} className="text-[#F59E0B]" />
                  </div>
                  <h3 className="font-condensed font-bold text-2xl uppercase tracking-wide mb-4">{title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D1629] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <ScrollReveal>
            <h2 className="font-condensed font-black text-4xl lg:text-6xl uppercase mb-6">Join the Horizon Team</h2>
            <p className="text-white/50 max-w-xl mx-auto mb-8">Explore career opportunities at one of the most respected names in the offshore industry.</p>
            <Link href="/careers">
              <button className="font-condensed font-bold text-sm tracking-[0.15em] uppercase px-10 py-4 bg-[#F59E0B] text-white hover:bg-[#D97706] transition-all duration-300 inline-flex items-center gap-2">
                View Careers <ArrowRight size={16} />
              </button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
