import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(115deg, rgba(2,6,23,0.96) 0%, rgba(15,23,42,0.82) 45%, rgba(30,41,59,0.74) 100%), url('https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1800&q=80')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.24),_transparent_35%)]" />

      <div className="relative mx-auto grid max-w-7xl gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-28">
        <div className="max-w-2xl text-white">
          <p className="mb-4 inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-sm font-medium tracking-[0.2em] text-slate-100 uppercase backdrop-blur">
            Luxury homes. Smart search. Seamless experience.
          </p>
          <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Discover refined living, expertly curated.
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-200">
            Explore exceptional listings, receive AI-assisted insights, and connect with elite agents who understand your lifestyle.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/search" className="rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100">
              Browse Listings
            </Link>
            <Link href="/contact" className="rounded-full border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
              Book a Consultation
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

        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.28)] backdrop-blur-xl">
          <div className="rounded-[1.5rem] bg-white p-6 text-slate-900">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Start your search</h2>
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-600">
                Premium
              </span>
            </div>
            <div className="space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-600">Location</span>
                <input className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-500" placeholder="Miami, FL" />
              </label>
              <label className="block">
                <span className="mb-2 block text-sm font-medium text-slate-600">Property Type</span>
                <select className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition focus:border-sky-500">
                  <option>Any</option>
                  <option>Villa</option>
                  <option>Apartment</option>
                  <option>Townhouse</option>
                </select>
              </label>
              <button className="w-full rounded-xl bg-slate-900 px-4 py-3 font-semibold text-white transition hover:bg-slate-700">
                Search Properties
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
