'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function logout() {
  const cookieStore = await cookies()
  const session = cookieStore.get('session')?.value

  if (session) {
    await fetch('http://localhost:4000/auth/logout', {
      method: 'POST',
      headers: {
        Cookie: `session=${session}`,
      },
    })
  }

  cookieStore.delete('session')

  redirect('/auth')
}
