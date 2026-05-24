import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Layers, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";

type FilterType = "All" | "Drilling" | "FPSO" | "Subsea" | "Completed";

const filters: FilterType[] = ["All", "Drilling", "FPSO", "Subsea", "Completed"];

const projects = [
  {
    name: "ATLAS DEEPWATER",
    location: "Gulf of Mexico, USA",
    type: "Drilling" as FilterType,
    depth: "3,200m",
    year: "2024",
    status: "Active",
    client: "Major IOC",
    scope: "Ultra-deepwater exploration & appraisal campaign — 8 wells",
    duration: "24 months",
    image: "/projects/atlas-deepwater.jpg",
  },
  {
    name: "NEPTUNE FPSO",
    location: "Santos Basin, Brazil",
    type: "FPSO" as FilterType,
    depth: "2,100m",
    year: "2023",
    status: "Active",
    client: "National Oil Company",
    scope: "FPSO operations — 150,000 BOPD pre-salt production",
    duration: "20-year contract",
    image: "/projects/neptune-fpso.png",
  },
  {
    name: "MERIDIAN ULTRA",
    location: "North Sea, UK",
    type: "Drilling" as FilterType,
    depth: "2,800m",
    year: "2024",
    status: "Active",
    client: "European NOC",
    scope: "Development drilling — 12 production wells",
    duration: "18 months",
    image: "/projects/meridian-ultra.png",
  },
  {
    name: "PIONEER SUBSEA",
    location: "North Sea",
    type: "Subsea" as FilterType,
    depth: "500m",
    year: "2023",
    status: "Active",
    client: "European Major",
    scope: "Subsea tieback — 3 satellite fields to host FPSO",
    duration: "30 months",
    image: "/projects/pioneer-subsea.png",
  },
  {
    name: "VANGUARD FPSO",
    location: "Suriname Block",
    type: "FPSO" as FilterType,
    depth: "1,800m",
    year: "2025",
    status: "Active",
    client: "International Consortium",
    scope: "New-build FPSO — 200,000 BOPD, first oil 2025",
    duration: "25-year contract",
    image: "/projects/vanguard-fpso.png",
  },
  {
    name: "KRAKEN DRILL",
    location: "Norwegian Sea",
    type: "Drilling" as FilterType,
    depth: "1,400m",
    year: "2023",
    status: "Active",
    client: "Norwegian NOC",
    scope: "High-pressure, high-temperature exploration",
    duration: "12 months",
    image: "/projects/kraken-drill.png",
  },
  {
    name: "DELTA SUBSEA",
    location: "Gulf of Guinea",
    type: "Completed" as FilterType,
    depth: "1,600m",
    year: "2022",
    status: "Completed",
    client: "IOC Consortium",
    scope: "Full SURF installation — 45km flowlines",
    duration: "28 months",
    image: "/projects/delta-subsea.png",
  },
  {
    name: "TITAN FPSO",
    location: "East Timor Sea",
    type: "Completed" as FilterType,
    depth: "900m",
    year: "2021",
    status: "Completed",
    client: "Asia Pacific NOC",
    scope: "FPSO conversion — 100,000 BOPD processing capacity",
    duration: "Life extension project",
    image: "/projects/titan-fpso.png",
  },
];

export default function Projects() {
  useSEO({
    title: "Projects | Horizon Drilling & Co",
    description: "Browse Horizon Drilling & Co's portfolio of completed and active offshore drilling, FPSO, and subsea engineering projects spanning 38 nations.",
  });
  const [filter, setFilter] = useState<FilterType>("All");

  const filtered = filter === "All" ? projects : projects.filter((p) => p.type === filter || (filter === "Completed" && p.status === "Completed"));

  return (
    <main className="bg-[#0A0E1A] text-white">
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(ellipse at 30% 70%, rgba(200,169,110,0.06) 0%, transparent 60%)"
        }} />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="accent-line" />
              <span className="font-mono-custom text-[#F59E0B] text-xs tracking-[0.3em] uppercase">Portfolio</span>
            </div>
            <h1 className="font-condensed font-black text-6xl lg:text-8xl uppercase tracking-tight mb-6">
              120+<br /><span className="text-[#C8A96E]">Projects</span><br />Delivered
            </h1>
            <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
              From the Arctic to the equator, from shallow shelf to ultra-deepwater — our project portfolio spans the full spectrum of offshore energy development.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section-padding bg-[#0D1629]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          {/* Filter bar */}
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-12">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`font-condensed font-bold text-sm tracking-[0.15em] uppercase px-6 py-2.5 border transition-all duration-300 ${
                    filter === f
                      ? "bg-[#F59E0B] border-[#F59E0B] text-white"
                      : "border-white/10 text-white/50 hover:border-[#F59E0B]/50 hover:text-white"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
          </ScrollReveal>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            <AnimatePresence>
              {filtered.map((project, i) => (
                <motion.div
                  key={project.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <div className="group bg-[#0A0E1A] border border-white/5 hover:border-[#F59E0B]/40 transition-all duration-500 overflow-hidden cursor-pointer">
                    <div className="h-44 relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0E1A] via-[#0A0E1A]/30 to-[#0A0E1A]/40" />
                      <div className="absolute top-3 left-3 right-3 flex items-start justify-between">
                        <span className={`font-condensed font-bold text-xs tracking-wider px-2.5 py-1 border backdrop-blur-sm ${
                          project.status === "Active"
                            ? "bg-[#F59E0B]/20 text-[#F59E0B] border-[#F59E0B]/40"
                            : "bg-[#C8A96E]/20 text-[#C8A96E] border-[#C8A96E]/40"
                        }`}>
                          {project.status}
                        </span>
                        <span className="font-mono-custom text-white/70 text-xs bg-[#0A0E1A]/60 backdrop-blur-sm px-2 py-0.5">{project.year}</span>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <span className="font-condensed text-xs tracking-wider px-2 py-0.5 bg-[#0A0E1A]/85 backdrop-blur-sm text-white/70 border border-white/10">
                          {project.type}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="font-condensed font-black text-xl uppercase tracking-wide mb-3 group-hover:text-[#F59E0B] transition-colors duration-300">
                        {project.name}
                      </h3>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-xs text-white/40">
                          <MapPin size={11} className="text-[#F59E0B] flex-shrink-0" />
                          <span>{project.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-white/40">
                          <Layers size={11} className="text-[#F59E0B] flex-shrink-0" />
                          <span>Depth: {project.depth}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-white/40">
                          <Calendar size={11} className="text-[#F59E0B] flex-shrink-0" />
                          <span>{project.duration}</span>
                        </div>
                      </div>
                      <p className="text-white/40 text-xs leading-relaxed border-t border-white/5 pt-3">
                        {project.scope}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0A0E1A] border-t border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 text-center">
          <ScrollReveal>
            <h2 className="font-condensed font-black text-4xl lg:text-6xl uppercase mb-6">Plan Your Next Project</h2>
            <p className="text-white/50 max-w-lg mx-auto mb-8">Partner with Horizon Drilling for a project that demands excellence.</p>
            <Link href="/contact">
              <button className="font-condensed font-bold text-sm tracking-[0.15em] uppercase px-10 py-4 bg-[#F59E0B] text-white hover:bg-[#D97706] transition-all duration-300 inline-flex items-center gap-2">
                Contact Our Team <ArrowRight size={16} />
              </button>
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
