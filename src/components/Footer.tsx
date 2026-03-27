import { Leaf } from "lucide-react";

const Footer = () => (
  <footer className="section-padding bg-muted/50 border-t border-border">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-center gap-2">
        <Leaf className="h-5 w-5 text-primary" />
        <span className="font-heading text-sm font-light text-foreground">BioEnvelope</span>
      </div>
      <p className="text-xs text-muted-foreground font-body">
        © {new Date().getFullYear()} BioEnvelope Technologies. Buildings that breathe.
      </p>
    </div>
  </footer>
);

export default Footer;
