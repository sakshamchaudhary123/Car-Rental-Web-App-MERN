import Car from '../models/Car.js';

export const createCar = async (req, res) => {
  try {
    // Only admin can create cars
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const { make, model, year, dailyRate, imageUrl, features } = req.body;

    const newCar = new Car({
      make,
      model,
      year,
      dailyRate,
      imageUrl,
      features
    });

    const car = await newCar.save();
    res.status(201).json(car);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const getAllCars = async (req, res) => {
  try {
    const { availability, make, minRate, maxRate } = req.query;
    let query = {};

    if (availability) {
      query.availability = availability === 'true';
    }
    if (make) {
      query.make = make;
    }
    if (minRate || maxRate) {
      query.dailyRate = {};
      if (minRate) query.dailyRate.$gte = parseFloat(minRate);
      if (maxRate) query.dailyRate.$lte = parseFloat(maxRate);
    }

    const cars = await Car.find(query);
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const getCarById = async (req, res) => {
  try {
    const car = await Car.findById(req.params.id);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.json(car);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

export const updateCar = async (req, res) => {
  try {
    // Only admin can update cars
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const car = await Car.findByIdAndUpdate(
      req.params.id, 
      req.body, 
      { new: true, runValidators: true }
    );

    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    res.json(car);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

export const deleteCar = async (req, res) => {
  try {
    // Only admin can delete cars
    if (req.user.role !== 'admin') {
      return res.status(403).json({ message: 'Access denied' });
    }

    const car = await Car.findByIdAndDelete(req.params.id);

    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    res.json({ message: 'Car removed' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};