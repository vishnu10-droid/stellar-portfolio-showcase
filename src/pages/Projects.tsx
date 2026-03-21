import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import SkeletonCard from "@/components/SkeletonCard";
import { projects } from "@/data/projects";

const filters = [
  { value: "all", label: "All" },
  { value: "react", label: "React" },
  { value: "ui", label: "UI / Design" },
  { value: "fullstack", label: "Full Stack" },
];

export default function Projects() {
  const [active, setActive] = useState("all");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <main className="pt-24">
      <section className="py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="mono text-xs tracking-wider text-primary font-medium mb-3 block">
              PROJECTS
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-4 text-balance">
              Things I've built
            </h1>
            <p className="text-muted-foreground mb-8 max-w-lg">
              A selection of projects that showcase my skills in frontend
              development, design systems, and user experience.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActive(f.value)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 active:scale-[0.97] ${
                  active === f.value
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          {loading ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </div>
          )}

          {!loading && filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">
                No projects in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
