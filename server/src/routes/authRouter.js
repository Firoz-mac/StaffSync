import express from 'express'
import { login, signup, logout, getCurrentUser } from '../controllers/authController.js';
import authMiddleware from '../middleware/authMiddleware.js'

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout)
router.get('/getMe', authMiddleware, getCurrentUser)


export default router;