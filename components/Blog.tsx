const posts = [
  {
    title: 'How to choose a neighborhood that fits your lifestyle',
    excerpt: 'Discover the key factors that matter most when relocating to a new city.',
    date: 'July 8, 2026',
  },
  {
    title: 'The future of AI in real estate search',
    excerpt: 'See how intelligent tools are reshaping how buyers discover their dream homes.',
    date: 'June 29, 2026',
  },
  {
    title: 'Top 5 upgrades that increase property value',
    excerpt: 'Simple improvements that make a strong impact on resale value and comfort.',
    date: 'June 15, 2026',
  },
]

export default function Blog() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="mb-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">From the Blog</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Insights for buyers, sellers, and investors</h2>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {posts.map((post) => (
          <article key={post.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-sky-600">{post.date}</p>
            <h3 className="mt-3 text-xl font-semibold text-slate-900">{post.title}</h3>
            <p className="mt-3 text-sm text-slate-600">{post.excerpt}</p>
            <a href="#" className="mt-5 inline-flex text-sm font-semibold text-slate-900 hover:text-sky-600">
              Read more →
            </a>
          </article>
        ))}
      </div>
    </section>
  )
}
