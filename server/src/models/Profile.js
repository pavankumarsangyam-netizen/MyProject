import mongoose from 'mongoose'

const profileSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    title: { type: String, required: true, trim: true },
    bio: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    location: { type: String, default: '' },
    socials: [
      {
        platform: { type: String, required: true },
        url: { type: String, required: true },
      },
    ],
    resumeUrl: { type: String, default: '' },
    avatar: {
      url: { type: String, default: '' },
      altText: { type: String, default: '' },
    },
    theme: {
      accent: { type: String, default: 'violet' },
      mode: { type: String, default: 'dark' },
    },
  },
  { timestamps: true }
)

export const Profile = mongoose.models.Profile || mongoose.model('Profile', profileSchema)
