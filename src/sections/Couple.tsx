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

      <div className="relative mx-auto grid max-w-5xl items-center gap-10 md:grid-cols-[1fr_1.2fr_1fr]">
        {/* Groom Side */}
        <Reveal className="order-2 text-center md:order-1 md:text-right">
          <span className="inline-block rounded-full bg-amber-100 px-3 py-1 font-cinzel text-[11px] font-bold uppercase tracking-wider text-amber-800">
            The Groom
          </span>
          <h3 className="font-display mt-2 text-3xl sm:text-4xl font-bold text-amber-950">
            {wedding.groomFull}
          </h3>
          <p className="mt-2 text-sm text-amber-900/75 leading-relaxed">
            {wedding.groomParents}
          </p>
        </Reveal>

        {/* Central Couple Artwork */}
        <Reveal delay={0.08} className="order-1 md:order-2">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm rounded-3xl overflow-hidden border-2 border-amber-400/50 bg-white p-2 shadow-2xl">
            <img
              src={wedding.assets.couple}
              alt={`${wedding.groom} & ${wedding.bride}`}
              className="h-full w-full object-contain rounded-2xl"
              loading="lazy"
            />
          </div>
        </Reveal>

        {/* Bride Side */}
        <Reveal delay={0.16} className="order-3 text-center md:text-left">
          <span className="inline-block rounded-full bg-rose-100 px-3 py-1 font-cinzel text-[11px] font-bold uppercase tracking-wider text-rose-800">
            The Bride
          </span>
          <h3 className="font-display mt-2 text-3xl sm:text-4xl font-bold text-amber-950">
            {wedding.brideFull}
          </h3>
          <p className="mt-2 text-sm text-amber-900/75 leading-relaxed">
            {wedding.brideParents}
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.2} className="mt-10 flex justify-center">
        <button
          type="button"
          onClick={copyHashtag}
          className="rounded-full border border-amber-400/60 bg-white px-5 py-2 font-cinzel text-xs font-semibold uppercase tracking-widest text-amber-900 shadow-sm transition-all hover:bg-amber-50"
        >
          {wedding.hashtag} · Tap to Copy
        </button>
      </Reveal>
    </section>
  );
}
