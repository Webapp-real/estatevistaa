'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'

export default function Header() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser()
      setUser(data.user)
    }

    getUser()

    const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => authListener.subscription.unsubscribe()
  }, [supabase])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-600 text-lg font-bold text-white">
            E
          </div>
          <div>
            <p className="text-lg font-semibold text-slate-900">EstateVista</p>
            <p className="text-sm text-slate-500">Premium Properties</p>
          </div>
        </Link>

        <div className="hidden flex-1 items-center justify-center lg:flex">
          <label className="flex w-full max-w-xl items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-4 py-2 shadow-sm">
            <span className="text-slate-400">⌕</span>
            <input
              type="text"
              placeholder="Search homes, cities, or neighborhoods"
              className="w-full bg-transparent text-sm outline-none"
            />
          </label>
        </div>

        <div className="flex items-center gap-3">
          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <Link href="/search" className="hover:text-sky-600">Search</Link>
            <Link href="/search" className="hover:text-sky-600">Listings</Link>
            <Link href="/#about" className="hover:text-sky-600">About</Link>
          </nav>

          {user ? (
            <div className="flex items-center gap-3">
              <Link href="/dashboard" className="text-sm font-medium text-slate-700 hover:text-sky-600">
                Dashboard
              </Link>
              {user.email === 'admin@estatevista.com' && (
                <Link href="/admin" className="text-sm font-medium text-slate-700 hover:text-sky-600">
                  Admin
                </Link>
              )}
              <button
                onClick={handleLogout}
                className="rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              href="/login"
              className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}
