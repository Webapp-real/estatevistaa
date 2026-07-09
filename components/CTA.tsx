import Link from 'next/link'

export default function CTA() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-r from-slate-950 via-slate-900 to-sky-900 px-6 py-14 text-center text-white shadow-[0_24px_80px_rgba(15,23,42,0.2)] sm:px-10">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to find your dream home?</h2>
        <p className="mx-auto mb-8 max-w-2xl text-slate-300">
          Join 1,100+ happy clients who found their perfect match with EstateVista.
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/search" className="rounded-full bg-white px-6 py-3 font-semibold text-slate-900 transition hover:bg-slate-100">
            Start Searching
          </Link>
          <Link href="/login" className="rounded-full border border-white/25 px-6 py-3 font-semibold transition hover:bg-white/10">
            List Your Property
          </Link>
        </div>
      </div>
    </section>
  )
}
