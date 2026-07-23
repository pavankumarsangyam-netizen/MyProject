import { portfolioService } from '../services/portfolio.service.js'
import { sendSuccess } from '../utils/apiResponse.js'

export const getProfile = async (req, res, next) => {
  try {
    const profile = await portfolioService.getProfile()
    sendSuccess(res, profile)
  } catch (error) {
    next(error)
  }
}

export const getProjects = async (req, res, next) => {
  try {
    const projects = await portfolioService.getProjects()
    sendSuccess(res, projects)
  } catch (error) {
    next(error)
  }
}

export const getProjectBySlug = async (req, res, next) => {
  try {
    const project = await portfolioService.getProjectBySlug(req.params.slug)
    if (!project) return sendSuccess(res, null, 404)
    sendSuccess(res, project)
  } catch (error) {
    next(error)
  }
}

export const createProject = async (req, res, next) => {
  try {
    const project = await portfolioService.createProject(req.body)
    sendSuccess(res, project, 201)
  } catch (error) {
    next(error)
  }
}

export const updateProject = async (req, res, next) => {
  try {
    const project = await portfolioService.updateProject(req.params.id, req.body)
    sendSuccess(res, project)
  } catch (error) {
    next(error)
  }
}

export const deleteProject = async (req, res, next) => {
  try {
    const project = await portfolioService.deleteProject(req.params.id)
    sendSuccess(res, project)
  } catch (error) {
    next(error)
  }
}

export const getExperiences = async (req, res, next) => {
  try {
    const experiences = await portfolioService.getExperiences()
    sendSuccess(res, experiences)
  } catch (error) {
    next(error)
  }
}

export const createExperience = async (req, res, next) => {
  try {
    const experience = await portfolioService.createExperience(req.body)
    sendSuccess(res, experience, 201)
  } catch (error) {
    next(error)
  }
}

export const getEducations = async (req, res, next) => {
  try {
    const education = await portfolioService.getEducations()
    sendSuccess(res, education)
  } catch (error) {
    next(error)
  }
}

export const createEducation = async (req, res, next) => {
  try {
    const education = await portfolioService.createEducation(req.body)
    sendSuccess(res, education, 201)
  } catch (error) {
    next(error)
  }
}

export const getSkills = async (req, res, next) => {
  try {
    const skills = await portfolioService.getSkills()
    sendSuccess(res, skills)
  } catch (error) {
    next(error)
  }
}

export const createSkill = async (req, res, next) => {
  try {
    const skill = await portfolioService.createSkill(req.body)
    sendSuccess(res, skill, 201)
  } catch (error) {
    next(error)
  }
}

export const getBlogs = async (req, res, next) => {
  try {
    const blogs = await portfolioService.getBlogs()
    sendSuccess(res, blogs)
  } catch (error) {
    next(error)
  }
}

export const getBlogBySlug = async (req, res, next) => {
  try {
    const blog = await portfolioService.getBlogBySlug(req.params.slug)
    if (!blog) return sendSuccess(res, null, 404)
    sendSuccess(res, blog)
  } catch (error) {
    next(error)
  }
}

export const createBlog = async (req, res, next) => {
  try {
    const blog = await portfolioService.createBlog(req.body)
    sendSuccess(res, blog, 201)
  } catch (error) {
    next(error)
  }
}

export const getCertifications = async (req, res, next) => {
  try {
    const certifications = await portfolioService.getCertifications()
    sendSuccess(res, certifications)
  } catch (error) {
    next(error)
  }
}

export const createCertification = async (req, res, next) => {
  try {
    const certification = await portfolioService.createCertification(req.body)
    sendSuccess(res, certification, 201)
  } catch (error) {
    next(error)
  }
}

export const getAchievements = async (req, res, next) => {
  try {
    const achievements = await portfolioService.getAchievements()
    sendSuccess(res, achievements)
  } catch (error) {
    next(error)
  }
}

export const createAchievement = async (req, res, next) => {
  try {
    const achievement = await portfolioService.createAchievement(req.body)
    sendSuccess(res, achievement, 201)
  } catch (error) {
    next(error)
  }
}

export const getTestimonials = async (req, res, next) => {
  try {
    const testimonials = await portfolioService.getTestimonials()
    sendSuccess(res, testimonials)
  } catch (error) {
    next(error)
  }
}

export const createTestimonial = async (req, res, next) => {
  try {
    const testimonial = await portfolioService.createTestimonial(req.body)
    sendSuccess(res, testimonial, 201)
  } catch (error) {
    next(error)
  }
}

export const getServices = async (req, res, next) => {
  try {
    const services = await portfolioService.getServices()
    sendSuccess(res, services)
  } catch (error) {
    next(error)
  }
}

export const createService = async (req, res, next) => {
  try {
    const service = await portfolioService.createService(req.body)
    sendSuccess(res, service, 201)
  } catch (error) {
    next(error)
  }
}
