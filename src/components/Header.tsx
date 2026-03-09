import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import jpLogo from "@/assets/jp-logo.jpg";

const Header = () => {
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
              <img src={jpLogo} alt="JP Logo" className="w-8 h-8 rounded-full object-cover" />
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
            </nav>
          </div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
