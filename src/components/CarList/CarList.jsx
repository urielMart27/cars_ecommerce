import React, { useState, useEffect } from "react";
import axios from "axios";

const CarList = () => {
  const [cars, setCars] = useState();

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("/api/cars");
        setCars(response.data);
      } catch (error) {
        console.error("Error fetching list of cars:", error);
      }
    };
    fetchCars();
  }, []);
  return (
    <div>
      <h2>Cars</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            <p>
              {car.make} {car.model} ({car.year})
            </p>
            <p>
              {car.price} {car.mileage}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
