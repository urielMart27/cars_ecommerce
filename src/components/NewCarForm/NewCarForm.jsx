import React, { useState } from "react";

const NewCarForm = ({}) => {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [mileage, setMileage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      make,
      model,
      year,
      price,
      mileage,
    };
  };

  console.log(make);
  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Add Car</button>
    </form>
  );
};

export default NewCarForm;
