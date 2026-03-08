import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="px-6 md:px-12 lg:px-20 py-8"
    >
      <div className="max-w-5xl mx-auto">
        <div className="stem-line h-8 mb-8" />
        <div className="divider pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center">
            <p className="text-xs text-foreground/20 font-display italic">
              © {new Date().getFullYear()} Jenna Pham
            </p>
            <div className="flex items-center gap-6">
              {["dribbble", "behance", "linkedin", "twitter"].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-xs text-foreground/20 hover:text-primary transition-colors duration-300"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
