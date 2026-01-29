import { useEffect, useRef, useState } from "react";

export default function useIntersectionObserver() {
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

  return {
    isImageVisible,
    isTextVisible,
    imageRef,
    textRef,
  };
}
