import Link from 'next/link'

export default function Header() {
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
            <Link href="/property" className="hover:text-sky-600">Listings</Link>
            <Link href="/about" className="hover:text-sky-600">About</Link>
          </nav>
          <Link
            href="/login"
            className="rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Login
          </Link>
        </div>
      </div>
    </header>
  )
}
