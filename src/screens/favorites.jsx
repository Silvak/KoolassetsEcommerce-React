import React from "react";
import Favorites from "../components/Favorites/Favorites";
import { category } from "../mock/productData";
import { storeFavorites } from "../stores/favorites/storeFavorites";

function favorites() {
  const { favorites } = storeFavorites();
  const totalResults = favorites.length;

  return (
    <>
      <Favorites
        favoritesProducts={favorites}
        category={category}
        totalResults={totalResults}
      />
    </>
  );
}

export default favorites;
