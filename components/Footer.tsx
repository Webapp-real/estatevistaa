export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-6 text-sm text-slate-600 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>© 2026 EstateVista. Premium real estate experiences.</p>
        <div className="flex gap-4">
          <a href="/search" className="hover:text-sky-600">Search</a>
          <a href="/dashboard" className="hover:text-sky-600">Dashboard</a>
          <a href="/login" className="hover:text-sky-600">Login</a>
        </div>
      </div>
    </footer>
  )
}
