"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navLinks = [
  { name: "About", href: "/about" },
  { name: "Resume", href: "/resume" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/skills" },
  { name: "Contact", href: "/contact" },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-100 via-green-100 to-white dark:from-blue-950 dark:via-green-950 dark:to-black">
      <nav className="flex justify-center gap-6 py-8">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="text-lg font-semibold text-blue-700 dark:text-green-300 hover:underline underline-offset-4 transition-colors"
          >
            {link.name}
          </Link>
        ))}
      </nav>
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-500 to-green-400 bg-clip-text text-transparent mb-6"
        >
          Jonathan Zhang's Personal Website
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-xl max-w-2xl text-gray-700 dark:text-gray-300 mb-8"
        >
          TODO INFO FILL: Welcome message or tagline about you as a software engineer.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-green-400 transition-colors font-semibold"
            >
              {link.name}
            </Link>
          ))}
        </motion.div>
      </main>
      <footer className="py-6 text-center text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Jonathan Zhang. All rights reserved.
      </footer>
    </div>
  );
}
