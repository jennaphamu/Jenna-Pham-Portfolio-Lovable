import { useState, FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

interface NewsletterProps {
  variant?: "colorful" | "minimal";
}

const Newsletter = ({ variant = "colorful" }: NewsletterProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      toast.success("Thanks for subscribing!");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };

  if (variant === "minimal") {
    return (
      <section className="bg-black text-white py-16 md:py-20">
        <div className="px-5 md:px-[90px] max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row items-center gap-4 justify-center">
            <label htmlFor="email-minimal" className="text-lg md:text-xl font-normal font-serif">
              Subscribe to the Newsletter
            </label>
            <input
              id="email-minimal"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email"
              required
              className="bg-transparent text-white border-b-2 border-white pb-2 px-0 focus:border-white focus:outline-none placeholder:text-white/70 flex-1 max-w-md font-serif"
            />
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-transparent border-white text-white hover:bg-white hover:text-black disabled:opacity-50 font-sans"
            >
              {isSubmitting ? "SIGNING UP..." : "SIGN UP"}
            </button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-accent-pink py-16 md:py-20">
      <div className="px-5 md:px-[90px] max-w-2xl mx-auto text-center">
        <h2 className="heading-md mb-4 font-sans">STAY STYLED.</h2>
        <p className="text-lg md:text-xl mb-8 font-serif leading-relaxed">
          Get the latest in fashion inspiration, styling tips, and designer spotlights delivered to your inbox.
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            id="email-colorful"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            required
            className="flex-1 px-5 py-3 border-2 border-foreground/20 rounded-full focus:ring-2 focus:ring-secondary focus:border-secondary bg-white transition-all font-serif"
          />
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-filled justify-center disabled:opacity-50"
          >
            {isSubmitting ? "SUBSCRIBING..." : "SUBSCRIBE"}
            {!isSubmitting && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
