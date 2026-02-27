'use server'

import { SignupFormSchema, FormState } from '@/app/lib/definitions'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers' 

async function postAuth(url: string, body: any) {
  return await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
    cache: 'no-store'
  })
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
  const res = await postAuth('http://localhost:8080/api/user/register', { email, password })

  if (res.status === 409) {
    return { errors: { email: ['Email already exists'] } }
  }

  if (!res.ok && res.status !== 303) {
    return { errors: { _form: ['Signup failed. Please try again.'] } }
  }

  const data = await res.json();

  (await cookies()).set('auth_token', data.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60,
  });
  redirect('/');
}