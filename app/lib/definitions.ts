import * as z from 'zod'
import { JWTPayload } from 'jose'

export interface SessionPayload extends JWTPayload {
  userId: string
  expiresAt: Date
  [key: string]: unknown 
}

export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})


export const SignupFormSchema = z.object({
    email: z.email({ error: 'Please enter a valid email.' }).trim(),
    password: z
        .string()
        .min(8, { error: 'Be at least 8 characters long' })
        .regex(/[a-zA-Z]/, { error: 'Contain at least one letter.' })
        .regex(/[0-9]/, { error: 'Contain at least one number.' })
        .regex(/[^a-zA-Z0-9]/, {
        error: 'Contain at least one special character.',
        })
        .trim(),
})
 
export type FormState = {
  errors?: {
    email?: string[]
    password?: string[]
    _form?: string[]   
  }
  success?: boolean
}
