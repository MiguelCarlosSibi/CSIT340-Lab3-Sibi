import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

function ProjectsSection() {
  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-16 border-t border-stone-200 scroll-mt-16">
      <SectionHeading title="Projects" subtitle="Things I have built." />
      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <ProjectCard
          year="2026"
          title="About Me in React"
          description="My first React project, rebuilt from a plain HTML page."
          tech="React · Tailwind CSS"
          link="https://github.com/MiguelCarlosSibi/CSIT340-Lab1-Sibi.git"
        />
        <ProjectCard
          year="2025"
          title="SubmitNow"
          description="A group capstone web app for tracking courses and assignments, built with a layered Spring Boot backend and a Figma-designed UI."
          tech="Spring Boot · React · MySQL/MariaDB"
          link="https://github.com/MiguelCarlosSibi/CSIT321-APPDEV-SUBMITNOW.git"
        />
        <ProjectCard
          year="2025"
          title="StudySync"
          description="An app that lets students study together with friends or groupmates, whether that's sharing notes, syncing schedules, or working through material as a group."
          tech="React · Spring Boot · MySQL"
          link="https://github.com/MiguelCarlosSibi/StudySync.git"
        />
        <ProjectCard
          year="2024"
          title="order-inventory-integration"
          description="A modular-monolith Spring Boot app with Order, Inventory, and Notification modules; supports multi-item orders with all-or-nothing rollback and event-driven low-stock alerts."
          tech="Spring Boot · React · PostgreSQL (Supabase)"
          link="https://github.com/MiguelCarlosSibi/order-inventory-integration.git"
        />
      </div>
    </section>
  );
}

export default ProjectsSection;
