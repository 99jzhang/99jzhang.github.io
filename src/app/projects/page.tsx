"use client";
import { motion } from 'framer-motion';

export default function Projects() {
  return (
    <section className="min-h-[60vh] flex flex-col items-center justify-center text-center py-16 px-4">
      <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
        Projects
      </motion.h2>
      <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }} className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-5xl w-full">
        {/* TODO INFO FILL: Add your projects here. Example below: */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h3 className="text-xl font-semibold mb-2">TODO INFO FILL: Project Name</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-2">Short project description.</p>
          <a href="#" className="text-blue-500 hover:underline">View Project</a>
        </div>
      </motion.div>
    </section>
  );
}
