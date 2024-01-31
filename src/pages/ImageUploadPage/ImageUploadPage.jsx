import React, { useState } from "react";
import ImageForm from "../../components/ImageForm/ImageForm";

const ImageUploadPage = () => {
  const [carId, setCarId] = useState("");

  const handleCarIdChange = (e) => {
    setCarId(e.target.value);
  };

  return (
    <div>
      <h2>Image Upload Page</h2>
      <label>Car ID:</label>
      <input type="text" value={carId} onChange={handleCarIdChange} />
      <ImageForm carId={carId} />
    </div>
  );
};

export default ImageUploadPage;
