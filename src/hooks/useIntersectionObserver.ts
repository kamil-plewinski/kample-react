import { useEffect, useRef, useState } from "react";

export default function useIntersectionObserver() {
  const [isImageVisible, setIsImageVisible] = useState<boolean>(false);
  const [isTextVisible, setIsTextVisible] = useState<boolean>(false);
  const [isCardVisible, setIsCardVisible] = useState<boolean>(false);

  const imageRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentImageElement = imageRef.current;
    const currentTextElement = textRef.current;
    const currentCardElement = cardRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === currentImageElement) setIsImageVisible(true);
            if (entry.target === currentTextElement) setIsTextVisible(true);
            if (entry.target === currentCardElement) setIsCardVisible(true);
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
    if (currentCardElement) {
      observer.observe(currentCardElement as Element);
    }

    return () => {
      if (currentImageElement) {
        observer.unobserve(currentImageElement as Element);
      }

      if (currentTextElement) {
        observer.unobserve(currentTextElement as Element);
      }
      if (currentCardElement) {
        observer.unobserve(currentCardElement as Element);
      }
    };
  }, []);

  return {
    isImageVisible,
    isTextVisible,
    isCardVisible,
    imageRef,
    textRef,
    cardRef,
  };
}
