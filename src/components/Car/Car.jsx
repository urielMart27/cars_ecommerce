import React from "react";

const Car = ({ make, model, year, price, mileage }) => {
  return (
    <div>
      <h2>
        {year} {make} {model}
      </h2>
      <p>{price}</p>
      <p>{mileage}</p>
    </div>
  );
};

export default Car;
