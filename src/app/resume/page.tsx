"use client";
import { motion } from 'framer-motion';

export default function Resume() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center py-16 px-4">
      <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
        Resume & Experience
      </motion.h2>
      <motion.a initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }} href="/resume.pdf" download className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-green-400 transition-colors font-semibold">
        Download Resume (PDF)
      </motion.a>
      <motion.ul initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.8 }} className="mt-8 space-y-4 text-left max-w-xl mx-auto text-gray-700 dark:text-gray-300">
        <li>TODO INFO FILL: List your work experience, education, and key skills here.</li>
      </motion.ul>
    </section>
  );
}
