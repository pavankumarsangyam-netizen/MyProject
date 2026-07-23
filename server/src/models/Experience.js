import mongoose from 'mongoose'

const experienceSchema = new mongoose.Schema(
  {
    company: { type: String, required: true, trim: true },
    role: { type: String, required: true, trim: true },
    period: { type: String, required: true },
    location: { type: String, default: '' },
    summary: { type: String, required: true },
    highlights: [{ type: String }],
  },
  { timestamps: true }
)

export const Experience = mongoose.models.Experience || mongoose.model('Experience', experienceSchema)
