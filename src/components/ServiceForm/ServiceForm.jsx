import React, { useEffect, useState } from "react";
import axios from "axios";
import { type } from "@testing-library/user-event/dist/type";

const ServiceForm = (carId, getCarDetails, token) => {
  const [serviceType, setServiceType] = useState("");
  const [serviceDate, setServiceDate] = useState("");
  const [userCars, setUserCars] = useState([]);
  const [associatedCar, setAssociatedCar] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const serviceTypes = [
    "Oil Change",
    "Brake Inspection",
    "Tire Rotation",
    "Other",
  ];

  useEffect(() => {
    const fetchUserCars = async () => {
      try {
        const response = await axios.get("https://localhost:5001/api/cars", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserCars(response.data);
      } catch (error) {
        console.error("Error fetching user cars:", error);
      }
    };
    fetchUserCars();
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventdefault();
    if (!serviceType || !serviceDate || !associatedCar) {
      return;
    }

    try {
      setSubmitting(true);

      const response = await axios.post(
        `https://localhost:5001/api/service/${carId}`,
        {
          serviceType,
          serviceDate,
          associatedCar,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Service Scheduled:", response.data);
    } catch (error) {
      console.error("Error scheduling service:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Service Type:
        <select
          value={serviceType}
          onChange={(e) => setServiceType(e.target.value)}
        >
          <option value="" disabled>
            Select a Service Type
          </option>
          {serviceTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>
      <label>
        Service Date:
        <input
          type="date"
          value={serviceDate}
          onChange={(e) => setServiceDate(e.target.value)}
        />
      </label>
      <label>
        Associated Car:
        <select
          value={associatedCar}
          onChange={(e) => setAssociatedCar(e.target.value)}
        >
          <option value="" disabled>
            Select a Car
          </option>
          {userCars.map((car) => (
            <option key={carId} value={carId}>
              {car.year} {car.make} {car.model}
            </option>
          ))}
        </select>
      </label>
      <button type="submit" disabled={submitting}>
        Schedule Service
      </button>
    </form>
  );
};

export default ServiceForm;
