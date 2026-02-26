'use client';

import { motion } from 'framer-motion';

const highlights = [
  'Participated in AI Summit sessions and technical showcases focused on practical machine learning applications.',
  'Progressed from foundational web development to full stack architecture with performance-first deployment workflows.',
  'Built AI-enabled academic and product-oriented projects with emphasis on usability, scale, and maintainable code.'
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="px-4 py-20 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-5xl">
        <p className="text-xs tracking-[0.2em] text-accent">EXPERIENCE & ACHIEVEMENTS</p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Growth through building and learning</h2>

        <div className="mt-10 space-y-4">
          {highlights.map((item, idx) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass rounded-2xl p-5 text-sm leading-relaxed text-white/78"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
