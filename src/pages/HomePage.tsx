import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutmeSection from "../components/AboutmeSection";
import ContactSection from "../components/ContactSection";
import HomeSection from "../components/HomeSection";
import OfferSection from "../components/OfferSection";
import RealisationSection from "../components/RealisationSection";

export default function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <>
      <HomeSection />
      <AboutmeSection />
      <OfferSection />
      <RealisationSection />
      <ContactSection />
    </>
  );
}
