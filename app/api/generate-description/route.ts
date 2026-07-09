import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { prompt } = await request.json()

  try {
    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=' + process.env.GEMINI_API_KEY, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Write a luxury real estate listing description for: ${prompt}` }] }],
      }),
    })

    const data = await response.json()
    const description = data?.candidates?.[0]?.content?.parts?.[0]?.text || 'A premium property description will appear here.'

    return NextResponse.json({ description })
  } catch {
    return NextResponse.json({ description: 'A premium property description will appear here.' })
  }
}
