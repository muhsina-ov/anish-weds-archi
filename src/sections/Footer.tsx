import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";
import { wedding } from "../config";

export default function Footer() {
  const [copied, setCopied] = useState(false);
  const copyTimer = useRef<number | undefined>(undefined);

  const copyHashtag = async () => {
    try {
      await navigator.clipboard.writeText(wedding.hashtag);
      setCopied(true);
      if (copyTimer.current) window.clearTimeout(copyTimer.current);
      copyTimer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  return (
    <footer className="relative flex flex-col justify-center items-center overflow-hidden border-t-2 border-amber-300/80 bg-gradient-to-b from-[#faf6ee] to-[#f4ebe0] px-6 py-20 text-center">
      <Reveal className="relative z-10 mx-auto max-w-lg flex flex-col items-center gap-4">
        {/* Sacred Blessing */}
        <p className="font-devanagari text-lg font-bold text-rose-800">
          ॥ जय बुआ दाती ॥
        </p>

        <h3 className="font-display text-4xl sm:text-5xl font-bold text-amber-950">
          {wedding.footer.title}
        </h3>

        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-800">
          With Love &amp; Warm Regards,<br />{wedding.familySignoff}
        </p>

        <div className="hairline-gold my-2 w-36" />

        <motion.button
          type="button"
          onClick={copyHashtag}
          whileTap={{ scale: 0.95 }}
          className="rounded-full border border-amber-400 bg-white px-6 py-2.5 font-cinzel text-xs font-bold uppercase tracking-widest text-amber-950 shadow-sm transition-all hover:bg-amber-50"
        >
          {copied ? "✓ Copied to Clipboard!" : `${wedding.hashtag} · Tap to Copy`}
        </motion.button>

        <a
          href="https://www.instagram.com/invitestory.in/"
          target="_blank"
          rel="noreferrer"
          className="mt-4 font-cinzel text-[11px] font-semibold uppercase tracking-[0.25em] text-amber-700/80 hover:text-amber-900 transition-colors"
        >
          Crafted with love by InviteStory.in
        </a>
      </Reveal>
    </footer>
  );
}
