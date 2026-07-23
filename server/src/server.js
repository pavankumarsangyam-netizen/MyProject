import app from './app.js'
import { connectMongo } from './config/db.js'

const PORT = process.env.PORT || 5000

const startServer = async () => {
  try {
    await connectMongo()
    app.listen(PORT, () => {
      console.log(`Backend running on http://localhost:${PORT}`)
    })
  } catch (error) {
    console.error('Failed to start server:', error.message)
    process.exit(1)
  }
}

startServer()
