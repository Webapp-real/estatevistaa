import { createClient } from '@/lib/supabase/server'
import { Bed, Bath, Ruler, MapPin } from 'lucide-react'
import { notFound } from 'next/navigation'
import ContactForm from './ContactForm'

export default async function PropertyPage({ params }: { params: { id: string } }) {
  const supabase = createClient()
  const { data: property } = await supabase
    .from('properties')
    .select('*, agents(*)')
    .eq('id', params.id)
    .single()

  if (!property) notFound()

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <img 
            src={property.images?.[0]} 
            alt={property.title} 
            className="w-full h-96 object-cover rounded-lg mb-6" 
          />
          <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
          <p className="text-gray-600 flex items-center gap-1 mb-4">
            <MapPin size={16} /> {property.location}
          </p>
          <p className="text-3xl font-bold mb-6">${property.price.toLocaleString()}</p>
          
          <div className="flex gap-6 mb-6 text-gray-700">
            <span className="flex items-center gap-2"><Bed size={20} /> {property.beds} Beds</span>
            <span className="flex items-center gap-2"><Bath size={20} /> {property.baths} Baths</span>
            <span className="flex items-center gap-2"><Ruler size={20} /> {property.sqft.toLocaleString()} sqft</span>
          </div>

          <h2 className="text-xl font-bold mb-2">Description</h2>
          <p className="text-gray-700 mb-6">{property.description}</p>

          <h2 className="text-xl font-bold mb-2">Features</h2>
          <div className="flex flex-wrap gap-2 mb-8">
            {property.features?.map((feature: string) => (
              <span key={feature} className="bg-gray-100 px-3 py-1 rounded-full text-sm">{feature}</span>
            ))}
          </div>
        </div>

        <div>
          <div className="border rounded-lg p-6 sticky top-4">
            <h3 className="font-bold text-lg mb-4">Contact Agent</h3>
            {property.agents && (
              <div className="flex gap-3 items-center mb-4 pb-4 border-b">
                <img src={property.agents.photo} alt={property.agents.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <p className="font-semibold">{property.agents.name}</p>
                  <p className="text-sm text-gray-600">{property.agents.license}</p>
                </div>
              </div>
            )}
            <ContactForm propertyId={property.id} />
          </div>
        </div>
      </div>
    </div>
  )
}