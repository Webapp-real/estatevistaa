import PropertyCard from './PropertyCard'

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
  {
    title: 'Garden Estate',
    location: 'Austin, Texas',
    price: '$860K',
    beds: 5,
    baths: 4,
    sqft: 4100,
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80',
  },
]

export default function FeaturedProperties() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Featured Homes</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Curated properties tailored to your lifestyle</h2>
        </div>
        <a href="/search" className="text-sm font-semibold text-sky-600 hover:text-sky-700">
          View all listings →
        </a>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
        {properties.map((property) => (
          <PropertyCard key={property.title} property={property} />
        ))}
      </div>
    </section>
  )
}
