import React from "react";

export default function ParticlesBackground() {
  const dots = Array.from({ length: 20 }, (_, i) => i);

  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">

      {/* NEON AURORA BASE GRADIENT */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px at 20% 30%, rgba(255,0,140,0.15), transparent), radial-gradient(1000px at 80% 70%, rgba(0,130,255,0.18), transparent), linear-gradient(180deg, #030014 0%, #050011 100%)",
        }}
      />

      {/* FLOATING NEON PARTICLES */}
      {dots.map((i) => {
        const size = 30 + (i % 6) * 20;
        const left = (i * 11) % 100;
        const top = (i * 17) % 100;
        const delay = (i % 8) * 0.7;

        return (
          <span
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: size,
              height: size,
              left: `${left}%`,
              top: `${top}%`,
              opacity: 0.18,
              background:
                "radial-gradient(circle, rgba(255,0,180,0.6), rgba(0,150,255,0.05))",
              filter: "blur(20px)",
              transform: "translate(-50%, -50%)",
              animationDelay: `${delay}s`,
            }}
          />
        );
      })}

      {/* SCIFI HOLOGRAPHIC FOG */}
      <div
        className="absolute inset-0 mix-blend-screen opacity-20"
        style={{
          background:
            "radial-gradient(600px at 50% 60%, rgba(255,255,255,0.15), transparent)",
          filter: "blur(80px)",
        }}
      />

      {/* NEON GRID */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(transparent 23px, rgba(0,255,255,0.08) 24px), linear-gradient(90deg, transparent 23px, rgba(0,255,255,0.08) 24px)",
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
}
