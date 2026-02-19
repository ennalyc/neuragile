'use server'

import { cookies } from 'next/headers'

async function getSessionCookie() {
  const cookieStore = await cookies()
  return cookieStore.get('session')?.value
}

export async function getCollection(collectionId: number) {
  const session = await getSessionCookie()
  if (!session) return null

  const res = await fetch(
    `http://localhost:4000/collections/${collectionId}`,
    {
      headers: {
        "Content-Type": "application/json",
        Cookie: `session=${session}`,
      },
      cache: "no-store",
    }
  )

  if (!res.ok) return null

  return res.json()
}



export async function getCollections() {
  const session = await getSessionCookie()
  if (!session) return []

  const res = await fetch('http://localhost:4000/collections', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Cookie: `session=${session}`,
    },
    cache: 'no-store',
  })

  if (!res.ok) return []
  return res.json()
}

export async function addItemToCollection(collectionId: number, cardId: string) {
  const session = await getSessionCookie()
  if (!session) throw new Error('Unauthorized')

  const res = await fetch(`http://localhost:4000/collections/${collectionId}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Cookie: `session=${session}`,
    },
    body: JSON.stringify({ cardId }),
  })

  if (!res.ok) {
    const error = await res.json().catch(() => ({}))
    throw new Error(error.message || 'Failed to add item')
  }

  return res.json()
}

export async function getAllCollectedCards() {
  const session = await getSessionCookie()
  if (!session) return []

  const res = await fetch('http://localhost:4000/collections/items', {
    headers: {
      'Content-Type': 'application/json',
      Cookie: `session=${session}`,
    },
    cache: 'no-store',
  })

  if (!res.ok) return []
  return res.json()
}
