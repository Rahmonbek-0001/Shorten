import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email format' }), // Corrected the email validation message
  password: z.string().min(6) // Ensured the password is a string with a minimum length of 6 characters
})
