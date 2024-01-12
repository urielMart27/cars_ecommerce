import React, { useState, useEffect } from "react";
import axios from "axios";

const CarDetails = ({ carObj }) => {
  const handleClick = (e) => {
    console.log(e);
  };
  return (
    carObj && (
      <div>
        <h4>
          {carObj.year} {carObj.make} {carObj.model}
        </h4>
        <div>
          <div>
            <span>Mileage</span>
            <span>{carObj.mileage}</span>
          </div>
          <div>
            <span>Price</span>
            <span>{carObj.price}</span>
          </div>
          <div>
            <button onClick={handleClick}>Favorite</button>
          </div>
        </div>
      </div>
    )
  );
};

export default CarDetails;
