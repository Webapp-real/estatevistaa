import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-sky-950 via-slate-900 to-sky-700">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.25),_transparent_45%)]" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
        <div className="max-w-2xl text-white">
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium backdrop-blur">
            Luxury homes. Smart search. Seamless experience.
          </p>
          <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Find your next address in the city you love.
          </h1>
          <p className="mt-6 text-lg text-slate-200">
            Explore handpicked listings, get AI-assisted property summaries, and discover mortgages that fit your goals.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/search"
              className="rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Browse Listings
            </Link>
            <Link
              href="/dashboard"
              className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              View Dashboard
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Homes Listed', value: '2.4k+' },
              { label: 'Happy Clients', value: '1.1k+' },
              { label: 'Average Rating', value: '4.9/5' },
            ].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur">
                <p className="text-2xl font-semibold">{stat.value}</p>
                <p className="mt-1 text-sm text-slate-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl backdrop-blur-xl">
          <div className="rounded-[1.5rem] bg-white p-6 text-slate-900">
            <h2 className="text-2xl font-semibold">Start your search</h2>
            <div className="mt-6 space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-600">Location</span>
                <input className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-sky-500" placeholder="Miami, FL" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-600">Property Type</span>
                <select className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:border-sky-500">
                  <option>Any</option>
                  <option>Villa</option>
                  <option>Apartment</option>
                  <option>Townhouse</option>
                </select>
              </label>
              <button className="w-full rounded-xl bg-sky-600 px-4 py-3 font-semibold text-white transition hover:bg-sky-700">
                Search Properties
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
