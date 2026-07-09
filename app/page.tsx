import Hero from '@/components/Hero'
import SearchBar from '@/components/SearchBar'
import FeaturedProperties from '@/components/FeaturedProperties'
import WhyEstateVista from '@/components/WhyEstateVista'
import Agents from '@/components/Agents'
import Testimonials from '@/components/Testimonials'
import Blog from '@/components/Blog'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <div>
      <Hero />

      <section className="bg-gray-50 px-4 py-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-2xl font-bold">Start your search</h2>
          <SearchBar />
        </div>
      </section>

      <FeaturedProperties />
      <WhyEstateVista />
      <Agents />
      <Testimonials />
      <Blog />
      <FAQ />
      <CTA />
    </div>
  )
}
