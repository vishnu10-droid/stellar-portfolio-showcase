import { Code2, Terminal, Palette, Zap, Layout, Globe, Database, GitBranch } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { motion } from "framer-motion";

const skills = [
  { icon: Code2, label: "React / Next.js", desc: "Component architecture, hooks, SSR" },
  { icon: Terminal, label: "TypeScript", desc: "Type-safe codebases at scale" },
  { icon: Palette, label: "Tailwind CSS", desc: "Utility-first design systems" },
  { icon: Zap, label: "Framer Motion", desc: "Performant UI animations" },
  { icon: Layout, label: "Figma → Code", desc: "Pixel-perfect implementation" },
  { icon: Globe, label: "REST & GraphQL", desc: "API integration & data fetching" },
  { icon: Database, label: "State Management", desc: "Zustand, React Query, Context" },
  { icon: GitBranch, label: "Git & CI/CD", desc: "Version control, automated deploys" },
];

const timeline = [
  { year: "2024", title: "Senior Frontend Developer", desc: "Leading UI architecture for a SaaS platform" },
  { year: "2023", title: "Frontend Developer", desc: "Built component libraries and design systems" },
  { year: "2022", title: "Junior Developer", desc: "Shipped first production React applications" },
  { year: "2021", title: "Self-taught Journey Begins", desc: "Started learning HTML, CSS, JavaScript, and React" },
];

export default function About() {
  return (
    <main className="pt-24">
      {/* Intro */}
      <section className="py-24">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mono text-xs tracking-wider text-primary font-medium mb-3 block">
              ABOUT ME
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-6 text-balance">
              A developer who cares about the details.
            </h1>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a frontend developer focused on building clean, performant web
                applications. I care deeply about user experience, accessibility, and
                writing maintainable code that teams can work with confidently.
              </p>
              <p>
                My approach: understand the problem first, then build the simplest
                solution that solves it well. I believe great interfaces are invisible —
                they let people focus on their goals, not the tool.
              </p>
              <p>
                When I'm not coding, I'm usually exploring new design systems,
                contributing to open-source projects, or reading about web performance
                optimization.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <ScrollReveal>
            <span className="mono text-xs tracking-wider text-primary font-medium mb-3 block">
              SKILLS
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-12">
              Tools & technologies
            </h2>
          </ScrollReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <ScrollReveal key={skill.label} delay={i * 0.06}>
                <div className="group p-5 rounded-xl border border-border bg-card hover:border-primary/20 hover:shadow-md hover:shadow-primary/5 transition-all duration-300">
                  <skill.icon
                    size={20}
                    className="text-primary mb-3"
                  />
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    {skill.label}
                  </h3>
                  <p className="text-xs text-muted-foreground">{skill.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24">
        <div className="container max-w-2xl">
          <ScrollReveal>
            <span className="mono text-xs tracking-wider text-primary font-medium mb-3 block">
              JOURNEY
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight mb-12">
              How I got here
            </h2>
          </ScrollReveal>
          <div className="relative">
            <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 0.1}>
                  <div className="flex gap-5">
                    <div className="relative">
                      <div className="w-10 h-10 rounded-full border-2 border-primary/30 bg-card flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                      </div>
                    </div>
                    <div className="pb-2 pt-1.5">
                      <span className="mono text-xs text-primary font-medium">
                        {item.year}
                      </span>
                      <h3 className="text-base font-semibold text-foreground mt-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
