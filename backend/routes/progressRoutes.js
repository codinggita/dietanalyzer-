import express from 'express';
import { createLog, getLogs, deleteLog, getStats } from '../controllers/progressController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/')
    .post(protect, createLog)
    .get(protect, getLogs);

router.get('/stats', protect, getStats);
router.delete('/:id', protect, deleteLog);

export default router;
