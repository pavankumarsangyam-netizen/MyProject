import mongoose from 'mongoose'

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, trim: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
    category: { type: String, default: '' },
    tags: [{ type: String }],
    readTime: { type: String, default: '4 min read' },
    published: { type: Boolean, default: true },
    coverImage: {
      url: { type: String, default: '' },
      altText: { type: String, default: '' },
    },
  },
  { timestamps: true }
)

export const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema)
