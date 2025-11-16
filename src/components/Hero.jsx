import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-[#070713] text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#070713]/30 to-[#070713] pointer-events-none" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 pt-28 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/80 backdrop-blur"
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
          Boyd Intelligence
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 bg-gradient-to-b from-white to-white/70 bg-clip-text text-5xl font-semibold leading-[1.1] text-transparent sm:text-6xl md:text-7xl"
        >
          Your AI Co‑Pilot for Modern Workflows
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-6 max-w-2xl text-balance text-lg text-white/70"
        >
          Discover, compare, and deploy the best AI apps. Curated picks, clean design, and a built‑in assistant to guide your stack.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a href="#apps" className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-[#070713] shadow-xl shadow-emerald-500/10 transition hover:scale-[1.02] hover:shadow-emerald-500/20">
            Explore Curations
          </a>
          <a href="#chat" className="rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur transition hover:bg-white/10">
            Ask the Assistant
          </a>
        </motion.div>
      </div>
    </section>
  )
}
