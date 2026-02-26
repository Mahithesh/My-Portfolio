'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '@/lib/data';

export default function SkillsSection() {
  return (
    <section id="skills" className="px-4 py-20 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs tracking-[0.2em] text-accent">SKILLS</p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Technologies I build with</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {skillCategories.map((category, idx) => (
            <motion.article
              key={category.title}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="text-lg font-medium text-accent2">{category.title}</h3>
              <ul className="mt-4 space-y-2 text-sm text-white/75">
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
