import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Tag, ArrowRight, Play } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const BOOTH_VIDEO = "https://www.sbmoffshore.com/wp-content/uploads/2026/02/seogs_2025_-_booth_video_v1-360p.mp4";

const categories = ["All", "Operations", "Technology", "Sustainability", "Events", "Awards"];

const articles = [
  {
    category: "Operations",
    date: "April 10, 2026",
    title: "Horizon Drilling Achieves Record 500-Day Continuous Operation Milestone",
    excerpt: "Our flagship drillship, HD Poseidon, completes an unprecedented continuous operation streak in the Gulf of Mexico, setting a new benchmark for operational excellence in the ultra-deepwater sector.",
    featured: true,
  },
  {
    category: "Technology",
    date: "March 28, 2026",
    title: "Next-Generation Blowout Preventer System Successfully Deployed on HD Triton",
    excerpt: "The HD-BOP 7000 system sets new industry standards for deepwater safety. Our engineering team developed this system over three years of R&D.",
  },
  {
    category: "Sustainability",
    date: "March 15, 2026",
    title: "Carbon Neutrality Roadmap 2030: Our Commitment to the Future",
    excerpt: "Horizon Drilling announces ambitious targets to reduce emissions by 60% by the end of the decade, with a clear pathway to carbon neutrality.",
  },
  {
    category: "Awards",
    date: "February 28, 2026",
    title: "Horizon Drilling Named 'Offshore Operator of the Year' at Global Energy Awards",
    excerpt: "For the third consecutive year, Horizon Drilling takes top honors at the Global Energy Awards held in Amsterdam.",
  },
  {
    category: "Events",
    date: "January 22, 2026",
    title: "SEOGS 2025: Horizon Drilling Showcases Next-Generation Deepwater Technology",
    excerpt: "At the Singapore Energy and Offshore Geosciences Summit, our team unveiled the HD Digital 3.0 platform and a new generation of autonomous drilling tools.",
  },
  {
    category: "Operations",
    date: "January 10, 2026",
    title: "First Oil Achieved on the Vanguard FPSO — Suriname Block Comes Online",
    excerpt: "A major milestone as our newest FPSO vessel begins production off the coast of Suriname, ahead of schedule and under budget.",
  },
  {
    category: "Technology",
    date: "December 5, 2025",
    title: "HD Digital Platform 3.0 Launch — AI-Powered Predictive Maintenance Goes Fleet-Wide",
    excerpt: "The latest version of our digital operations platform now covers all 24 major assets, reducing unplanned downtime by 34%.",
  },
  {
    category: "Sustainability",
    date: "November 18, 2025",
    title: "Horizon Drilling Partners with Ocean Health Initiative for Marine Biodiversity",
    excerpt: "A three-year partnership to monitor and protect marine ecosystems near our operational areas.",
  },
];

