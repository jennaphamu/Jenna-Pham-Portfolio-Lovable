import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 md:pt-36">
        <HeroSection />
        <ProjectsSection />
        <div className="divider mx-6 md:mx-12 lg:mx-20 max-w-5xl lg:mx-auto" />
        <AboutSection />
        <div className="divider mx-6 md:mx-12 lg:mx-20 max-w-5xl lg:mx-auto" />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
