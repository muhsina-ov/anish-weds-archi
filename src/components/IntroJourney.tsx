import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Music, ArrowRight } from "lucide-react";
import { wedding } from "../config";
import { playCelebrationMusic } from "./MusicToggle";

type Props = {
  onOpened: () => void;
};

export default function IntroJourney({ onOpened }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    playCelebrationMusic();
    setIsOpen(true);
    onOpened();
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-gradient-to-b from-[#fdfbf7] via-[#fbf5e8] to-[#f8eddc] p-4"
        >
          {/* Decorative Warm Golden Sunbeams & Radial Light */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full bg-gradient-to-b from-amber-200/35 via-rose-200/20 to-transparent blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.85)_0%,rgba(253,251,247,0.75)_60%,rgba(248,237,220,0.95)_100%)]" />

            {/* Template Floating Diyas in background */}
            <motion.img
              src={wedding.assets.diya}
              alt=""
              animate={{ y: [0, -8, 0], rotate: [0, 2, -2, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 left-8 sm:left-24 w-16 sm:w-20 opacity-60"
            />
            <motion.img
              src={wedding.assets.diya}
              alt=""
              animate={{ y: [0, -10, 0], rotate: [0, -2, 2, 0] }}
              transition={{ duration: 6, delay: 1, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-12 right-8 sm:right-24 w-16 sm:w-20 opacity-60"
            />
          </div>

          {/* Central Royal Invitation Card with Template Ornamental Frame */}
          <motion.div
            initial={{ opacity: 0, y: 25, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 mx-auto max-w-lg w-full rounded-3xl border-2 border-amber-400 bg-white/95 p-7 sm:p-10 text-center shadow-[0_25px_60px_-15px_rgba(217,119,6,0.35)] ring-8 ring-amber-400/15 backdrop-blur-md overflow-hidden"
          >
            {/* Template Ornate Frame Overlay */}
            <img
              src={wedding.assets.frame}
              alt=""
              className="pointer-events-none absolute inset-0 h-full w-full object-fill opacity-25"
            />

            {/* Auspicious Blessings: Shree Ganeshaya Namah & Jai Bua Dati */}
            <div className="relative z-10 inline-flex flex-col items-center">
              <span className="font-devanagari text-xs sm:text-sm font-semibold tracking-wider text-rose-800">
                ॥ श्री गणेशाय नमः ॥
              </span>
              <span className="font-devanagari text-base sm:text-lg font-bold tracking-widest text-amber-700 mt-1 uppercase">
                ॥ जय बुआ दाती ॥
              </span>
            </div>

            <div className="relative z-10 hairline-gold my-4 mx-auto w-36" />

            {/* Subtitle */}
            <p className="relative z-10 font-cinzel text-xs font-bold uppercase tracking-[0.28em] text-amber-800">
              Wedding Invitation
            </p>

            {/* Couple Names */}
            <h1 className="relative z-10 font-display text-4xl sm:text-5xl font-bold text-amber-950 mt-3 leading-tight">
              {wedding.groom} <span className="font-script text-rose-700 text-3xl sm:text-4xl">&amp;</span> {wedding.bride}
            </h1>
            <p className="relative z-10 font-cinzel text-xs tracking-widest text-amber-900/80 mt-1 font-semibold">
              {wedding.groomFull} &amp; {wedding.brideFull}
            </p>

            {/* Special Highlight: November 11 Reception Highlighted prominently */}
            <div className="relative z-10 my-5 rounded-2xl border-2 border-amber-400/90 bg-gradient-to-r from-amber-50 via-rose-50/60 to-amber-50 p-4 text-xs text-amber-950 shadow-inner">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-600 to-rose-600 px-3 py-1 font-bold text-white uppercase tracking-wider text-[10px] mb-2 shadow-sm">
                <Sparkles size={11} className="text-amber-200" />
                <span>PRIMARY HIGHLIGHT · GRAND RECEPTION</span>
              </span>
              <p className="font-display text-lg font-bold text-amber-950">
                Wednesday, 11 November 2026
              </p>
              <p className="text-xs font-semibold text-rose-800 mt-0.5">
                Vivah Vatika · Machine Domana, Jammu
              </p>
              <p className="text-[11px] text-amber-900/80 mt-1">
                (Also featuring Royal Baraat on Nov 10 at RK Resort)
              </p>
            </div>

            {/* Open Celebration Action Button */}
            <div className="relative z-10 flex flex-col items-center gap-3">
              <motion.button
                type="button"
                onClick={handleOpen}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group relative inline-flex w-full items-center justify-center gap-3 rounded-full border border-amber-400 bg-gradient-to-r from-amber-600 via-rose-600 to-amber-700 px-8 py-4 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-xl shadow-amber-600/35 transition-all duration-300 hover:shadow-amber-600/50"
              >
                <Music size={17} className="text-amber-200 transition-transform group-hover:rotate-12" />
                <span>Enter Celebration</span>
                <Heart size={15} className="fill-rose-200 text-rose-200" />
              </motion.button>

              <button
                type="button"
                onClick={handleOpen}
                className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-amber-900/70 hover:text-amber-900 transition-colors"
              >
                <span>Direct View (Skip Music)</span>
                <ArrowRight size={12} />
              </button>
            </div>

            <p className="relative z-10 mt-3 text-[11px] uppercase tracking-widest text-amber-900/60">
              Tap to enter with joyful music &amp; festive flower shower
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
