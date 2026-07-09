import PropertyCard from '@/components/PropertyCard'

const properties = [
  {
    title: 'Oceanview Villa',
    location: 'Malibu, California',
    price: '$1.2M',
    beds: 4,
    baths: 3,
    sqft: 3200,
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Skyline Penthouse',
    location: 'Miami, Florida',
    price: '$980K',
    beds: 3,
    baths: 2,
    sqft: 2400,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=900&q=80',
  },
]

export default function SearchPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Property Search</p>
          <h1 className="mt-2 text-4xl font-semibold text-slate-900">Find homes that match your taste</h1>
        </div>
        <div className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600">34 homes found</div>
      </div>

      <div className="mb-8 grid gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:grid-cols-4">
        <input className="rounded-xl border border-slate-200 px-4 py-3" placeholder="Location" />
        <select className="rounded-xl border border-slate-200 px-4 py-3"><option>Any Type</option></select>
        <select className="rounded-xl border border-slate-200 px-4 py-3"><option>Any Price</option></select>
        <button className="rounded-xl bg-sky-600 px-4 py-3 font-semibold text-white">Apply Filters</button>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {properties.map((property) => (
          <PropertyCard key={property.title} property={property} />
        ))}
      </div>
    </main>
  )
}
