// pages/Home.js
import React from "react";
import Banner from "../components/common/Banner";
import Navbar from "../components/common/Navbar";
import CarCard from "../components/cars/CarCards";

import Car1 from "../assets/images/1.jpg";
import Car2 from "../assets/images/2.jpg";
import Features from "../components/cars/Features";
import CallToAction from "../components/common/CallToAction";

// Home Page Component
const Home = () => {

  const cars = [
    {
      id: 1,
      name: 'Toyota Corolla',
      image: Car1,
      pricePerDay: 50,
      type: 'Sedan',
      transmission: 'Automatic',
      seats: 5,
      fuelType: 'Petrol'
    },
    {
      id: 2,
      name: 'Honda Civic',
      image: Car2,
      pricePerDay: 60,
      type: 'Sedan',
      transmission: 'Manual',
      seats: 5,
      fuelType: 'Diesel'
    },
    {
      id: 3,
      name: 'Toyota Prius',
      image: Car1,
      pricePerDay: 70,
      type: 'Hatchback',
      transmission: 'Automatic',
      seats: 5,
      fuelType: 'Petrol'
    },
    {
      id: 4,
      name: 'Suzuki Swift',
      image: Car2,
      pricePerDay: 40,
      type: 'Hatchback',
      transmission: 'Manual',
      seats: 5,
      fuelType: 'Petrol'
    },
    {
      id: 5,
      name: 'Toyota Land Cruiser',
      image: Car1,
      pricePerDay: 100,
      type: 'SUV',
      transmission: 'Automatic',
      seats: 8,
      fuelType: 'Diesel'
    },
    {
      id: 6,
      name: 'Toyota Fortuner',
      image: Car2,
      pricePerDay: 90,
      type: 'SUV',
      transmission: 'Automatic',
      seats: 7,
      fuelType: 'Diesel'
    }
    // Add more cars as needed
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* Hero Section */}
      <Banner />

      {/* Featured Cars Section */}
      <div className="py-12 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Map through cars and render CarCard for each one */}
          {cars.map((car) => (
            <CarCard key={car.id} car={car} />
          ))}
        </div>
      </div>

      {/* Features Section */}
        <Features />

      {/* CTA Section */}
      <CallToAction />
    </>
  );
};

export default Home;
