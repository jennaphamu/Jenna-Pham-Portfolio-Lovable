const AboutSection = () => {
  const expertise = [
    "Data Analysis & Visualization",
    "Machine Learning in Healthcare",
    "Clinical Informatics",
    "Full-Stack Development",
    "Biostatistics",
    "Research Methodology",
  ];

  return (
    <section id="about" className="px-5 md:px-20 py-12 md:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Photo */}
          <div className="bg-vibrant-yellow rounded-[var(--radius)] border-2 border-foreground overflow-hidden aspect-[3/4]">
            <img
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&h=800&fit=crop"
              alt="Profile photo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Bio */}
          <div>
            <h2 className="heading-lg mb-6">ABOUT ME</h2>
            <div className="space-y-4 font-serif text-foreground/80 leading-relaxed text-base md:text-lg">
              <p>
                I'm a researcher and technologist with a background in data
                science and health informatics. My work focuses on building
                computational tools that help clinicians and researchers make
                better decisions.
              </p>
              <p>
                Currently based at [Your Institution], I lead projects that
                bridge the gap between raw clinical data and actionable medical
                insights. I'm passionate about open-source software, reproducible
                research, and making healthcare more equitable through technology.
              </p>
            </div>

            <div className="mt-8">
              <h3 className="nav-text mb-4">EXPERTISE</h3>
              <div className="flex flex-wrap gap-2">
                {expertise.map((skill) => (
                  <span
                    key={skill}
                    className="btn-transparent text-xs py-2 px-4 pointer-events-none"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
