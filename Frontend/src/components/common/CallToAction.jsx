import React from 'react';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <div className="py-16 px-6 bg-gradient-to-r from-blue-500 to-indigo-600">
      <div className="max-w-4xl mx-auto text-center">
        <div className="card bg-white shadow-lg rounded-lg">
          <div className="card-body p-8">
            <h2 className="card-title text-3xl font-semibold text-gray-800 mb-6">
              Ready to hit the road?
            </h2>
            <p className="text-gray-600 mb-6">
              Join thousands of satisfied customers who trust our service. Don't miss out on a great experience.
            </p>
            <div className="card-actions justify-center">
              <Link to="/register" className="btn bg-primary text-white hover:bg-blue-700 px-6 py-3 rounded-md shadow-lg transition duration-200">
                Sign Up Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
