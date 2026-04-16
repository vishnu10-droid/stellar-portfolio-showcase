import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Code2, Palette, Zap, Terminal, Layout, Globe } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const skills = [
  { icon: Code2, label: "React", color: "text-blue-400" },
  { icon: Terminal, label: "TypeScript", color: "text-blue-600" },
  { icon: Palette, label: "Tailwind CSS", color: "text-cyan-400" },
  { icon: Zap, label: "Framer Motion", color: "text-purple-500" },
  { icon: Layout, label: "Next.js", color: "text-foreground" },
  { icon: Globe, label: "REST / GraphQL", color: "text-pink-500" },
];

export default function Home() {
  const featured = projects.slice(0, 3);

  // Mouse tracking for 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    x.set(mouseX / width - 0.5);
    y.set(mouseY / height - 0.5);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <main className="relative">
      {/* Dynamic Background Blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-primary/5 blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-primary/10 blur-[120px] animate-pulse [animation-delay:2s]" />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center overflow-hidden">
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: `radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
        
        <div className="container relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-7xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
              
              {/* Left Side: Text Content */}
              <div className="flex-1 text-center md:text-left">
                <motion.span 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mono text-xs tracking-[0.2em] text-primary font-bold mb-6 block"
                >
                  FRONTEND DEVELOPER
                </motion.span>
                
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-tight mb-6 text-balance">
                  I build interfaces that people{" "}
                  <span className="relative inline-block">
                    remember.
                    <motion.div 
                      className="absolute bottom-2 left-0 h-2 w-full bg-primary/20 -z-10"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ delay: 0.8, duration: 1 }}
                    />
                  </span>
                </h1>

                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
                  Crafting fast, accessible, and visually refined web experiences
                  with React, TypeScript, and modern CSS.
                </p>

                <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/projects"
                      className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground text-sm font-semibold transition-all overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      <span className="relative z-10 flex items-center gap-2">
                        View Projects <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  </motion.div>
                  
                  <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-border bg-background/50 backdrop-blur-sm text-foreground text-sm font-semibold hover:bg-secondary transition-all"
                    >
                      Get in Touch
                    </Link>
                  </motion.div>
                </div>
              </div>

              {/* Right Side: 3D Profile Image */}
              <motion.div 
                className="relative perspective-1000"
                style={{ rotateX, rotateY }}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="relative z-10"
                >
                  <img 
                    src="src/my-pic/profile.png" 
                    alt="Profile" 
                    className="w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px] object-cover rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-[6px] border-card/50 backdrop-blur-md" 
                  />
                  {/* Floating Glass Tag */}
                  <motion.div 
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -bottom-6 -left-6 bg-card/80 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-xl hidden lg:block"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm font-semibold">Available for work</span>
                    </div>
                  </motion.div>
                </motion.div>
                
                {/* Glow behind image */}
                <div className="absolute -inset-10 bg-primary/20 blur-[100px] rounded-full -z-10 animate-pulse" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container">
          <ScrollReveal>
            <div className="text-center md:text-left mb-16">
              <span className="mono text-xs tracking-widest text-primary font-bold mb-3 block">TOOLKIT</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">
                Technologies I work with
              </h2>
            </div>
          </ScrollReveal>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {skills.map((skill, i) => (
              <ScrollReveal key={skill.label} delay={i * 0.05}>
                <motion.div 
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative p-6 rounded-2xl border border-border bg-card/40 backdrop-blur-md hover:border-primary/30 transition-all duration-500"
                >
                  <div className={`mb-4 p-3 rounded-xl bg-secondary/50 inline-block transition-transform duration-500 group-hover:rotate-[360deg]`}>
                    <skill.icon size={28} className={`${skill.color} transition-colors`} />
                  </div>
                  <h3 className="text-sm font-bold text-foreground block">{skill.label}</h3>
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 bg-secondary/20 relative">
        <div className="container">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-16">
              <div>
                <span className="mono text-xs tracking-widest text-primary font-bold mb-3 block">SELECTED WORK</span>
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight">Featured projects</h2>
              </div>
              <Link
                to="/projects"
                className="hidden sm:flex items-center gap-2 text-sm font-bold text-primary group"
              >
                View all projects 
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollReveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}