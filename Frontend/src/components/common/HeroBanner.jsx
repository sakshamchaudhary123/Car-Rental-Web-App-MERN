import React, { useState } from 'react';

const HeroBanner = () => {
  const [city, setCity] = useState('');
  const [pickupLocation, setPickupLocation] = useState('');
  const [tripStart, setTripStart] = useState('');
  const [tripEnd, setTripEnd] = useState('');
  const [dropLocation, setDropLocation] = useState('');

  const handleSearch = () => {
    // Handle the search logic here
    console.log('Searching for cars in', city);
  };

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 px-4 border-r'>
        <div className="relative bg-blue-500 text-white py-16 px-6 md:px-16">
      <div className="container mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">Find Your Ride</h1>
        <p className="text-xl mb-8">Book your next trip with ease</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label htmlFor="city" className="block text-lg font-medium mb-2">City</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="w-full px-4 py-2 rounded-md shadow-sm"
              placeholder="Enter City"
            />
          </div>
          
          <div>
            <label htmlFor="pickupLocation" className="block text-lg font-medium mb-2">Pick-Up Location</label>
            <input
              type="text"
              id="pickupLocation"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="w-full px-4 py-2 rounded-md shadow-sm"
              placeholder="Pick-Up Location"
            />
          </div>
          
          <div>
            <label htmlFor="dropLocation" className="block text-lg font-medium mb-2">Drop-Off Location</label>
            <input
              type="text"
              id="dropLocation"
              value={dropLocation}
              onChange={(e) => setDropLocation(e.target.value)}
              className="w-full px-4 py-2 rounded-md shadow-sm"
              placeholder="Drop-Off Location"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <label htmlFor="tripStart" className="block text-lg font-medium mb-2">Trip Start</label>
            <input
              type="date"
              id="tripStart"
              value={tripStart}
              onChange={(e) => setTripStart(e.target.value)}
              className="w-full px-4 py-2 rounded-md shadow-sm"
            />
          </div>
          
          <div>
            <label htmlFor="tripEnd" className="block text-lg font-medium mb-2">Trip End</label>
            <input
              type="date"
              id="tripEnd"
              value={tripEnd}
              onChange={(e) => setTripEnd(e.target.value)}
              className="w-full px-4 py-2 rounded-md shadow-sm"
            />
          </div>
        </div>

        <button
          onClick={handleSearch}
          className="mt-8 px-8 py-3 bg-yellow-500 text-black rounded-full font-semibold hover:bg-yellow-600 transition duration-300"
        >
          Search
        </button>
      </div>
    </div>
    </div>
  );
};

export default HeroBanner;
