interface OfferItemProps {
  offerTitle: string;
  offerText: string;
  offerIcon: React.ReactNode;
}

export default function OfferSectionItem({
  offerTitle,
  offerText,
  offerIcon,
}: OfferItemProps) {
  return (
    <div className="mb-[1em] max-w-[320px] bg-transparent">
      <div className="flex items-center">
        <div className="text-custom-darkBlue">{offerIcon}</div>
        <p className="ml-[1em] text-xl font-semibold">{offerTitle}</p>
      </div>
      <p className="mt-[1em] text-lg">{offerText}</p>
    </div>
  );
}
