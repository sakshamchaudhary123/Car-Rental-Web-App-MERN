import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import List from "../../assets/list.json";
import CarCard from "./CarCards";

function TrendingCars() {
    
    const [cars, setCars] = useState([]);

  const filterCar = List.filter((car) => car.category === "Trending");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="bg-base-100 py-12  max-w-7xl mx-auto container">
        <h2 className="text-3xl font-bold text-center mb-8">Trending Cars</h2>
        <div className="slider-container">
          <Slider {...settings}>
            {filterCar.map((items) => (
                <CarCard item={items} key={items.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default TrendingCars;
