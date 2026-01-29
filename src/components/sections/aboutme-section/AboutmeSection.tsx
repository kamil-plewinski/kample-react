import { useEffect, useRef, useState } from "react";
import AboutmeContent from "./AboutmeContent";

export default function AboutmeSection() {
  const [isImageVisible, setIsImageVisible] = useState<boolean>(false);
  const [isTextVisible, setIsTextVisible] = useState<boolean>(false);

  const imageRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentImageElement = imageRef.current;
    const currentTextElement = textRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === currentImageElement) setIsImageVisible(true);
            if (entry.target === currentTextElement) setIsTextVisible(true);
          }
        });
      },
      { threshold: 0.5 },
    );

    if (currentImageElement) {
      observer.observe(currentImageElement as Element);
    }
    if (currentTextElement) {
      observer.observe(currentTextElement as Element);
    }

    return () => {
      if (currentImageElement)
        observer.unobserve(currentImageElement as Element);
      if (currentTextElement) observer.unobserve(currentTextElement as Element);
    };
  }, []);

  return (
    <section id="aboutme" className="py-[5em] bg-white">
      <div className="wrapper relative overflow-hidden">
        <h2 className="title pb-[1em] px-[.5em] text-left text-3xl font-semibold text-custom-darkBlue uppercase">
          Twoja wizja, moje umiejętności
        </h2>
        <AboutmeContent />
        <div className="decor-icon absolute top-[70%] translate-y-[-50%] right-0 w-112.5 rotate-20 sm:w-137.5 md:w-162.5 md:top-[65%] lg:w-175 lg:top-[50%] xl:w-200">
          <svg viewBox="0 0 640 512" className="opacity-5 z-0" fill="#0D99FF">
            <path d="M278.9 511.5l-61-17.7c-6.4-1.8-10-8.5-8.2-14.9L346.2 8.7c1.8-6.4 8.5-10 14.9-8.2l61 17.7c6.4 1.8 10 8.5 8.2 14.9L293.8 503.3c-1.9 6.4-8.5 10.1-14.9 8.2zm-114-112.2l43.5-46.4c4.6-4.9 4.3-12.7-.8-17.2L117 256l90.6-79.7c5.1-4.5 5.5-12.3 .8-17.2l-43.5-46.4c-4.5-4.8-12.1-5.1-17-.5L3.8 247.2c-5.1 4.7-5.1 12.8 0 17.5l144.1 135.1c4.9 4.6 12.5 4.4 17-.5zm327.2 .6l144.1-135.1c5.1-4.7 5.1-12.8 0-17.5L492.1 112.1c-4.8-4.5-12.4-4.3-17 .5L431.6 159c-4.6 4.9-4.3 12.7 .8 17.2L523 256l-90.6 79.7c-5.1 4.5-5.5 12.3-.8 17.2l43.5 46.4c4.5 4.9 12.1 5.1 17 .6z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
