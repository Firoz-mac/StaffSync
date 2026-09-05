import express from 'express'
import { login, signup, getCurrentUser } from '../controllers/authController.js';
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/getMe', authMiddleware, getCurrentUser)


export default router;