import { useState, FormEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("message sent! i'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const inputStyles =
    "w-full bg-transparent border-0 border-b border-primary/15 text-foreground placeholder:text-foreground/20 text-sm focus:outline-none focus:border-primary/40 pb-3 pt-1 transition-colors duration-300";

  return (
    <section id="contact" className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-header">connect</p>
          <h2 className="text-4xl md:text-5xl font-display font-light tracking-tight mb-6 text-foreground/90">
            Let's collaborate
          </h2>
          <p className="text-base md:text-lg text-foreground/40 leading-relaxed max-w-lg mx-auto font-display italic">
            Interested in health tech, community impact, or data-driven solutions? Let's connect.
          </p>
        </motion.div>

        <div className="stem-line h-12 mb-12" />

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-6 text-left max-w-md mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <input
            type="text"
            placeholder="name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputStyles}
          />
          <input
            type="email"
            placeholder="email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputStyles}
          />
          <textarea
            placeholder="what would you like to discuss?"
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`${inputStyles} resize-none`}
          />
          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-sm border border-primary/25 text-primary/80 rounded-full px-7 py-3 hover:bg-primary hover:text-primary-foreground transition-all duration-500 disabled:opacity-50 inline-flex items-center gap-2"
            >
              {isSubmitting ? "sending..." : "send message"}
              {!isSubmitting && <ArrowUpRight className="w-3.5 h-3.5" />}
            </button>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 text-sm text-foreground/25"
        >
          <a href="mailto:hello@example.com" className="link-arrow inline-flex items-center gap-1">
            hello@example.com
            <ArrowUpRight className="w-3 h-3" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
