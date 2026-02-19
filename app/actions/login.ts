'use server'

import { LoginFormSchema, FormState } from '@/app/lib/definitions'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

async function postAuth(url: string, body: any) {
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include', 
    body: JSON.stringify(body),
  })
  return res
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

  const res = await postAuth('http://localhost:4000/auth/login', { email, password })

  if (!res.ok) {
    return { errors: { _form: ['Invalid email or password'] } };
  }

  const setCookieHeader = res.headers.get('set-cookie');


  if (setCookieHeader) {
    const match = setCookieHeader.match(/session=([^;]+)/);
    const token = match ? match[1] : null;

    if (token) {
      const cookieStore = await cookies();
      cookieStore.set('session', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 7, 
      });
      console.log("Debug: Session cookie successfully set in Next.js");
    } else {
      console.error("Debug: Could not parse session token from header");
    }
  } else {
    console.error("Debug: No Set-Cookie header received from Express");
  }

  redirect('/');
}