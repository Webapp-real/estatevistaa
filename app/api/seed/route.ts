export const runtime = 'nodejs' // Add this

import { NextResponse } from 'next/server'
import { createServiceClient } from '@/lib/supabase/server'

export async function GET() {
  const supabase = createServiceClient()

  const { data: agents, error: agentsError } = await supabase
    .from('agents')
    .insert([
      {
        name: 'Daniel Brooks',
        license: 'Investment Advisor',
        photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400',
        bio: 'Helping clients build wealth through real estate.',
      },
      {
        name: 'Maya Chen',
        license: 'Neighborhood Expert',
        photo: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
        bio: 'Your guide to the best neighborhoods.',
      },
    ])
    .select()

  if (agentsError) {
    return NextResponse.json({ success: false, error: agentsError.message }, { status: 500 })
  }

  const { error: propertiesError } = await supabase.from('properties').insert([
    {
      title: 'Oceanview Villa',
      type: 'House',
      price: 1200000,
      location: 'Malibu, California',
      coords: { lat: 34.0259, lng: -118.7798 },
      sqft: 3200,
      beds: 4,
      baths: 3,
      status: 'For Sale',
      description: 'Stunning oceanfront villa with panoramic views.',
      features: ['Ocean View', 'Pool', 'Garage'],
      images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800'],
      agent_id: agents?.[0]?.id,
    },
    {
      title: 'Garden Estate',
      type: 'House',
      price: 860000,
      location: 'Austin, Texas',
      coords: { lat: 30.2672, lng: -97.7431 },
      sqft: 4100,
      beds: 5,
      baths: 4,
      status: 'For Sale',
      description: 'Modern estate with lush gardens.',
      features: ['Garden', 'Smart Home', 'Patio'],
      images: ['https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800'],
      agent_id: agents?.[1]?.id,
    },
  ])

  if (propertiesError) {
    return NextResponse.json({ success: false, error: propertiesError.message }, { status: 500 })
  }

  return NextResponse.json({ success: true, message: 'Database seeded!' })
}
