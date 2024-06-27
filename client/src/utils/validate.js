import * as zod from 'zod'
import { toTypedSchema } from '@vee-validate/zod'

export const loginSchema = toTypedSchema(
  zod.object({
    email: zod.string().email('Must be valid email'),
    password: zod.string().min(6, 'password must be at least 6 charecters')
  })
) 
export const registerSchema = toTypedSchema(
  zod.object({
    name: zod.string().nonempty('name is required'),
    email: zod.string().email('Must be valid email'),
    password: zod.string().min(6, 'password must be at least 6 charecters')
  })
)

export const urlSchema = toTypedSchema(
  zod.object({
    url: zod.string().url()
  })
)
