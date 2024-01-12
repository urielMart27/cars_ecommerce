import axios from "axios";
import React, { useState, useEffect } from "react";
import Car from "../../components/Car/Car";

const CarList = ({ cars, setCars, activeIndex, setActiveIndex }) => {
  const carItems = cars.map((car, i) => (
    <Car
      key={car.id}
      make={car.make}
      model={car.model}
      year={car.year}
      thumbnailUrl={car.thumbnailUrl}
      activeIndex={activeIndex}
      setActiveIndex={setActiveIndex}
      index={i}
    />
  ));

  const GetAllCars = async () => {
    try {
      const response = await axios.get("https://localhost:5001/api/cars");
      // console.log(response);
      setCars(response.data);
    } catch (error) {
      console.warn("Error in GetAllCars request", error);
    }
  };
  useEffect(() => {
    GetAllCars();
  }, []);

  return (
    <div>
      <h4>Cars</h4>
      <div>
        <div>{carItems}</div>
      </div>
    </div>
  );
};

export default CarList;
