import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronDown } from "lucide-react";

interface LandingPageProps {
  onEnter: () => void;
}

export function LandingPage({ onEnter }: LandingPageProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-neutral-600/20 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-neutral-500/20 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center px-6">
        {/* Animated text above photo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl mb-4 bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-600 bg-clip-text text-transparent">
            Welcome to My Portfolio
          </h1>
          <p className="text-neutral-400 text-lg">Click the image to enter</p>
        </motion.div>

        {/* Clickable photo with animation */}
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          onClick={onEnter}
          className="relative group cursor-pointer focus:outline-none"
        >
          {/* Outer glow ring */}
          <motion.div
            className="absolute inset-0 rounded-full"
            animate={{
              boxShadow: [
                "0 0 40px rgba(192, 192, 192, 0.3)",
                "0 0 80px rgba(192, 192, 192, 0.6)",
                "0 0 40px rgba(192, 192, 192, 0.3)",
              ],
            }}
            transition={{ duration: 3, repeat: Infinity }}
          />

          {/* Photo container */}
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-neutral-600 group-hover:border-neutral-400 transition-all duration-300">
            <ImageWithFallback
              src="https://media.licdn.com/dms/image/v2/D4D03AQH4k-dvdIawbQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1724252015811?e=1765411200&v=beta&t=wFxP8JdiCvaLo2WEMKxIA0Xmf8cUbnw48zwZExmaGoM"
              alt="Portfolio"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
            
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-8">
              <span className="text-white text-lg">Click to Enter</span>
            </div>
          </div>

          {/* Rotating particles around photo */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-neutral-400 rounded-full"
              style={{
                top: `${50 + 45 * Math.cos((i * Math.PI * 2) / 12)}%`,
                left: `${50 + 45 * Math.sin((i * Math.PI * 2) / 12)}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 1, 0.3],
                rotate: [0, 360],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          className="mt-12 flex flex-col items-center text-neutral-500"
        >
          <ChevronDown size={24} />
        </motion.div>
      </div>
    </div>
  );
}
