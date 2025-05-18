import React from "react";
import ProductCard from "../common/ProductCard";
import { useFavouritesProducts } from "../../store/favourites/hooks";

const FavouritesProducts = () => {
  const favouritesProducts = useFavouritesProducts();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
      {favouritesProducts.map((favPrd) => (
        <ProductCard key={"fav_product_" + favPrd.id} product={favPrd} />
      ))}
    </div>
  );
};

export default FavouritesProducts;
