
import Footer from "../components/Footer";
import HeroHead from "../components/HeroHead";


export default function Pricing() {
 
  return (
    <div className="dark">
      {/* Header */}
      <HeroHead text={"Pricing"} />

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12 px-4">
        Pricing
      </div>
      
      <Footer />
    </div>
  );
}