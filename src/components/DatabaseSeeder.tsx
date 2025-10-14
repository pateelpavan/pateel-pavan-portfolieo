import { motion, AnimatePresence } from "motion/react";
import { Database, Check } from "lucide-react";
import { useState, useEffect } from "react";
import { seedDatabase } from "../utils/api";

export function DatabaseSeeder() {
  const [isSeeding, setIsSeeding] = useState(false);
  const [isSeeded, setIsSeeded] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (isSeeded) {
      setShowSuccess(true);
      // Hide the success message and button after 3 seconds
      const timer = setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSeeded]);

  const handleSeed = async () => {
    setIsSeeding(true);
    try {
      await seedDatabase();
      setIsSeeded(true);
      // Show success message and hide after 3 seconds
      setTimeout(() => {
        window.location.reload(); // Reload to show the new data
      }, 2000);
    } catch (error) {
      console.error("Error seeding database:", error);
      alert("Failed to seed database. Please try again.");
      setIsSeeding(false);
    }
  };

  // Don't show anything if seeded and success message has disappeared
  if (isSeeded && !showSuccess) {
    return null;
  }

  return (
    <AnimatePresence>
      {!isSeeded ? (
        <motion.button
          key="seed-button"
          onClick={handleSeed}
          disabled={isSeeding}
          whileHover={{ scale: isSeeding ? 1 : 1.05 }}
          whileTap={{ scale: isSeeding ? 1 : 0.95 }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 right-6 z-50 bg-neutral-800/80 backdrop-blur-md border border-neutral-700 hover:border-neutral-500 rounded-lg px-4 py-3 flex items-center gap-2 text-neutral-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Database size={20} />
          <span>{isSeeding ? 'Seeding...' : 'Seed Database'}</span>
        </motion.button>
      ) : (
        <motion.div
          key="success-message"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <div className="bg-green-900/80 backdrop-blur-md border border-green-700 rounded-lg px-4 py-3 flex items-center gap-2 text-green-200">
            <Check size={20} />
            <span>Database seeded! Refreshing...</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
