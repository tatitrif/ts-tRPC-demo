import { type AppContext } from '../lib/ctx'
import { env } from '../lib/env'
import { getPasswordHash } from '../utils/getPasswordHash'

export const presetDb = async (ctx: AppContext) => {
  await ctx.prisma.user.upsert({
    where: {
      nick: 'superuser',
    },
    create: {
      nick: 'superuser',
      email: 'superuser@example.com',
      password: getPasswordHash(env.INITIAL_ADMIN_PASSWORD),
      permissions: ['ALL'],
    },
    update: {
      permissions: ['ALL'],
    },
  })
}
