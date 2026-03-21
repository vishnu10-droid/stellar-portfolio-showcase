import { Link } from "react-router-dom";
import { ArrowUpRight, Github } from "lucide-react";
import { Project } from "@/data/projects";
import { motion } from "framer-motion";

interface Props {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        to={`/projects/${project.id}`}
        className="group block rounded-xl border border-border bg-card overflow-hidden transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/5"
      >
        <div className="aspect-[16/10] overflow-hidden bg-muted">
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
        </div>
        <div className="p-5">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <ArrowUpRight
              size={16}
              className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-all -translate-y-0.5 group-hover:translate-y-0"
            />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="mono text-[11px] px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
