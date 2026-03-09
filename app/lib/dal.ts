import 'server-only'
import { cookies } from 'next/headers'
import { cache } from 'react'

export const verifySession = cache(async () => {
    const cookieStore = await cookies()
    const token = cookieStore.get('auth_token')?.value

    if (token) {
        return { isAuth: true, token }
    }

    return { isAuth: false }
})