import React, { useState } from "react";
import axios from "axios";
import "./NewCarForm.css";

const NewCarForm = ({}) => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [mileage, setMileage] = useState("");
  const [thumbnailUrl, setThumbnailUrl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      make,
      model,
      year,
      price,
      mileage,
      thumbnailUrl,
    };
    try {
      const response = await axios.post(
        "https://localhost:5001/api/employee/addCar",
        formData
      );
    } catch (error) {
      console.warn("Error submitting new car form: ", error);
    }
  };
  return (
    <form onSubmit={handleSubmit} className="new-car-form">
      <h4>Add New Car</h4>
      <div>
        <label>Make</label>
        <input value={make} onChange={(e) => setMake(e.target.value)} />
      </div>
      <div>
        <label>Model</label>
        <input value={model} onChange={(e) => setModel(e.target.value)} />
      </div>
      <div>
        <label>Year</label>
        <input value={year} onChange={(e) => setYear(e.target.value)} />
      </div>
      <div>
        <label>Price</label>
        <input value={price} onChange={(e) => setPrice(e.target.value)} />
      </div>
      <div>
        <label>Mileage</label>
        <input value={mileage} onChange={(e) => setMileage(e.target.value)} />
      </div>
      <div>
        <label>Thumbnail Url</label>
        <input
          value={thumbnailUrl}
          onChange={(e) => setThumbnailUrl(e.target.value)}
        />
      </div>
      <button type="submit">Add Car</button>
    </form>
  );
};

export default NewCarForm;
