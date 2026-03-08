const HeroSection = () => {
  return (
    <section className="px-5 md:px-20 pt-16 md:pt-24 pb-12 md:pb-16">
      <div className="max-w-5xl mx-auto">
        <p className="nav-text text-foreground/60 mb-4">
          ACADEMIC · TECHNOLOGIST · DATA SCIENTIST
        </p>
        <h1 className="text-5xl md:text-[100px] font-extrabold uppercase leading-[0.85] tracking-[-2px] mb-8">
          YOUR
          <br />
          NAME
          <br />
          HERE
        </h1>
        <p className="text-lg md:text-xl leading-relaxed text-foreground/80 max-w-2xl font-serif">
          I work at the intersection of technology, data science, and medicine —
          building tools that turn complex health data into actionable insights
          and better patient outcomes.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
