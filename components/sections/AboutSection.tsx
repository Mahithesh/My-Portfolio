'use client';

import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="px-4 py-20 sm:px-8 lg:px-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto max-w-4xl rounded-3xl border border-border bg-card p-8 backdrop-blur-lg sm:p-12"
      >
        <p className="text-xs tracking-[0.2em] text-accent">ABOUT ME</p>
        <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">Building meaningful products with code and intelligence.</h2>
        <p className="mt-6 text-sm leading-relaxed text-white/75 sm:text-base">
          I am Mahithesh, a BTech CSE (AI & ML) 3rd-year student from India. I build full stack applications with modern web technologies and combine them with practical AI workflows.
          My core focus is designing scalable systems, delivering clean user experiences, and transforming complex problems into production-ready solutions.
        </p>
      </motion.div>
    </section>
  );
}
