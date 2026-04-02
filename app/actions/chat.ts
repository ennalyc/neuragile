'use server'
import { verifySession } from '../lib/dal'
import { CardMatch } from '../types/message'

export async function sendMessage(userMessage: string): Promise<CardMatch[]> {
  const sessionToken = await verifySession()
  
  if (!sessionToken.isAuth) {
    throw new Error('Unauthorized')
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/chat/sendMessage`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Cookie: `auth_token=${sessionToken.token}`,
      },
      body: JSON.stringify({ userMessage }),
    }
  )
  
  if (res.status !== 200) {
    const error = await res.json().catch(() => ({}))
    throw new Error(error.message || 'Failed to send Message')
  }
  
  const data = await res.json();
  console.log(data)
  return data;

 
}