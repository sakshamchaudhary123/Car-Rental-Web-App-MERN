import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post('/api/auth/login', formData);
      
      // Store token in localStorage
      localStorage.setItem('token', response.data.token);
      
      // Redirect to home page
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  // Function to close the login modal by navigating to the home page
  const closeModal = () => {
    setLoading(true);  // Optional: Show loading indicator to indicate navigation
    setTimeout(() => {
      navigate('/'); // Navigate to home page after a small delay (to avoid flickering)
    }, 200);  // Adjust delay as necessary (200ms in this case)
  };
  

  return (
    <>
      <div className="min-h-screen bg-base-200 py-8" id="login_modal">
        <div className="max-w-md mx-auto bg-base-100 rounded-lg shadow-xl relative">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-2xl font-bold text-center mb-6">Welcome Back</h2>

              {error && (
                <div className="alert alert-error mb-4">
                  <span>{error}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                    <Link to="/forgot-password" className="label-text-alt link link-primary">
                      Forgot password?
                    </Link>
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="input input-bordered"
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}
                  disabled={loading}
                >
                  {loading ? 'Logging in...' : 'Login'}
                </button>
              </form>

              <div className="text-center mt-4">
                Don't have an account?{' '}
                <Link to="/register" className="link link-primary">
                  Register here
                </Link>
              </div>

              {/* Close button to navigate back to the home page */}
              <div className="text-center mt-4">
                <button
                  onClick={closeModal}
                  className="btn bg-blue-500 hover:bg-blue-400 text-white w-full"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
