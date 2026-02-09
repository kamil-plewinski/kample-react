import { Helmet } from "react-helmet-async";
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
      <Helmet>
        <title>KamPle - Profesjonalne strony internetowe</title>
        <link rel="canonical" href="https://kample.pl/"/>
        <meta
          name="description"
          content="Szukasz profesjonalnej strony internetowej? Stworzę dla Ciebie nowoczesną witrynę, która przyciągnie nowych klientów i wyróżni Cię na rynku."
        />
        <meta
          name="google-site-verification"
          content="TLEisAYJalGtQDShTOHctm8FkGXdEST-kMjaE3FU5rI"
        />
        <meta
          property="og:title"
          content="KamPle - Profesjonalne strony internetowe"
        />
        <meta
          property="og:description"
          content="Szukasz profesjonalnej strony internetowej? Stworzę dla Ciebie nowoczesną witrynę, która przyciągnie nowych klientów i wyróżni Cię na rynku."
        />
        <meta
          property="og:image"
          content="https://kample.pl/img/opengraph-photo.png"
        />
        <meta property="og:url" content="https://kample.pl" />
        <meta property="og:type" content="website" />
        
      </Helmet>
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
