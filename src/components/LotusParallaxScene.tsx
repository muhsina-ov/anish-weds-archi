import { motion } from "framer-motion";
import { Sparkles, Calendar, MapPin } from "lucide-react";
import { wedding } from "../config";

export default function LotusParallaxScene() {
  return (
    <section id="invitation" className="relative min-h-[92vh] sm:min-h-screen overflow-hidden flex flex-col justify-between items-center text-center px-4 pt-12 pb-16">
      {/* Background Master Illustration */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={wedding.assets.hero}
          alt={`${wedding.groom} & ${wedding.bride} Royal Wedding Celebration`}
          className="h-full w-full object-cover object-center scale-100"
          loading="eager"
        />
        {/* Luminous Warm Light Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdfbf7]/92 via-[#fdfbf7]/40 to-[#fdfbf7]/95" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.7)_0%,transparent_75%)]" />
      </div>

      {/* Top Sacred Invocations */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 pt-4"
      >
        <div className="inline-flex flex-col items-center rounded-full border border-amber-400/40 bg-white/85 px-6 py-2 shadow-sm backdrop-blur-md">
          <p className="font-devanagari text-xs font-semibold text-rose-800">
            ॥ श्री गणेशाय नमः ॥
          </p>
          <p className="font-devanagari text-sm font-bold tracking-widest text-amber-800 uppercase mt-0.5">
            ॥ जय बुआ दाती ॥
          </p>
        </div>
      </motion.div>

      {/* Main Couple Names & Hero Details */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative z-10 max-w-3xl my-auto py-6"
      >
        <p className="font-cinzel text-xs sm:text-sm font-semibold uppercase tracking-[0.3em] text-amber-900 mb-2">
          Together With Their Families
        </p>

        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl font-bold text-amber-950 leading-[0.95] tracking-tight drop-shadow-sm">
          <span>{wedding.groom}</span>
          <span className="font-script block text-4xl sm:text-6xl text-rose-700 my-1 font-normal">
            &amp;
          </span>
          <span>{wedding.bride}</span>
        </h1>

        <p className="font-cinzel text-sm sm:text-base tracking-[0.2em] font-semibold text-amber-900/90 mt-3">
          {wedding.groomFull} &amp; {wedding.brideFull}
        </p>

        {/* Date and Location pill */}
        <div className="mt-8 inline-flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-amber-300/80 bg-white/90 px-6 py-3 text-xs sm:text-sm font-medium text-amber-950 shadow-lg backdrop-blur-md">
          <div className="flex items-center gap-1.5 text-amber-800">
            <Calendar size={15} />
            <span>Nov 10 Baraat · Nov 11 Grand Reception</span>
          </div>
          <span className="text-amber-300">|</span>
          <div className="flex items-center gap-1.5 text-rose-800">
            <MapPin size={15} />
            <span>Jammu (J&amp;K)</span>
          </div>
        </div>
      </motion.div>

      {/* Bottom Highlight Callout Pill */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="relative z-10 w-full max-w-xl"
      >
        <a
          href="#highlights"
          className="group block rounded-2xl border-2 border-amber-500 bg-gradient-to-r from-amber-500/15 via-rose-500/15 to-amber-500/15 p-3.5 backdrop-blur-md transition-all hover:scale-[1.02] hover:border-amber-600 shadow-md"
        >
          <div className="flex items-center justify-between gap-3 text-left">
            <div>
              <span className="inline-block rounded-md bg-amber-600 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                ★ FEATURED RECEPTION
              </span>
              <p className="font-display text-lg font-bold text-amber-950 mt-1">
                Wednesday, 11th Nov · Vivah Vatika, Machine Domana
              </p>
            </div>
            <Sparkles size={20} className="shrink-0 text-amber-600 transition-transform group-hover:rotate-45" />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
