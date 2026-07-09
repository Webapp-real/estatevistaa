import { createClient } from '@/lib/supabase/server'
import PropertyCard from '@/components/PropertyCard'
import SearchBar from '@/components/SearchBar'

export default async function Search({ 
  searchParams 
}: { 
  searchParams: { location?: string, type?: string, minPrice?: string, maxPrice?: string } 
}) {
  const supabase = createClient()
  let query = supabase.from('properties').select('*')

  if (searchParams.location) {
    query = query.ilike('location', `%${searchParams.location}%`)
  }
  if (searchParams.type && searchParams.type !== 'Any') {
    query = query.eq('type', searchParams.type)
  }
  if (searchParams.minPrice) {
    query = query.gte('price', Number(searchParams.minPrice))
  }
  if (searchParams.maxPrice) {
    query = query.lte('price', Number(searchParams.maxPrice))
  }

  const { data: properties } = await query

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6">Search Listings</h1>
      <div className="mb-8"><SearchBar /></div>
      
      <div className="flex justify-between items-center mb-6">
        <p className="text-gray-600">{properties?.length || 0} properties found</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {properties?.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
        {properties?.length === 0 && (
          <p className="text-gray-600 col-span-3 text-center py-12">No properties match your search.</p>
        )}
      </div>
    </div>
  )
}