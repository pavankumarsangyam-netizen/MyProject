import mongoose from 'mongoose'

const testimonialSchema = new mongoose.Schema(
  {
    author: { type: String, required: true, trim: true },
    role: { type: String, default: '' },
    quote: { type: String, required: true },
    featured: { type: Boolean, default: false },
  },
  { timestamps: true }
)

export const Testimonial = mongoose.models.Testimonial || mongoose.model('Testimonial', testimonialSchema)
