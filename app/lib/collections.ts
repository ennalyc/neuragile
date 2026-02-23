'use server'

import { cookies } from 'next/headers'


async function getSessionCookie() {
  const cookieStore = await cookies()
  return cookieStore.get('auth_token')?.value
}

export async function getCollection(collectionId: number) {
  const token = await getSessionCookie()
  if (!token) return null
  
  const res = await fetch(
    `http://localhost:4000/api/collections/${collectionId}/getCollection`,
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name }),
      cache: 'no-store',
    }
  )

  if (!res.ok) return null

  return res.json()
}



export async function getCollections() {
  const token = await getSessionCookie()
  if (!token) return []

  const res = await fetch('http://localhost:4000/api/collections/getAllCollections', 
    {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name }),
      cache: 'no-store',
    }
  )

  if (!res.ok) return []
  return res.json()
}

export async function addItemToCollection(collectionId: number, cardId: string) {
  const token = await getSessionCookie()
  if (!token) throw new Error('Unauthorized')

  const res = await fetch(`http://localhost:4000/api/collections/${collectionId}/addItem`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name }),
      cache: 'no-store',
    })

  if (!res.ok) {
    const error = await res.json().catch(() => ({}))
    throw new Error(error.message || 'Failed to add item')
  }

  return res.json()
}

export async function getAllCollectedCards() {
  const token = await getSessionCookie()
  if (!token) return []

  const res = await fetch('http://localhost:4000/api/collections/getAllItems', {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name }),
      cache: 'no-store',
    })

  if (!res.ok) return []
  return res.json()
}
