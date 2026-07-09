type PropertyCardProps = {
  image: string
  title: string
  location: string
  price: string
  beds: number
  baths: number
  sqft: number
}

export default function PropertyCard({ image, title, location, price, beds, baths, sqft }: PropertyCardProps) {
  return (
    <article className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <img src={image} alt={title} className="h-56 w-full object-cover" />
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-1 text-sm text-slate-500">{location}</p>
          </div>
          <span className="rounded-full bg-sky-50 px-3 py-1 text-sm font-semibold text-sky-700">{price}</span>
        </div>

        <div className="mt-4 flex items-center gap-4 text-sm text-slate-600">
          <span>🛏 {beds} Beds</span>
          <span>🛁 {baths} Baths</span>
          <span>📐 {sqft.toLocaleString()} sqft</span>
        </div>
      </div>
    </article>
  )
}
