import { useEffect, useState } from "react";
import { Activity, Thermometer, Droplets } from "lucide-react";

const useAnimatedNumber = (target: number, duration = 2000) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const start = performance.now();
    const animate = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [target, duration]);
  return value;
};

const CircularProgress = ({ percent, label }: { percent: number; label: string }) => {
  const r = 40;
  const circ = 2 * Math.PI * r;
  const offset = circ - (percent / 100) * circ;

  return (
    <div className="flex flex-col items-center gap-2">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r={r} fill="none" stroke="hsl(var(--border))" strokeWidth="6" />
        <circle
          cx="50" cy="50" r={r} fill="none"
          stroke="hsl(var(--primary))"
          strokeWidth="6" strokeLinecap="round"
          strokeDasharray={circ} strokeDashoffset={offset}
          transform="rotate(-90 50 50)"
          className="transition-all duration-1000 ease-out"
        />
        <text x="50" y="50" textAnchor="middle" dominantBaseline="central"
          className="fill-foreground text-lg font-heading font-light"
        >
          {percent}%
        </text>
      </svg>
      <span className="text-xs text-muted-foreground font-body">{label}</span>
    </div>
  );
};

const LiveDataCards = () => {
  const co2Value = useAnimatedNumber(4287);
  const deltaValue = useAnimatedNumber(12);

  return (
    <section id="data" className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-body font-medium tracking-widest uppercase text-primary mb-3">
          Real-Time Monitoring
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-extralight text-foreground mb-12">
          Live Facility Data
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* CO2 Absorption */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Activity className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-body text-muted-foreground">CO₂ Absorption</span>
            </div>
            <div className="font-heading text-5xl font-extralight text-foreground mb-1">
              {co2Value.toLocaleString()}
            </div>
            <p className="text-sm text-muted-foreground font-body">kg CO₂ sequestered today</p>
          </div>

          {/* Thermal Delta */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Thermometer className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-body text-muted-foreground">Thermal Delta</span>
            </div>
            <div className="font-heading text-5xl font-extralight text-foreground mb-1">
              –{deltaValue}°C
            </div>
            <p className="text-sm text-muted-foreground font-body">Buffer effect vs. ambient</p>
          </div>

          {/* Nutrient Levels */}
          <div className="glass-card p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Droplets className="w-5 h-5 text-primary" />
              </div>
              <span className="text-sm font-body text-muted-foreground">Nutrient Levels</span>
            </div>
            <div className="flex items-center gap-6 mt-2">
              <CircularProgress percent={78} label="Nitrogen" />
              <CircularProgress percent={92} label="Phosphorus" />
              <CircularProgress percent={65} label="pH Balance" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveDataCards;
