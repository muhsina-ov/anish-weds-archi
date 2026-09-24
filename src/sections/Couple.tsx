import { Sparkles } from "lucide-react";
import Reveal, { SectionHeading } from "../components/Reveal";
import { wedding } from "../config";

export default function Couple() {
  const copyHashtag = async () => {
    try {
      await navigator.clipboard.writeText(wedding.hashtag);
    } catch {}
  };

  return (
    <section className="luminous-section relative overflow-hidden px-6 py-20 sm:py-32">
      <SectionHeading
        kicker="Two Families, One Blessed Beginning"
        title={`${wedding.groom} & ${wedding.bride}`}
      />

      <div className="relative mx-auto grid max-w-5xl items-center gap-8 md:grid-cols-[1fr_1.25fr_1fr]">
        {/* Groom Side */}
        <Reveal className="order-2 text-center md:order-1 md:text-right">
          <span className="inline-block rounded-full bg-amber-100 px-3.5 py-1 font-cinzel text-[11px] font-bold uppercase tracking-wider text-amber-900 border border-amber-300">
            The Groom
          </span>
          <h3 className="font-display mt-2 text-3xl sm:text-4xl font-bold text-amber-950">
            {wedding.groomFull}
          </h3>
          <p className="mt-2 text-sm text-amber-900 font-medium leading-relaxed">
            {wedding.groomParents}
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-rose-700">
            <span>Ghai Niwas · Machine Domana</span>
          </div>
        </Reveal>

        {/* Central Template Signature Couple Illustration */}
        <Reveal delay={0.08} className="order-1 md:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm rounded-3xl overflow-hidden border-4 border-amber-400/80 bg-white p-2 shadow-2xl ring-8 ring-amber-400/20 group">
            <div className="relative h-full w-full overflow-hidden rounded-2xl bg-gradient-to-b from-[#fdfbf7] to-[#fbf0de] flex items-center justify-center p-3">
              <img
                src={wedding.assets.couple}
                alt={`${wedding.groom} & ${wedding.bride} — Seated in Royal Splendor`}
                className="h-full w-full object-contain filter drop-shadow-[0_16px_25px_rgba(0,0,0,0.18)] transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white/90 via-white/50 to-transparent p-3 text-center">
                <span className="inline-block rounded-full bg-amber-600/90 px-3 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white shadow-sm">
                  Royal Union
                </span>
                <p className="font-display text-lg font-bold text-amber-950 mt-0.5">
                  {wedding.groom} &amp; {wedding.bride}
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bride Side */}
        <Reveal delay={0.16} className="order-3 text-center md:text-left">
          <span className="inline-block rounded-full bg-rose-100 px-3.5 py-1 font-cinzel text-[11px] font-bold uppercase tracking-wider text-rose-900 border border-rose-300">
            The Bride
          </span>
          <h3 className="font-display mt-2 text-3xl sm:text-4xl font-bold text-amber-950">
            {wedding.brideFull}
          </h3>
          <p className="mt-2 text-sm text-amber-900 font-medium leading-relaxed">
            {wedding.brideParents}
          </p>
          <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-rose-700">
            <span>Gupta Family · Jammu</span>
          </div>
        </Reveal>
      </div>

      {/* Hashtag button */}
      <Reveal delay={0.25} className="mt-12 flex justify-center">
        <button
          type="button"
          onClick={copyHashtag}
          className="inline-flex items-center gap-2 rounded-full border-2 border-amber-400 bg-white px-6 py-2.5 font-cinzel text-xs font-bold uppercase tracking-widest text-amber-900 shadow-md transition-all hover:bg-amber-50 hover:scale-105 active:scale-95"
        >
          <Sparkles size={14} className="text-amber-600" />
          <span>{wedding.hashtag}</span>
          <span className="text-[10px] text-amber-600 font-semibold">· Tap to Copy</span>
        </button>
      </Reveal>
    </section>
  );
}
