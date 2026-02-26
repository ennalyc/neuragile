import * as z from 'zod'
import { JWTPayload } from 'jose'

export interface SessionPayload extends JWTPayload {
  userId: string
  expiresAt: Date
  [key: string]: unknown 
}

export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string(),
})


export const SignupFormSchema = z.object({
    email: z.email({ error: 'Please enter a valid email.' }).trim(),
    password: z
        .string()
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
