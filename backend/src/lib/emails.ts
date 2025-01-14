import { getNewIdeaRoute } from '@ideanick/webapp/src/lib/routes'
import { type Idea, type User } from '@prisma/client'
import { promises as fs } from 'fs'
import Handlebars from 'handlebars'
import { join } from 'path'

import { env } from './env'
import { sendMsg } from './mailer'

const filePath = '../emails/dist/'

async function getHTMLTemplateString(fileName: string) {
  const defaultResult = '<!DOCTYPE html><html></html>'
  try {
    return await fs.readFile(join(__dirname, filePath, fileName + '.html'), 'utf-8')
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

    const hbrTemplate = Handlebars.compile(htmlTemplate)
    const html = hbrTemplate(templateVariables)

    await sendMsg(to, subject, html)

    console.info('sendEmail', {
      to,
      subject,
      templateName,
      fullTemplateVaraibles,
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
      aaddIdeaUrl: `${env.WEBAPP_URL}${getNewIdeaRoute()}`,
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
