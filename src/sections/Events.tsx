import { useEffect, useState } from "react";
import { MapPin, Navigation, Clock, Sparkles } from "lucide-react";
import Reveal, { SectionHeading } from "../components/Reveal";
import { wedding } from "../config";

type Remain = { days: number; hours: number; mins: number; secs: number };

function getRemain(target: string): Remain {
  const diff = Math.max(0, new Date(target).getTime() - Date.now());
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff % 86400000) / 3600000);
  const mins = Math.floor((diff % 3600000) / 60000);
  const secs = Math.floor((diff % 60000) / 1000);
  return { days, hours, mins, secs };
}

export default function Events() {
  const [remain, setRemain] = useState<Remain>(() => getRemain(wedding.dateISO));
  const [selectedIdx, setSelectedIdx] = useState(4); // Default to Baraat (main wedding)
  const activeEvent = wedding.events[selectedIdx] || wedding.events[0];

  useEffect(() => {
    if (wedding.sections?.countdown === false) return;
    const id = window.setInterval(() => setRemain(getRemain(wedding.dateISO)), 1000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="paper-section relative overflow-hidden px-6 py-24 sm:py-36">
      <img
        src={wedding.assets.mandap}
        alt=""
        className="pointer-events-none absolute left-1/2 top-16 w-[78%] max-w-xl -translate-x-1/2 opacity-[0.06]"
      />
      <div className="[&_.section-heading_h2]:!text-ink">
        <SectionHeading kicker="Auspicious Celebrations" title="Wedding Events" />
      </div>

      <div className="mx-auto max-w-6xl">
        {/* Countdown Header */}
        {wedding.sections?.countdown !== false && (
          <Reveal delay={0.05} className="mb-14">
            <div className="mx-auto max-w-2xl rounded-2xl border border-gold/40 bg-ink/[0.03] p-6 text-center backdrop-blur-sm sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
              <div className="flex items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold">
                <Sparkles size={14} className="text-[#a77a35]" />
                <span className="text-[#a77a35]">Counting down to the Baraat & Wedding</span>
                <Sparkles size={14} className="text-[#a77a35]" />
              </div>
              <div className="mt-6 grid grid-cols-4 gap-2 sm:gap-4">
                {(
                  [
                    ["Days", remain.days],
                    ["Hours", remain.hours],
                    ["Mins", remain.mins],
                    ["Secs", remain.secs],
                  ] as const
                ).map(([label, value]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-gold/25 bg-white/70 py-3 text-center shadow-sm sm:py-4"
                  >
                    <p className="font-display text-3xl font-medium text-ink sm:text-5xl">
                      {String(value).padStart(2, "0")}
                    </p>
                    <p className="mt-1 text-[9px] uppercase tracking-[0.25em] text-ink/55 sm:text-[10px]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs tracking-wider text-ink/65">
                {wedding.dateLabel} · {wedding.venue.name}, {wedding.venue.city}
              </p>
            </div>
          </Reveal>
        )}

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
                  className={`group relative flex items-center gap-2 rounded-full px-4 py-2 text-xs uppercase tracking-wider transition-all duration-300 ${
                    isActive
                      ? "border border-[#8f6323] bg-ink text-pearl shadow-md ring-1 ring-gold/40"
                      : "border border-gold/30 bg-white/60 text-ink/75 hover:border-gold/60 hover:bg-white"
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${isActive ? "bg-glow-gold animate-pulse" : "bg-gold/40"}`} />
                  <span className="font-medium">{ev.name}</span>
                  <span className={`text-[10px] ${isActive ? "text-champagne/80" : "text-ink/45"}`}>
                    {ev.date.split(" (")[0]}
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
            <article className="relative overflow-hidden rounded-2xl border border-gold/40 bg-white/80 p-8 text-left shadow-[0_15px_40px_rgba(0,0,0,0.06)] backdrop-blur-md sm:p-10">
              <div className="absolute right-6 top-6 text-right">
                <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-[10px] uppercase tracking-[0.2em] font-medium text-[#8f6323]">
                  {activeEvent.tagline || "Ceremony"}
                </span>
              </div>

              <p className="text-[11px] uppercase tracking-[0.35em] text-[#a77a35] font-semibold">
                {activeEvent.dayLabel}
              </p>
              <div className="mt-2 flex items-baseline gap-3">
                <p className="font-display text-7xl font-medium leading-none text-ink sm:text-8xl">
                  {activeEvent.dayNum}
                </p>
                <div>
                  <p className="font-display text-2xl tracking-[0.08em] text-ink/80">
                    {activeEvent.monthLabel}
                  </p>
                  <p className="text-xs uppercase tracking-widest text-[#a77a35]">
                    {activeEvent.date}
                  </p>
                </div>
              </div>

              <div className="hairline-gold my-6 w-full" />

              <div className="space-y-4">
                <div>
                  <h3 className="font-display text-4xl text-ink font-semibold">
                    {activeEvent.name}
                  </h3>
                  <div className="mt-2 flex items-center gap-2 text-sm font-medium text-[#8f6323]">
                    <Clock size={15} />
                    <span>Time: {activeEvent.time}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 rounded-xl border border-gold/25 bg-ink/[0.02] p-4 text-ink/80">
                  <MapPin size={18} className="mt-0.5 shrink-0 text-[#a77a35]" />
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-ink/50 font-medium">Venue</p>
                    <p className="font-display text-lg text-ink font-medium leading-tight mt-0.5">
                      {activeEvent.venue}
                    </p>
                  </div>
                </div>

                {activeEvent.note && (
                  <p className="text-sm leading-relaxed text-ink/65 italic">
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
                    className="inline-flex items-center gap-2 rounded-lg border border-[#a77a35] bg-ink px-4 py-2.5 text-xs uppercase tracking-[0.16em] text-champagne transition-all hover:bg-ink/90 hover:shadow-md"
                  >
                    <Navigation size={13} />
                    <span>Directions to {activeEvent.venue.split(",")[0]}</span>
                  </a>
                </div>
              </div>
            </article>
          </Reveal>

          {/* All Events Timeline List */}
          <Reveal delay={0.2} className="space-y-3">
            <div className="flex items-center justify-between pb-2">
              <p className="text-[11px] uppercase tracking-[0.3em] text-[#a77a35] font-semibold">
                All Celebrations
              </p>
              <span className="text-[10px] uppercase tracking-widest text-ink/45">
                {wedding.events.length} Events
              </span>
            </div>

            <ol className="relative space-y-3 before:absolute before:bottom-4 before:left-[15px] before:top-4 before:w-px before:bg-gold/30">
              {wedding.events.map((ev, index) => {
                const isSelected = index === selectedIdx;
                return (
                  <li
                    key={ev.name + index}
                    onClick={() => setSelectedIdx(index)}
                    className={`group relative flex cursor-pointer items-start justify-between gap-3 rounded-xl border p-4 transition-all duration-200 ${
                      isSelected
                        ? "border-[#a77a35] bg-white shadow-sm ring-1 ring-[#a77a35]/30"
                        : "border-gold/20 bg-white/50 hover:border-gold/50 hover:bg-white/80"
                    }`}
                  >
                    <span
                      className={`relative z-10 mt-1 h-3.5 w-3.5 shrink-0 rounded-full border transition-colors ${
                        isSelected
                          ? "border-[#a77a35] bg-ink ring-2 ring-gold/40"
                          : "border-gold/50 bg-[var(--paper)] group-hover:border-[#a77a35]"
                      }`}
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="font-display text-base font-semibold text-ink group-hover:text-[#8f6323]">
                          {ev.name}
                        </span>
                        <span className="text-[11px] font-medium text-[#8f6323]">
                          ({ev.time})
                        </span>
                      </div>
                      <p className="text-xs text-ink/65 truncate mt-0.5">
                        {ev.venue}
                      </p>
                      <p className="text-[10px] text-ink/45 mt-0.5">
                        {ev.date}
                      </p>
                    </div>
                    <span className="shrink-0 text-right font-display text-sm font-medium text-[#a77a35]">
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

