const Footer = () => {
  const socialLinks = [
    { label: "LINKEDIN", href: "https://linkedin.com" },
    { label: "GITHUB", href: "https://github.com" },
    { label: "SCHOLAR", href: "https://scholar.google.com" },
    { label: "TWITTER / X", href: "https://x.com" },
  ];

  return (
    <footer className="bg-accent-red text-foreground">
      <div className="px-5 md:px-20 py-12 md:py-16">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="font-serif text-3xl md:text-4xl font-bold italic mb-2">
              YN.
            </div>
            <p className="font-serif text-sm text-foreground/70">
              Building at the intersection of tech & health.
            </p>
          </div>

          <div>
            <h3 className="footer-header">FIND ME</h3>
            <nav className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-foreground/20">
          <p className="text-sm text-center md:text-left uppercase">
            © {new Date().getFullYear()} YOUR NAME. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
