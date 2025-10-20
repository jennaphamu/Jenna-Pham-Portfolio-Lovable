import { ArrowRight } from "lucide-react";

const Footer = () => {
  const helpLinks = [
    { label: "FAQ", href: "#faq" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Contact Us", href: "#contact" },
  ];

  const socialLinks = [
    { label: "Instagram", href: "#instagram" },
    { label: "Twitter", href: "#twitter" },
    { label: "Pinterest", href: "#pinterest" },
    { label: "YouTube", href: "#youtube" },
  ];

  return (
    <footer className="bg-accent-red text-foreground">
      <div className="px-5 md:px-[90px] py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-x-12 lg:gap-x-16 items-start">
          {/* Logo Section */}
          <div className="md:col-span-1">
            <div className="font-serif text-3xl md:text-4xl font-bold italic">
              Perspective
            </div>
          </div>

          {/* Help & Support */}
          <div className="md:col-span-1">
            <h3 className="footer-header">HELP & SUPPORT</h3>
            <nav className="flex flex-col gap-2">
              {helpLinks.map((link) => (
                <a key={link.label} href={link.href} className="footer-link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="md:col-span-1">
            <h3 className="footer-header">SOCIAL</h3>
            <nav className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <a key={link.label} href={link.href} className="footer-link">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <div className="space-y-4">
              <h3 className="text-base md:text-lg font-normal">
                Subscribe to the Newsletter
              </h3>
              <button className="border-2 border-foreground text-foreground bg-transparent rounded-full px-6 md:px-8 py-2 md:py-2.5 uppercase font-bold hover:bg-foreground hover:text-accent-red transition-all duration-200 inline-flex items-center gap-2">
                SIGN UP
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-foreground/20">
          <p className="text-sm text-center md:text-left">
            © 2025 Perspective Blog. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
