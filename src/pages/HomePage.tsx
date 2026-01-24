import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutmeSection from "../components/sections/AboutmeSection";
import ContactSection from "../components/sections/ContactSection";
import HomeSection from "../components/sections/HomeSection";
import OfferSection from "../components/sections/OfferSection";
import RealisationSection from "../components/sections/RealisationSection";

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
