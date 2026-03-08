import { ArrowUpRight } from "lucide-react";

interface CurrentItem {
  number: string;
  text: string;
  links?: { label: string; href: string }[];
}

const currentItems: CurrentItem[] = [
  {
    number: "01",
    text: "researching applied machine learning in clinical settings, developing predictive models for patient risk stratification and early intervention.",
    links: [
      { label: "Your Lab", href: "#" },
      { label: "Your Institution", href: "#" },
    ],
  },
  {
    number: "02",
    text: "building open-source tools for health data analysis — making complex biostatistics accessible to clinicians and researchers without deep technical backgrounds.",
  },
  {
    number: "03",
    text: "teaching a graduate seminar on computational methods in medicine. previously lectured on data visualization for health outcomes.",
  },
  {
    number: "04",
    text: "sometimes i write about the gap between what technology promises for healthcare and what it actually delivers. working on a longer piece about AI in diagnostics.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          <div>
            <p className="section-header">currently</p>
          </div>

          <div className="space-y-8">
            {currentItems.map((item) => (
              <div key={item.number} className="flex gap-6">
                <span className="section-number shrink-0 pt-0.5">
                  {item.number}
                </span>
                <p className="text-base md:text-lg leading-relaxed text-foreground/80">
                  {item.text}
                  {item.links?.map((link, i) => (
                    <span key={link.label}>
                      {" "}
                      {i > 0 && " and "}
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-arrow inline-flex items-baseline gap-0.5 font-medium text-foreground"
                      >
                        {link.label}
                        <ArrowUpRight className="w-3 h-3 inline" />
                      </a>
                    </span>
                  ))}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="divider my-16" />

        {/* Past */}
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          <div>
            <p className="section-header">background</p>
          </div>

          <div className="space-y-6">
            {[
              {
                number: "01",
                text: "PhD in Biomedical Informatics — developed novel approaches to clinical text mining and structured data extraction from electronic health records.",
              },
              {
                number: "02",
                text: "previously led data science at a health-tech startup, building the analytics infrastructure that served 50,000+ patients.",
              },
              {
                number: "03",
                text: "published in Nature Digital Medicine, JAMIA, and presented at AMIA. reviewer for several computational biology journals.",
              },
              {
                number: "04",
                text: "received the [Your Award] for contributions to open-source health informatics tools.",
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
