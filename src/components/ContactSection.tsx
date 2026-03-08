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
    "w-full bg-transparent border-0 border-b border-foreground/20 text-foreground placeholder:text-foreground/30 text-sm focus:outline-none focus:border-foreground/60 pb-3 pt-1 transition-colors";

  return (
    <section id="contact" className="px-6 md:px-12 lg:px-20 py-16 md:py-24">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8 md:gap-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="section-header">get in touch</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <p className="text-base md:text-lg leading-relaxed text-foreground/70 mb-6">
                have a project in mind, need a designer for your team, or just
                want to chat about type and pixels? i'd love to hear from you.
              </p>
              <div className="space-y-2 text-sm">
                <a
                  href="mailto:hello@example.com"
                  className="link-arrow inline-flex items-center gap-1"
                >
                  hello@example.com
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>

            <motion.form
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.4, 0.25, 1] }}
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
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-sm font-medium underline underline-offset-4 decoration-foreground/30 hover:decoration-foreground transition-all disabled:opacity-50 inline-flex items-center gap-1"
              >
                {isSubmitting ? "sending..." : "send message"}
                {!isSubmitting && <ArrowUpRight className="w-3 h-3" />}
              </button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
