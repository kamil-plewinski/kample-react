export default function HomeHeroImg() {
  return (
    <div className="relative">
      <picture className="main-hero-img h-screen w-full">
        <source
          srcSet="/img/pen-4337521_1280-small.webp"
          media="(max-width: 767px)"
          type="image/webp"
        />
        <source
          srcSet="/img/pen-4337521_1280-small.jpg"
          media="(max-width: 767px)"
          type="image/jpeg"
        />
        <source
          srcSet="/img/pen-4337521_1920-big.webp"
          media="(min-width: 768px)"
          type="image/jpeg"
        />
        <source
          srcSet="/img/pen-4337521_1920-big.jpg"
          media="(min-width: 768px)"
          type="image/webp"
        />
        <img
          className="h-screen w-full object-center object-cover"
          src="/img/pen-4337521_1920-big.jpg"
          alt="laptop, notes i telefon na biurku"
        />
      </picture>
      <div
        className="absolute top-0
         bg-[rgba(0,0,0,.3)] w-full h-full"
      ></div>
    </div>
  );
}
