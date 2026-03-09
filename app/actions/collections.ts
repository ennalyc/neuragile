'use server'

import { verifySession } from '../lib/dal'

export async function createCollection(name: string) {
  const sessionToken = await verifySession()
  
  if (!sessionToken.isAuth) {
    throw new Error('Unauthorized')
  }
  console.log(`isAuth: ${!sessionToken.isAuth}`)
  const res = await fetch(
    'http://localhost:8080/api/collections/createCollection',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `auth_token=${sessionToken.token}`,
      },
      body: JSON.stringify({ name }),
    }
  )
  
  if (res.status !== 201) {
    const error = await res.json().catch(() => ({}))
    console.log(error)
    console.log(res.status)
    throw new Error(error.message || 'Failed to create collection')
  }

  return res.json()
}