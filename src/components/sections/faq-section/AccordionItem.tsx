import { useState } from "react";

interface AccordionItemProps {
  accordionQuestion: string;
  accordionAnswer: string;
}

export default function AccordionItem({
  accordionQuestion,
  accordionAnswer,
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="accordion mt-[2em] mx-[1em] pb-[1em] max-w-175 border-b-2 border-custom-darkBlue cursor-pointer">
      <div className="accordion-question flex justify-between items-center transition-colors duration-300">
        <h3
          onClick={handleClick}
          className={`text-lg font-semibold w-[85%] cursor-pointer transition-colors duration-300 ${isOpen ? "text-custom-darkBlue" : ""}`}
        >
          {accordionQuestion}
        </h3>
        <button
          className="cursor-pointer"
          onClick={handleClick}
          aria-expanded={isOpen}
          aria-label={
            isOpen
              ? "Zamknij pole z odpowiedzią na pytanie"
              : "Otwórz pole z odpowiedzią na pytanie"
          }
        >
          <svg
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`accordion-icon transition-all duration-300 ease-in ${isOpen ? "text-custom-darkBlue rotate-180" : ""}`}
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 9l6 6l6 -6" />
          </svg>
        </button>
      </div>
      <div
        onClick={handleClick}
        className={`accordion-answer overflow-hidden transition-all duration-500 ease-in-out bg-custom-light ${isOpen ? "max-h-112.5 animate-custom-fade" : "max-h-0"}`}
      >
        <p className="p-[1em] ">{accordionAnswer}</p>
      </div>
    </div>
  );
}
