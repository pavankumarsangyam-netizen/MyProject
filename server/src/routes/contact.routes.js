import { Router } from 'express'
import { submitContact } from '../controllers/contact.controller.js'
import { validate } from '../middleware/validate.js'
import { contactValidator } from '../validators/portfolio.validators.js'

const router = Router()

router.post('/', contactValidator, validate, submitContact)

export { router as contactRoutes }
