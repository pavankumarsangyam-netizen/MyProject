import mongoose from 'mongoose'

const skillSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    category: { type: String, required: true },
    level: { type: String, default: 'advanced' },
    icon: { type: String, default: '' },
  },
  { timestamps: true }
)

export const Skill = mongoose.models.Skill || mongoose.model('Skill', skillSchema)
