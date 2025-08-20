"use client";
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center py-16 px-4">
      <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent mb-4">
        Jonathan Zhang
      </motion.h1>
      <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="text-lg max-w-2xl text-gray-700 dark:text-gray-300">
        TODO INFO FILL: Short personal/professional summary about yourself. Mention your background, interests, and what makes you unique as a software engineer.
      </motion.p>
    </section>
  );
}
