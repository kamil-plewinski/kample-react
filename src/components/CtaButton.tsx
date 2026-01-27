import classNames from "classnames";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  variant: "dark" | "light";
};

export default function CtaButton({
  children,
  className,
  variant,
}: ButtonProps) {
  const classes = classNames(
    `cta-btn rounded-[50px]  px-[1.5em] py-[.75em] font-semibold text-lg text-white uppercase xl:text-xl ${className}`,
    {
      "bg-custom-darkBlue hover:bg-custom-blue": variant === "dark",
      "bg-custom-blue hover:bg-custom-darkBlue": variant === "light",
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
