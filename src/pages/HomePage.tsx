import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import AboutmeSection from "../components/sections/aboutme-section/AboutmeSection";
import ContactSection from "../components/sections/contact-section/ContactSection";
import HomeSection from "../components/sections/home-section/HomeSection";
import OfferSection from "../components/sections/offer-section/OfferSection";
import RealisationSection from "../components/sections/realisation-section/RealisationSection";
import PriceSection from "../components/sections/price-section/PriceSection";
import FaqSection from "../components/sections/faq-section/FaqSection";

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
      <PriceSection />
      <RealisationSection />
      <ContactSection />
      <FaqSection />
    </>
  );
}
