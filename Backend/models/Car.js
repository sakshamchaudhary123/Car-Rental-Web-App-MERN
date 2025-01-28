import mongoose from 'mongoose';

const CarSchema = new mongoose.Schema({
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  dailyRate: {
    type: Number,
    required: true
  },
  availability: {
    type: Boolean,
    default: true
  },
  imageUrl: {
    public_id: {
      type: String,
      required: true
    },
    secure_url: {
      type: String,
      required: true
    }
  },
});

export const Car =  mongoose.model('Car', CarSchema);