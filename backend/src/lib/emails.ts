import { type Idea, type User } from '@prisma/client'
import { readFileSync } from 'fs'
import { join } from 'path'

import { env } from './env'

const filePath = '../emails/dist/'

function getHTMLTemplateString(fileName: string) {
  const defaultResult = '<!DOCTYPE html><html></html>'
  try {
    return readFileSync(join(__dirname, filePath, fileName + '.html'), 'utf-8')
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (e) {
    return defaultResult
  }
}

const sendEmail = async ({
  to,
  subject,
  templateName,
  templateVariables = {},
}: {
  to: string
  subject: string
  templateName: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  templateVariables?: Record<string, any>
}) => {
  try {
    const htmlTemplate = await getHTMLTemplateString(templateName)
    const fullTemplateVaraibles = {
      ...templateVariables,
      homeUrl: env.WEBAPP_URL,
    }
    console.info('sendEmail', {
      to,
      subject,
      templateName,
      fullTemplateVaraibles,
      htmlTemplate,
    })
    return { ok: true }
  } catch (error) {
    console.error(error)
    return { ok: false }
  }
}

export const sendWelcomeEmail = async ({ user }: { user: Pick<User, 'nick' | 'email'> }) => {
  return await sendEmail({
    to: user.email,
    subject: 'Thanks For Registration!',
    templateName: 'welcome',
    templateVariables: {
      userNick: user.nick,
      addIdeaUrl: `${env.WEBAPP_URL}/ideas/new`,
    },
  })
}

export const sendIdeaBlockedEmail = async ({ user, idea }: { user: Pick<User, 'email'>; idea: Pick<Idea, 'nick'> }) => {
  return await sendEmail({
    to: user.email,
    subject: 'Your Idea Blocked!',
    templateName: 'ideaBlocked',
    templateVariables: {
      ideaNick: idea.nick,
    },
  })
}
