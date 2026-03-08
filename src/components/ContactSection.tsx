import { useState, FormEvent } from "react";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const inputStyles =
    "w-full bg-transparent border-0 border-b-2 border-foreground text-foreground placeholder:text-foreground/50 uppercase text-sm font-bold tracking-wider focus:outline-none focus:border-[hsl(var(--primary-hover))] pb-2 transition-colors";

  return (
    <section id="contact" className="px-5 md:px-20 py-12 md:py-20">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[hsl(var(--primary))] rounded-[var(--radius)] border-2 border-foreground p-8 md:p-14">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
            {/* Left */}
            <div>
              <h2 className="heading-lg mb-4">LET'S CONNECT</h2>
              <p className="font-serif text-foreground/80 leading-relaxed mb-6">
                Whether you have a research collaboration in mind, a project idea,
                or just want to say hello — I'd love to hear from you.
              </p>
              <div className="space-y-2 font-serif text-sm">
                <p>
                  <span className="font-bold uppercase font-sans text-xs tracking-wider">
                    Email:{" "}
                  </span>
                  <a href="mailto:hello@example.com" className="underline">
                    hello@example.com
                  </a>
                </p>
                <p>
                  <span className="font-bold uppercase font-sans text-xs tracking-wider">
                    Location:{" "}
                  </span>
                  Your City, Country
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="NAME"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputStyles}
              />
              <input
                type="email"
                placeholder="EMAIL"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputStyles}
              />
              <textarea
                placeholder="MESSAGE"
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className={`${inputStyles} resize-none`}
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-transparent disabled:opacity-50 flex items-center gap-2"
              >
                {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                {!isSubmitting && <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
