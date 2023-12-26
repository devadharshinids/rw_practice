const nodemailer = require('nodemailer')

async function sendEmail({ to, subject, text, html }) {
  console.log('Sending email to:', to)

  // create reusable transporter object using SendInBlue for SMTP
  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'devadharshinidhanapal@gmail.com',
      pass: process.env.SEND_IN_BLUE_KEY,
    },
    debug: true,
  })

  // send mail with defined transport object
  const info = await transporter.sendMail({
    from: '"Devadharshini" <devadharshinidhanapal@mail.com>',
    to: Array.isArray(to) ? to : [to], // list of receivers
    subject, // Subject line
    text, // plain text body
    html, // html body
  })

  return info
}

module.exports = { sendEmail }
