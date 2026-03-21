import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="pt-24">
      <section className="py-24">
        <div className="container max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mono text-xs tracking-wider text-primary font-medium mb-3 block">
              CONTACT
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4 text-balance">
              Let's work together.
            </h1>
            <p className="text-muted-foreground mb-10 max-w-md">
              Have a project in mind or just want to chat? Drop me a message and
              I'll get back to you soon.
            </p>
          </motion.div>

          <ScrollReveal>
            <form onSubmit={handleSubmit} className="space-y-5 mb-16">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-accent text-primary-foreground text-sm font-medium transition-transform active:scale-[0.97]"
              >
                {submitted ? "Message Sent ✓" : (
                  <>Send Message <Send size={14} /></>
                )}
              </button>
            </form>
          </ScrollReveal>

          <ScrollReveal>
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">
                Or find me elsewhere
              </h2>
              <div className="flex flex-col gap-3">
                {[
                  { icon: Github, label: "GitHub", href: "https://github.com", handle: "@developer" },
                  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com", handle: "in/developer" },
                  { icon: Mail, label: "Email", href: "mailto:hello@example.com", handle: "hello@example.com" },
                ].map(({ icon: Icon, label, href, handle }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/20 hover:shadow-md hover:shadow-primary/5 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                      <Icon size={18} className="text-foreground" />
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-medium text-foreground">{label}</span>
                      <span className="block text-xs text-muted-foreground">{handle}</span>
                    </div>
                    <ArrowUpRight
                      size={14}
                      className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
