import React from 'react'
import Hero from './components/Hero'
import AppGrid from './components/AppGrid'
import Chat from './components/Chat'

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#070713] text-white">
      <Hero />
      <AppGrid />
      <Chat />
      <footer className="border-t border-white/10 py-8 text-center text-white/50">
        © {new Date().getFullYear()} Boyd Intelligence — Crafted with ⚡
      </footer>
    </div>
  )
}
