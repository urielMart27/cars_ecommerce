import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navBar">
      <ul>
        <li className="brand">
          <Link to="/" className="carzone-link">
            <b className="carzone-link">CarZone</b>
          </Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/newcar">Add Car</Link>
          <Link to="/favorites">Favorites</Link>
          <Link to="/service">Service</Link>
          <Link to="/appointments">Appointments</Link>
          <Link to="/messages">Messages</Link>
        </li>
        <li>
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
