import 'server-only'
import { cookies } from 'next/headers'
import { cache } from 'react'

export const verifySession = cache(async () => {
  const token = (await cookies()).get('auth_token')?.value

  return {
    isAuth: !!token,
    token: token ?? null,
  }
})