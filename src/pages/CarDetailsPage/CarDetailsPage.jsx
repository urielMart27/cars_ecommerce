import CarDetails from "../../components/CarDetails/CarDetails";

const CarDetailsPage = () => {
  const selectedCar = {
    make: "Audi",
    model: "A6",
    year: 2008,
    mileage: 120000,
    price: 10500,
  };
  return (
    <div>
      <h2>Details</h2>
      <CarDetails carObj={selectedCar} />
    </div>
  );
};

export default CarDetailsPage;
