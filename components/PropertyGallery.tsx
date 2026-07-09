const images = [
  'https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1000&q=80',
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1000&q=80',
]

export default function PropertyGallery() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mb-8 max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Property Gallery</p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-900">Luxury spaces with unforgettable views</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <img src={images[0]} alt="Luxury exterior" className="h-80 w-full rounded-3xl object-cover" />
        <div className="grid gap-4 sm:grid-cols-2">
          <img src={images[1]} alt="Modern living room" className="h-38 w-full rounded-3xl object-cover" />
          <img src={images[2]} alt="Elegant kitchen" className="h-38 w-full rounded-3xl object-cover" />
          <img src={images[3]} alt="Bright bedroom" className="h-38 w-full rounded-3xl object-cover sm:col-span-2" />
        </div>
      </div>
    </section>
  )
}
