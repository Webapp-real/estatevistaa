import Hero from '@/components/Hero'
import FeaturedProperties from '@/components/FeaturedProperties'
import Agents from '@/components/Agents'
import Blog from '@/components/Blog'

export default function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedProperties />
      <Agents />
      <Blog />
    </main>
  )
}
