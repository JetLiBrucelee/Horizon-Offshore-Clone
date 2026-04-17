import { motion } from "framer-motion";
import { Anchor, Waves, Ship, Wrench, MapPin, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "wouter";

const vessels = [
  {
    name: "HD POSEIDON",
    type: "Drillship",
    status: "Active",
    location: "Gulf of Mexico",
    waterDepth: "4,000m",
    drillingDepth: "12,000m",
    yearBuilt: "2019",
    flag: "Marshall Islands",
    hookLoad: "2.5M lbs",
    generator: "4 × 7,200kW",
    dpClass: "DP3",
    accommodation: "200 POB",
  },
  {
    name: "HD TRITON",
    type: "Drillship",
    status: "Active",
    location: "Pre-Salt Brazil",
    waterDepth: "3,600m",
    drillingDepth: "12,000m",
    yearBuilt: "2020",
    flag: "Cayman Islands",
    hookLoad: "2.5M lbs",
    generator: "4 × 7,200kW",
    dpClass: "DP3",
    accommodation: "200 POB",
  },
  {
    name: "HD OLYMPUS",
    type: "Semi-Submersible",
    status: "Active",
    location: "Norwegian Sea",
    waterDepth: "1,800m",
    drillingDepth: "10,000m",
    yearBuilt: "2016",
    flag: "Norway",
    hookLoad: "2.0M lbs",
    generator: "6 × 4,500kW",
    dpClass: "DP3",
    accommodation: "150 POB",
  },
  {
    name: "HD AURORA",
    type: "Semi-Submersible",
    status: "Active",
    location: "West Africa",
    waterDepth: "2,000m",
    drillingDepth: "10,000m",
    yearBuilt: "2017",
    flag: "Marshall Islands",
    hookLoad: "2.0M lbs",
    generator: "6 × 4,500kW",
    dpClass: "DP3",
    accommodation: "150 POB",
  },
  {
    name: "HD SOVEREIGN",
    type: "FPSO Vessel",
    status: "Active",
    location: "Santos Basin",
    waterDepth: "2,100m",
    drillingDepth: "N/A",
    yearBuilt: "2021",
    flag: "Brazil",
    hookLoad: "N/A",
    generator: "6 × 8,000kW",
    dpClass: "Spread Moored",
    accommodation: "120 POB",
  },
  {
    name: "HD HORIZON",
    type: "FPSO Vessel",
    status: "In Transit",
    location: "Suriname",
    waterDepth: "1,800m",
    drillingDepth: "N/A",
    yearBuilt: "2024",
    flag: "Marshall Islands",
    hookLoad: "N/A",
    generator: "6 × 9,000kW",
    dpClass: "Internal Turret",
    accommodation: "130 POB",
  },
];

const typeIcons: Record<string, typeof Ship> = {
  "Drillship": Anchor,
  "Semi-Submersible": Waves,
  "FPSO Vessel": Ship,
  "Support Vessel": Wrench,
};

export default function Fleet() {
  return (
    <main className="bg-[#0A0E1A] text-white">
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(ellipse at 80% 30%, rgba(0,180,216,0.08) 0%, transparent 60%)"
        }} />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="accent-line" />
              <span className="font-mono-custom text-[#00B4D8] text-xs tracking-[0.3em] uppercase">Our Fleet</span>
            </div>
            <h1 className="font-condensed font-black text-6xl lg:text-8xl uppercase tracking-tight mb-6">
              The World's<br /><span className="text-[#00B4D8]">Most Advanced</span><br />Fleet
            </h1>
            <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
              24 assets operating across six continents. Every vessel is equipped with the latest drilling technology, autonomous systems, and the highest safety certifications in the industry.
            </p>
          </ScrollReveal>

          {/* Fleet summary */}
          <ScrollReveal delay={0.2}>
            <div className="flex flex-wrap gap-8 mt-12">
              {[
                { label: "Drillships", value: "8" },
                { label: "Semi-Submersibles", value: "6" },
                { label: "FPSO Vessels", value: "5" },
                { label: "Support Vessels", value: "40+" },
              ].map(({ label, value }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="font-condensed font-black text-4xl text-[#00B4D8]">{value}</div>
                  <div className="font-condensed text-sm tracking-[0.15em] uppercase text-white/40">{label}</div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="section-padding bg-[#0D1629]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {vessels.map((vessel, i) => {
              const Icon = typeIcons[vessel.type] || Ship;
              return (
                <ScrollReveal key={vessel.name} delay={i * 0.08}>
                  <div className="group bg-[#0A0E1A] border border-white/5 hover:border-[#00B4D8]/30 transition-all duration-500 overflow-hidden">
                    {/* Header */}
                    <div className="relative h-32 bg-gradient-to-r from-[#1E2D4A] to-[#0D1629] p-6 overflow-hidden">
                      <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-10 group-hover:opacity-20 transition-opacity">
                        <Icon size={80} />
                      </div>
                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-2">
                          <span className={`font-condensed font-bold text-xs tracking-wider px-2.5 py-1 border ${
                            vessel.status === "Active"
                              ? "bg-[#00B4D8]/15 text-[#00B4D8] border-[#00B4D8]/30"
                              : vessel.status === "In Transit"
                              ? "bg-[#C8A96E]/15 text-[#C8A96E] border-[#C8A96E]/30"
                              : "bg-white/5 text-white/40 border-white/10"
                          }`}>
                            {vessel.status}
                          </span>
                          <span className="font-condensed text-xs text-white/30 tracking-wider">{vessel.type}</span>
                        </div>
                        <h3 className="font-condensed font-black text-2xl uppercase tracking-wide">{vessel.name}</h3>
                        <div className="flex items-center gap-1.5 text-white/40 text-xs mt-1">
                          <MapPin size={11} className="text-[#00B4D8]" />
                          <span>{vessel.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Specs grid */}
                    <div className="grid grid-cols-4 divide-x divide-white/5 border-t border-white/5">
                      {[
                        { label: "Water Depth", value: vessel.waterDepth },
                        { label: "Drill Depth", value: vessel.drillingDepth },
                        { label: "DP Class", value: vessel.dpClass },
                        { label: "POB", value: vessel.accommodation },
                      ].map(({ label, value }) => (
                        <div key={label} className="p-4 text-center">
                          <div className="font-mono-custom text-[#00B4D8] text-sm font-medium mb-1">{value}</div>
                          <div className="text-white/30 text-[10px] tracking-wide uppercase">{label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Additional specs */}
                    <div className="px-6 py-4 border-t border-white/5 flex flex-wrap gap-4 text-xs text-white/40">
                      <span>Built: <span className="text-white/60">{vessel.yearBuilt}</span></span>
                      <span>Flag: <span className="text-white/60">{vessel.flag}</span></span>
                      <span>Generator: <span className="text-white/60">{vessel.generator}</span></span>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* World Map Section */}
      <section className="section-padding bg-[#0A0E1A]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="accent-line mb-4" />
            <h2 className="font-condensed font-black text-5xl uppercase tracking-tight mb-12">Global Operations</h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="relative bg-[#0D1629] border border-white/5 p-8">
              {/* Stylized world map using SVG */}
              <svg viewBox="0 0 1200 600" className="w-full opacity-30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M120 200 L200 180 L280 190 L320 170 L380 185 L400 200 L380 220 L300 230 L200 225 Z" fill="#1E2D4A" stroke="#00B4D8" strokeWidth="0.5"/>
                <path d="M350 160 L500 140 L580 150 L620 170 L600 190 L560 210 L500 220 L420 215 L380 200 Z" fill="#1E2D4A" stroke="#00B4D8" strokeWidth="0.5"/>
                <path d="M500 130 L650 100 L750 110 L780 140 L760 160 L700 175 L640 170 L580 160 Z" fill="#1E2D4A" stroke="#00B4D8" strokeWidth="0.5"/>
                <path d="M650 90 L780 70 L860 80 L920 100 L940 130 L920 150 L880 160 L820 155 L760 140 L720 120 Z" fill="#1E2D4A" stroke="#00B4D8" strokeWidth="0.5"/>
                <path d="M200 250 L380 230 L400 260 L380 310 L320 360 L280 380 L220 370 L180 330 L160 280 Z" fill="#1E2D4A" stroke="#00B4D8" strokeWidth="0.5"/>
                <path d="M420 200 L560 210 L580 240 L560 290 L520 330 L480 350 L440 340 L410 300 L400 260 Z" fill="#1E2D4A" stroke="#00B4D8" strokeWidth="0.5"/>
                <path d="M620 160 L760 170 L800 200 L820 250 L800 300 L760 330 L700 340 L650 320 L620 280 L600 230 Z" fill="#1E2D4A" stroke="#00B4D8" strokeWidth="0.5"/>
                <path d="M780 140 L920 150 L980 180 L1020 220 L1040 270 L1020 320 L980 350 L930 360 L880 340 L840 300 L820 250 Z" fill="#1E2D4A" stroke="#00B4D8" strokeWidth="0.5"/>
                <path d="M880 160 L1020 150 L1100 170 L1150 200 L1160 240 L1140 270 L1080 280 L1020 260 L980 230 Z" fill="#1E2D4A" stroke="#00B4D8" strokeWidth="0.5"/>
                <path d="M580 350 L660 340 L700 380 L690 430 L640 460 L590 450 L555 410 Z" fill="#1E2D4A" stroke="#00B4D8" strokeWidth="0.5"/>
                <path d="M300 380 L380 370 L400 410 L380 460 L340 480 L290 470 L270 430 Z" fill="#1E2D4A" stroke="#00B4D8" strokeWidth="0.5"/>
                <path d="M960 380 L1060 360 L1120 390 L1140 440 L1100 470 L1040 480 L980 460 L950 420 Z" fill="#1E2D4A" stroke="#00B4D8" strokeWidth="0.5"/>
              </svg>

              {/* Location markers */}
              <div className="absolute inset-8 pointer-events-none">
                {[
                  { x: "28%", y: "52%", label: "Gulf of Mexico" },
                  { x: "42%", y: "73%", label: "Pre-Salt Brazil" },
                  { x: "52%", y: "45%", label: "North Sea" },
                  { x: "57%", y: "58%", label: "West Africa" },
                  { x: "80%", y: "40%", label: "SE Asia" },
                  { x: "35%", y: "72%", label: "Suriname" },
                ].map(({ x, y, label }) => (
                  <div
                    key={label}
                    className="absolute flex flex-col items-center"
                    style={{ left: x, top: y, transform: "translate(-50%, -50%)" }}
                  >
                    <div className="w-3 h-3 bg-[#00B4D8] rounded-full relative">
                      <div className="absolute inset-0 bg-[#00B4D8] rounded-full animate-ping opacity-60" />
                    </div>
                    <div className="mt-1 font-mono-custom text-[9px] text-[#00B4D8] whitespace-nowrap">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0D1629] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <ScrollReveal>
            <h2 className="font-condensed font-black text-4xl lg:text-6xl uppercase mb-6">Charter a Vessel</h2>
            <p className="text-white/50 max-w-lg mx-auto mb-8">Interested in vessel availability or long-term contracting opportunities? Contact our commercial team.</p>
            <Link href="/contact">
              <button className="font-condensed font-bold text-sm tracking-[0.15em] uppercase px-10 py-4 bg-[#00B4D8] text-white hover:bg-[#0096C7] transition-all duration-300 inline-flex items-center gap-2">
                Enquire Now <ArrowRight size={16} />
              </button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
