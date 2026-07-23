import mongoose from 'mongoose'

const achievementSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, required: true },
    year: { type: Number, required: true },
    icon: { type: String, default: '' },
  },
  { timestamps: true }
)

export const Achievement = mongoose.models.Achievement || mongoose.model('Achievement', achievementSchema)
