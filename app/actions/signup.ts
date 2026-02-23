'use server'

import { SignupFormSchema, FormState } from '@/app/lib/definitions'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers' 

async function postAuth(url: string, body: any) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include', 
    body: JSON.stringify(body),
    redirect: 'manual', 
  })
  return res
}

export async function signup(state: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = SignupFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors }
  }

  const { email, password } = validatedFields.data
  const res = await postAuth('http://localhost:4000/api/user/register', { email, password })

  if (res.status === 409) {
    return { errors: { email: ['Email already exists'] } }
  }

  if (!res.ok && res.status !== 303) {
    return { errors: { _form: ['Signup failed. Please try again.'] } }
  }

  const setCookieHeader = res.headers.get('set-cookie')
  
  if (setCookieHeader) {
    const cookieValue = setCookieHeader.split(';')[0].split('=')[1]
    
    const cookieStore = await cookies()
    cookieStore.set('session', cookieValue, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production', 
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, 
    })
  }

  redirect('/') 
}