const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Bought in Austin, TX',
    text: 'EstateVista made finding our dream home effortless. The AI summaries saved us hours of reading.',
    photo: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200',
  },
  {
    name: 'Michael Chen',
    role: 'Sold in Malibu, CA',
    text: 'Listed with EstateVista and had 3 offers in 5 days. The agent matching was perfect.',
    photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200',
  },
  {
    name: 'Priya Patel',
    role: 'First-time Buyer',
    text: 'The mortgage calculator + neighborhood insights gave me total confidence. 10/10.',
    photo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
  },
]

export default function Testimonials() {
  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.04)] sm:p-10">
        <h2 className="mb-2 text-center text-2xl font-bold text-slate-900">Loved by Homeowners</h2>
        <p className="mb-8 text-center text-gray-600">Real stories from real clients</p>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="mb-4 text-gray-700">&quot;{testimonial.text}&quot;</p>
              <div className="flex items-center gap-3">
                <img src={testimonial.photo} alt={testimonial.name} className="h-10 w-10 rounded-full object-cover" />
                <div>
                  <p className="text-sm font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
