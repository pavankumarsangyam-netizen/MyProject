import mongoose from 'mongoose'

const certificationSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    issuer: { type: String, required: true, trim: true },
    year: { type: Number, required: true },
    credentialUrl: { type: String, default: '' },
  },
  { timestamps: true }
)

export const Certification = mongoose.models.Certification || mongoose.model('Certification', certificationSchema)
