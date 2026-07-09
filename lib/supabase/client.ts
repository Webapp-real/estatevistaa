   git add .
      git commit -m "Add live chat, testimonials, contact info"
         git pushimport { createBrowserClient } from '@supabase/ssr'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

export function createClient() {
  if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables for the browser client.')
  }

  return createBrowserClient(supabaseUrl, supabaseAnonKey)
}
