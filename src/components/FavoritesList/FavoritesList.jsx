import React from "react";
import Car from "../Car/Car";

const FavoritesList = ({ favorites }) => {
  return (
    <div>
      {favorites.map((favorite) => (
        <Car key={favorite.id} book={favorite} />
      ))}
    </div>
  );
};

export default FavoritesList;
