import classNames from "classnames";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  variant: "dark" | "light";
}

export default function CtaButton({
  children,
  className,
  variant,
}: ButtonProps) {
  const classes = classNames(
    `cta-btn rounded-[50px]  px-[1.5em] py-[.75em] font-semibold text-lg text-white uppercase tracking-wide xl:text-xl ${className}`,
    {
      "bg-custom-darkBlue hover:bg-custom-blue": variant === "dark",
      "bg-custom-blue hover:bg-custom-darkBlue shadow-[2px_3px_6px_rgba(0,102,183,0.9)]":
        variant === "light",
    },
  );

  const handleScroll = () => {
    const contactSection = document.getElementById("contact");

    contactSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button onClick={handleScroll} className={classes}>
      {children}
    </button>
  );
}
