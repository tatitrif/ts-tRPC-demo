import { zEnvHost, zEnvNonemptyTrimmed } from '@ideanick/shared/src/zod'
import { z } from 'zod'

export const zEnv = z.object({
  NODE_ENV: z.enum(['development', 'production']),
  HOST_ENV: zEnvHost,
  VITE_BACKEND_TRPC_URL: zEnvNonemptyTrimmed,
  VITE_WEBAPP_URL: zEnvNonemptyTrimmed,
})
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const envFromBackend = (window as any).webappEnvFromBackend

export const env = zEnv.parse(envFromBackend?.replaceMeWithPublicEnv ? process.env : envFromBackend)
