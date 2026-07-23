import { Router } from 'express'
import {
  getProfile,
  getProjects,
  getProjectBySlug,
  createProject,
  updateProject,
  deleteProject,
  getExperiences,
  createExperience,
  getEducations,
  createEducation,
  getSkills,
  createSkill,
  getBlogs,
  getBlogBySlug,
  createBlog,
  getCertifications,
  createCertification,
  getAchievements,
  createAchievement,
  getTestimonials,
  createTestimonial,
  getServices,
  createService,
} from '../controllers/portfolio.controller.js'
import { validate } from '../middleware/validate.js'
import { createProjectValidator, createBlogValidator, contactValidator, projectBySlugValidator } from '../validators/portfolio.validators.js'

const router = Router()

router.get('/profile', getProfile)

router.get('/projects', getProjects)
router.get('/projects/:slug', projectBySlugValidator, validate, getProjectBySlug)
router.post('/projects', createProjectValidator, validate, createProject)
router.put('/projects/:id', updateProject)
router.delete('/projects/:id', deleteProject)

router.get('/experience', getExperiences)
router.post('/experience', createExperience)
router.put('/experience/:id', updateProject)
router.delete('/experience/:id', deleteProject)

router.get('/education', getEducations)
router.post('/education', createEducation)
router.put('/education/:id', updateProject)
router.delete('/education/:id', deleteProject)

router.get('/skills', getSkills)
router.post('/skills', createSkill)
router.put('/skills/:id', updateProject)
router.delete('/skills/:id', deleteProject)

router.get('/blogs', getBlogs)
router.get('/blogs/:slug', projectBySlugValidator, validate, getBlogBySlug)
router.post('/blogs', createBlogValidator, validate, createBlog)
router.put('/blogs/:id', updateProject)
router.delete('/blogs/:id', deleteProject)

router.get('/certifications', getCertifications)
router.post('/certifications', createCertification)
router.put('/certifications/:id', updateProject)
router.delete('/certifications/:id', deleteProject)

router.get('/achievements', getAchievements)
router.post('/achievements', createAchievement)
router.put('/achievements/:id', updateProject)
router.delete('/achievements/:id', deleteProject)

router.get('/testimonials', getTestimonials)
router.post('/testimonials', createTestimonial)
router.put('/testimonials/:id', updateProject)
router.delete('/testimonials/:id', deleteProject)

router.get('/services', getServices)
router.post('/services', createService)
router.put('/services/:id', updateProject)
router.delete('/services/:id', deleteProject)

export { router as portfolioRoutes }
