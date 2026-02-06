export default function ContactImg() {
  return (
    <div className="w-full lg:w-[50%]">
      <picture>
        <source srcSet="./img/hands-1851218_1280.webp" type="image/webp" />
        <source srcSet="./img/hands-1851218_1280.jpg" type="image/jpeg" />
        <img
          src="./img/hands-1851218_1280.jpg"
          className="w-full h-100 object-center object-cover md:h-125 xl:h-150"
          alt="Smartphone w dłoniach"
        />
      </picture>
    </div>
  );
}
