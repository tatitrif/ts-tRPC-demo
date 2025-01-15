import { zEnvHost, zEnvNonemptyTrimmed, zEnvNonemptyTrimmedRequiredOnNotLocal } from '@ideanick/shared/src/zod'
import * as dotenv from 'dotenv'
import { z } from 'zod'

dotenv.config()

const zEnv = z.object({
  PORT: zEnvNonemptyTrimmed,
  HOST_ENV: zEnvHost,
  DATABASE_URL: zEnvNonemptyTrimmed,
  JWT_SECRET: zEnvNonemptyTrimmed,
  PASSWORD_SALT: zEnvNonemptyTrimmed,
  INITIAL_ADMIN_PASSWORD: zEnvNonemptyTrimmed,
  WEBAPP_URL: zEnvNonemptyTrimmed,
  MAILER_HOST: zEnvNonemptyTrimmedRequiredOnNotLocal,
  MAILER_USER: zEnvNonemptyTrimmed,
  MAILER_PASS: zEnvNonemptyTrimmed,
  FROM_EMAIL_ADDRESS: zEnvNonemptyTrimmed,
})

// eslint-disable-next-line node/no-process-env
export const env = zEnv.parse(process.env)
