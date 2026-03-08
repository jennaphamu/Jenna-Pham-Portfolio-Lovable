import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="px-6 md:px-12 lg:px-20 py-5">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <Link to="/" className="text-lg font-bold tracking-tight">
            Jenna Pham
          </Link>

          <nav className="flex items-center gap-6 md:gap-8">
            <a href="#work" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              work
            </a>
            <a href="#about" className="text-sm text-foreground/60 hover:text-foreground transition-colors">
              about
            </a>
            <a
              href="#contact"
              className="text-sm font-medium underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-all"
            >
              contact
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
