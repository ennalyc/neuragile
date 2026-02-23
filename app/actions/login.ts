'use server'

import { LoginFormSchema, FormState } from '@/app/lib/definitions'
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


export async function login(state: FormState, formData: FormData): Promise<FormState> {
  const validatedFields = LoginFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!validatedFields.success) {
    return { errors: validatedFields.error.flatten().fieldErrors }
  }

  const { email, password } = validatedFields.data

  const res = await postAuth('http://localhost:4000/api/user/login', { email, password })

  if (!res.ok) {
    return { errors: { _form: ['Invalid email or password'] } };
  }

  const data = await res.json();

  (await cookies()).set('auth_token', data.token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 60 * 60,
  })

  redirect('/');
}