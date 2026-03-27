import heroImage from "@/assets/hero-warehouse.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <img
        src={heroImage}
        alt="Modern warehouse with algae-filled photobioreactor facade panels"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32">
        <div className="max-w-2xl">
          <p className="text-sm font-body font-medium tracking-widest uppercase text-primary mb-4 animate-fade-in-up">
            Architectural Technology
          </p>
          <h1 className="font-heading text-5xl md:text-7xl font-extralight leading-[1.1] text-foreground mb-6 animate-fade-in-up animation-delay-200">
            Buildings<br />that <span className="font-light text-primary">Breathe.</span>
          </h1>
          <p className="text-lg font-body text-muted-foreground leading-relaxed max-w-lg mb-10 animate-fade-in-up animation-delay-400">
            Transform static warehouses into living carbon sinks. BioEnvelope integrates
            photobioreactor facades with intelligent software to sequester CO₂ at rates
            10–50× higher than trees.
          </p>
          <div className="flex gap-4 animate-fade-in-up animation-delay-600">
            <a
              href="#roi"
              className="inline-flex items-center px-8 py-3.5 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Calculate Your Impact
            </a>
            <a
              href="#science"
              className="inline-flex items-center px-8 py-3.5 text-sm font-medium rounded-full border border-border text-foreground hover:bg-muted transition-colors"
            >
              The Science
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
