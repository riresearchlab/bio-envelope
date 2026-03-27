import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LiveDataCards from "@/components/LiveDataCards";
import ScienceSection from "@/components/ScienceSection";
import ThermalDashboard from "@/components/ThermalDashboard";
import ROICalculator from "@/components/ROICalculator";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <HeroSection />
    <LiveDataCards />
    <ScienceSection />
    <ThermalDashboard />
    <ROICalculator />
    <Footer />
  </div>
);

export default Index;
