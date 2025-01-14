import nodemailer from 'nodemailer'

import { env } from './env'

const transporter = nodemailer.createTransport({
  host: env.MAILER_HOST,
  port: 465,
  auth: {
    user: env.MAILER_USER,
    pass: env.MAILER_PASS,
  },
  logger: true,
  debug: true, // include SMTP traffic in the logs
})

export async function sendMsg(to: string, subject: string, html: string) {
  try {
    const info = await transporter.sendMail({
      from: env.FROM_EMAIL_ADDRESS,
      to: to,
      subject: subject,
      html: html, // html text body
    })
    console.log(`Message sent: ${info.messageId}`)
  } catch (error) {
    return console.error(`Error sending email: ${error}`)
  }
}
