import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { wedding } from "../config";

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio();
    const canPlayM4a = audio.canPlayType('audio/mp4; codecs="mp4a.40.2"');
    audio.src = canPlayM4a !== "" ? wedding.assets.audioM4a : wedding.assets.audioWebm;
    audio.loop = true;
    audio.volume = 0.55;
    audioRef.current = audio;

    const handleInteraction = () => {
      if (audio.paused) {
        audio.play().then(() => {
          setIsPlaying(true);
          setShowToast(true);
          setTimeout(() => setShowToast(false), 3500);
        }).catch(() => {});
      }
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };

    window.addEventListener("click", handleInteraction, { once: true });
    window.addEventListener("touchstart", handleInteraction, { once: true });

    return () => {
      audio.pause();
      audioRef.current = null;
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, []);

  const toggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play().then(() => {
        setIsPlaying(true);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 2500);
      }).catch(() => {});
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-3">
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            className="hidden sm:flex items-center gap-2 rounded-full border border-amber-400/40 bg-white/95 px-4 py-2 text-xs text-amber-950 shadow-xl backdrop-blur-md"
          >
            <Music size={14} className="animate-spin text-amber-600" />
            <span className="font-medium tracking-wide">Playing Wedding Shehnai & Sangeet</span>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={toggle}
        aria-label={isPlaying ? "Mute festive music" : "Play festive music"}
        className={`group relative flex h-12 w-12 items-center justify-center rounded-full border shadow-xl backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 ${
          isPlaying
            ? "border-amber-400 bg-gradient-to-tr from-amber-600 via-rose-600 to-amber-500 text-white shadow-amber-600/30"
            : "border-amber-400/50 bg-white/95 text-amber-900 hover:bg-white shadow-black/10"
        }`}
      >
        {isPlaying ? (
          <>
            <Volume2 size={20} className="relative z-10" />
            <span className="absolute inset-0 rounded-full border-2 border-amber-300 animate-ping opacity-35" />
          </>
        ) : (
          <VolumeX size={20} className="relative z-10 text-amber-800" />
        )}
      </button>
    </div>
  );
}
