import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface CoinFlipTransitionProps {
  onComplete: () => void;
}

export function CoinFlipTransition({ onComplete }: CoinFlipTransitionProps) {
  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden">
      {/* Animated background flash */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-r from-neutral-600/20 via-neutral-400/30 to-neutral-600/20"
      />

      {/* Coin flip animation container */}
      <div className="relative" style={{ perspective: "1000px" }}>
        <motion.div
          initial={{ rotateY: 0, scale: 1 }}
          animate={{
            rotateY: [0, 1080, 1080], // 3 full rotations (360 * 3)
            scale: [1, 1.5, 0.3],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            times: [0, 0.7, 1],
          }}
          onAnimationComplete={onComplete}
          className="relative"
          style={{
            transformStyle: "preserve-3d",
          }}
        >
          {/* Front face of coin */}
          <div
            className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-neutral-500"
            style={{
              backfaceVisibility: "hidden",
            }}
          >
            <ImageWithFallback
              src="https://avatars.githubusercontent.com/u/180744442?v=4"
              alt="Portfolio"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Back face of coin */}
          <div
            className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-neutral-500 bg-gradient-to-br from-neutral-700 via-neutral-600 to-neutral-800 flex items-center justify-center"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div className="text-center">
              <div className="text-6xl mb-2">🧑🏻‍💻</div>
              <div className="text-neutral-200 text-xl">Portfolio</div>
            </div>
          </div>
        </motion.div>

        {/* Particle explosion effect */}
        {[...Array(20)].map((_, i) => {
          const angle = (i * Math.PI * 2) / 20;
          const distance = 200;
          return (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-3 h-3 bg-gradient-to-r from-neutral-400 to-neutral-600 rounded-full"
              initial={{ x: 0, y: 0, opacity: 0, scale: 0 }}
              animate={{
                x: Math.cos(angle) * distance,
                y: Math.sin(angle) * distance,
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: 1.5,
                delay: 0.5 + i * 0.02,
                ease: "easeOut",
              }}
            />
          );
        })}
      </div>

      {/* Glowing rings expanding outward */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-neutral-500"
          initial={{ width: 300, height: 300, opacity: 0 }}
          animate={{
            width: 800,
            height: 800,
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 1.5,
            delay: 0.3 + i * 0.2,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}
