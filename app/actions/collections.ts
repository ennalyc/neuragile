'use server'
import { cookies } from "next/headers"

export async function createCollection(name: string) {
    const cookieStore = await cookies()
    const session = cookieStore.get('session')?.value
    
    const res = await fetch('http://localhost:4000/collections/createCollection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `session=${session}`,
      },
      body: JSON.stringify({ name }),
    })
  
    if (!res.ok) {
      const error = await res.json().catch(() => ({}))
      throw new Error(error.message || 'Failed to create collection')
    }
  
    return res.json()
  }
