import SectionHeading from "./SectionHeading";
import ContactLink from "./ContactLink";

function ContactSection() {
  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Contact" subtitle="Say hi." />
      <ul className="mt-8 space-y-3">
        <ContactLink label="Email" href="mailto:miguelcarlos.sibi@cit.edu" text="miguelcarlos.sibi@cit.edu" />
        <ContactLink label="GitHub" href="https://github.com/MiguelCarlosSibi" text="github.com/MiguelCarlosSibi" />
        <ContactLink label="LinkedIn" href="https://linkedin.com/in/MiguelCarlosSibi" text="linkedin.com/in/MiguelCarlosSibi" />
      </ul>
    </section>
  );
}

export default ContactSection;
