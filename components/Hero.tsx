interface HeroProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  compact?: boolean;
}

export default function Hero({ title, subtitle, ctaText, ctaHref, compact }: HeroProps) {
  return (
    <section
      className={`relative overflow-hidden flex items-center justify-center text-center ${
        compact ? "h-[220px] md:h-[300px]" : "h-[400px] md:h-[550px]"
      }`}
      style={{
        background: "linear-gradient(135deg, #1a2332 0%, #243044 25%, #3d7a76 50%, #5ea8a3 75%, #4d918c 100%)",
        backgroundSize: "300% 300%",
        animation: "gradient-shift 8s ease infinite",
      }}
    >
      {/* Floating decorative circles */}
      <div
        className="absolute w-64 h-64 rounded-full opacity-10 bg-white"
        style={{ top: "10%", left: "5%", animation: "float 6s ease-in-out infinite" }}
      />
      <div
        className="absolute w-40 h-40 rounded-full opacity-10 bg-white"
        style={{ top: "60%", right: "10%", animation: "float 8s ease-in-out infinite 1s" }}
      />
      <div
        className="absolute w-24 h-24 rounded-full opacity-10 bg-white"
        style={{ bottom: "20%", left: "20%", animation: "float 7s ease-in-out infinite 2s" }}
      />
      <div
        className="absolute w-32 h-32 rounded-full opacity-5 bg-white"
        style={{ top: "15%", right: "25%", animation: "float 9s ease-in-out infinite 0.5s" }}
      />

      <div className="relative z-10 px-6 max-w-4xl">
        <h1
          className={`font-[family-name:var(--font-arizonia)] text-white drop-shadow-lg ${
            compact ? "text-4xl md:text-6xl" : "text-5xl md:text-7xl lg:text-8xl"
          }`}
        >
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 md:mt-6 text-white/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        )}
        {ctaText && ctaHref && (
          <a
            href={ctaHref}
            className="inline-block mt-8 bg-gold hover:bg-gold-dark text-white font-semibold uppercase tracking-wider text-sm px-10 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            {ctaText}
          </a>
        )}
      </div>

      {/* Bottom wave */}
      <svg
        className="absolute bottom-0 left-0 w-full"
        viewBox="0 0 1440 80"
        fill="none"
        preserveAspectRatio="none"
        style={{ height: "60px" }}
      >
        <path
          d="M0,40 C360,80 720,0 1080,40 C1260,60 1380,50 1440,40 L1440,80 L0,80 Z"
          fill="white"
        />
      </svg>
    </section>
  );
}
