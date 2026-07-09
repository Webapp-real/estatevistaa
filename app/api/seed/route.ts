import { NextResponse } from 'next/server'

export async function GET() {
  const seedData = {
    agents: [
      { name: 'Sophia Laurent', role: 'Luxury Estates Specialist' },
      { name: 'Daniel Brooks', role: 'Investment Advisor' },
    ],
    properties: [
      {
        title: 'Oceanview Villa',
        location: 'Malibu, California',
        price: '$1.2M',
        beds: 4,
        baths: 3,
        sqft: 3200,
      },
      {
        title: 'Skyline Penthouse',
        location: 'Miami, Florida',
        price: '$980K',
        beds: 3,
        baths: 2,
        sqft: 2400,
      },
    ],
  }

  return NextResponse.json(seedData)
}