export default function News() {
  const [filter, setFilter] = useState("All");
  const [videoPlaying, setVideoPlaying] = useState(false);

  const featured = articles[0];
  const filtered = (filter === "All" ? articles : articles.filter((a) => a.category === filter))
    .filter((a) => a !== featured);

  return (
    <main className="bg-[#0A0E1A] text-white">
      {/* Hero */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(ellipse at 60% 40%, rgba(245,158,11,0.07) 0%, transparent 60%)"
        }} />
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 relative z-10">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="accent-line" />
              <span className="font-mono-custom text-[#F59E0B] text-xs tracking-[0.3em] uppercase">News & Media</span>
            </div>
            <h1 className="font-condensed font-black text-6xl lg:text-8xl uppercase tracking-tight mb-6">
              Latest<br /><span className="text-[#F59E0B]">News</span>
            </h1>
            <p className="text-white/60 text-xl max-w-2xl leading-relaxed">
              Stay informed on Horizon Drilling's latest operations, technology breakthroughs, sustainability initiatives, and industry recognition.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Featured Article */}
      <section className="bg-[#0D1629] border-t border-b border-white/5">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 py-16">
          <ScrollReveal>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-condensed font-bold text-xs tracking-[0.2em] uppercase px-3 py-1 bg-[#F59E0B]/20 text-[#F59E0B] border border-[#F59E0B]/30">
                    Featured
                  </span>
                  <span className="font-condensed font-bold text-xs tracking-wider px-3 py-1 bg-white/5 text-white/50 border border-white/10">
                    {featured.category}
                  </span>
                </div>
                <h2 className="font-condensed font-black text-4xl lg:text-5xl uppercase tracking-tight mb-4 leading-tight">
                  {featured.title}
                </h2>
                <p className="text-white/60 leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center gap-4 text-white/30 text-xs font-mono-custom mb-6">
                  <div className="flex items-center gap-1.5"><Calendar size={11} /><span>{featured.date}</span></div>
                </div>
                <button className="font-condensed font-bold text-sm tracking-[0.15em] uppercase px-8 py-3 border border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-white transition-all duration-300 inline-flex items-center gap-2">
                  Read Full Article <ArrowRight size={14} />
                </button>
              </div>
              <div className="h-64 lg:h-80 bg-gradient-to-br from-[#1E2D4A] to-[#0A0E1A] flex items-center justify-center border border-white/5">
                <div className="text-center">
                  <div className="font-condensed font-black text-6xl text-[#F59E0B]/20 mb-2">500</div>
                  <div className="font-condensed font-bold text-xl text-[#F59E0B]/40 uppercase tracking-widest">Days</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SEOGS 2025 Booth Video — Featured Video Section */}
      <section className="section-padding bg-[#060810]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-4">
              <div className="accent-line" />
              <span className="font-mono-custom text-[#C8A96E] text-xs tracking-[0.3em] uppercase">Event Highlight</span>
            </div>
            <h2 className="font-condensed font-black text-4xl lg:text-5xl uppercase tracking-tight mb-10">
              SEOGS 2025 — Booth Highlights
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="relative bg-black border border-white/5 overflow-hidden">
              {!videoPlaying ? (
                <div className="relative aspect-video flex items-center justify-center cursor-pointer group" onClick={() => setVideoPlaying(true)}>
                  <video
                    src={BOOTH_VIDEO}
                    className="absolute inset-0 w-full h-full object-cover opacity-50"
                    muted
                    playsInline
                  />
                  <div className="absolute inset-0 bg-[#0A0E1A]/60" />
                  <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="w-20 h-20 bg-[#F59E0B]/20 border-2 border-[#F59E0B] rounded-full flex items-center justify-center group-hover:bg-[#F59E0B]/40 transition-colors duration-300">
                      <Play size={32} className="text-[#F59E0B] ml-1" />
                    </div>
                    <span className="font-condensed font-bold text-lg uppercase tracking-wider text-white">Play Video</span>
                  </div>
                </div>
              ) : (
                <div className="aspect-video">
                  <video
                    src={BOOTH_VIDEO}
                    autoPlay
                    controls
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2">
                <h3 className="font-condensed font-bold text-xl uppercase tracking-wide mb-3">Singapore Energy & Offshore Geosciences Summit 2025</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  Horizon Drilling was a gold sponsor and exhibitor at SEOGS 2025 in Singapore. Our team showcased the HD Digital 3.0 platform, a new generation of autonomous drilling tools, and our next-generation FPSO concept design. Over 4,200 industry professionals visited our booth across three days of the summit.
                </p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-white/40 text-xs">Event</span>
                  <span className="font-mono-custom text-[#F59E0B] text-xs">SEOGS 2025</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-white/40 text-xs">Location</span>
                  <span className="font-mono-custom text-[#F59E0B] text-xs">Singapore</span>
                </div>
                <div className="flex justify-between py-2 border-b border-white/5">
                  <span className="text-white/40 text-xs">Date</span>
                  <span className="font-mono-custom text-[#F59E0B] text-xs">Jan 20–22, 2025</span>
                </div>
                <div className="flex justify-between py-2">
                  <span className="text-white/40 text-xs">Visitors</span>
                  <span className="font-mono-custom text-[#F59E0B] text-xs">4,200+</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Filter + News Grid */}
      <section className="section-padding bg-[#0A0E1A]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <ScrollReveal>
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`font-condensed font-bold text-xs tracking-[0.15em] uppercase px-5 py-2 border transition-all duration-300 ${
                    filter === cat
                      ? "bg-[#F59E0B] border-[#F59E0B] text-white"
                      : "border-white/10 text-white/50 hover:border-[#F59E0B]/50 hover:text-white"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.slice(0, filter === "All" ? undefined : undefined).map((article, i) => (
              <ScrollReveal key={article.title} delay={i * 0.05}>
                <div className="group p-6 bg-[#0D1629] border border-white/5 hover:border-[#F59E0B]/30 transition-all duration-500 cursor-pointer h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-condensed font-bold text-xs tracking-wider px-2.5 py-1 bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20">
                      {article.category}
                    </span>
                    <span className="font-mono-custom text-white/30 text-xs">{article.date}</span>
                  </div>
                  <h3 className="font-condensed font-bold text-xl uppercase tracking-wide mb-3 group-hover:text-[#F59E0B] transition-colors leading-tight flex-1">
                    {article.title}
                  </h3>
                  <p className="text-white/40 text-sm leading-relaxed mb-4">{article.excerpt}</p>
                  <div className="flex items-center gap-2 text-[#C8A96E] text-xs font-condensed font-bold tracking-[0.2em] uppercase mt-auto">
                    <span>Read More</span>
                    <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
