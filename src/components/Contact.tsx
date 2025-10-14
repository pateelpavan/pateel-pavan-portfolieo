import { motion } from "motion/react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { submitContactForm } from "../utils/api";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await submitContactForm(formData);
      console.log('Contact form response:', response);
      setSubmitStatus('success');
      alert("Thanks for reaching out! Your message has been saved. I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setSubmitStatus('error');
      alert("Failed to send message. Please try again or contact me directly via email.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pateelpavan64@gmail.com",
      href: "mailto:pateelpavan64@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7416472177",
      href: "tel:+917416472177",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "chintal,Hyderabad, Telangana, India",
      href: "#",
    },
  ];

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
            Get In Touch
          </h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl text-neutral-100 mb-8">Contact Information</h3>
            
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center group-hover:border-neutral-500 transition-colors">
                    <info.icon size={20} className="text-neutral-300" />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500">{info.label}</p>
                    <p className="text-neutral-200">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="mt-12 p-6 bg-neutral-900/50 border border-neutral-800 rounded-lg"
            >
              <p className="text-neutral-300 mb-2">Available for:</p>
              <ul className="space-y-2 text-neutral-400">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
                  Freelance Projects
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
                  Full-time Opportunities
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
                  Consulting & Mentoring
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-neutral-300 mb-2">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-100 focus:border-neutral-600 focus:outline-none transition-colors"
                  placeholder="pavan"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-neutral-300 mb-2">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-100 focus:border-neutral-600 focus:outline-none transition-colors"
                  placeholder="pavan@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-neutral-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-neutral-900 border border-neutral-800 rounded-lg text-neutral-100 focus:border-neutral-600 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me ..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full px-6 py-3 rounded-lg border transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed ${
                  submitStatus === 'success' 
                    ? 'bg-green-900/50 border-green-700 text-green-200' 
                    : 'bg-gradient-to-r from-neutral-700 to-neutral-800 text-white border-neutral-600 hover:border-neutral-400'
                }`}
              >
                <Send size={18} />
                {isSubmitting ? 'Sending...' : submitStatus === 'success' ? 'Message Sent!' : 'Send Message'}
              </motion.button>
              
              {submitStatus === 'success' && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-green-400 text-sm mt-2"
                >
                  ✓ I will catch you my friend
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
