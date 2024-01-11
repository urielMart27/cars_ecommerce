import React, { useState, useEffect } from "react";
import axios from "axios";

const CarDetails = ({ make }) => {
  return (
    <div>
      <h4>2008 {make} A6</h4>
      <div>
        <div>
          <span>Mileage</span>
          <span>120,000</span>
        </div>
        <div>
          <span>Price</span>
          <span>$10,500</span>
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
