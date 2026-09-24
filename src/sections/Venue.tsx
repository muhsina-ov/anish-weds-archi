import { CalendarPlus, Navigation } from "lucide-react";
import Reveal, { SectionHeading } from "../components/Reveal";
import {
  wedding,
  googleCalendarUrl,
  downloadICS,
  mapsDirectionsUrl,
} from "../config";

export default function Venue() {
  return (
    <section className="night-section relative overflow-hidden px-6 py-28 sm:py-40">
      <SectionHeading kicker="Where and when" title="Celebration Venues" />

      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
        <Reveal className="flex flex-col items-start gap-4 text-left">
          <p className="section-kicker">Jammu, Jammu & Kashmir</p>
          <h3 className="font-display text-4xl leading-tight text-pearl sm:text-5xl">
            {wedding.venue.name}
          </h3>
          <p className="max-w-md text-sm leading-relaxed text-pearl/70">
            {wedding.venue.address}
          </p>
          <p className="font-display text-lg tracking-wide text-champagne">
            {wedding.dateLabel} · {wedding.timeLabel}
          </p>

          <div className="flex flex-wrap gap-5 py-2">
            <a
              href={googleCalendarUrl()}
              target="_blank"
              rel="noreferrer"
              className="text-link flex items-center gap-2"
            >
              <CalendarPlus size={14} /> Add to calendar
            </a>
            <button type="button" onClick={downloadICS} className="text-link">
              Download .ics
            </button>
          </div>

          <div className="mt-4 w-full space-y-3">
            <p className="text-[11px] uppercase tracking-[0.28em] text-champagne/80 font-medium">
              All Destination Locations
            </p>
            <div className="grid gap-3">
              {wedding.venues.map((v) => (
                <div
                  key={v.name + v.role}
                  className="flex items-center justify-between gap-4 rounded-xl border border-champagne/15 bg-ink/40 p-4 backdrop-blur-sm transition-colors hover:border-champagne/40"
                >
                  <div className="min-w-0">
                    <span className="text-[10px] uppercase tracking-wider text-glow-warm">
                      {v.role}
                    </span>
                    <h4 className="font-display text-lg font-medium text-pearl mt-0.5">
                      {v.name}
                    </h4>
                    <p className="text-xs text-pearl/60 truncate">{v.address}</p>
                    {v.dateInfo && (
                      <p className="text-[10px] text-champagne/70 mt-0.5">{v.dateInfo}</p>
                    )}
                  </div>
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
                      v.mapsQuery
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-champagne/30 bg-champagne/10 text-champagne transition-all hover:scale-105 hover:bg-champagne/20"
                    title={`Directions to ${v.name}`}
                  >
                    <Navigation size={14} />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08} className="lg:pt-2">
          <a
            href={mapsDirectionsUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative flex h-[28rem] items-end overflow-hidden rounded-2xl border border-champagne/20 shadow-[0_28px_80px_rgba(0,0,0,0.4)]"
            aria-label={`Open directions to ${wedding.venue.name}`}
          >
            <img
              src={wedding.assets.environment}
              alt="Celebration venue"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.03]"
              loading="lazy"
              decoding="async"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-transparent" />
            <div className="relative flex w-full items-end justify-between gap-4 p-6">
              <div>
                <span className="inline-block rounded-full bg-champagne/20 px-2.5 py-0.5 text-[9px] uppercase tracking-widest text-champagne mb-1.5 backdrop-blur-sm">
                  Primary Venue
                </span>
                <p className="font-display text-2xl text-pearl">
                  {wedding.venue.name}
                </p>
                <p className="mt-1 text-xs text-pearl/70">
                  {wedding.venue.landmark} · {wedding.venue.directionHint}
                </p>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center border border-champagne/30 bg-ink/75 text-champagne backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-1">
                <Navigation size={16} />
              </span>
            </div>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
