import React from 'react'
import { Sparkles, Wand2, PenTool, MicVocal, Brain, ImageIcon, Code2, Search, Zap } from 'lucide-react'

const apps = [
  { title: 'ChatGPT', desc: 'General-purpose chat & coding help', tag: 'Assistant', icon: Brain, href: 'https://chat.openai.com' },
  { title: 'Midjourney', desc: 'Image generation for creatives', tag: 'Design', icon: ImageIcon, href: 'https://www.midjourney.com' },
  { title: 'Claude', desc: 'Long context research & writing', tag: 'Assistant', icon: Sparkles, href: 'https://claude.ai' },
  { title: 'Perplexity', desc: 'Answer engine with sources', tag: 'Research', icon: Search, href: 'https://www.perplexity.ai' },
  { title: 'Replit', desc: 'Collaborative coding workspace', tag: 'Dev', icon: Code2, href: 'https://replit.com' },
  { title: 'RunwayML', desc: 'Video magic & AI editing', tag: 'Video', icon: Zap, href: 'https://runwayml.com' },
]

export default function AppGrid() {
  return (
    <section id="apps" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-white">Curated AI Apps</h2>
        <span className="text-sm text-white/60">Personal picks by Boyd Intelligence</span>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {apps.map((app) => (
          <a key={app.title} href={app.href} target="_blank" rel="noreferrer"
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-white backdrop-blur transition hover:bg-white/10">
            <div className="mb-4 flex items-center gap-3">
              <span className="rounded-lg bg-white/10 p-2">
                <app.icon className="h-5 w-5 text-white" />
              </span>
              <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs text-white/70">{app.tag}</span>
            </div>
            <h3 className="text-lg font-semibold">{app.title}</h3>
            <p className="mt-1 text-sm text-white/70">{app.desc}</p>
            <div className="mt-6 text-sm text-emerald-300 opacity-0 transition group-hover:opacity-100">Visit →</div>
          </a>
        ))}
      </div>
    </section>
  )
}
