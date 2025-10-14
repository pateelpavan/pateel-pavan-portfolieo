import { motion } from "motion/react";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { useInView } from "motion/react";
import { useRef } from "react";

// Edit your education here
const education = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "cmr institute of technology,hyderabad",
    location: "medchal,Hyderabad, Telangana",
    period: "2024 - 2027",
    grade: "CGPA:7.5/10",
    description: "Specialized in Software Engineering and Web Development. Completed major projects in full-stack development.",
    achievements: [
      "Dean's List for Academic Excellence",
      "Participated in Hackathons",
      "Active member of NSS UNIT",
      "Proud to be a part of CMRIT",
    ],
  },
  {
    degree: "Diploma in Electrical and Electronics Engineering",
    institution: "government polytechnic college,chegunta",
    location: "chegunta,Medhak, Telangana",
    period: "2021 - 2024",
    grade: "Percentage: 92%",
    description: "Focused on Electrical and Electronics Engineering.",
    achievements: [
      "Active member of NSS UNIT",
      "Participated in State Level Science Fair",
    ],
  },
];

function EducationCard({ edu, index }: { edu: typeof education[0]; index: number }) {
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
            <GraduationCap size={20} className="text-neutral-200" />
          </motion.div>
          {index < education.length - 1 && (
            <div className="w-0.5 h-full bg-gradient-to-b from-neutral-600 to-transparent mt-4" />
          )}
        </div>

        {/* Content */}
        <div className="pb-12 flex-1">
          <div className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-6 hover:border-neutral-600 transition-colors">
            <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
              <div>
                <h3 className="text-xl text-neutral-100 mb-1">{edu.degree}</h3>
                <p className="text-neutral-300">{edu.institution}</p>
                <div className="flex items-center gap-2 text-neutral-400 mt-1">
                  <MapPin size={14} />
                  <span className="text-sm">{edu.location}</span>
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 text-neutral-400 mb-1">
                  <Calendar size={16} />
                  <span className="text-sm">{edu.period}</span>
                </div>
                <p className="text-sm text-neutral-300">{edu.grade}</p>
              </div>
            </div>
            
            <p className="text-neutral-400 mb-4">{edu.description}</p>
            
            {/* Achievements */}
            <div className="space-y-2">
              <p className="text-sm text-neutral-300">Key Achievements:</p>
              <ul className="space-y-1">
                {edu.achievements.map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-neutral-400">
                    <span className="text-neutral-600 mt-1">•</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Education() {
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
            Education
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            My academic background and educational journey
          </p>
        </motion.div>

        <div>
          {education.map((edu, index) => (
            <EducationCard key={index} edu={edu} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
