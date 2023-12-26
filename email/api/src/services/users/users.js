import { db } from 'src/lib/db'
import { sendEmail } from 'src/lib/email'

import { createAudit } from '../audits/audits'

export const emailUser = async ({ id }) => {
  const user = await db.User.findUnique({
    where: { id },
  })
  console.log('sending email to', user)
  await sendTestEmail(user.email)
  await createAudit({
    input: { userId: id, log: 'Admin sent test email to user' },
  })
  return user
}

export const users = () => {
  return db.user.findMany()
}

export const user = ({ id }) => {
  return db.user.findUnique({
    where: { id },
  })
}

export const createUser = ({ input }) => {
  return db.user.create({
    data: input,
  })
}

export const updateUser = ({ id, input }) => {
  return db.user.update({
    data: input,
    where: { id },
  })
}

export const deleteUser = ({ id }) => {
  return db.user.delete({
    where: { id },
  })
}

export const User = {
  audits: (_obj, { root }) => {
    return db.user.findUnique({ where: { id: root?.id } }).audits()
  },
}

// Define the sendTestEmail function
export function sendTestEmail(emailAddress) {
  const subject = 'Test Email'
  const text =
    'This is a manually triggered test email.\n\n' +
    'It was sent from a RedwoodJS application.'
  const html =
    'This is a manually triggered test email.<br><br>' +
    'It was sent from a RedwoodJS application.'
  return sendEmail({ to: emailAddress, subject, text, html })
}
