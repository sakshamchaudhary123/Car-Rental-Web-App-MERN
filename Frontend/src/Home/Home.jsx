// pages/Home.js
import React from "react";
import Banner from "../components/common/Banner";
import Navbar from "../components/common/Navbar";
import CarCard from "../components/cars/CarCards";

import Features from "../components/cars/Features";
import CallToAction from "../components/common/CallToAction";
import Footer from "../components/common/Footer";
import TrendingCars from "../components/cars/TrendingCars";

// Home Page Component
const Home = () => {

  return (
    <>
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <Banner />

      {/* Trendiing Cars Section */}
      <TrendingCars />

      {/* Features Section */}
        <Features />

      {/* CTA Section */}
      <CallToAction />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
