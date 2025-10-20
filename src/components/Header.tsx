import { useState } from "react";
import { Menu, X, Search, User, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import Button from "./Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const primaryNav = [
    { label: "WELLNESS", href: "#wellness" },
    { label: "TRAVEL", href: "#travel" },
    { label: "CREATIVITY", href: "#creativity" },
    { label: "GROWTH", href: "#growth" },
  ];

  const secondaryNav = [
    { label: "ABOUT", href: "#about" },
    { label: "STYLE GUIDE", href: "#style-guide" },
    { label: "AUTHORS", href: "#authors" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-foreground/5">
      <div className="px-5 md:px-[90px] py-5 md:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="font-serif text-2xl md:text-3xl font-bold italic">
            Perspective
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {primaryNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-text text-foreground hover:text-secondary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3 md:gap-4">
            <button className="p-2 hover:bg-foreground/5 rounded-full transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-foreground/5 rounded-full transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="hidden md:block p-2 hover:bg-foreground/5 rounded-full transition-colors">
              <ShoppingBag className="w-5 h-5" />
            </button>
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-foreground/5 rounded-full transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop CTA Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button className="nav-text text-secondary hover:underline">
                SIGN IN
              </button>
              <Button variant="small" showArrow={false}>
                SUBSCRIBE
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-6 pb-6 border-t border-foreground/10 pt-6 space-y-6">
            <nav className="flex flex-col gap-4">
              {primaryNav.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-text text-foreground hover:text-secondary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="border-t border-foreground/10 pt-4 mt-2">
                {secondaryNav.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="block nav-text text-foreground/70 hover:text-secondary transition-colors py-2"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </nav>
            <div className="flex flex-col gap-3">
              <Button variant="secondary" showArrow={false} className="w-full justify-center">
                SIGN IN
              </Button>
              <Button variant="primary" showArrow={false} className="w-full justify-center">
                SUBSCRIBE
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
