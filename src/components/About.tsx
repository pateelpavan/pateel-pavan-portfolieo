import { motion } from "motion/react";
import { Github, Linkedin, Mail, Download, Code2, Palette, Rocket } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/pateelpavan", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/pateel-pavan-804079320/", label: "LinkedIn" },
    { icon: Mail, href: "mailto:pateelpavan64@gmail.com", label: "Email" },
  ];

  const skills = [
    {
      icon: Code2,
      title: "front end developer/prompt Development",
      description: "Expert in building scalable web applications with modern technologies",
      technologies: ["React", "Node.js", "TypeScript",],
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user experiences",
      technologies: ["Figma", "Tailwind", "Motion", "Responsive Design"],
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          {/* Photo Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex justify-center"
          >
            <div className="relative">
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(192, 192, 192, 0.3)",
                    "0 0 60px rgba(192, 192, 192, 0.5)",
                    "0 0 20px rgba(192, 192, 192, 0.3)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-neutral-700"
              >
                <ImageWithFallback
                  src="https://media.licdn.com/dms/image/v2/D4D03AQH4k-dvdIawbQ/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1724252015823?e=1773273600&v=beta&t=_U1pIVnv0Jqz-0Hsn7nTiPqZ30OeLo_B_EmLjLnVj98"
                  alt="Professional Portrait"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Floating particles around photo */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-neutral-400 rounded-full"
                  style={{
                    top: `${50 + 40 * Math.cos((i * Math.PI) / 4)}%`,
                    left: `${50 + 40 * Math.sin((i * Math.PI) / 4)}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2 + i * 0.2,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-neutral-400 mb-4"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-5xl md:text-7xl mb-4 bg-gradient-to-r from-neutral-100 via-neutral-300 to-neutral-500 bg-clip-text text-transparent"
            >
              Pateel Pavan
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-2xl md:text-3xl text-neutral-300 mb-6"
            >
              <span className="inline-block">
                Full Stack Developer
              </span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-neutral-400 mb-8 max-w-lg"
            >
              Passionate about creating beautiful, functional, and user-centered digital experiences.
              Specialized in modern web technologies and always eager to learn new things.
            </motion.p>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex gap-4 mb-8"
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-neutral-300 hover:text-neutral-100 hover:border-neutral-500 transition-colors"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="flex gap-4 flex-wrap"
            >
              <motion.a
                href="/resume.pdf"
                download="Pateel_Pavan_Resume(11-10-2025).pdf"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-neutral-700 to-neutral-800 text-white rounded-lg border border-neutral-600 hover:border-neutral-400 transition-colors flex items-center gap-2"
              >
                <Download size={18} />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          <h2 className="text-3xl md:text-4xl text-center mb-12 bg-gradient-to-r from-neutral-100 to-neutral-400 bg-clip-text text-transparent">
            What I Do
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.3 + index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-neutral-900/50 border border-neutral-800 rounded-lg p-6 hover:border-neutral-600 transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-neutral-600 to-neutral-800 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <skill.icon size={28} className="text-neutral-200" />
                </div>
                
                <h3 className="text-xl text-neutral-100 mb-3">{skill.title}</h3>
                <p className="text-neutral-400 mb-4">{skill.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {skill.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-neutral-800 text-neutral-300 rounded text-xs border border-neutral-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
