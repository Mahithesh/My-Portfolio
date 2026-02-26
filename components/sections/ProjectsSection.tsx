'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '@/lib/data';

export default function ProjectsSection() {
  return (
    <section id="projects" className="px-4 py-20 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <p className="text-xs tracking-[0.2em] text-accent">PROJECTS</p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Selected work</h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="group glass rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <h3 className="text-lg font-semibold leading-tight">{project.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-white/72">{project.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span key={item} className="rounded-full border border-border bg-black/20 px-3 py-1 text-xs text-white/80">
                    {item}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-white/90 transition hover:border-accent/60"
                >
                  <Github className="h-4 w-4" /> GitHub
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm text-black transition hover:bg-white/90"
                >
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
