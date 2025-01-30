// components/cars/CarCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const CarCard = ({ item }) => {
  if (!item) {
    return <div>Loading...</div>; // Handle loading state or error
  }

  const {
    id,
    name,
    image,
    pricePerDay,
    type,
    transmission,
    seats,
    fuelType
  } = item;

  return (
    <div className="card bg-slate-100 shadow-2xl hover:scale-105 duration-150 mx-2 my-4 transition-transform cursor-pointer">
      <figure className="px-4 pt-4">
        <img 
          src={image} 
          alt={name} 
          className="rounded-xl h-48 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">{type}</div>
        </h2>
        
        <div className="flex flex-wrap gap-2 my-2">
          <div className="badge badge-outline">{transmission}</div>
          <div className="badge badge-outline">{seats} Seats</div>
          <div className="badge badge-outline">{fuelType}</div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <div className="text-xl font-bold">
            Rs {pricePerDay}
            <span className="text-sm font-normal">/day</span>
          </div>
          <Link to={`/cars/${id}`} className="btn btn-primary btn-sm">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
