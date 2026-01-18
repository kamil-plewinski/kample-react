import AboutmeSection from "../components/AboutmeSection";
import ContactSection from "../components/ContactSection";
import HomeSection from "../components/HomeSection";
import OfferSection from "../components/OfferSection";
import RealisationSection from "../components/RealisationSection";

export default function HomePage() {
  return (
    <div>
      <h1 className="bg-blue-400">Home Page</h1>
      <HomeSection />
      <AboutmeSection />
      <OfferSection />
      <RealisationSection />
      <ContactSection />
    </div>
  );
}
