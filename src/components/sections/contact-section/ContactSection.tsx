import ContactContent from "./ContactContent";
import ContactImg from "./ContactImg";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-custom-dark pb-[3em] text-white lg:pb-0"
    >
      <div className="flex flex-col justify-between items-center lg:flex-row">
        <ContactImg />
        <ContactContent />
      </div>
    </section>
  );
}
