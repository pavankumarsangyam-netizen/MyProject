import mongoose from 'mongoose'

const serviceSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    summary: { type: String, required: true },
    price: { type: String, default: '' },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
)

export const Service = mongoose.models.Service || mongoose.model('Service', serviceSchema)
