import React from "react";
import Favorites from "../components/Favorites/Favorites";
import { category } from "../mock/productData";
import { storeFavorites } from "../stores/favorites/storeFavorites";

function favorites() {
  const { favorites } = storeFavorites();
  const totalResults = favorites.length;

  return (
    <div>
      <Favorites
        favoritesProducts={favorites}
        category={category}
        totalResults={totalResults}
      />
    </div>
  );
}

export default favorites;