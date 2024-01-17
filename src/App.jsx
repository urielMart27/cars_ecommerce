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
import FavoritesPage from "./pages/FavoritesPage/FavoritesPage";
import ServicePage from "./pages/ServicePage/ServicePage";
import AppointmentsPage from "./pages/AppointmentsPage/AppointmentsPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";
import MessagesPage from "./pages/MessagesPage/MessagesPage";

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
        <Route path="/appointments" element={<AppointmentsPage />} />
        <Route path="/messages" element={<MessagesPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
