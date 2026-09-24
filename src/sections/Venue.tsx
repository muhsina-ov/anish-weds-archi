import { CalendarPlus, Navigation, Sparkles, Star, MapPin, CheckCircle } from "lucide-react";
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
        kicker="Auspicious Destinations & Timings"
        title="Double Celebration Highlights"
      />

      {/* DOUBLE HIGHLIGHTS SECTION: Reception (Primary Star Highlight) + Baraat */}
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 border border-amber-400 px-4 py-1.5 font-cinzel text-xs font-bold uppercase tracking-[0.22em] text-amber-900 shadow-sm">
              <Sparkles size={14} className="text-amber-700" />
              <span>Both Main Events Highlighted For Your Convenience</span>
            </span>
            <h3 className="font-display text-3xl sm:text-4xl text-amber-950 font-bold mt-3">
              November 11 Grand Reception &amp; November 10 Royal Baraat
            </h3>
            <p className="text-xs sm:text-sm text-amber-900/80 mt-2 max-w-xl mx-auto">
              Please join us to bestow your divine blessings on Anish &amp; Dr. Archi across both grand venues.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 lg:grid-cols-[1.18fr_0.82fr] items-stretch">
          {/* CARD 1: GRAND RECEPTION (HIGHEST PRIORITY / STAR OF THE CELEBRATION) */}
          <Reveal delay={0.08} className="flex">
            <div className="relative flex flex-col justify-between w-full rounded-3xl border-3 border-amber-500 bg-gradient-to-br from-[#fffdf8] via-[#fff8eb] to-[#fef2f4] p-8 sm:p-11 text-left shadow-[0_20px_50px_-10px_rgba(217,119,6,0.3)] ring-6 ring-amber-400/20 transition-all duration-300 hover:scale-[1.01]">
              <div>
                {/* Top Badge: Highlighted MUCH MORE */}
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-600 via-rose-600 to-amber-700 px-5 py-2 text-xs font-extrabold uppercase tracking-widest text-white shadow-lg animate-gold-pulse">
                    <Star size={15} className="fill-amber-200 text-amber-200" />
                    <span>★ PRIMARY FEATURED HIGHLIGHT ★</span>
                  </span>
                  <span className="rounded-full bg-rose-100 border border-rose-300 px-3 py-1 font-cinzel text-xs font-bold text-rose-900">
                    WEDNESDAY · NOV 11
                  </span>
                </div>

                <div className="mt-6">
                  <div className="inline-block rounded-md bg-amber-500/20 px-2.5 py-0.5 font-cinzel text-[11px] font-bold uppercase tracking-widest text-amber-900">
                    Gala Dinner &amp; Felicitations
                  </div>
                  <h3 className="font-display text-4xl sm:text-5xl font-extrabold text-amber-950 mt-1">
                    {rec.title}
                  </h3>
                  <p className="text-base font-bold text-rose-700 mt-2 flex items-center gap-1.5">
                    <Sparkles size={16} />
                    <span>{rec.time}</span>
                  </p>

                  {/* Primary Venue Box */}
                  <div className="mt-6 rounded-2xl border-2 border-amber-400 bg-white/95 p-6 shadow-md ring-2 ring-amber-200/50">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-extrabold uppercase tracking-widest text-amber-700">
                        Primary Celebration Venue
                      </span>
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700">
                        <CheckCircle size={13} />
                        <span>Machine Domana</span>
                      </span>
                    </div>
                    <p className="font-display text-3xl font-extrabold text-amber-950 mt-1">
                      {rec.venue}
                    </p>
                    <p className="text-sm font-semibold text-amber-900 mt-1 flex items-center gap-1.5">
                      <MapPin size={16} className="text-rose-700 shrink-0" />
                      <span>{rec.address}</span>
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-amber-950/80 bg-amber-50/70 p-3 rounded-xl border border-amber-200/70">
                      {rec.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-6 mt-6 border-t border-amber-200/70">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(rec.mapsQuery)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 via-rose-600 to-amber-700 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-xl transition-all hover:scale-105 active:scale-95"
                >
                  <Navigation size={16} />
                  <span>Get Directions to Vivah Vatika</span>
                </a>
                <a
                  href={googleCalendarUrl({ title: `${wedding.groom} & ${wedding.bride} — Grand Reception`, dateISO: wedding.receptionDateISO, venue: rec.venue, address: rec.address })}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-amber-400 bg-white px-5 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-amber-900 shadow-sm transition-all hover:bg-amber-50"
                >
                  <CalendarPlus size={16} />
                  <span>Add to Calendar</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* CARD 2: ROYAL BARAAT & WEDDING CEREMONY */}
          <Reveal delay={0.16} className="flex">
            <div className="relative flex flex-col justify-between w-full rounded-3xl border-2 border-amber-300 bg-white/95 p-7 sm:p-9 text-left shadow-lg transition-all duration-300 hover:scale-[1.01]">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 border border-amber-400 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-amber-900">
                    <Sparkles size={13} className="text-amber-600" />
                    <span>ROYAL BARAAT &amp; PHERAS</span>
                  </span>
                  <span className="font-cinzel text-xs font-bold text-amber-800">
                    TUESDAY · NOV 10
                  </span>
                </div>

                <div className="mt-5">
                  <div className="inline-block rounded-md bg-amber-100/70 px-2 py-0.5 font-cinzel text-[10px] font-bold uppercase tracking-widest text-amber-800">
                    Vedic Wedding Muhurat
                  </div>
                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-amber-950 mt-1">
                    {bar.title}
                  </h3>
                  <p className="text-sm font-semibold text-rose-800 mt-2">
                    Time: {bar.time}
                  </p>

                  <div className="mt-5 rounded-2xl border border-amber-300/70 bg-amber-50/50 p-5 shadow-sm">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-amber-700">Wedding Venue</p>
                    <p className="font-display text-2xl font-bold text-amber-950 mt-0.5">
                      {bar.venue}
                    </p>
                    <p className="text-xs text-amber-900/80 mt-1 flex items-center gap-1.5">
                      <MapPin size={14} className="text-rose-700 shrink-0" />
                      <span>{bar.address}</span>
                    </p>
                    <p className="mt-3 text-xs leading-relaxed text-amber-900/85">
                      {bar.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5 pt-5 mt-5 border-t border-amber-200/60">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(bar.mapsQuery)}`}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-amber-900 px-5 py-3 text-xs font-bold uppercase tracking-[0.15em] text-amber-50 shadow-md transition-all hover:bg-amber-950"
                >
                  <Navigation size={15} />
                  <span>Directions to RK Resort</span>
                </a>
                <button
                  type="button"
                  onClick={downloadICS}
                  className="inline-flex items-center gap-2 rounded-xl border border-amber-300 bg-white px-4 py-3 text-xs font-bold uppercase tracking-[0.13em] text-amber-900 shadow-sm transition-all hover:bg-amber-50"
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
