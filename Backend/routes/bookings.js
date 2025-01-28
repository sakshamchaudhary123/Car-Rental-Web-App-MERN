import express from 'express';
import { 
  createBooking, 
  getUserBookings, 
  cancelBooking, 
  getAllBookings 
} from '../controllers/bookingController.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

// Create a new booking
router.post('/', authMiddleware, createBooking);

// Get user's bookings
router.get('/user', authMiddleware, getUserBookings);

// Get all bookings (admin only)
router.get('/', authMiddleware, getAllBookings);

// Cancel a booking
router.patch('/:id/cancel', authMiddleware, cancelBooking);

export default router;