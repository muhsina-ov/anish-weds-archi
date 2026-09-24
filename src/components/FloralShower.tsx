import { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  flip: number;
  flipSpeed: number;
  opacity: number;
  color: string;
  type: "rose" | "marigold" | "lotus" | "sparkle";
}

export default function FloralShower() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    let width = (canvas.width = window.innerWidth * dpr);
    let height = (canvas.height = window.innerHeight * dpr);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;

    const onResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth * dpr;
      height = canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };
    window.addEventListener("resize", onResize);

    const roseColors = ["#be123c", "#e11d48", "#fb7185", "#f43f5e"];
    const marigoldColors = ["#f59e0b", "#d97706", "#f97316", "#fbbf24"];
    const lotusColors = ["#f472b6", "#ec4899", "#fda4af"];
    const sparkleColors = ["#fef08a", "#fde047", "#ffffff"];

    const petalCount = Math.min(55, Math.max(30, Math.floor(window.innerWidth / 28)));

    const createPetal = (randomY: boolean = false): Petal => {
      const typeRand = Math.random();
      let type: Petal["type"] = "rose";
      let color = roseColors[Math.floor(Math.random() * roseColors.length)];

      if (typeRand < 0.38) {
        type = "rose";
        color = roseColors[Math.floor(Math.random() * roseColors.length)];
      } else if (typeRand < 0.72) {
        type = "marigold";
        color = marigoldColors[Math.floor(Math.random() * marigoldColors.length)];
      } else if (typeRand < 0.9) {
        type = "lotus";
        color = lotusColors[Math.floor(Math.random() * lotusColors.length)];
      } else {
        type = "sparkle";
        color = sparkleColors[Math.floor(Math.random() * sparkleColors.length)];
      }

      const size = (type === "sparkle" ? 3 + Math.random() * 4 : 10 + Math.random() * 14) * dpr;

      return {
        x: Math.random() * width,
        y: randomY ? Math.random() * height : -30 * dpr,
        size,
        speedY: (1.2 + Math.random() * 1.8) * dpr,
        speedX: (Math.random() - 0.5) * 1.1 * dpr,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.04,
        flip: Math.random() * Math.PI,
        flipSpeed: 0.02 + Math.random() * 0.03,
        opacity: 0.55 + Math.random() * 0.4,
        color,
        type,
      };
    };

    // Pre-populate petals across the entire vertical height so flowers fall immediately
    const petals: Petal[] = Array.from({ length: petalCount }, () => createPetal(true));

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < petals.length; i++) {
        const p = petals[i];
        p.y += p.speedY;
        p.x += Math.sin(time + p.y * 0.003) * 0.9 * dpr + p.speedX;
        p.rotation += p.rotationSpeed;
        p.flip += p.flipSpeed;

        if (p.y > height + 40 * dpr) {
          petals[i] = createPetal(false);
          continue;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.scale(Math.cos(p.flip), 1);
        ctx.globalAlpha = p.opacity;

        if (p.type === "sparkle") {
          // Golden radiant star sparkle
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Graceful flower petal curve
          ctx.fillStyle = p.color;
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 0.8);
          ctx.bezierCurveTo(p.size * 0.6, -p.size * 0.8, p.size * 0.8, p.size * 0.3, 0, p.size);
          ctx.bezierCurveTo(-p.size * 0.8, p.size * 0.3, -p.size * 0.6, -p.size * 0.8, 0, -p.size * 0.8);
          ctx.fill();

          // Delicate petal highlight
          ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
          ctx.lineWidth = 1 * dpr;
          ctx.beginPath();
          ctx.moveTo(0, -p.size * 0.6);
          ctx.quadraticCurveTo(p.size * 0.2, 0, 0, p.size * 0.7);
          ctx.stroke();
        }

        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-30 h-full w-full"
      aria-hidden="true"
    />
  );
}
