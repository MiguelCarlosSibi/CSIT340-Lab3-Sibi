import SectionHeading from "./SectionHeading";
import TimelineItem from "./TimelineItem";

function ExperienceSection() {
  return (
    <section id="experience" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Experience" subtitle="Where I have learned and worked." />
      <ol className="mt-8 space-y-8 border-l border-stone-200">
        <TimelineItem
          period="2024 – Present"
          title="BS Information Technology"
          place="Cebu Institute of Technology – University"
          description="Taking up web development, databases, and systems analysis."
        />
       
        <TimelineItem
          period="2019-2021"
          title="Senior High School, GAS strand"
          place="University of Cebu – Cebu City"
          description="Built my first web page and got hooked."
        />
        <TimelineItem
          period="2014-2018"
          title="Junior High School"
          place="Fomation School and Kiddies Learning Center"
          description="Learned the basics of programming and computer science."
        />
      </ol>
    </section>
  );
}

export default ExperienceSection;
