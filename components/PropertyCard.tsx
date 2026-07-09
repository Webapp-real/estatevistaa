'use client'

import Link from 'next/link'
import { Bed, Bath, Ruler } from 'lucide-react'
import { createClient } from '@/lib/supabase/client'
import { useState } from 'react'

type PropertyCardProps = {
  property: Record<string, any>
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [isFav, setIsFav] = useState(false)
  const supabase = createClient()

  const toggleFavorite = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
      alert('Please login to favorite')
      return
    }

    if (isFav) {
      await supabase.from('favorites').delete().match({ user_id: user.id, property_id: property.id })
    } else {
      await supabase.from('favorites').insert({ user_id: user.id, property_id: property.id })
    }

    setIsFav(!isFav)
  }

  return (
    <Link href={`/property/${property.id}`} className="block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <img src={property.images?.[0] ?? property.image_url ?? property.image ?? '/placeholder-home.jpg'} alt={property.title} className="h-56 w-full object-cover" />
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{property.title}</h3>
            <p className="mt-1 text-sm text-slate-500">{property.location}</p>
          </div>
          <button type="button" onClick={toggleFavorite} className="text-xl" aria-label="Toggle favorite">
            {isFav ? '❤️' : '🤍'}
          </button>
        </div>

        <p className="mt-3 text-xl font-bold text-slate-900">
          {typeof property.price === 'number' ? `$${property.price.toLocaleString()}` : property.price ?? '$0'}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-slate-600">
          <span className="flex items-center gap-1"><Bed size={16} /> {property.beds ?? 0} Beds</span>
          <span className="flex items-center gap-1"><Bath size={16} /> {property.baths ?? 0} Baths</span>
          <span className="flex items-center gap-1"><Ruler size={16} /> {(property.sqft ?? 0).toLocaleString()} sqft</span>
        </div>
      </div>
    </Link>
  )
}
