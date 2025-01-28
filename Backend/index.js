import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import cors from 'cors';
import fileUpload from 'express-fileupload';

import userRoutes from './routes/users.js';
import carRoutes from './routes/cars.js';
import bookingRoutes from './routes/bookings.js';

const app = express();
dotenv.config();

// Connect Database
connectDB();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json({ extended: false }));
app.use(fileUpload({
    useTempFiles: true,
    tempFileDir: '/tmp/'
}));

// Define Routes
app.use('/api/users', userRoutes);
app.use('/api/cars', carRoutes);
app.use('/api/bookings', bookingRoutes);


app.listen(PORT, () => console.log(`Server started on port ${PORT}`));