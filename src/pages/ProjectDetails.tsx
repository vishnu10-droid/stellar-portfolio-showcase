import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Github, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ScrollReveal from "@/components/ScrollReveal";

export default function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <main className="pt-24">
        <div className="container py-24 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Project not found</h1>
          <Link to="/projects" className="text-primary hover:underline underline-offset-4">
            ← Back to projects
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="pt-24">
      <section className="py-16">
        <div className="container max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Link
              to="/projects"
              className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
            >
              <ArrowLeft size={14} /> Back to projects
            </Link>

            <span className="mono text-xs tracking-wider text-primary font-medium mb-3 block">
              PROJECT
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4">
              {project.title}
            </h1>

            <div className="flex flex-wrap gap-2 mb-6">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="mono text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mb-10">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg gradient-accent text-primary-foreground text-sm font-medium transition-transform active:scale-[0.97]"
              >
                Live Demo <ArrowUpRight size={14} />
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-border bg-card text-foreground text-sm font-medium hover:bg-secondary transition-colors active:scale-[0.97]"
              >
                <Github size={14} /> Source Code
              </a>
            </div>
          </motion.div>

          {/* Hero image */}
          <ScrollReveal>
            <div className="rounded-xl overflow-hidden border border-border mb-12">
              <img
                src={project.image}
                alt={project.title}
                className="w-full aspect-video object-cover"
              />
            </div>
          </ScrollReveal>

          {/* Description */}
          <ScrollReveal>
            <div className="mb-12">
              <h2 className="text-xl font-semibold text-foreground mb-4">Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.longDescription}
              </p>
            </div>
          </ScrollReveal>

          {/* Features */}
          <ScrollReveal>
            <div className="mb-12">
              <h2 className="text-xl font-semibold text-foreground mb-4">Key Features</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {project.features.map((feature, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-2.5 p-3 rounded-lg bg-card border border-border"
                  >
                    <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Screenshots */}
          <ScrollReveal>
            <div>
              <h2 className="text-xl font-semibold text-foreground mb-4">Screenshots</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.screenshots.map((src, i) => (
                  <div key={i} className="rounded-xl overflow-hidden border border-border">
                    <img
                      src={src}
                      alt={`${project.title} screenshot ${i + 1}`}
                      loading="lazy"
                      className="w-full aspect-video object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
