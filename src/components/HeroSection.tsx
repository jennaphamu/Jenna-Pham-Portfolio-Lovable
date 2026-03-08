import { ArrowUpRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="px-6 md:px-12 lg:px-20 pt-20 md:pt-32 pb-16 md:pb-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] gap-12 md:gap-16 items-start">
          {/* Left — intro text */}
          <div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-8">
              your name
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-foreground/70 max-w-xl font-serif italic">
              designing digital experiences that feel intuitive, look beautiful,
              and actually solve problems — from brand identities to full web
              platforms.
            </p>

            <p className="mt-6 text-sm text-foreground/50 leading-relaxed max-w-md">
              currently open to freelance projects and full-time roles.
              <br />
              working on something cool?{" "}
              <a href="#contact" className="link-arrow">
                get in touch
              </a>
              .
            </p>

            <div className="mt-8 flex flex-col gap-1 text-sm text-foreground/50">
              <a href="mailto:hello@example.com" className="link-arrow w-fit">
                hello@example.com
              </a>
            </div>
          </div>

          {/* Right — photo + links */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl overflow-hidden border border-foreground/10 aspect-square">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop"
                alt="Profile photo"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <p className="section-header">elsewhere</p>
              <div className="flex flex-col gap-2">
                {[
                  { label: "dribbble", href: "https://dribbble.com" },
                  { label: "behance", href: "https://behance.net" },
                  { label: "linkedin", href: "https://linkedin.com" },
                  { label: "twitter / x", href: "https://x.com" },
                  { label: "instagram", href: "https://instagram.com" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm link-arrow w-fit inline-flex items-center gap-1"
                  >
                    {link.label}
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
