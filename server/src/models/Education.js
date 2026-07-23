import mongoose from 'mongoose'

const educationSchema = new mongoose.Schema(
  {
    institution: { type: String, required: true, trim: true },
    degree: { type: String, required: true, trim: true },
    period: { type: String, required: true },
    summary: { type: String, required: true },
  },
  { timestamps: true }
)

export const Education = mongoose.models.Education || mongoose.model('Education', educationSchema)
