import mongoose from 'mongoose'

const projectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    summary: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    techStack: [{ type: String }],
    featured: { type: Boolean, default: false },
    liveUrl: { type: String, default: '' },
    githubUrl: { type: String, default: '' },
    coverImage: {
      url: { type: String, default: '' },
      altText: { type: String, default: '' },
    },
    gallery: [
      {
        url: { type: String, required: true },
        altText: { type: String, default: '' },
      },
    ],
  },
  { timestamps: true }
)

export const Project = mongoose.models.Project || mongoose.model('Project', projectSchema)
