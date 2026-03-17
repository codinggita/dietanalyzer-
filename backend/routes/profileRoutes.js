import express from 'express';
import { updateProfile, getProfileMetrics } from '../controllers/profileController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.put('/', protect, updateProfile);
router.get('/metrics', protect, getProfileMetrics);

export default router;
