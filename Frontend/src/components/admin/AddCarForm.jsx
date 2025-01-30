// components/admin/AddCarForm.js
import React, { useState } from 'react';
import axios from 'axios';

const AddCarForm = () => {
  const [formData, setFormData] = useState({
    make: '',
    model: '',
    year: '',
    dailyRate: ''
  });
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      // Create preview URL
      const previewUrl = URL.createObjectURL(file);
      setPreview(previewUrl);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const formDataToSend = new FormData();
      // Append all form fields
      Object.keys(formData).forEach(key => {
        formDataToSend.append(key, formData[key]);
      });
      // Append image with the key 'imageUrl' as expected by backend
      formDataToSend.append('imageUrl', image);

      const response = await axios.post('/api/cars', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      // Reset form on success
      setFormData({
        make: '',
        model: '',
        year: '',
        dailyRate: ''
      });
      setImage(null);
      setPreview(null);
      
      // Show success message (you can implement your own notification system)
      alert('Car added successfully!');
      
    } catch (err) {
      setError(err.response?.data?.message || 'Error creating car');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Add New Car</h2>
      
      {error && (
        <div className="alert alert-error mb-4">
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Make</span>
          </label>
          <input
            type="text"
            name="make"
            value={formData.make}
            onChange={handleInputChange}
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Model</span>
          </label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleInputChange}
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Year</span>
          </label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleInputChange}
            className="input input-bordered"
            required
            min="1900"
            max={new Date().getFullYear() + 1}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Daily Rate ($)</span>
          </label>
          <input
            type="number"
            name="dailyRate"
            value={formData.dailyRate}
            onChange={handleInputChange}
            className="input input-bordered"
            required
            min="0"
            step="0.01"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Car Image</span>
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="file-input file-input-bordered w-full"
            required
          />
          {preview && (
            <div className="mt-2">
              <img
                src={preview}
                alt="Preview"
                className="w-full max-w-xs rounded-lg shadow-lg"
              />
            </div>
          )}
        </div>

        <button 
          type="submit" 
          className={`btn btn-primary w-full ${loading ? 'loading' : ''}`}
          disabled={loading}
        >
          {loading ? 'Adding Car...' : 'Add Car'}
        </button>
      </form>
    </div>
  );
};

export default AddCarForm;