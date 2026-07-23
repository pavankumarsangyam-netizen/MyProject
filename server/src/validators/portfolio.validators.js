import { body, param } from 'express-validator'

export const createProjectValidator = [
  body('title').trim().isLength({ min: 2, max: 120 }).withMessage('Title must be between 2 and 120 characters'),
  body('summary').trim().isLength({ min: 10, max: 300 }).withMessage('Summary must be between 10 and 300 characters'),
  body('description').trim().isLength({ min: 20 }).withMessage('Description is required'),
  body('category').trim().isLength({ min: 2 }).withMessage('Category is required'),
]

export const projectBySlugValidator = [
  param('slug').trim().isLength({ min: 2 }).withMessage('Valid slug is required'),
]

export const createBlogValidator = [
  body('title').trim().isLength({ min: 2 }).withMessage('Title is required'),
  body('excerpt').trim().isLength({ min: 10 }).withMessage('Excerpt is required'),
  body('content').trim().isLength({ min: 20 }).withMessage('Content is required'),
]

export const contactValidator = [
  body('name').trim().isLength({ min: 2 }).withMessage('Name is required'),
  body('email').isEmail().withMessage('Please provide a valid email'),
  body('message').trim().isLength({ min: 10 }).withMessage('Message must be at least 10 characters'),
]
