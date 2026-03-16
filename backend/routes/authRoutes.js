import express from 'express';
import {
    registerUser,
    loginUser,
    logoutUser
} from '../controllers/authController.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

// Temporary protected route for testing
router.get('/me', protect, (req, res) => {
    res.status(200).json(req.user);
});

export default router;
