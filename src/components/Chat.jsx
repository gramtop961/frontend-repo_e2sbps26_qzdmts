import React, { useEffect, useMemo, useRef, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Chat() {
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hey! Tell me what you do and I\'ll recommend the right AI apps.' }
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const listRef = useRef(null)

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages])

  const sendMessage = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMsg = { role: 'user', content: input.trim() }
    setMessages((m) => [...m, userMsg])
    setInput('')
    setLoading(true)

    try {
      const res = await fetch(`${API_BASE}/api/recommend`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userMsg.content })
      })
      const data = await res.json()
      setMessages((m) => [...m, { role: 'assistant', content: data.answer }])
    } catch (err) {
      setMessages((m) => [...m, { role: 'assistant', content: 'Sorry, something went wrong. Try again.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="chat" className="relative z-10 mx-auto max-w-3xl px-6 pb-24">
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-semibold text-white">Ask Boyd</h2>
        <p className="text-sm text-white/60">Describe your role or task, and I\'ll suggest the best tools.</p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
        <div ref={listRef} className="max-h-[420px] overflow-y-auto p-4 space-y-3">
          {messages.map((m, i) => (
            <div key={i} className={m.role === 'assistant' ? 'text-white/90' : 'text-white'}>
              <div className={`inline-block rounded-xl px-4 py-2 ${m.role === 'assistant' ? 'bg-white/5 border border-white/10' : 'bg-emerald-500 text-[#070713]'}`}>
                {m.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="text-white/80">
              <div className="inline-block rounded-xl bg-white/5 px-4 py-2">Thinking…</div>
            </div>
          )}
        </div>
        <form onSubmit={sendMessage} className="flex items-center gap-3 border-t border-white/10 p-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="e.g., I\'m a content creator who edits short videos"
            className="flex-1 rounded-xl bg-white/10 px-4 py-3 text-white placeholder:text-white/50 outline-none"
          />
          <button
            type="submit"
            disabled={loading}
            className="rounded-xl bg-white px-4 py-3 text-sm font-medium text-[#070713] disabled:opacity-60"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  )
}
