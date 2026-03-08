import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectCard from "@/components/ProjectCard";
import ContactSection from "@/components/ContactSection";
import { projects } from "@/data/projects";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        <HeroSection />
        <AboutSection />

        {/* Projects */}
        <section id="projects" className="px-5 md:px-20 py-12 md:py-20">
          <div className="max-w-5xl mx-auto">
            <h2 className="heading-lg mb-10">SELECTED WORK</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {projects.map((project) => (
                <ProjectCard key={project.id} {...project} />
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
