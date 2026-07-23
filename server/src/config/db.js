import mongoose from 'mongoose'

export const connectMongo = async () => {
  const mongoUri = process.env.MONGO_URI

  if (!mongoUri) {
    throw new Error('MONGO_URI is not defined in the environment')
  }

  mongoose.set('strictQuery', true)

  await mongoose.connect(mongoUri, {
    autoIndex: true,
    serverSelectionTimeoutMS: 5000,
  })

  console.log('MongoDB connected successfully')
}
