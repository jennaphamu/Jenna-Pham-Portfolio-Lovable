const Footer = () => {
  return (
    <footer className="px-6 md:px-12 lg:px-20 py-8">
      <div className="max-w-6xl mx-auto divider pt-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-xs text-foreground/30">
            © {new Date().getFullYear()} Jenna Pham
          </p>
          <div className="flex items-center gap-6">
            {["linkedin", "github", "scholar", "twitter"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-xs text-foreground/30 hover:text-foreground/60 transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
