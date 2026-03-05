interface HeroProps {
  title: string;
}

export default function Hero({ title }: HeroProps) {
  return (
    <section className="h-[300px] md:h-[450px] bg-gradient-to-br from-teal to-teal-deeper flex items-center justify-center text-center">
      <h1 className="font-[family-name:var(--font-arizonia)] text-4xl md:text-6xl text-white drop-shadow-lg px-6">
        {title}
      </h1>
    </section>
  );
}
