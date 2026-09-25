import { useState, useEffect } from "react";
import { Calendar, Clock, Sparkles, Star, CalendarPlus } from "lucide-react";
import Reveal from "./Reveal";
import { wedding, googleCalendarUrl, downloadICS } from "../config";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isComplete: boolean;
}

function calculateTimeLeft(targetDateStr: string): TimeLeft {
  const target = new Date(targetDateStr).getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isComplete: true };
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds, isComplete: false };
}

export default function Countdown() {
  // Option to view countdown for Reception (Primary) or Baraat
  const [activeTab, setActiveTab] = useState<"reception" | "baraat">("reception");

  const targetDateISO =
    activeTab === "reception" ? wedding.receptionDateISO : wedding.dateISO;

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() =>
    calculateTimeLeft(targetDateISO)
  );

  useEffect(() => {
    // Initial update on tab change
    setTimeLeft(calculateTimeLeft(targetDateISO));

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDateISO));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDateISO]);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  const currentEvent =
    activeTab === "reception"
      ? {
          title: "Grand Reception",
          date: wedding.receptionDateLabel,
          time: wedding.receptionTimeLabel,
          venue: wedding.venue.name,
          address: wedding.venue.address,
          dateISO: wedding.receptionDateISO,
        }
      : {
          title: "Baraat & Sacred Pheras",
          date: wedding.dateLabel,
          time: wedding.timeLabel,
          venue: wedding.bottomHighlights.baraat.venue,
          address: wedding.bottomHighlights.baraat.address,
          dateISO: wedding.dateISO,
        };

  return (
    <section
      id="countdown"
      className="luminous-section relative overflow-hidden px-6 py-16 sm:py-24 border-y border-amber-200/60"
    >
      {/* Background Diya / Lotus subtle accents */}
      <img
        src={wedding.assets.diya}
        alt=""
        className="pointer-events-none absolute left-[-2%] top-6 w-28 sm:w-36 opacity-20 filter drop-shadow-md"
      />
      <img
        src={wedding.assets.foregroundLotus}
        alt=""
        className="pointer-events-none absolute right-[-5%] -bottom-10 w-44 sm:w-60 opacity-20 filter drop-shadow-md"
      />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Auspicious Blessing Tag */}
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-white/90 px-4 py-1.5 shadow-sm backdrop-blur-md">
            <Sparkles size={14} className="text-amber-600" />
            <span className="font-devanagari text-xs sm:text-sm font-bold text-amber-900">
              {wedding.jaiBuaDati}
            </span>
            <span className="text-amber-400">·</span>
            <span className="font-cinzel text-[11px] font-bold uppercase tracking-wider text-rose-800">
              Save The Date
            </span>
          </div>
        </Reveal>

        {/* Section Heading */}
        <Reveal delay={0.08} className="mt-4">
          <h2 className="font-display text-3xl sm:text-5xl font-bold leading-tight text-amber-950">
            Counting Down to the Sacred Union
          </h2>
          <p className="mt-2 text-xs sm:text-sm font-medium text-amber-900/80">
            Every moment brings us closer to celebrating with all our beloved family and friends
          </p>
        </Reveal>

        {/* Event Selection Tabs */}
        <Reveal delay={0.14} className="mt-6 flex justify-center">
          <div className="inline-flex rounded-full border-2 border-amber-300/80 bg-white/80 p-1 shadow-md backdrop-blur-md">
            <button
              type="button"
              onClick={() => setActiveTab("reception")}
              className={`flex items-center gap-1.5 rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "reception"
                  ? "bg-gradient-to-r from-amber-600 via-rose-600 to-amber-700 text-white shadow-md shadow-amber-600/25 scale-[1.02]"
                  : "text-amber-900 hover:text-amber-950"
              }`}
            >
              <Star size={13} className={activeTab === "reception" ? "fill-amber-200 text-amber-200" : "text-amber-600"} />
              <span>Nov 11 · Grand Reception</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("baraat")}
              className={`flex items-center gap-1.5 rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                activeTab === "baraat"
                  ? "bg-gradient-to-r from-amber-600 via-rose-600 to-amber-700 text-white shadow-md shadow-amber-600/25 scale-[1.02]"
                  : "text-amber-900 hover:text-amber-950"
              }`}
            >
              <Calendar size={13} className={activeTab === "baraat" ? "text-amber-200" : "text-amber-600"} />
              <span>Nov 10 · Baraat &amp; Pheras</span>
            </button>
          </div>
        </Reveal>

        {/* Live Countdown Clock Grid */}
        <Reveal delay={0.2} className="mt-8">
          <div className="mx-auto max-w-2xl rounded-3xl border-2 border-amber-300/90 bg-gradient-to-b from-white/95 via-[#fffaf0]/95 to-white/95 p-6 sm:p-8 shadow-xl backdrop-blur-md ring-4 ring-amber-400/15">
            {/* Event Header in Card */}
            <div className="mb-6 flex flex-wrap items-center justify-between gap-2 border-b border-amber-200/80 pb-3 text-left">
              <div>
                <span className="font-cinzel text-[11px] font-bold uppercase tracking-[0.2em] text-rose-800">
                  {currentEvent.title}
                </span>
                <p className="font-display text-lg sm:text-xl font-bold text-amber-950">
                  {currentEvent.date}
                </p>
              </div>
              <div className="text-right">
                <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-[11px] font-bold text-amber-900 border border-amber-300">
                  {currentEvent.venue} · {currentEvent.time}
                </span>
              </div>
            </div>

            {/* Numbers Grid */}
            <div className="grid grid-cols-4 gap-3 sm:gap-6">
              {units.map((unit) => (
                <div
                  key={unit.label}
                  className="flex flex-col items-center justify-center rounded-2xl border border-amber-300/80 bg-white/95 px-2 py-4 sm:py-6 shadow-sm transition-all hover:scale-105 hover:border-amber-400"
                >
                  <span className="font-display text-3xl sm:text-5xl font-extrabold text-amber-950 leading-none tracking-tight">
                    {String(unit.value).padStart(2, "0")}
                  </span>
                  <span className="font-cinzel mt-2 text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-amber-800/80">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Calendar Actions */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3 pt-4 border-t border-amber-200/80">
              <a
                href={googleCalendarUrl(currentEvent)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-amber-400 bg-white px-4 py-2 font-cinzel text-xs font-bold text-amber-900 shadow-sm transition-all hover:bg-amber-50 hover:scale-105"
              >
                <CalendarPlus size={14} className="text-amber-600" />
                <span>Add to Google Calendar</span>
              </a>

              <button
                type="button"
                onClick={downloadICS}
                className="inline-flex items-center gap-2 rounded-full border border-amber-400 bg-white px-4 py-2 font-cinzel text-xs font-bold text-amber-900 shadow-sm transition-all hover:bg-amber-50 hover:scale-105"
              >
                <Clock size={14} className="text-rose-600" />
                <span>Save to Apple / Outlook (.ICS)</span>
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
