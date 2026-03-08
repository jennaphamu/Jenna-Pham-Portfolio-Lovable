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
    "w-full bg-transparent border-0 border-b border-foreground/20 text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-primary pb-3 pt-1 transition-colors";

  return (
    <section id="contact" className="px-6 md:px-12 lg:px-20 py-20 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold tracking-tight mb-6"
        >
          Let's work together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-base md:text-lg text-foreground/60 leading-relaxed mb-12 max-w-lg mx-auto"
        >
          Have a project in mind or just want to chat about type and pixels? I'd love to hear from you.
        </motion.p>

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
            placeholder="tell me about your project"
            required
            rows={4}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={`${inputStyles} resize-none`}
          />
          <div className="text-center pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="text-sm font-medium border border-foreground/20 rounded-full px-6 py-2.5 hover:bg-foreground hover:text-background transition-all duration-300 disabled:opacity-50 inline-flex items-center gap-2"
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
          className="mt-12 text-sm text-foreground/40"
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
