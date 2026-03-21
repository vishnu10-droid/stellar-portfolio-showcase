import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Palette, Zap, Terminal, Layout, Globe } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const skills = [
  { icon: Code2, label: "React" },
  { icon: Terminal, label: "TypeScript" },
  { icon: Palette, label: "Tailwind CSS" },
  { icon: Zap, label: "Framer Motion" },
  { icon: Layout, label: "Next.js" },
  { icon: Globe, label: "REST / GraphQL" },
];

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        <div className="container relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl"
          >
            <span className="mono text-xs tracking-wider text-primary font-medium mb-4 block">
              FRONTEND DEVELOPER
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.08] tracking-tight mb-6 text-balance">
              I build interfaces that people{" "}
              <span className="text-primary">remember.</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Crafting fast, accessible, and visually refined web experiences
              with React, TypeScript, and modern CSS.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg gradient-accent text-primary-foreground text-sm font-medium transition-transform active:scale-[0.97]"
              >
                View Projects <ArrowRight size={16} />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-card text-foreground text-sm font-medium hover:bg-secondary transition-colors active:scale-[0.97]"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24">
        <div className="container">
          <ScrollReveal>
            <span className="mono text-xs tracking-wider text-primary font-medium mb-3 block">
              TOOLKIT
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-12 tracking-tight">
              Technologies I work with
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {skills.map((skill, i) => (
              <ScrollReveal key={skill.label} delay={i * 0.06}>
                <div className="group flex flex-col items-center gap-3 p-5 rounded-xl border border-border bg-card hover:border-primary/20 hover:shadow-md hover:shadow-primary/5 transition-all duration-300">
                  <skill.icon
                    size={24}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                  <span className="text-sm font-medium text-foreground">{skill.label}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-12">
              <div>
                <span className="mono text-xs tracking-wider text-primary font-medium mb-3 block">
                  SELECTED WORK
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                  Featured projects
                </h2>
              </div>
              <Link
                to="/projects"
                className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4"
              >
                View all <ArrowRight size={14} />
              </Link>
            </div>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline underline-offset-4"
            >
              View all projects <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
