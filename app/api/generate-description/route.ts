import { GoogleGenerativeAI } from '@google/generative-ai'
import { NextResponse } from 'next/server'

const genAI = process.env.GEMINI_API_KEY ? new GoogleGenerativeAI(process.env.GEMINI_API_KEY) : null

export async function POST(request: Request) {
  try {
    const { title, type, beds, baths, sqft, location, features } = await request.json()

    if (!genAI) {
      return NextResponse.json({
        description: 'A premium property description will appear here once Gemini is configured.',
      })
    }

    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
    const prompt = `Write a compelling real estate listing description for: ${title}, a ${beds} bed ${baths} bath ${sqft} sqft ${type} in ${location}. Key features: ${features?.join(', ') || 'luxury amenities'}. Keep it under 100 words, professional tone.`

    const result = await model.generateContent(prompt)
    const description = result.response.text()

    return NextResponse.json({ description })
  } catch {
    return NextResponse.json({ description: 'A premium property description will appear here.' })
  }
}
