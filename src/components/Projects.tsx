import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

// Edit your projects here
const projects = [
  {
    title: "UPDATE ON EDUCATION",
    description: "it is my channel website ware i can post the education updates",
    image: "https://media.licdn.com/dms/image/v2/D4D2DAQF3f9-7yBNh-Q/profile-treasury-image-shrink_800_800/B4DZmozSjtGwAY-/0/1759473644398?e=1761066000&v=beta&t=7N7b-fmc1Wfk5ld6NTKq3U-DjK2aMs9ttjbNxclTYKI",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/pateelpavan",
    demo: "https://stately-crostata-6365ae.netlify.app/?fbclid=PAZXh0bgNhZW0CMTEAAacuP9pA1-Eha5vXu2-uyqFg-p-bRMPNpTvVx_CZ59Z7nCiVd5hNWf2LXBAZPA_aem__7mQ4x4jsrCh3CtWFrXpDQ",
  },
  {
    title: "NSS CMRIT Volunteer Portfolio Website",
    description: "Student Volunteer Portfolio Website.",
    image: "https://media.licdn.com/dms/image/v2/D4D2DAQFurcPBjxnFiw/profile-treasury-image-shrink_800_800/B4DZnjd4nkG8AY-/0/1760457892414?e=1761066000&v=beta&t=jAyyun-azxH6eiSSHmPmTweRr8mpWWF6Kpa5o8dg190",
    technologies: ["Next.js", "java script", "type script", "PostgreSQL"],
    github: "https://github.com/pateelpavan/MYNSS",
    demo: "https://nsscmrits.netlify.app/",
  },
  {
    title: "my portfolieo",
    description: "my portfolieo",
    image: "pavan.png",
    technologies: ["type script", "Express", "React","sql"],
    github: "https://github.com/pateelpavan",
    demo: "#",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg overflow-hidden hover:border-neutral-600 transition-all duration-300">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-neutral-800">
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent opacity-60" />
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-xl text-neutral-100 mb-2">{project.title}</h3>
          <p className="text-neutral-400 mb-4 line-clamp-2">{project.description}</p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 bg-neutral-800 text-neutral-300 rounded text-xs border border-neutral-700"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-4">
            <motion.a
              href={project.github}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-neutral-300 hover:text-neutral-100 transition-colors"
            >
              <Github size={18} />
              <span className="text-sm">Code</span>
            </motion.a>
            <motion.a
              href={project.demo}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 text-neutral-300 hover:text-neutral-100 transition-colors"
            >
              <ExternalLink size={18} />
              <span className="text-sm">Demo</span>
            </motion.a>
          </div>
        </div>
      </div>

      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 -z-10 bg-gradient-to-r from-neutral-600/0 via-neutral-600/50 to-neutral-600/0 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ transform: "scale(1.05)" }}
      />
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            A selection of my recent work and side projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
