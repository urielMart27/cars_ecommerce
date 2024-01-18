import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import "./ServiceForm.css";

const ServiceForm = ({ getCarDetails }) => {
  const [user, token] = useAuth();
  const [serviceType, setServiceType] = useState("");
  const [serviceDate, setServiceDate] = useState("");
  const [userCars, setUserCars] = useState([]);
  const [associatedCarId, setAssociatedCarId] = useState("");
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
    e.preventDefault();
    const serviceData = {
      serviceType,
      serviceDate,
      associatedCarId,
    };

    console.log(serviceData);
    if (!serviceType || !serviceDate || !associatedCarId) {
      return;
    }

    try {
      setSubmitting(true);

      console.log(associatedCarId);

      const response = await axios.post(
        `https://localhost:5001/api/service`,
        {
          serviceType,
          serviceDate,
          associatedCarId,
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
    <form onSubmit={handleSubmit} className="service-form">
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
          value={associatedCarId}
          onChange={(e) => setAssociatedCarId(e.target.value)}
        >
          <option value="" disabled>
            Select a Car
          </option>
          {userCars.map((car) => (
            <option key={car.id} value={car.id}>
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
