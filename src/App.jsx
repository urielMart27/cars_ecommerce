// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import HomePage from "./pages/HomePage/HomePage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import NewCarPage from "./pages/NewCarPage/NewCarPage";
import CarDetailsPage from "./pages/CarDetailsPage/CarDetailsPage";
import CarInventoryPage from "./pages/CarInventoryPage/CarInventoryPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import ServicePage from "./pages/ServicePage/ServicePage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/newcar" element={<NewCarPage />} />
        <Route path="/cardetails/:id" element={<CarDetailsPage />} />
        <Route path="/inventory" element={<CarInventoryPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="/service" element={<ServicePage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
