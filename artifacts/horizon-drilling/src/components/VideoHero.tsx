import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const HERO_VIDEOS = [
  "https://www.sbmoffshore.com/wp-content/uploads/2024/09/SBMO_WEB24_TOP-plans-people_Clip_MINI.mp4",
  "https://www.sbmoffshore.com/wp-content/uploads/2025/01/Design-sans-titre.mp4",
  "https://www.sbmoffshore.com/wp-content/uploads/2024/09/SBMO_WEB24_TOP-wave_Clip_MINI.mp4",
  "https://www.sbmoffshore.com/wp-content/uploads/2024/09/SBMO_WEB24_TOP-sepetiba_Clip_MINI.mp4",
];

interface VideoHeroProps {
  interval?: number;
}

export default function VideoHero({ interval = 8000 }: VideoHeroProps) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => {
      setCurrent((c) => (c + 1) % HERO_VIDEOS.length);
    }, interval);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, interval]);

  return (
    <div className="absolute inset-0 overflow-hidden bg-[#0A0E1A]">
      {HERO_VIDEOS.map((src, i) => (
        <motion.video
          key={src}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: i === current ? 1 : 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
          style={{ pointerEvents: "none" }}
        />
      ))}
    </div>
  );
}
