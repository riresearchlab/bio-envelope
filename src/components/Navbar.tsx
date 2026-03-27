import { Leaf } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Leaf className="h-6 w-6 text-primary" />
          <span className="font-heading text-lg font-light tracking-wide text-foreground">
            BioEnvelope
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-body text-muted-foreground">
          <a href="#data" className="hover:text-foreground transition-colors">Live Data</a>
          <a href="#science" className="hover:text-foreground transition-colors">The Science</a>
          <a href="#thermal" className="hover:text-foreground transition-colors">Performance</a>
          <a href="#roi" className="hover:text-foreground transition-colors">ROI Calculator</a>
        </div>
        <a
          href="#roi"
          className="hidden md:inline-flex items-center px-5 py-2 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
        >
          Get Started
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
