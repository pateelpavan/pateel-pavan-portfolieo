import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";
import { useInView } from "motion/react";
import { useRef } from "react";

// Edit your experience here
const experiences = [
  {
    title: "junior engineer",
    company: "lokesh machines limited",
    period: "2023 - 2024",
    description: "Worked as a junior engineer in the company.",
    technologies: ["machine inspection"],
  },
];

function ExperienceCard({ experience, index }: { experience: typeof experiences[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative"
    >
      <div className="flex gap-6">
        {/* Timeline dot */}
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ delay: index * 0.2 + 0.3 }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-neutral-600 to-neutral-800 border-2 border-neutral-500 flex items-center justify-center shrink-0"
          >
            <Briefcase size={20} className="text-neutral-200" />
          </motion.div>
          {index < experiences.length - 1 && (
            <div className="w-0.5 h-full bg-gradient-to-b from-neutral-600 to-transparent mt-4" />
          )}
        </div>

        {/* Content */}
        <div className="pb-12 flex-1">
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-6 hover:border-neutral-600 transition-colors">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="text-xl text-neutral-100 mb-1">{experience.title}</h3>
                <p className="text-neutral-300">{experience.company}</p>
              </div>
              <div className="flex items-center gap-2 text-neutral-400">
                <Calendar size={16} />
                <span className="text-sm">{experience.period}</span>
              </div>
            </div>
            
            <p className="text-neutral-400 mb-4">{experience.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-neutral-800 text-neutral-300 rounded-full border border-neutral-700 text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen flex items-center justify-center py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-4 bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text text-transparent">
            Experience
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            My professional journey and the amazing teams I've worked with
          </p>
        </motion.div>

        <div>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
