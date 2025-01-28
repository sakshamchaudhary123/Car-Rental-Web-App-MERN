import mongoose from 'mongoose';
import validator from 'validator';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [validator.isEmail, 'Please enter a valid email']
  },
  phoneNo: {
    type: Number,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false,
    minlength: 8
  },
  role: {
    type: String,
    enum: ['customer', 'admin'],
    default: 'customer'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export const User = mongoose.model('User', UserSchema);