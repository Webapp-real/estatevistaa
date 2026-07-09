'use client'
import { supabase } from '@/lib/supabase/client'
import { useState } from 'react'

export default function ContactForm({ propertyId }: { propertyId: string }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    await supabase.from('inquiries').insert([{...form, property_id: propertyId}])
    setSent(true)
  }

  if (sent) return <p className="text-green-600">Message sent! Agent will contact you soon.</p>

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input 
        placeholder="Name" 
        value={form.name} 
        onChange={e => setForm({...form, name: e.target.value})} 
        className="w-full border rounded px-3 py-2 text-sm" 
        required 
      />
      <input 
        type="email" 
        placeholder="Email" 
        value={form.email} 
        onChange={e => setForm({...form, email: e.target.value})} 
        className="w-full border rounded px-3 py-2 text-sm" 
        required 
      />
      <input 
        placeholder="Phone" 
        value={form.phone} 
        onChange={e => setForm({...form, phone: e.target.value})} 
        className="w-full border rounded px-3 py-2 text-sm" 
      />
      <textarea 
        placeholder="I'm interested in this property..." 
        value={form.message} 
        onChange={e => setForm({...form, message: e.target.value})} 
        className="w-full border rounded px-3 py-2 text-sm h-20" 
        required 
      />
      <button type="submit" className="w-full bg-black text-white py-2 rounded text-sm">
        Send Message
      </button>
    </form>
  )
}