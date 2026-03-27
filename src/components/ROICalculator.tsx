import { useState } from "react";
import { Calculator, Leaf, Zap, Award } from "lucide-react";

const ROICalculator = () => {
  const [sqft, setSqft] = useState(100000);

  const sqm = sqft * 0.0929;
  const annualCO2 = Math.round(sqm * 12); // ~12 kg CO2/m²/year
  const carbonCredits = Math.round(annualCO2 * 0.05); // $50/tonne
  const hvacSavings = Math.round(sqft * 0.45); // ~$0.45/sqft savings
  const taxIncentive = Math.round(sqft * 0.15);

  return (
    <section id="roi" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-body font-medium tracking-widest uppercase text-primary mb-3">
          Financial Impact
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-extralight text-foreground mb-12">
          ROI Calculator
        </h2>

        <div className="glass-card p-8 md:p-12 max-w-4xl">
          <div className="mb-10">
            <label className="text-sm font-body text-muted-foreground mb-3 block">
              Warehouse Square Footage
            </label>
            <input
              type="range"
              min={10000}
              max={2000000}
              step={10000}
              value={sqft}
              onChange={(e) => setSqft(Number(e.target.value))}
              className="w-full h-1.5 bg-border rounded-full appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between mt-2 text-xs text-muted-foreground font-body">
              <span>10,000 ft²</span>
              <span className="text-lg font-heading font-light text-foreground">
                {sqft.toLocaleString()} ft²
              </span>
              <span>2,000,000 ft²</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="rounded-xl bg-muted p-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Leaf className="w-4 h-4 text-primary" />
              </div>
              <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-1">
                Carbon Credits
              </p>
              <div className="font-heading text-3xl font-extralight text-foreground">
                ${carbonCredits.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground font-body mt-1">
                {annualCO2.toLocaleString()} kg CO₂/year
              </p>
            </div>

            <div className="rounded-xl bg-muted p-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="w-4 h-4 text-primary" />
              </div>
              <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-1">
                HVAC Savings
              </p>
              <div className="font-heading text-3xl font-extralight text-foreground">
                ${hvacSavings.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground font-body mt-1">
                15–25% cooling reduction
              </p>
            </div>

            <div className="rounded-xl bg-muted p-6">
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Award className="w-4 h-4 text-primary" />
              </div>
              <p className="text-xs text-muted-foreground font-body uppercase tracking-wider mb-1">
                Tax Incentives
              </p>
              <div className="font-heading text-3xl font-extralight text-foreground">
                ${taxIncentive.toLocaleString()}
              </div>
              <p className="text-xs text-muted-foreground font-body mt-1">
                Green wall/roof credits
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;
