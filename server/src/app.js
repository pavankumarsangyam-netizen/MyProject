import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import dotenv from 'dotenv'
import { notFound } from './middleware/notFound.js'
import { errorHandler } from './middleware/errorHandler.js'
import { portfolioRoutes } from './routes/portfolio.routes.js'
import { contactRoutes } from './routes/contact.routes.js'

dotenv.config()

const app = express()

app.use(express.json({ limit: '2mb' }))
app.use(express.urlencoded({ extended: true, limit: '2mb' }))
app.use(
  cors({
    origin: process.env.CLIENT_URL || '*',
    credentials: true,
  })
)
app.use(morgan('dev'))

app.get('/api/health', (req, res) => {
  res.status(200).json({ success: true, message: 'Portfolio backend is running' })
})

app.use('/api', portfolioRoutes)
app.use('/api/contact', contactRoutes)

app.use(notFound)
app.use(errorHandler)

export default app
