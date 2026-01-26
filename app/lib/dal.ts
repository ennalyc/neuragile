import 'server-only'
 
import { cookies } from 'next/headers'
import { cache } from 'react'
import { decrypt } from '@/app/lib/session'
import { redirect } from 'next/navigation'
 
export const verifySession = cache(async () => {
  const cookie = (await cookies()).get('session')?.value
  const session = await decrypt(cookie)
 
  if (!session?.userId) {
    redirect('/auth')
  }
 
  return { isAuth: true, userId: session.userId }
})

