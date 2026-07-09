import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center">
      <h1 className="text-4xl font-bold mb-4">Property Not Found</h1>
      <p className="text-gray-600 mb-8">The property you're looking for doesn't exist or has been removed.</p>
      <Link href="/search" className="bg-black text-white px-6 py-3 rounded-lg">
        Browse All Listings
      </Link>
    </div>
  )
}