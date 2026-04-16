import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, ArrowUpRight, Heart } from "lucide-react";

const footerLinks = [
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Resume", path: "/resume" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-20 border-t border-border bg-card/30 backdrop-blur-md overflow-hidden">
      {/* Background Decor - Dynamic Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 blur-[120px] rounded-full" />

      <div className="container px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
              PORTFOLIO<span className="text-primary">.</span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Building digital experiences that merge functionality with high-end aesthetics. 
              Available for freelance and full-time opportunities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mono text-xs font-semibold tracking-widest text-foreground uppercase mb-6">Navigation</h3>
            <ul className="space-y-4">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="group flex items-center text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <span>{link.name}</span>
                    <ArrowUpRight size={14} className="ml-1 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h3 className="mono text-xs font-semibold tracking-widest text-foreground uppercase mb-6">Connect</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4 }}
                  className="p-2.5 rounded-lg border border-border bg-card hover:border-primary/50 hover:text-primary transition-colors shadow-sm"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Newsletter/Status */}
          <div className="p-6 rounded-2xl bg-secondary/50 border border-border/50 relative overflow-hidden group">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-medium text-emerald-500 uppercase tracking-wider">Available for work</span>
              </div>
              <p className="text-sm font-medium mb-4 text-foreground">Have a great idea? Let's talk.</p>
              <Link 
                to="/contact" 
                className="inline-flex w-full items-center justify-center px-4 py-2 text-xs font-bold uppercase tracking-widest bg-foreground text-background rounded-lg hover:bg-primary transition-colors"
              >
                Hire Me
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © {currentYear} • Designed & Coded by YourName
          </p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            Built with <Heart size={12} className="text-red-500 fill-red-500 animate-pulse" /> using React & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
}