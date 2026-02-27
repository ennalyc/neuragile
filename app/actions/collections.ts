'use server'

import { cookies } from 'next/headers'

export async function createCollection(name: string) {
  const token = (await cookies()).get('auth_token')?.value
  console.log(name)
  if (!token) {
    throw new Error('Unauthorized')
  }

  const res = await fetch(
    'http://localhost:8080/collections/createCollection',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name }),
      cache: 'no-store',
    }
  )
  
  if (res.status !== 201) {
    const error = await res.json().catch(() => ({}))
    throw new Error(error.message || 'Failed to create collection')
  }

  return res.json()
}