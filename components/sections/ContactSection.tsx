'use client';

import { FormEvent, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Github, Linkedin, Send } from 'lucide-react';

const initialForm = {
  from_name: '',
  reply_to: '',
  message: ''
};

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS environment variables are missing.');
      }

      await emailjs.send(serviceId, templateId, form, { publicKey });
      setStatus('sent');
      setForm(initialForm);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="px-4 py-20 sm:px-8 lg:px-16">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
        <div>
          <p className="text-xs tracking-[0.2em] text-accent">CONTACT</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Let&apos;s build something meaningful</h2>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/72">
            Open to internships, collaborations, and challenging full stack or AI-focused projects.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="https://linkedin.com/in/mahithesh"
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
            <a
              href="https://github.com/mahithesh"
              target="_blank"
              rel="noreferrer"
              className="glass inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a
              href="/Mahithesh_Resume.txt"
              download
              className="inline-flex items-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-black"
            >
              Download Resume
            </a>
          </div>
        </div>

        <form onSubmit={onSubmit} className="glass rounded-2xl p-6 sm:p-8">
          <label className="text-sm text-white/75">Name</label>
          <input
            required
            value={form.from_name}
            onChange={(e) => setForm((prev) => ({ ...prev, from_name: e.target.value }))}
            className="mt-2 w-full rounded-lg border border-border bg-black/30 px-4 py-3 text-sm outline-none transition focus:border-accent/70"
          />

          <label className="mt-5 block text-sm text-white/75">Email</label>
          <input
            required
            type="email"
            value={form.reply_to}
            onChange={(e) => setForm((prev) => ({ ...prev, reply_to: e.target.value }))}
            className="mt-2 w-full rounded-lg border border-border bg-black/30 px-4 py-3 text-sm outline-none transition focus:border-accent/70"
          />

          <label className="mt-5 block text-sm text-white/75">Message</label>
          <textarea
            required
            rows={5}
            value={form.message}
            onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
            className="mt-2 w-full rounded-lg border border-border bg-black/30 px-4 py-3 text-sm outline-none transition focus:border-accent/70"
          />

          <button
            type="submit"
            disabled={status === 'sending'}
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-white/90 disabled:opacity-70"
          >
            {status === 'sending' ? 'Sending...' : 'Send Message'}
            <Send className="h-4 w-4" />
          </button>

          {status === 'sent' && <p className="mt-4 text-sm text-accent2">Message sent successfully.</p>}
          {status === 'error' && (
            <p className="mt-4 text-sm text-red-300">
              Could not send message. Verify EmailJS keys in environment variables.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
