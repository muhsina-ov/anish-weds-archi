import { useState } from "react";
import { Clock, MapPin, Navigation, Sparkles } from "lucide-react";
import Reveal, { SectionHeading } from "../components/Reveal";
import { wedding } from "../config";

export default function Events() {
  // Default to Grand Reception index (Nov 11) to give it maximum visibility!
  const receptionIndex = wedding.events.findIndex((e) => e.isPrimaryHighlight);
  const [selectedIdx, setSelectedIdx] = useState(receptionIndex !== -1 ? receptionIndex : 0);
  const activeEvent = wedding.events[selectedIdx];

  return (
    <section id="events" className="luminous-section relative overflow-hidden px-6 py-20 sm:py-32">
      <SectionHeading
        kicker="Auspicious Celebrations"
        title="Wedding Festivities"
      />

      <div className="mx-auto max-w-6xl">
        {/* Event Quick Tabs */}
        <Reveal delay={0.1} className="mb-10">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {wedding.events.map((ev, index) => {
              const isActive = index === selectedIdx;
              return (
                <button
                  key={ev.name + index}
                  type="button"
                  onClick={() => setSelectedIdx(index)}
                  className={`group relative flex items-center gap-2 rounded-full px-4 py-2.5 text-xs uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? "border-2 border-amber-500 bg-gradient-to-r from-amber-600 via-rose-600 to-amber-700 text-white shadow-lg shadow-amber-600/25"
                      : ev.isPrimaryHighlight
                      ? "border-2 border-amber-400 bg-amber-50 text-amber-900 hover:bg-amber-100"
                      : "border border-amber-300/50 bg-white/80 text-amber-950 hover:bg-white"
                  }`}
                >
                  {ev.isPrimaryHighlight && <Sparkles size={13} className={isActive ? "text-amber-200" : "text-amber-600"} />}
                  <span className="font-bold">{ev.name}</span>
                  <span className={`text-[11px] ${isActive ? "text-amber-100" : "text-amber-800/70"}`}>
                    ({ev.dayNum} Nov)
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Selected Event Spotlight Card & Schedule Grid */}
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          {/* Spotlight Card */}
          <Reveal delay={0.15}>
            <article className={`relative overflow-hidden rounded-3xl p-8 sm:p-10 text-left backdrop-blur-md shadow-xl transition-all ${
              activeEvent.isPrimaryHighlight
                ? "star-reception-card"
                : "border border-amber-300/60 bg-white/95"
            }`}>
              <div className="flex items-center justify-between gap-4">
                <span className="font-cinzel text-xs uppercase tracking-[0.3em] text-amber-800 font-bold">
                  {activeEvent.dayLabel}
                </span>
                {activeEvent.isPrimaryHighlight && (
                  <span className="rounded-full bg-gradient-to-r from-amber-600 to-rose-600 px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                    ★ FEATURED RECEPTION
                  </span>
                )}
              </div>

              <div className="mt-3 flex items-baseline gap-4">
                <p className="font-display text-7xl font-bold leading-none text-amber-950 sm:text-8xl">
                  {activeEvent.dayNum}
                </p>
                <div>
                  <p className="font-display text-2xl font-bold tracking-wide text-amber-900">
                    {activeEvent.monthLabel}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-amber-700 font-semibold">
                    {activeEvent.date}
                  </p>
                </div>
              </div>

              <div className="hairline-gold my-6 w-full" />

              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-3xl sm:text-4xl text-amber-950 font-bold">
                    {activeEvent.name}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-sm font-semibold text-rose-800">
                    <Clock size={16} />
                    <span>Time: {activeEvent.time}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl border border-amber-300/60 bg-white/70 p-4 text-amber-950 shadow-sm">
                  <MapPin size={20} className="mt-0.5 shrink-0 text-amber-700" />
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-amber-800/60 font-bold">Venue Location</p>
                    <p className="font-display text-xl text-amber-950 font-bold mt-0.5">
                      {activeEvent.venue}
                    </p>
                  </div>
                </div>

                {activeEvent.note && (
                  <p className="text-sm leading-relaxed text-amber-900/80 italic bg-amber-50/60 p-4 rounded-xl border border-amber-200/50">
                    "{activeEvent.note}"
                  </p>
                )}

                <div className="pt-2">
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                      activeEvent.mapsQuery || activeEvent.venue
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-600 via-rose-600 to-amber-700 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white shadow-md transition-all hover:scale-[1.02]"
                  >
                    <Navigation size={14} />
                    <span>Get Directions to {activeEvent.venue.split(",")[0]}</span>
                  </a>
                </div>
              </div>
            </article>
          </Reveal>

          {/* All Events Timeline List */}
          <Reveal delay={0.2} className="space-y-3">
            <div className="flex items-center justify-between pb-2">
              <p className="font-cinzel text-xs uppercase tracking-[0.25em] text-amber-800 font-bold">
                Complete Itinerary
              </p>
              <span className="text-[11px] font-semibold text-amber-900/60">
                {wedding.events.length} Events
              </span>
            </div>

            <ol className="space-y-3">
              {wedding.events.map((ev, index) => {
                const isSelected = index === selectedIdx;
                return (
                  <li
                    key={ev.name + index}
                    onClick={() => setSelectedIdx(index)}
                    className={`group relative flex cursor-pointer items-start justify-between gap-3 rounded-2xl border p-4 transition-all duration-200 ${
                      isSelected
                        ? "border-2 border-amber-500 bg-white shadow-md ring-2 ring-amber-400/20"
                        : ev.isPrimaryHighlight
                        ? "border-2 border-amber-400 bg-amber-50/70 hover:bg-amber-50"
                        : "border-amber-200/80 bg-white/70 hover:bg-white"
                    }`}
                  >
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-display text-lg font-bold text-amber-950 group-hover:text-amber-800">
                          {ev.name}
                        </span>
                        {ev.isPrimaryHighlight && (
                          <span className="rounded bg-rose-600 px-1.5 py-0.5 text-[9px] font-bold uppercase text-white">
                            Highlight
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-amber-900/70 truncate mt-0.5">
                        {ev.venue}
                      </p>
                      <p className="text-[11px] font-medium text-rose-800 mt-0.5">
                        {ev.time}
                      </p>
                    </div>
                    <span className="shrink-0 text-right font-display text-base font-bold text-amber-800">
                      {ev.dayNum} Nov
                    </span>
                  </li>
                );
              })}
            </ol>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
