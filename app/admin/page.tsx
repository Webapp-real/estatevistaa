'use client'

import { useState } from 'react'

export default function AdminPage() {
  const [form, setForm] = useState({ title: '', location: '', price: '', description: '' })
  const [status, setStatus] = useState('')

  const handleGenerate = async () => {
    setStatus('Generating description...')
    const response = await fetch('/api/generate-description', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt: `Create a polished luxury real estate listing description for ${form.title || 'a premium property'} in ${form.location || 'a sought-after neighborhood'}.`,
      }),
    })

    const data = await response.json()
    setForm((prev) => ({ ...prev, description: data.description || '' }))
    setStatus('Description generated successfully.')
  }

  return (
    <main className="mx-auto max-w-6xl px-6 py-16 lg:px-8">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Admin Panel</p>
        <h1 className="mt-2 text-4xl font-semibold text-slate-900">List a property and generate its story</h1>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_0.8fr]">
        <form className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
          <div className="grid gap-4">
            <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Property title" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
            <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Location" value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} />
            <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Price" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} />
            <textarea className="min-h-40 rounded-xl border border-slate-200 px-4 py-3" placeholder="Property description" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} />
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <button type="button" onClick={handleGenerate} className="rounded-full bg-sky-600 px-5 py-3 font-semibold text-white">Generate AI Description</button>
            <button type="submit" className="rounded-full border border-slate-300 px-5 py-3 font-semibold text-slate-700">Publish Listing</button>
          </div>
          {status ? <p className="mt-4 text-sm text-slate-600">{status}</p> : null}
        </form>

        <div className="rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
          <h2 className="text-2xl font-semibold">AI listing assistant</h2>
          <p className="mt-4 text-slate-300">Use Gemini to generate persuasive copy for premium listings and publish them with confidence.</p>
          <ul className="mt-6 space-y-3 text-sm text-slate-300">
            <li>• High-end property storytelling</li>
            <li>• Faster listing creation</li>
            <li>• Consistent voice across your catalog</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
