'use server'

import { SignupFormSchema, FormState } from '@/app/lib/definitions'
import { createSession } from '../lib/session'
import { redirect } from 'next/navigation'

export async function signup(state: FormState, formData: FormData) {

  const validatedFields = SignupFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  })

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { email, password } = validatedFields.data

  try {
    const res = await fetch('http://localhost:4000/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include', 
      body: JSON.stringify({ email, password }),
    })

    if (res.status === 409) {
      return {
        errors: {
          email: ['Email already exists'],
        },
      }
    }

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      console.log('Backend Error Details:', res.status, errorData);
      return {
        errors: {
          _form: ['Signup failed. Please try again.'],
        },
      }
    }

    const user: { id: string; email: string } = await res.json()
    await createSession(user.id)

    
  } catch (error) {
    if ((error as Error).message === 'NEXT_REDIRECT') {
      throw error;
    }

  
    return {
      errors: {
        _form: ['Something went wrong. Please try again later.'],
      },
    }
  }
  
  redirect('/')
}