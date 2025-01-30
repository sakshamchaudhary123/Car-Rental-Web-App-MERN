import React from 'react'
import backGroundImg from "../../assets/Car Logo2.jpg";
import { Link } from "react-router-dom";

function Banner() {
  return (
    <div >
      <div
        className="hero h-[70vh]" // Custom height of 75% of the viewport height
        style={{
          backgroundImage:
            `url(${backGroundImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-70 bg-black"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Welcome to Car Rentals</h1>
            <p className="mb-5">
              Find the perfect car for your journey. Affordable rates, flexible
              options, and top-notch service.
            </p>
            <Link to="/cars" className="btn btn-primary">Book Now</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
