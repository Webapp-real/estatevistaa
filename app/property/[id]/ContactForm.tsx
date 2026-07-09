'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold text-slate-900">Contact the agent</h3>
      <div className="mt-4 space-y-3">
        <input className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Your name" />
        <input className="w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Email address" />
        <textarea className="min-h-28 w-full rounded-xl border border-slate-200 px-4 py-3" placeholder="Tell us about your interest" />
      </div>
      <button className="mt-5 rounded-full bg-sky-600 px-5 py-3 font-semibold text-white">Send Inquiry</button>
      {submitted ? <p className="mt-4 text-sm text-emerald-600">Your inquiry has been sent.</p> : null}
    </form>
  )
}
