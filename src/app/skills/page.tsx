"use client";
import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <section className="min-h-[40vh] flex flex-col items-center justify-center text-center py-16 px-4">
      <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
        Skills & Technologies
      </motion.h2>
      <motion.ul initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }} className="flex flex-wrap gap-4 justify-center mt-4 text-gray-700 dark:text-gray-300">
        <li>TODO INFO FILL: JavaScript</li>
        <li>TODO INFO FILL: TypeScript</li>
        <li>TODO INFO FILL: React</li>
        <li>TODO INFO FILL: Node.js</li>
        {/* Add more skills as needed */}
      </motion.ul>
    </section>
  );
}
