import {Booking} from '../models/Booking.js';
import {Car} from '../models/Car.js';

export const createBooking = async (req, res) => {
  try {
    const { carId, startDate, endDate } = req.body;
    
    // Check car availability
    const car = await Car.findById(carId);
    if (!car || !car.availability) {
      return res.status(400).json({ message: 'Car not available' });
    }

    // Calculate total cost
    const totalCost = car.dailyRate * calculateDays(startDate, endDate);

    const newBooking = new Booking({
      user: req.user.id,
      car: carId,
      startDate,
      endDate,
      totalCost
    });

    const booking = await newBooking.save();

    // Update car availability
    await Car.findByIdAndUpdate(carId, { availability: false });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
      .populate('car');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      { status: 'cancelled' },
      { new: true }
    );

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Restore car availability
    await Car.findByIdAndUpdate(booking.car, { availability: true });

    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getAllBookings = async (req, res) => {
  try {
    // Only admin can access all bookings
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const bookings = await Booking.find()
      .populate('user', 'name email')
      .populate('car');
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

// Helper function to calculate days between dates
const calculateDays = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);
  return Math.ceil((end - start) / (1000 * 60 * 60 * 24));
};