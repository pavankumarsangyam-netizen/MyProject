import { sendMail } from '../config/mailer.js'
import { portfolioService } from '../services/portfolio.service.js'
import { sendSuccess } from '../utils/apiResponse.js'

export const submitContact = async (req, res, next) => {
  try {
    const payload = {
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject || 'Portfolio Inquiry',
      message: req.body.message,
    }

    await portfolioService.createContactMessage(payload)
    await sendMail({
      to: process.env.SMTP_FROM,
      subject: `New portfolio inquiry from ${payload.name}`,
      html: `<h3>New Portfolio Inquiry</h3><p><strong>Name:</strong> ${payload.name}</p><p><strong>Email:</strong> ${payload.email}</p><p><strong>Message:</strong> ${payload.message}</p>`,
      text: `${payload.name} (${payload.email}) sent: ${payload.message}`,
    })

    sendSuccess(res, { message: 'Inquiry submitted successfully' }, 201)
  } catch (error) {
    next(error)
  }
}
