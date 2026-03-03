'use server'

import { cookies } from 'next/headers'
import { verifySession } from '../lib/dal'

export async function createCollection(name: string) {
  const sessionToken = await verifySession()
  
  if (!sessionToken) {
    throw new Error('Unauthorized')
  }

  const res = await fetch(
    'http://localhost:8080/collections/createCollection',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${sessionToken}`,
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