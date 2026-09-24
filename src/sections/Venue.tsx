import { CalendarPlus, Navigation, Sparkles, Star } from "lucide-react";
import Reveal, { SectionHeading } from "../components/Reveal";
import {
  wedding,
  googleCalendarUrl,
  downloadICS,
} from "../config";

export default function Venue() {
  const rec = wedding.bottomHighlights.reception;
  const bar = wedding.bottomHighlights.baraat;

  return (
    <section id="highlights" className="luminous-section relative overflow-hidden px-6 py-20 sm:py-32 border-t border-amber-200/60">
      <SectionHeading
        kicker="Key Wedding Highlights"
        title="Celebration Venues"
      />

      {/* DOUBLE HIGHLIGHTS SECTION: Reception (Featured Star) + Baraat */}
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center mb-10">
            <span className="inline-block rounded-full bg-amber-100 px-4 py-1 font-cinzel text-xs font-bold uppercase tracking-[0.25em] text-amber-800">
              Double Highlights Spotlight
            </span>
            <p className="font-display text-2xl sm:text-3xl text-amber-950 font-bold mt-2">
              Mark Your Calendar for Our Grand Celebrations
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 items-stretch">
          {/* CARD 1: GRAND RECEPTION (HIGHEST PRIORITY / STAR HIGHLIGHT) */}
          <Reveal delay={0.08} className="flex">
            <div className="star-reception-card relative flex flex-col justify-between w-full rounded-3xl p-8 sm:p-10 text-left shadow-2xl transition-all duration-300 hover:scale-[1.01]">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-amber-600 via-rose-600 to-amber-700 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white shadow-md animate-gold-pulse">
                  <Star size={14} className="fill-white" />
                  <span>STAR HIGHLIGHT · GALA DINNER</span>
                </span>
                <span className="font-cinzel text-xs font-bold text-amber-800">
                  NOV 11
                </span>
              </div>

              <div className="my-6">
                <p className="font-cinzel text-xs font-bold uppercase tracking-[0.2em] text-rose-700">
                  {rec.date}
                </p>
                <h3 className="font-display text-4xl sm:text-5xl font-bold text-amber-950 mt-1">
                  {rec.title}
                </h3>
                <p className="text-sm font-semibold text-rose-800 mt-2">
                  Time: {rec.time}
                </p>

                <div className="mt-5 rounded-2xl border-2 border-amber-400/80 bg-white/90 p-5 shadow-sm">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-amber-700">Primary Venue</p>
                  <p className="font-display text-2xl font-bold text-amber-950 mt-0.5">
                    {rec.venue}
                  </p>
                  <p className="text-sm text-amber-900/80 mt-1">
                    {rec.address}
                  </p>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-amber-900/85">
                  {rec.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(rec.mapsQuery)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 via-rose-600 to-amber-700 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-lg transition-all hover:scale-105"
                >
                  <Navigation size={15} />
                  <span>Directions to Vivah Vatika</span>
                </a>
                <a
                  href={googleCalendarUrl({ title: `${wedding.groom} & ${wedding.bride} — Grand Reception`, dateISO: wedding.receptionDateISO, venue: rec.venue, address: rec.address })}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-amber-400 bg-white px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-amber-900 shadow-sm transition-all hover:bg-amber-50"
                >
                  <CalendarPlus size={15} />
                  <span>Calendar</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* CARD 2: ROYAL BARAAT & WEDDING CEREMONY */}
          <Reveal delay={0.16} className="flex">
            <div className="relative flex flex-col justify-between w-full rounded-3xl border-2 border-amber-300/80 bg-white/95 p-8 sm:p-10 text-left shadow-xl transition-all duration-300 hover:scale-[1.01]">
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 border border-amber-400 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-900">
                  <Sparkles size={13} className="text-amber-600" />
                  <span>ROYAL BARAAT &amp; WEDDING</span>
                </span>
                <span className="font-cinzel text-xs font-bold text-amber-800">
                  NOV 10
                </span>
              </div>

              <div className="my-6">
                <p className="font-cinzel text-xs font-bold uppercase tracking-[0.2em] text-amber-700">
                  {bar.date}
                </p>
                <h3 className="font-display text-4xl sm:text-5xl font-bold text-amber-950 mt-1">
                  {bar.title}
                </h3>
                <p className="text-sm font-semibold text-rose-800 mt-2">
                  Time: {bar.time}
                </p>

                <div className="mt-5 rounded-2xl border border-amber-300/60 bg-amber-50/50 p-5 shadow-sm">
                  <p className="text-[11px] font-bold uppercase tracking-widest text-amber-700">Venue</p>
                  <p className="font-display text-2xl font-bold text-amber-950 mt-0.5">
                    {bar.venue}
                  </p>
                  <p className="text-sm text-amber-900/80 mt-1">
                    {bar.address}
                  </p>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-amber-900/85">
                  {bar.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(bar.mapsQuery)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-900 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-amber-50 shadow-md transition-all hover:bg-amber-950"
                >
                  <Navigation size={15} />
                  <span>Directions to RK Resort</span>
                </a>
                <button
                  type="button"
                  onClick={downloadICS}
                  className="inline-flex items-center gap-2 rounded-xl border border-amber-300 bg-white px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] text-amber-900 shadow-sm transition-all hover:bg-amber-50"
                >
                  <span>Download .ics</span>
                </button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
