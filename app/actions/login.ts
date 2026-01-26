'use server'

import { LoginFormSchema, FormState } from '@/app/lib/definitions'
import { createSession } from '@/app/lib/session'
import { redirect } from 'next/navigation'

export async function login(
  state: FormState,
  formData: FormData
): Promise<FormState> {
  const validatedFields = LoginFormSchema.safeParse({
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
    const res = await fetch('http://localhost:4000/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    if (res.status === 401) {
      return {
        errors: {
          _form: ['Invalid email or password'],
        },
      }
    }

    if (res.status === 404) {
      return {
        errors: {
          email: ['No account found with this email'],
        },
      }
    }

    if (!res.ok) {
      return {
        errors: {
          _form: ['Login failed'],
        },
      }
    }

    const user: { id: string; email: string } = await res.json()

    await createSession(user.id)
  
  } catch (error) {
    console.error("Login error:", error);
    return {
      errors: {
        _form: ['Something went wrong. Try again later.'],
      },
    }
  }

  redirect('/')
}