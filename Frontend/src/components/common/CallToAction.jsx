import React from 'react';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <div className="py-20 px-6 bg-gradient-to-r from-indigo-500 to-purple-600">
      <div className="max-w-5xl mx-auto text-center">
        <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="p-12">
            <h2 className="text-4xl font-extrabold text-gray-800 mb-6">
              Ready to hit the road?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Join thousands of satisfied customers who trust our service. Don’t miss out on an amazing journey with us!
            </p>
            <div className="flex justify-center">
              <Link 
                to="/register" 
                className="bg-primary text-white hover:bg-blue-700 px-8 py-4 rounded-full shadow-xl transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
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
