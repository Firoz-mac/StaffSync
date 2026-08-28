import express from 'express'
import { createEmployee } from '../controllers/employeeController.js'

const router = express.Router();

router.post('/create', createEmployee);

export default router;