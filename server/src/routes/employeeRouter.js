import express from 'express'
import { createEmployee } from '../controllers/employeeController.js'
import upload from '../middleware/uploadMiddleware.js';

const router = express.Router();

router.post('/create', upload.single('image'), createEmployee);

export default router;