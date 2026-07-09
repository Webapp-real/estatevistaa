'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-primary">
            EstateVista
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            <Link href="/search" className="font-medium text-gray-700 hover:text-primary">
              Buy
            </Link>
            <Link href="/sell" className="font-medium text-gray-700 hover:text-primary">
              Sell
            </Link>
            <Link href="/contact" className="font-medium text-gray-700 hover:text-primary">
              Contact
            </Link>
            <Link href="/admin" className="btn-primary">
              Login
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-gray-700 md:hidden">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="space-y-1 border-t pb-4 md:hidden">
            <Link href="/search" className="block py-3 font-medium text-gray-700">
              Buy
            </Link>
            <Link href="/sell" className="block py-3 font-medium text-gray-700">
              Sell
            </Link>
            <Link href="/contact" className="block py-3 font-medium text-gray-700">
              Contact
            </Link>
            <Link href="/admin" className="mt-2 block rounded-lg bg-primary px-4 py-3 text-center text-white">
              Login
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
