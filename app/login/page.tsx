'use client'

import { useState } from 'react'

export default function LoginPage() {
  const [mode, setMode] = useState<'login' | 'signup'>('login')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <main className="mx-auto flex min-h-[80vh] max-w-5xl items-center justify-center px-6 py-16 lg:px-8">
      <div className="grid w-full gap-8 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[1.5rem] bg-slate-900 p-8 text-white">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-400">Welcome</p>
          <h1 className="mt-3 text-3xl font-semibold">Join EstateVista</h1>
          <p className="mt-4 text-slate-300">Sign in to save favorites, request tours, and manage your inquiries.</p>
        </div>

        <div>
          <div className="flex rounded-full border border-slate-200 p-1">
            <button onClick={() => setMode('login')} className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold ${mode === 'login' ? 'bg-sky-600 text-white' : 'text-slate-600'}`}>Login</button>
            <button onClick={() => setMode('signup')} className={`flex-1 rounded-full px-4 py-2 text-sm font-semibold ${mode === 'signup' ? 'bg-sky-600 text-white' : 'text-slate-600'}`}>Sign Up</button>
          </div>

          <div className="mt-6 space-y-4">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email address" className="w-full rounded-xl border border-slate-200 px-4 py-3" />
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" className="w-full rounded-xl border border-slate-200 px-4 py-3" />
            <button className="w-full rounded-xl bg-sky-600 px-4 py-3 font-semibold text-white">{mode === 'login' ? 'Log In' : 'Create Account'}</button>
          </div>
        </div>
      </div>
    </main>
  )
}
