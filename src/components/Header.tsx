import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background border-b border-foreground/5">
      <div className="px-5 md:px-20 py-5 md:py-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="font-serif text-2xl md:text-3xl font-bold italic">
            YN.
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#about" className="nav-text hover:opacity-60 transition-opacity">
              ABOUT
            </a>
            <a href="#projects" className="nav-text hover:opacity-60 transition-opacity">
              WORK
            </a>
            <a href="#contact">
              <Button variant="filled" showArrow={false} className="text-xs py-2 px-5">
                CONTACT
              </Button>
            </a>
          </nav>

          <a href="#contact" className="md:hidden">
            <Button variant="filled" showArrow={false} className="text-xs py-2 px-5">
              CONTACT
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
