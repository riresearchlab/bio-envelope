import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { time: "06:00", outside: 28, inside: 22 },
  { time: "08:00", outside: 31, inside: 23 },
  { time: "10:00", outside: 35, inside: 24 },
  { time: "12:00", outside: 40, inside: 26 },
  { time: "14:00", outside: 42, inside: 27 },
  { time: "16:00", outside: 39, inside: 26 },
  { time: "18:00", outside: 34, inside: 24 },
  { time: "20:00", outside: 29, inside: 23 },
];

const ThermalDashboard = () => {
  const currentDelta = 42 - 27;

  return (
    <section id="thermal" className="section-padding bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <p className="text-sm font-body font-medium tracking-widest uppercase text-primary mb-3">
          Thermal Performance
        </p>
        <h2 className="font-heading text-3xl md:text-4xl font-extralight text-foreground mb-12">
          The Buffer Effect
        </h2>

        <div className="glass-card p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <p className="text-sm text-muted-foreground font-body mb-1">Current Delta</p>
              <div className="font-heading text-6xl font-extralight text-primary">
                –{currentDelta}°C
              </div>
              <p className="text-sm text-muted-foreground font-body mt-1">
                cooler behind the bio-facade
              </p>
            </div>
            <div className="flex items-center gap-6 text-sm font-body text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="w-4 h-0.5 bg-muted-foreground/40 block" style={{ borderTop: '2px dashed' }} />
                Outside Temp
              </div>
              <div className="flex items-center gap-2">
                <span className="w-4 h-0.5 bg-primary block rounded" />
                Inside Temp
              </div>
            </div>
          </div>

          <ResponsiveContainer width="100%" height={320}>
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(214 20% 92%)" />
              <XAxis
                dataKey="time"
                tick={{ fontSize: 12, fill: "hsl(215 16% 47%)" }}
                axisLine={{ stroke: "hsl(214 20% 92%)" }}
                tickLine={false}
              />
              <YAxis
                tick={{ fontSize: 12, fill: "hsl(215 16% 47%)" }}
                axisLine={false}
                tickLine={false}
                unit="°C"
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(0 0% 100%)",
                  border: "1px solid hsl(214 20% 92%)",
                  borderRadius: "0.75rem",
                  fontSize: "13px",
                }}
              />
              <Line
                type="monotone"
                dataKey="outside"
                stroke="hsl(215 16% 75%)"
                strokeDasharray="6 4"
                strokeWidth={2}
                dot={false}
                name="Outside"
              />
              <Line
                type="monotone"
                dataKey="inside"
                stroke="hsl(160 84% 39%)"
                strokeWidth={2.5}
                dot={false}
                name="Inside"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default ThermalDashboard;
