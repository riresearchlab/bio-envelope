import iconPhotosynthesis from "@/assets/icon-photosynthesis.png";
import iconCarbonFixation from "@/assets/icon-carbon-fixation.png";
import iconHarvesting from "@/assets/icon-harvesting.png";

const steps = [
  {
    number: "01",
    title: "Photosynthesis",
    description:
      "Microalgae within the facade panels absorb sunlight and CO₂ from the surrounding atmosphere, converting solar energy into chemical energy through photosynthesis—just like trees, but at 10–50× the rate.",
    icon: iconPhotosynthesis,
  },
  {
    number: "02",
    title: "Carbon Fixation",
    description:
      "Through the Calvin cycle, absorbed CO₂ is fixed into organic carbon compounds. Our optical density sensors and Monod-equation modeling ensure the culture stays in its exponential growth phase for peak carbon absorption.",
    icon: iconCarbonFixation,
  },
  {
    number: "03",
    title: "Biomass Harvesting",
    description:
      "When algae density reaches optimal levels, the Automated Nutrient Delivery System redirects biomass to collection tanks. The harvested algae is processed into bio-fertilizer, biofuel, or animal feed—closing the carbon loop.",
    icon: iconHarvesting,
  },
];

const ScienceSection = () => {
  return (
    <section id="science" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-body font-medium tracking-widest uppercase text-primary mb-3">
          How It Works
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-extralight text-foreground mb-16">
          The Science of Algae Carbon Capture
        </h2>

        <div className="space-y-16">
          {steps.map((step, i) => (
            <div
              key={step.number}
              className={`flex flex-col md:flex-row items-start gap-8 md:gap-16 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="flex-shrink-0 w-32 h-32 rounded-2xl bg-muted flex items-center justify-center">
                <img
                  src={step.icon}
                  alt={step.title}
                  className="w-20 h-20 object-contain"
                  loading="lazy"
                  width={512}
                  height={512}
                />
              </div>
              <div className="flex-1">
                <span className="text-xs font-body font-medium tracking-widest text-primary uppercase">
                  Step {step.number}
                </span>
                <h3 className="font-heading text-2xl font-light text-foreground mt-2 mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed max-w-xl">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
