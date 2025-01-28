// pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import Banner from "../components/common/Banner";
import Navbar from "../components/common/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      {/* Hero Section */}
      <Banner />

      {/* Featured Cars Section */}
      <div className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Car Card */}
          <div className="card bg-base-100 shadow-xl">
            <figure>
              <img src="/placeholder-car.jpg" alt="Car" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Luxury Sedan</h2>
              <p>Comfortable and stylish for any occasion</p>
              <div className="card-actions justify-between items-center">
                <span className="text-xl font-semibold">$99/day</span>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
          {/* More car cards... */}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-base-200 py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card bg-base-100">
              <div className="card-body items-center text-center">
                <div className="badge badge-primary badge-lg mb-2">24/7</div>
                <h3 className="card-title">Support</h3>
                <p>Round-the-clock customer service</p>
              </div>
            </div>
            {/* More feature cards... */}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="card bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title justify-center text-2xl mb-4">
                Ready to hit the road?
              </h2>
              <p>
                Join thousands of satisfied customers who trust our service.
              </p>
              <div className="card-actions justify-center mt-4">
                <Link to="/register" className="btn btn-secondary">
                  Sign Up Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
