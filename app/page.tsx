import Link from 'next/link'
import { createServerSupabaseClient } from '@/lib/supabase/server'
import PropertyCard from '@/components/PropertyCard'
import SearchBar from '@/components/SearchBar'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import WhyEstateVista from '@/components/WhyEstateVista'

export default async function HomePage() {
  const supabase = await createServerSupabaseClient()

  let properties: Array<any> = []
  let agents: Array<any> = []

  try {
    const { data } = await supabase.from('properties').select('*').limit(3)
    properties = data ?? []
  } catch {
    properties = []
  }

  try {
    const { data } = await supabase.from('agents').select('*').limit(2)
    agents = data ?? []
  } catch {
    agents = []
  }

  return (
    <main>
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
              <Link href="/search" className="rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100">
                Browse Listings
              </Link>
              <Link href="/dashboard" className="rounded-full border border-white/30 px-6 py-3 font-semibold text-white transition hover:bg-white/10">
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
              <div className="mt-6">
                <SearchBar />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Featured Homes</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900">Curated properties tailored to your lifestyle</h2>
          </div>
          <Link href="/search" className="text-sm font-semibold text-sky-600 hover:text-sky-700">
            View all listings →
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {properties.length > 0 ? (
            properties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))
          ) : (
            <p className="text-sm text-slate-600">No listings are available right now. Please check back soon.</p>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="mb-8 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Meet Our Agents</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Trusted professionals for every milestone</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {agents.length > 0 ? (
            agents.map((agent) => (
              <div key={agent.id} className="rounded-[1.75rem] border border-slate-200 bg-white p-5 shadow-sm">
                <img src={agent.photo ?? agent.image} alt={agent.name} className="h-64 w-full rounded-[1.25rem] object-cover" />
                <h3 className="mt-5 text-xl font-semibold text-slate-900">{agent.name}</h3>
                <p className="mt-2 text-sm text-slate-600">{agent.license ?? agent.role}</p>
              </div>
            ))
          ) : (
            <p className="text-sm text-slate-600">Agent profiles will appear here once your data is connected.</p>
          )}
        </div>
      </section>

      <WhyEstateVista />
      <Testimonials />
      <FAQ />
      <CTA />
    </main>
  )
}
