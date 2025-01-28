import {User} from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res) => {

  const { name, email, phoneNo, password, role } = req.body;
  if(!name || !email || !phoneNo || !password || !role){
    return res.status(400).json({ message: 'Please enter all fields' });
  }

  try {
    // Check if user exists
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      phoneNo,
      role
    });

    await newUser.save();
    if(newUser){
      return res.status(200).json({ message: 'User registered successfully' });
    }

    // Generate JWT token
    // const payload = {
    //   user: {
    //     id: user._id,
    //     role: user.role
    //   }
    // };

    // jwt.sign(
    //   payload, 
    //   process.env.JWT_SECRET, 
    //   { expiresIn: '1h' }, 
    //   (err, token) => {
    //     if (err) throw err;
    //     res.json({ token });
    //   }
    // );
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// export const loginUser = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // Check if user exists
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Validate password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     // Generate JWT token
//     const payload = {
//       user: {
//         id: user._id,
//         role: user.role
//       }
//     };

//     jwt.sign(
//       payload, 
//       process.env.JWT_SECRET, 
//       { expiresIn: '1h' }, 
//       (err, token) => {
//         if (err) throw err;
//         res.json({ token });
//       }
//     );
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };

// export const getUserProfile = async (req, res) => {
//   try {
//     const user = await User.findById(req.user.id).select('-password');
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: 'Server error', error: error.message });
//   }
// };