import { useEffect, useState } from "react";
import CarList from "../../components/CarList/CarList";
import SearchBar from "../../components/SearchBar/SearchBar";
import axios from "axios";

const CarInventoryPage = () => {
  const [cars, setCars] = useState([]);
  const [filteredCars, setFilteredCars] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleSearch = () => {
    const filtered = cars.filter(
      (car) =>
        car.make.toLowerCase().includes(searchInput.toLowerCase()) ||
        car.model.toLowerCase().includes(searchInput.toLowerCase()) ||
        car.year.toString().includes(searchInput)
    );
    setFilteredCars(filtered);
  };

  useEffect(() => {
    const getAllCars = async () => {
      try {
        const response = await axios.get("https://localhost:5001/api/cars");
        setCars(response.data);
      } catch (error) {
        console.warn("Error in getAllCars request", error);
      }
    };

    getAllCars();
  }, []);
  useEffect(() => {
    handleSearch();
  }, [searchInput, cars]);

  return (
    <div>
      <h2>Inventory</h2>
      <SearchBar
        searchInput={searchInput}
        OnSearch={handleSearch}
        onChange={(e) => setSearchInput(e.target.value)}
      />

      <CarList
        cars={filteredCars}
        setCars={setCars}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
    </div>
  );
};

export default CarInventoryPage;
