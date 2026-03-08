import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="px-6 md:px-12 lg:px-20 py-5">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <Link to="/" className="text-lg font-bold tracking-tight text-white/90 hover:text-white transition-colors">
            JP
          </Link>

          <nav className="flex items-center gap-6 md:gap-8">
            <a href="#work" className="text-sm text-white/60 hover:text-white transition-colors">
              work
            </a>
            <a href="#about" className="text-sm text-white/60 hover:text-white transition-colors">
              about
            </a>
            <a
              href="#contact"
              className="text-sm font-medium text-white/90 border border-white/20 rounded-full px-4 py-1.5 hover:bg-white/10 transition-all"
            >
              contact
            </a>
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
