import { motion } from "motion/react";
import { Award, CheckCircle2 } from "lucide-react";
import { useInView } from "motion/react";
import { useRef } from "react";

// Edit your certifications here
const certifications = [
  {
    title: "Hankerank certification",
    issuer: "Hankerank",
    date: "2025",
    credentialId: "13999ad228ba",
    skills: ["CPython (Basic)"],
  },
  {
    title: "AI for Beginners",
    issuer: "HP",
    date: "2025",
    credentialId: "pateel pavan",
    skills: ["GEN AI"],
  },
  {
    title: "Data Analytics Job Simulation",
    issuer: "Deloitte",
    date: "2025",
    credentialId: "r7nfZ9BeXH7Gs4hJG",
    skills: ["Data Analytics using tabblue"],
  },
  {
    title: "Mastering Generative AI and ChatGPT",
    issuer: "geeksforgeeks",
    date: "2025",
    credentialId: "b6542074e291",
    skills: ["Generative AI and ChatGPT"],
  },
  {
    title: "Python 101 for Data Science",
    issuer: "cognitiveclass",
    date: "2025",
    credentialId: "2c97d41257a441ec9753d3f31c5a11c2",
    skills: ["python"],
  },
];

function CertificationCard({ cert, index }: { cert: typeof certifications[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="group relative"
    >
      <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-6 hover:border-neutral-600 transition-all duration-300 h-full">
        {/* Icon */}
        <div className="flex items-start justify-between mb-4">
          <motion.div
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-neutral-600 to-neutral-800 flex items-center justify-center"
          >
            <Award size={24} className="text-neutral-200" />
          </motion.div>
          <span className="text-xs text-neutral-500 bg-neutral-800 px-2 py-1 rounded">
            {cert.date}
          </span>
        </div>

        {/* Content */}
        <h3 className="text-lg text-neutral-100 mb-2">{cert.title}</h3>
        <p className="text-neutral-400 text-sm mb-3">{cert.issuer}</p>
        <p className="text-neutral-500 text-xs mb-4">ID: {cert.credentialId}</p>

        {/* Skills */}
        <div className="flex flex-wrap gap-2">
          {cert.skills.map((skill) => (
            <span
              key={skill}
              className="flex items-center gap-1 text-xs text-neutral-400"
            >
              <CheckCircle2 size={12} className="text-neutral-600" />
              {skill}
            </span>
          ))}
        </div>

        {/* Hover glow */}
        <motion.div
          className="absolute inset-0 -z-10 bg-gradient-to-br from-neutral-600/0 via-neutral-600/30 to-neutral-600/0 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ transform: "scale(1.1)" }}
        />
      </div>
    </motion.div>
  );
}

export function Certifications() {
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
            Certifications
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Professional certifications and credentials I've earned
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <CertificationCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
