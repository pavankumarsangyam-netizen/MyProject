import { Profile } from '../models/Profile.js'
import { Project } from '../models/Project.js'
import { Experience } from '../models/Experience.js'
import { Education } from '../models/Education.js'
import { Skill } from '../models/Skill.js'
import { Blog } from '../models/Blog.js'
import { Certification } from '../models/Certification.js'
import { Achievement } from '../models/Achievement.js'
import { Testimonial } from '../models/Testimonial.js'
import { Service } from '../models/Service.js'
import { ContactMessage } from '../models/ContactMessage.js'
import { createSlug } from '../utils/slug.js'

export const portfolioService = {
  getProfile: () => Profile.findOne().lean(),
  getProjects: () => Project.find().sort({ createdAt: -1 }).lean(),
  getProjectBySlug: (slug) => Project.findOne({ slug }).lean(),
  createProject: async (payload) => {
    const slug = createSlug(payload.title)
    return Project.create({ ...payload, slug })
  },
  updateProject: (id, payload) => Project.findByIdAndUpdate(id, payload, { new: true }),
  deleteProject: (id) => Project.findByIdAndDelete(id),

  getExperiences: () => Experience.find().sort({ createdAt: -1 }).lean(),
  createExperience: (payload) => Experience.create(payload),
  updateExperience: (id, payload) => Experience.findByIdAndUpdate(id, payload, { new: true }),
  deleteExperience: (id) => Experience.findByIdAndDelete(id),

  getEducations: () => Education.find().sort({ createdAt: -1 }).lean(),
  createEducation: (payload) => Education.create(payload),
  updateEducation: (id, payload) => Education.findByIdAndUpdate(id, payload, { new: true }),
  deleteEducation: (id) => Education.findByIdAndDelete(id),

  getSkills: () => Skill.find().sort({ createdAt: -1 }).lean(),
  createSkill: (payload) => Skill.create(payload),
  updateSkill: (id, payload) => Skill.findByIdAndUpdate(id, payload, { new: true }),
  deleteSkill: (id) => Skill.findByIdAndDelete(id),

  getBlogs: () => Blog.find({ published: true }).sort({ createdAt: -1 }).lean(),
  getBlogBySlug: (slug) => Blog.findOne({ slug, published: true }).lean(),
  createBlog: async (payload) => {
    const slug = createSlug(payload.title)
    return Blog.create({ ...payload, slug })
  },
  updateBlog: (id, payload) => Blog.findByIdAndUpdate(id, payload, { new: true }),
  deleteBlog: (id) => Blog.findByIdAndDelete(id),

  getCertifications: () => Certification.find().sort({ year: -1 }).lean(),
  createCertification: (payload) => Certification.create(payload),
  updateCertification: (id, payload) => Certification.findByIdAndUpdate(id, payload, { new: true }),
  deleteCertification: (id) => Certification.findByIdAndDelete(id),

  getAchievements: () => Achievement.find().sort({ year: -1 }).lean(),
  createAchievement: (payload) => Achievement.create(payload),
  updateAchievement: (id, payload) => Achievement.findByIdAndUpdate(id, payload, { new: true }),
  deleteAchievement: (id) => Achievement.findByIdAndDelete(id),

  getTestimonials: () => Testimonial.find().sort({ createdAt: -1 }).lean(),
  createTestimonial: (payload) => Testimonial.create(payload),
  updateTestimonial: (id, payload) => Testimonial.findByIdAndUpdate(id, payload, { new: true }),
  deleteTestimonial: (id) => Testimonial.findByIdAndDelete(id),

  getServices: () => Service.find().sort({ createdAt: -1 }).lean(),
  createService: (payload) => Service.create(payload),
  updateService: (id, payload) => Service.findByIdAndUpdate(id, payload, { new: true }),
  deleteService: (id) => Service.findByIdAndDelete(id),

  createContactMessage: (payload) => ContactMessage.create(payload),
}
