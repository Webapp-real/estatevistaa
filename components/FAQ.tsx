'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    q: 'How does EstateVista use AI?',
    a: 'We use Google Gemini to auto-generate property descriptions, summarize neighborhoods, and match you with agents. It saves hours of research.',
  },
  {
    q: 'What are your fees?',
    a: 'Browsing and searching is 100% free. Sellers pay a standard commission only when your home sells. No hidden fees.',
  },
  {
    q: 'Can I schedule tours directly?',
    a: 'Yes. Click "Contact Agent" on any listing to request a tour. Agents typically respond within 2 hours.',
  },
  {
    q: 'Do you work outside the US?',
    a: 'We are currently US-only but expanding to Canada and UK in Q4 2026. Join our waitlist for updates.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="mx-auto max-w-3xl px-4 py-16">
      <h2 className="mb-2 text-center text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
      <p className="mb-8 text-center text-gray-600">Everything you need to know before your next move</p>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div key={index} className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <button
              onClick={() => setOpen(open === index ? null : index)}
              className="flex w-full items-center justify-between p-4 text-left font-semibold text-slate-900"
            >
              {faq.q}
              <ChevronDown className={`transition ${open === index ? 'rotate-180' : ''}`} size={20} />
            </button>
            {open === index && <p className="px-4 pb-4 text-gray-700">{faq.a}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
