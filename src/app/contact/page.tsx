"use client";
import { motion } from 'framer-motion';

export default function Contact() {
  return (
    <section className="min-h-[40vh] flex flex-col items-center justify-center text-center py-16 px-4">
      <motion.h2 initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent">
        Contact
      </motion.h2>
      <motion.p initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.8 }} className="text-lg text-gray-700 dark:text-gray-300 mb-4">
        TODO INFO FILL: Add your email, LinkedIn, GitHub, or other contact info here.
      </motion.p>
    </section>
  );
}
