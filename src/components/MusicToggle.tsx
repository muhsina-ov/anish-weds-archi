import { useState, useEffect, useRef, useCallback } from "react";
import { Volume2, VolumeX, Music, Disc3 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { wedding } from "../config";

export function playCelebrationMusic() {
  window.dispatchEvent(new CustomEvent("wedding-play-music"));
}

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIdx, setCurrentTrackIdx] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const tracks = wedding.audioTracks || [
    {
      id: "shehnai",
      title: "Wedding Shehnai Dhun",
      subtitle: "Auspicious Mangal Dhun",
      src: "/audio/ambient-shehnai.mp3",
    },
    {
      id: "rangi-saari",
      title: "Rangi Saari",
      subtitle: "Celebratory Sangeet Melodies",
      src: "/audio/rangi-saari.m4a",
    },
  ];

  const currentTrack = tracks[currentTrackIdx];

  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3800);
  };

  const startPlayback = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio
      .play()
      .then(() => {
        setIsPlaying(true);
        triggerToast(`Playing: ${tracks[currentTrackIdx].title}`);
      })
      .catch((err) => {
        console.warn("Audio autoplay prevented, awaiting interaction:", err);
      });
  }, [currentTrackIdx, tracks]);

  useEffect(() => {
    const audio = new Audio();
    audio.src = currentTrack.src;
    audio.loop = true;
    audio.volume = 0.65;
    audioRef.current = audio;

    // Fallback if current track fails to load
    audio.onerror = () => {
      console.warn("Track failed to load, switching to shehnai fallback:", currentTrack.src);
      if (currentTrackIdx !== 0) {
        setCurrentTrackIdx(0);
      } else if (wedding.assets.audioMp3) {
        audio.src = wedding.assets.audioMp3;
        audio.play().catch(() => {});
      }
    };

    const handleExternalPlay = () => {
      startPlayback();
    };

    const handleFirstUserTap = () => {
      startPlayback();
      window.removeEventListener("click", handleFirstUserTap);
      window.removeEventListener("touchstart", handleFirstUserTap);
    };

    window.addEventListener("wedding-play-music", handleExternalPlay);
    window.addEventListener("click", handleFirstUserTap, { once: true });
    window.addEventListener("touchstart", handleFirstUserTap, { once: true });

    return () => {
      audio.pause();
      audioRef.current = null;
      window.removeEventListener("wedding-play-music", handleExternalPlay);
      window.removeEventListener("click", handleFirstUserTap);
      window.removeEventListener("touchstart", handleFirstUserTap);
    };
  }, [currentTrack.src, currentTrackIdx, startPlayback]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
          triggerToast(`Playing: ${currentTrack.title}`);
        })
        .catch(() => {});
    } else {
      audio.pause();
      setIsPlaying(false);
      triggerToast("Music Paused");
    }
  };

  const switchTrack = (e: React.MouseEvent) => {
    e.stopPropagation();
    const nextIdx = (currentTrackIdx + 1) % tracks.length;
    setCurrentTrackIdx(nextIdx);

    const audio = audioRef.current;
    if (audio) {
      audio.pause();
      audio.src = tracks[nextIdx].src;
      audio.play().then(() => {
        setIsPlaying(true);
        triggerToast(`Switched: ${tracks[nextIdx].title}`);
      }).catch(() => {});
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-center gap-2.5">
      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            className="hidden sm:flex items-center gap-2.5 rounded-full border border-amber-400/80 bg-white/95 px-4 py-2 text-xs font-semibold text-amber-950 shadow-xl backdrop-blur-md ring-2 ring-amber-400/20"
          >
            <Music size={14} className="animate-spin text-amber-600" />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Switch Track Button */}
      {tracks.length > 1 && (
        <button
          type="button"
          onClick={switchTrack}
          title={`Switch track: Next is ${tracks[(currentTrackIdx + 1) % tracks.length].title}`}
          aria-label="Switch song"
          className="group flex h-10 w-10 items-center justify-center rounded-full border border-amber-300 bg-white/90 text-amber-800 shadow-md backdrop-blur-md transition-all hover:scale-105 active:scale-95 hover:bg-amber-50"
        >
          <Disc3 size={17} className={`transition-transform duration-700 ${isPlaying ? "animate-spin" : ""}`} />
        </button>
      )}

      {/* Main Play/Pause Button with Audio Waves */}
      <button
        type="button"
        onClick={togglePlay}
        aria-label={isPlaying ? "Mute celebratory music" : "Play celebratory music"}
        className={`group relative flex h-13 w-13 sm:h-14 sm:w-14 items-center justify-center rounded-full border shadow-2xl backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 ${
          isPlaying
            ? "border-amber-400 bg-gradient-to-tr from-amber-600 via-rose-600 to-amber-500 text-white shadow-amber-600/35 ring-4 ring-amber-400/20"
            : "border-amber-400/70 bg-white/95 text-amber-900 hover:bg-white shadow-black/10 ring-2 ring-amber-300/30"
        }`}
      >
        {isPlaying ? (
          <div className="relative flex items-center justify-center">
            {/* Pulsing ring */}
            <span className="absolute -inset-1 rounded-full border border-amber-300 animate-ping opacity-30" />
            <Volume2 size={22} className="relative z-10" />
            {/* Visualizer bars */}
            <span className="absolute -bottom-1 flex gap-0.5 items-end h-2">
              <span className="w-0.5 h-1.5 bg-amber-200 animate-pulse" />
              <span className="w-0.5 h-2.5 bg-amber-100 animate-pulse delay-75" />
              <span className="w-0.5 h-1.5 bg-amber-200 animate-pulse delay-150" />
            </span>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <VolumeX size={20} className="text-amber-800" />
            <span className="text-[9px] font-bold uppercase tracking-wider text-rose-700">Play</span>
          </div>
        )}
      </button>
    </div>
  );
}
