import { motion } from "framer-motion";
import { Sparkles, Calendar, MapPin, ArrowDown } from "lucide-react";
import { wedding } from "../config";

export default function LotusParallaxScene() {
  return (
    <section id="invitation" className="relative min-h-[95vh] sm:min-h-screen overflow-hidden flex flex-col justify-between items-center text-center px-4 pt-8 pb-12">
      {/* Background Master Scene with Bright Daylight Warm Filters */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={wedding.assets.hero}
          alt={`${wedding.groom} & ${wedding.bride} Royal Wedding Celebration`}
          className="h-full w-full object-cover object-center filter brightness-[1.26] saturate-[1.3] contrast-[1.08]"
          loading="eager"
        />
        {/* Radiant Daylight Warm Golden & Peach Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdfbf7]/92 via-[#fffaf0]/45 to-[#fdfbf7]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,250,235,0.75)_0%,rgba(253,251,247,0.3)_60%,transparent_100%)]" />

        {/* Template Floating Diya with Warm Glow */}
        <motion.div
          animate={{
            y: [0, -6, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute bottom-24 left-10 sm:left-28 w-16 sm:w-20 opacity-85"
        >
          <img
            src={wedding.assets.diya}
            alt="Sacred Diya"
            className="w-full object-contain filter drop-shadow-[0_4px_12px_rgba(245,158,11,0.5)]"
          />
        </motion.div>

        {/* Template Foreground Lotus Cluster */}
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 2, -2, 0],
          }}
          transition={{
            duration: 6.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -bottom-6 -left-8 sm:left-6 w-36 sm:w-56 opacity-85"
        >
          <img
            src={wedding.assets.foregroundLotus}
            alt="Blooming Lotus Cluster"
            className="w-full object-contain filter drop-shadow-md brightness-110"
          />
        </motion.div>

        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, -3, 3, 0],
          }}
          transition={{
            duration: 7,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="pointer-events-none absolute -bottom-6 -right-8 sm:right-6 w-40 sm:w-60 opacity-85"
        >
          <img
            src={wedding.assets.foregroundLotus}
            alt="Blooming Lotus Cluster"
            className="w-full object-contain filter drop-shadow-md brightness-110 scale-x-[-1]"
          />
        </motion.div>
      </div>

      {/* Top Sacred Invocations: Ganeshaya Namah & Jai Bua Dati */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 pt-2"
      >
        <div className="inline-flex flex-col items-center rounded-full border border-amber-400/60 bg-white/90 px-6 sm:px-8 py-2.5 shadow-md backdrop-blur-md ring-2 ring-amber-400/20">
          <p className="font-devanagari text-xs sm:text-sm font-semibold text-rose-800">
            ॥ श्री गणेशाय नमः ॥
          </p>
          <p className="font-devanagari text-sm sm:text-base font-bold tracking-widest text-amber-800 uppercase mt-0.5">
            ॥ जय बुआ दाती ॥
          </p>
        </div>
      </motion.div>

      {/* Main Couple Names & Hero Details */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 max-w-3xl my-auto py-2"
      >
        <p className="font-cinzel text-xs sm:text-sm font-bold uppercase tracking-[0.32em] text-amber-900 mb-1">
          Together With Their Families
        </p>

        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold text-amber-950 leading-[0.96] tracking-tight drop-shadow-sm">
          <span>{wedding.groom}</span>
          <span className="font-script block text-4xl sm:text-6xl text-rose-700 my-0.5 font-normal">
            &amp;
          </span>
          <span>{wedding.bride}</span>
        </h1>

        <p className="font-cinzel text-sm sm:text-base tracking-[0.2em] font-bold text-amber-900 mt-2">
          {wedding.groomFull} &amp; {wedding.brideFull}
        </p>

        {/* Signature Template Royal Lotus Barge with Seated Couple */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{
            opacity: 1,
            y: [0, -8, 0],
            rotate: [0, 0.4, -0.4, 0],
          }}
          transition={{
            opacity: { duration: 0.8, delay: 0.3 },
            y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 6, repeat: Infinity, ease: "easeInOut" },
          }}
          className="relative mx-auto w-full max-w-[280px] sm:max-w-sm my-3"
        >
          <img
            src={wedding.assets.barge}
            alt={`${wedding.groom} and ${wedding.bride} on the Royal Lotus Barge`}
            className="w-full object-contain filter drop-shadow-[0_16px_30px_rgba(180,83,9,0.25)]"
          />
        </motion.div>

        {/* Date and Location Badge */}
        <div className="inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl border-2 border-amber-300 bg-white/95 px-6 py-3 text-xs sm:text-sm font-semibold text-amber-950 shadow-lg backdrop-blur-md">
          <div className="flex items-center gap-2 text-rose-700 font-bold">
            <Sparkles size={16} />
            <span>Nov 11: Grand Reception (Vivah Vatika)</span>
          </div>
          <span className="text-amber-300 font-normal">|</span>
          <div className="flex items-center gap-1.5 text-amber-800 font-medium">
            <Calendar size={15} />
            <span>Nov 10: Royal Baraat (RK Resort)</span>
          </div>
          <span className="text-amber-300 font-normal">|</span>
          <div className="flex items-center gap-1.5 text-amber-900">
            <MapPin size={15} />
            <span>Jammu</span>
          </div>
        </div>
      </motion.div>

      {/* Bottom Highlight Callout Pill: Jump to November 11 Reception Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 w-full max-w-xl"
      >
        <a
          href="#highlights"
          className="group block rounded-2xl border-2 border-amber-500 bg-gradient-to-r from-amber-500/20 via-rose-500/15 to-amber-500/20 p-4 backdrop-blur-md transition-all hover:scale-[1.02] hover:border-amber-600 shadow-lg ring-4 ring-amber-400/20"
        >
          <div className="flex items-center justify-between gap-3 text-left">
            <div>
              <span className="inline-flex items-center gap-1 rounded-md bg-gradient-to-r from-amber-600 to-rose-600 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-sm">
                ★ FEATURED CELEBRATION HIGHLIGHT
              </span>
              <p className="font-display text-lg sm:text-xl font-bold text-amber-950 mt-1">
                Wednesday, 11th Nov · Grand Reception at Vivah Vatika, Machine Domana
              </p>
              <p className="text-xs text-amber-900 font-medium mt-0.5">
                Machine Domana, Jammu · Tap to view complete highlights &amp; directions
              </p>
            </div>
            <div className="shrink-0 flex flex-col items-center justify-center h-10 w-10 rounded-full bg-white text-amber-700 shadow-md transition-transform group-hover:translate-y-1">
              <ArrowDown size={18} />
            </div>
          </div>
        </a>
      </motion.div>
    </section>
  );
}
