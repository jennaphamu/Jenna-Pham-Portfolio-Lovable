import { ArrowUpRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          <div>
            <p className="section-header">currently</p>
          </div>

          <div className="space-y-8">
            {[
              {
                number: "01",
                text: "designing websites, landing pages, and digital brand experiences for startups and creative agencies — turning ideas into polished, pixel-perfect interfaces.",
              },
              {
                number: "02",
                text: "crafting design systems and component libraries that scale — making it easy for dev teams to build consistent, beautiful products without reinventing the wheel.",
              },
              {
                number: "03",
                text: "exploring motion design and micro-interactions, creating moments of delight that make digital products feel alive and responsive.",
              },
              {
                number: "04",
                text: "sharing process and thinking through occasional case studies. always learning, always iterating.",
              },
            ].map((item) => (
              <div key={item.number} className="flex gap-6">
                <span className="section-number shrink-0 pt-0.5">
                  {item.number}
                </span>
                <p className="text-base md:text-lg leading-relaxed text-foreground/80">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="divider my-16" />

        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          <div>
            <p className="section-header">background</p>
          </div>

          <div className="space-y-6">
            {[
              {
                number: "01",
                text: "studied visual communication and interaction design. fell in love with the space where aesthetics meets usability.",
              },
              {
                number: "02",
                text: "previously designed digital products at [Agency / Company] — shipped web experiences for brands in fintech, e-commerce, and media.",
              },
              {
                number: "03",
                text: "freelanced for 2+ years, working with clients from early-stage startups to established brands, delivering everything from landing pages to full design systems.",
              },
              {
                number: "04",
                text: "tools of choice: Figma, Framer, After Effects, and a healthy obsession with typography and spacing.",
              },
            ].map((item) => (
              <div key={item.number} className="flex gap-6">
                <span className="section-number shrink-0 pt-0.5">
                  {item.number}
                </span>
                <p className="text-base md:text-lg leading-relaxed text-foreground/80">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
