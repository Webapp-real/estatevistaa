import MortgageCalculator from '@/components/MortgageCalculator'
import PropertyGallery from '@/components/PropertyGallery'

export default function PropertyDetailPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Featured Listing</p>
            <h1 className="mt-2 text-4xl font-semibold text-slate-900">Modern Coastal Estate</h1>
            <p className="mt-3 text-slate-600">Malibu, California • 4 Beds • 3 Baths • 3,200 sqft</p>
          </div>
          <div className="rounded-full bg-sky-50 px-4 py-2 text-lg font-semibold text-sky-700">$1.2M</div>
        </div>

        <div className="mt-8">
          <PropertyGallery />
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">Property Overview</h2>
            <p className="mt-4 text-slate-600">
              This striking residence combines panoramic coastal views with bespoke interiors, a chef&apos;s kitchen, and a private terrace perfect for entertaining.
            </p>
          </div>
          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-6">
            <h3 className="text-xl font-semibold text-slate-900">Book a tour</h3>
            <p className="mt-3 text-sm text-slate-600">Schedule a private viewing with our team today.</p>
            <button className="mt-6 rounded-full bg-sky-600 px-5 py-3 font-semibold text-white">Request Tour</button>
          </div>
        </div>
      </div>

      <MortgageCalculator />
    </main>
  )
}
