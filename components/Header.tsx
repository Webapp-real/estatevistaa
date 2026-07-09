'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase/client'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Header() {
  const [user, setUser] = useState<any>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
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
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 via-slate-700 to-sky-600 text-lg font-bold text-white shadow-lg">
            E
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight text-slate-900">EstateVista</p>
            <p className="text-sm text-slate-500">Luxury Real Estate</p>
          </div>
        </Link>

        <div className="hidden flex-1 items-center justify-center lg:flex">
          <label className="flex w-full max-w-xl items-center gap-2 rounded-full border border-slate-200 bg-slate-50/80 px-4 py-2 shadow-sm">
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
            <div className="group relative">
              <button className="flex items-center gap-1 transition hover:text-sky-600">
                Buyers
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 top-8 hidden w-52 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl group-hover:block">
                <Link href="/search" className="block rounded-xl px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-sky-600">
                  Find a Home
                </Link>
                <Link href="/contact" className="block rounded-xl px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-sky-600">
                  Schedule a Tour
                </Link>
                <Link href="/search" className="block rounded-xl px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-sky-600">
                  Neighborhood Insights
                </Link>
              </div>
            </div>
            <div className="group relative">
              <button className="flex items-center gap-1 transition hover:text-sky-600">
                Renters
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 top-8 hidden w-52 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl group-hover:block">
                <Link href="/search" className="block rounded-xl px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-sky-600">
                  Rental Listings
                </Link>
                <Link href="/contact" className="block rounded-xl px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-sky-600">
                  Ask About Rentals
                </Link>
                <Link href="/contact" className="block rounded-xl px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-sky-600">
                  Move-In Support
                </Link>
              </div>
            </div>
            <div className="group relative">
              <button className="flex items-center gap-1 transition hover:text-sky-600">
                Sell
                <ChevronDown size={16} />
              </button>
              <div className="absolute left-0 top-8 hidden w-52 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl group-hover:block">
                <Link href="/contact" className="block rounded-xl px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-sky-600">
                  Request Valuation
                </Link>
                <Link href="/login" className="block rounded-xl px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-sky-600">
                  List Your Property
                </Link>
              </div>
            </div>
            <Link href="/#about" className="transition hover:text-sky-600">
              About
            </Link>
            <Link href="/contact" className="transition hover:text-sky-600">
              Contact
            </Link>
          </nav>

          <button
            className="rounded-full border border-slate-200 p-2 text-slate-700 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

          {user ? (
            <div className="flex items-center gap-3">
              <Link href="/dashboard" className="text-sm font-medium text-slate-700 transition hover:text-sky-600">
                Dashboard
              </Link>
              {user.email === 'admin@estatevista.com' && (
                <Link href="/admin" className="text-sm font-medium text-slate-700 transition hover:text-sky-600">
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

      {isMenuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-4 md:hidden lg:px-8">
          <div className="flex flex-col gap-3 text-sm font-medium text-slate-700">
            <Link href="/search" className="rounded-xl px-3 py-2 hover:bg-slate-50 hover:text-sky-600" onClick={() => setIsMenuOpen(false)}>
              Buyers: Find a Home
            </Link>
            <Link href="/search" className="rounded-xl px-3 py-2 hover:bg-slate-50 hover:text-sky-600" onClick={() => setIsMenuOpen(false)}>
              Renters: Rental Listings
            </Link>
            <Link href="/contact" className="rounded-xl px-3 py-2 hover:bg-slate-50 hover:text-sky-600" onClick={() => setIsMenuOpen(false)}>
              Schedule a Tour
            </Link>
            <Link href="/contact" className="rounded-xl px-3 py-2 hover:bg-slate-50 hover:text-sky-600" onClick={() => setIsMenuOpen(false)}>
              Request Valuation
            </Link>
            <Link href="/login" className="rounded-xl px-3 py-2 hover:bg-slate-50 hover:text-sky-600" onClick={() => setIsMenuOpen(false)}>
              List Your Property
            </Link>
            <Link href="/#about" className="rounded-xl px-3 py-2 hover:bg-slate-50 hover:text-sky-600" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}
