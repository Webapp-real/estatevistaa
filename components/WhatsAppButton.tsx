'use client'

import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const phone = '1234567890' // Replace with your WhatsApp number, no + or spaces
  const message = 'Hi EstateVista, I have a question about a property.'

  return (
    <a
      href={`https://wa.me/${phone}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition hover:bg-green-600"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  )
}
