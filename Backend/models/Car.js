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
    type: String,
    required: true
  },
  features: [String]
});

export default mongoose.model('Car', CarSchema);