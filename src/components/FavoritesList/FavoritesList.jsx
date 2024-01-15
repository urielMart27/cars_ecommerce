import React from "react";
import { Link } from "react-router-dom";
import Car from "../Car/Car";

const FavoritesList = ({ favorites }) => {
  return (
    <div>
      {favorites.map((favorite) => (
        <div key={favorite.id}>
          <Link to={`/favorites/${favorites.id}`}>
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
