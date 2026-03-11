import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";
import jpLogo from "@/assets/jp-logo.jpg";

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="fixed top-0 left-0 right-0 z-50">
      
      <div className="px-6 md:px-12 lg:px-20 py-4">
        <div className="glass-card rounded-full px-6 py-3 max-w-7xl mx-auto shadow-sm">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img src={jpLogo} alt="JP Logo" className="w-12 h-12 rounded-full object-cover" />
              <span className="text-lg tracking-tight text-foreground/70 hover:text-primary transition-colors font-display italic">
                Jenna Pham
              </span>
            </Link>

            <nav className="flex items-center gap-6 md:gap-8">
              <a href="#work" className="text-sm text-foreground/50 hover:text-primary transition-colors duration-300">
                work
              </a>
              <a href="#about" className="text-sm text-foreground/50 hover:text-primary transition-colors duration-300">
                about
              </a>
              <a
                href="#contact"
                className="text-sm text-primary/80 border border-primary/25 rounded-full px-4 py-1.5 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300">
                contact
              </a>
              <button
                type="button"
                onClick={toggleTheme}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-primary/20 bg-background/80 text-foreground/70 shadow-xs hover:bg-primary/10 hover:text-primary transition-colors"
                aria-label="Toggle dark mode">
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </button>
            </nav>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
