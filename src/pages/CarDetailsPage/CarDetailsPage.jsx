import { useParams } from "react-router-dom";
import CarDetails from "../../components/CarDetails/CarDetails";
import axios from "axios";
import React, { useState, useEffect } from "react";

const CarDetailsPage = () => {
  const { id } = useParams();
  const [carDetails, setCarDetails] = useState(null);

  const getCarDetails = async () => {
    try {
      const response = await axios.get(`https://localhost:5001/api/cars/${id}`);
      setCarDetails(response.data);
    } catch (error) {
      console.warn("Error in getCarDetails request", error);
    }
  };

  useEffect(() => {
    getCarDetails();
  }, [id]);

  return (
    <div>
      <h2>Details</h2>
      <CarDetails carObj={carDetails} />
    </div>
  );
};

export default CarDetailsPage;
