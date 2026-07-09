'use client'

import Link from 'next/link'
import { Bed, Bath, Ruler } from 'lucide-react'
import { supabase } from '@/lib/supabase/client'
import { useState } from 'react'

type PropertyCardProps = {
  property: Record<string, any>
}

export default function PropertyCard({ property }: PropertyCardProps) {
  const [isFav, setIsFav] = useState(false)

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
    <Link href={`/property/${property.id}`} className="group block overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-2 hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
      <div className="relative">
        <div className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700 shadow-sm">
          Featured
        </div>
        <img src={property.images?.[0] ?? property.image_url ?? property.image ?? '/placeholder-home.jpg'} alt={property.title} className="h-60 w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
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
