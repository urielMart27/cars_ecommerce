import React from "react";
import { Link } from "react-router-dom";
import Car from "../Car/Car";
import "./FavoritesList.css";

const FavoritesList = ({ favorites }) => {
  return (
    <div className="favorites-list">
      {favorites.map((favorite) => (
        <div key={favorite.id} className="favorites-list-item">
          <Link key={favorite.id} to={`/cardetails/${favorite.id}`}>
            <p>
              {favorite.make}
              {favorite.model}
            </p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;
