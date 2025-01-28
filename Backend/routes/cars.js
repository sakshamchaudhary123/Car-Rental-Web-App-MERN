import express from 'express';
import { 
  createCar, 
  getAllCars, 
  getCarById, 
  updateCar, 
  deleteCar 
} from '../controllers/carController.js';
import authMiddleware from '../middleware/auth.js';

const router = express.Router();

router.post('/', authMiddleware, createCar);
router.get('/', getAllCars);
router.get('/:id', getCarById);
router.put('/:id', authMiddleware, updateCar);
router.delete('/:id', authMiddleware, deleteCar);

export default router;