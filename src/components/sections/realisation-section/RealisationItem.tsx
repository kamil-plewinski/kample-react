interface RealisationItemProps {
  linkTo: string;
  srcWebp: string;
  srcJpg: string;
  alt: string;
  title: string;
  subtitle?: string;
}

export default function RealisationItem({
  linkTo,
  srcWebp,
  srcJpg,
  alt,
  title,
  subtitle,
}: RealisationItemProps) {
  return (
    <a
      href={linkTo}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-block mb-[4em]"
    >
      <div className="realisation-item relative w-full max-w-100 bg-white rounded-xl shadow-[0px_2px_6px_0px_rgba(0,0,0,.5)] overflow-hidden">
        <picture className="img">
          <source srcSet={srcWebp} type="image/webp" />
          <source srcSet={srcJpg} type="image/jpeg" />
          <img src={srcJpg} alt={alt} loading="lazy" />
        </picture>
        <div className="shadow absolute top-0 w-full h-full bg-linear-to-tl from-[rgba(0,102,183,.7)] to-[rgba(0,45,81,.4)] hover:bg-[rgba(0,102,183,.2)] transition-all duration-300 text-white">
          <div className="text-container absolute bottom-[20%] pl-[1em]">
            <p className="realisation-title mb-[1em] text-3xl font-semibold uppercase tracking-wide drop-shadow-md">
              {title}
            </p>
            <p className="realisation-subtitle mt-[2em] text-xl drop-shadow-md">
              {subtitle}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
}
