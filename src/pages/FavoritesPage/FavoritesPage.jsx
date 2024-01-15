import React, { useState, useEffect } from "react";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import FavoritesList from "../../components/FavoritesList/FavoritesList";

const FavoritesPage = () => {
  const [user, token] = useAuth();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await axios.get(
          "https://localhost:5001/api/user/favorites",
          { headers: { Authorization: "Bearer " + token } }
        );
        setFavorites(response.data);
      } catch (error) {
        console.error("Error Fetching Favorites", error);
      }
    };
    fetchFavorites();
  }, []);

  return (
    <div>
      <h2>Your Favorites</h2>
      <FavoritesList favorites={favorites} />
    </div>
  );
};

export default FavoritesPage;
