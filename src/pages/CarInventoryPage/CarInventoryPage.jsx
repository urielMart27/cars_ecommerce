import { useState } from "react";
import CarList from "../../components/CarList/CarList";

const CarInventoryPage = () => {
  const [cars, setCars] = useState([]);
  const [activeIndex, setActiveIndex] = useState(-1);

  return (
    <div>
      <h2>Inventory</h2>

      <CarList
        cars={cars}
        setCars={setCars}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
};

export default CarInventoryPage;
