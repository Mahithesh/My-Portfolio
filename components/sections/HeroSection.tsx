'use client';

import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';

const HeroScene = dynamic(() => import('@/components/three/HeroScene'), {
  ssr: false,
  loading: () => (
    <div className="grid h-[370px] place-items-center rounded-3xl border border-border bg-card">
      <div className="h-12 w-12 animate-spin rounded-full border-2 border-accent border-t-transparent" />
    </div>
  )
});

const typingWords = ['Full Stack Developer', 'AI Engineer', 'Problem Solver'];

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-4 pb-24 pt-28 sm:px-8 lg:px-16">
      <div className="pointer-events-none absolute inset-0 bg-hero-gradient" />
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 inline-block rounded-full border border-accent/30 bg-accent/10 px-4 py-1 text-xs tracking-[0.18em] text-accent"
          >
            FULL STACK x AI
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl"
          >
            Hi, I am{' '}
            <span className="bg-gradient-to-r from-accent to-accent2 bg-clip-text text-transparent">
              Mahithesh
            </span>
          </motion.h1>

          <div className="relative mt-5 h-8 overflow-hidden text-lg text-white/80 sm:text-xl">
            <motion.div
              animate={{ y: ['0%', '-100%', '-200%', '0%'] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="space-y-1"
            >
              {typingWords.map((word) => (
                <p key={word} className="h-8">
                  {word}
                </p>
              ))}
            </motion.div>
          </div>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
            Full Stack Developer and AI & ML enthusiast focused on intelligent products, scalable systems, and thoughtful user experiences.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-medium text-black transition hover:translate-y-[-2px]"
            >
              View Projects <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-medium text-white transition hover:border-accent/60"
            >
              Contact Me <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-5 top-6 z-20 hidden w-52 animate-float rounded-xl p-3 text-xs text-white/80 glow-code md:block">
            <p className="text-accent">const model = trainAI(data);</p>
            <p className="text-white/65">deploy(model, scalableStack)</p>
          </div>
          <div className="absolute -right-4 bottom-8 z-20 hidden w-56 animate-float rounded-xl p-3 text-xs text-white/80 glow-code md:block [animation-delay:1.4s]">
            <p className="text-accent2">if (problem) solveWithCode()</p>
            <p className="text-white/65">optimize(); iterate();</p>
          </div>
          <div className="glass h-[370px] overflow-hidden rounded-3xl shadow-glow sm:h-[430px]">
            <HeroScene />
          </div>
        </div>
      </div>
    </section>
  );
}
