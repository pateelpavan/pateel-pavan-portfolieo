import { motion } from "motion/react";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-neutral-800">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-neutral-400 flex items-center gap-2"
          >
            Made with <Heart size={16} className="text-neutral-500 fill-neutral-500" /> by Pateel Pavan
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-neutral-500 text-sm"
          >
            © {new Date().getFullYear()} All rights reserved for pateel pavan.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
