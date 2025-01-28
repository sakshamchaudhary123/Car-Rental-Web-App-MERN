import { Car } from '../models/Car.js';
import { v2 as cloudinary } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

export const createCar = async (req, res) => {
  try {
    // Only admin can create cars
    // if (req.user.role !== 'admin') {
    //   return res.status(403).json({ message: 'Access denied' });
    // }

    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ message: 'Car image is required' });
    }

    const { imageUrl } = req.files;
    const allowedFormats = ['image/jpeg', 'image/png', 'image/jpg'];

    if (!allowedFormats.includes(imageUrl.mimetype)) {
      return res.status(400).json({ message: 'Invalid file format. Only JPEG, JPG, PNG files are allowed' });
    }

    const { make, model, year, dailyRate } = req.body;
    if (!make || !model || !year || !dailyRate || !imageUrl) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Upload image to Cloudinary
    const result = await cloudinary.uploader.upload(imageUrl.tempFilePath, {
      folder: 'car-rental/cars',
      width: 1200,
      crop: "scale"
    });

    const newCar = new Car({
      make,
      model,
      year,
      dailyRate,
      availability: true, // Default value for availability
      imageUrl: {
        public_id: result.public_id,
        secure_url: result.secure_url
      },
    });

    await newCar.save();
    
    res.status(201).json({
      message: 'Car created successfully',
      newCar
    });
  } catch (error) {
    res.status(500).json({ message: 'Nahi hua bhai', error: error.message });
  }
};

// export const getAllCars = async (req, res) => {
//   try {
//     const { availability, make, minRate, maxRate } = req.query;
//     let query = {};

//     if (availability) {
//       query.availability = availability === 'true';
//     }
//     if (make) {
//       query.make = make;
//     }
//     if (minRate || maxRate) {
//       query.dailyRate = {};
//       if (minRate) query.dailyRate.$gte = parseFloat(minRate);
//       if (maxRate) query.dailyRate.$lte = parseFloat(maxRate);
//     }

//     const cars = await Car.find(query);
//     res.json(cars);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// export const getCarById = async (req, res) => {
//   try {
//     const car = await Car.findById(req.params.id);
//     if (!car) {
//       return res.status(404).json({ message: 'Car not found' });
//     }
//     res.json(car);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// export const updateCar = async (req, res) => {
//   try {
//     // Only admin can update cars
//     if (req.user.role !== 'admin') {
//       return res.status(403).json({ message: 'Access denied' });
//     }

//     const car = await Car.findById(req.params.id);
//     if (!car) {
//       return res.status(404).json({ message: 'Car not found' });
//     }

//     // Upload new image if provided
//     if (req.file) {
//       // Delete old image from Cloudinary if exists
//       if (car.imageUrl) {
//         const publicId = car.imageUrl.split('/').pop().split('.')[0];
//         await cloudinary.uploader.destroy(`car-rental/cars/${publicId}`);
//       }

//       // Upload new image
//       const result = await cloudinary.uploader.upload(req.file.path, {
//         folder: 'car-rental/cars',
//         width: 1200,
//         crop: "scale"
//       });
//       req.body.imageUrl = result.secure_url;
//     }

//     const updatedCar = await Car.findByIdAndUpdate(
//       req.params.id, 
//       req.body,
//       { new: true, runValidators: true }
//     );

//     res.json(updatedCar);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };

// export const deleteCar = async (req, res) => {
//   try {
//     // Only admin can delete cars
//     if (req.user.role !== 'admin') {
//       return res.status(403).json({ message: 'Access denied' });
//     }

//     const car = await Car.findById(req.params.id);
//     if (!car) {
//       return res.status(404).json({ message: 'Car not found' });
//     }

//     // Delete image from Cloudinary if exists
//     if (car.imageUrl) {
//       const publicId = car.imageUrl.split('/').pop().split('.')[0];
//       await cloudinary.uploader.destroy(`car-rental/cars/${publicId}`);
//     }

//     await Car.findByIdAndDelete(req.params.id);
//     res.json({ message: 'Car removed' });
//   } catch (error) {
//     res.status(500).json({ message: 'Server error' });
//   }
// };