import express from 'express'
import { markAttendance, attendanceStatus } from '../controllers/attendanceController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/mark', authMiddleware, markAttendance);
router.get('/current', authMiddleware, attendanceStatus);

export default router;