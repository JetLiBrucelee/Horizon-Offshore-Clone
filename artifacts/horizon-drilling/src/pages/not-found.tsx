import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#0A0E1A] text-white flex items-center justify-center">
      <div className="text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="font-condensed font-black text-[180px] lg:text-[240px] leading-none text-[#F59E0B]/10 select-none">
            404
          </div>
          <div className="font-condensed font-black text-4xl lg:text-6xl uppercase tracking-tight -mt-8 mb-4">
            Page Not Found
          </div>
          <p className="text-white/40 text-lg max-w-sm mx-auto mb-10">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link href="/">
            <button className="font-condensed font-bold text-sm tracking-[0.15em] uppercase px-8 py-4 border border-[#F59E0B] text-[#F59E0B] hover:bg-[#F59E0B] hover:text-white transition-all duration-300 inline-flex items-center gap-2">
              <ArrowLeft size={16} /> Return Home
            </button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
