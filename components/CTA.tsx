import Link from 'next/link'

export default function CTA() {
  return (
    <section className="bg-black px-4 py-16 text-center text-white">
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to find your dream home?</h2>
        <p className="mb-8 text-gray-300">Join 1,100+ happy clients who found their perfect match with EstateVista.</p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/search" className="rounded-lg bg-white px-6 py-3 font-semibold text-black">
            Start Searching
          </Link>
          <Link href="/login" className="rounded-lg border border-white px-6 py-3 font-semibold">
            List Your Property
          </Link>
        </div>
      </div>
    </section>
  )
}
