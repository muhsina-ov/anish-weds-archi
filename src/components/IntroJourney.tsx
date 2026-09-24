import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart } from "lucide-react";
import { wedding } from "../config";

type Props = {
  onOpened: () => void;
};

export default function IntroJourney({ onOpened }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    onOpened();
  };

  return (
    <AnimatePresence>
      {!isOpen && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#fbf7f0] via-[#f7efe1] to-[#f4e8d3] px-4"
        >
          {/* Background Illustration & Glow */}
          <div className="absolute inset-0 overflow-hidden">
            <img
              src={wedding.assets.hero}
              alt="Royal Wedding Scene"
              className="h-full w-full object-cover opacity-25 filter blur-[2px] scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f4e8d3] via-white/60 to-[#fbf7f0]/85" />
          </div>

          {/* Central Royal Invitation Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 mx-auto max-w-lg w-full rounded-3xl border-2 border-amber-400/60 bg-white/95 p-8 sm:p-12 text-center shadow-[0_25px_60px_-15px_rgba(160,110,28,0.28)] ring-8 ring-amber-400/10 backdrop-blur-md"
          >
            {/* Sacred Invocations */}
            <p className="font-devanagari text-sm font-semibold tracking-wider text-rose-800">
              ॥ श्री गणेशाय नमः ॥
            </p>
            <p className="font-devanagari text-base font-bold tracking-widest text-amber-700 mt-1 uppercase">
              ॥ जय बुआ दाती ॥
            </p>

            <div className="hairline-gold my-4 mx-auto w-36" />

            {/* Couple Names */}
            <p className="font-cinzel text-xs font-semibold uppercase tracking-[0.25em] text-amber-800">
              Wedding Invitation
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-amber-950 mt-3 leading-tight">
              {wedding.groom} <span className="font-script text-rose-700 text-3xl sm:text-4xl">&</span> {wedding.bride}
            </h1>
            <p className="font-cinzel text-xs tracking-widest text-amber-800/80 mt-1">
              {wedding.groomFull} &amp; {wedding.brideFull}
            </p>

            {/* Special Highlight Note */}
            <div className="my-6 rounded-2xl border border-amber-300/80 bg-amber-50/80 p-4 text-xs text-amber-950 leading-relaxed">
              <span className="font-bold text-rose-700 block uppercase tracking-wider mb-1">
                ★ Special Reception Highlight ★
              </span>
              November 11th · Vivah Vatika, Machine Domana, Jammu
            </div>

            {/* Open Button */}
            <motion.button
              type="button"
              onClick={handleOpen}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="group relative inline-flex items-center gap-3 rounded-full border border-amber-400 bg-gradient-to-r from-amber-600 via-rose-600 to-amber-700 px-8 py-3.5 text-sm font-bold uppercase tracking-[0.2em] text-white shadow-xl shadow-amber-600/30 transition-all duration-300 hover:shadow-amber-600/50"
            >
              <Sparkles size={16} className="text-amber-200 transition-transform group-hover:rotate-45" />
              <span>Enter Celebration</span>
              <Heart size={15} className="fill-rose-200 text-rose-200" />
            </motion.button>

            <p className="mt-4 text-[11px] uppercase tracking-widest text-amber-900/60">
              Tap to enter with music &amp; festivities
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
