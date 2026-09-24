import Reveal from "../components/Reveal";
import { wedding } from "../config";

export default function InviteMessage() {
  return (
    <section id="main-invitation" className="luminous-section relative overflow-hidden px-6 py-20 sm:py-32 border-y border-amber-200/60">
      {/* Template Floral Lotus Accent */}
      <img
        src={wedding.assets.foregroundLotus}
        alt=""
        className="pointer-events-none absolute bottom-[-15%] right-[-10%] w-[55%] max-w-2xl opacity-[0.12] filter drop-shadow-md"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Auspicious Shloka */}
        <Reveal>
          <div className="mx-auto max-w-2xl rounded-3xl border border-amber-300/80 bg-white/90 p-6 sm:p-8 shadow-sm backdrop-blur-md">
            <p className="font-devanagari text-base sm:text-lg font-semibold leading-relaxed text-rose-800">
              {wedding.verse.shloka}
            </p>
            <div className="hairline-gold my-3 mx-auto w-24" />
            <p className="font-devanagari text-sm font-bold tracking-widest text-amber-700">
              {wedding.jaiBuaDati}
            </p>
          </div>
        </Reveal>

        {/* Invitation Text */}
        <Reveal delay={0.1} className="mt-10">
          <h2 className="font-display text-3xl sm:text-5xl font-bold leading-tight text-amber-950">
            {wedding.verse.text}
          </h2>
        </Reveal>

        {/* Parents' Details with Correct Spellings */}
        <Reveal delay={0.2} className="mt-12 grid gap-6 sm:grid-cols-2 text-left">
          {/* Groom Parents */}
          <div className="rounded-2xl border border-amber-200/80 bg-white/80 p-6 shadow-sm">
            <p className="font-cinzel text-xs font-semibold uppercase tracking-[0.25em] text-amber-700">
              Groom's Family
            </p>
            <h3 className="font-display text-2xl font-bold text-amber-950 mt-1">
              {wedding.groomFull}
            </h3>
            <p className="text-sm font-medium text-amber-900/80 mt-2">
              {wedding.groomParents}
            </p>
          </div>

          {/* Bride Parents */}
          <div className="rounded-2xl border border-amber-200/80 bg-white/80 p-6 shadow-sm">
            <p className="font-cinzel text-xs font-semibold uppercase tracking-[0.25em] text-rose-700">
              Bride's Family
            </p>
            <h3 className="font-display text-2xl font-bold text-amber-950 mt-1">
              {wedding.brideFull}
            </h3>
            <p className="text-sm font-medium text-amber-900/80 mt-2">
              {wedding.brideParents}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
