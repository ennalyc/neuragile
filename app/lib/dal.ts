import 'server-only'
import { cookies } from 'next/headers'
import { cache } from 'react'

export async function verifySession() {
  const cookieStore = await cookies()
  const session = cookieStore.get('session')?.value

  if (!session) return { isAuth: false, userId: null }

  try {
    const res = await fetch('http://localhost:4000/api/user/user', {
      headers: {
        Cookie: `session=${session}`,
      },
      cache: 'no-store',
    })

    if (!res.ok) return { isAuth: false, userId: null }

    const user = await res.json()
    return { isAuth: true, userId: user.id, user }
  } catch {
    return { isAuth: false, userId: null }
  }
}
