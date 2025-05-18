import { useSelector } from "react-redux";

export const useFavouritesProducts = () =>
  useSelector((state) => state.favourites.favorites);

export const useIsFavProduct = (id) => {
  const favouritesProducts = useSelector((state) => state.favourites.favorites);

  return favouritesProducts?.some((favPrd) => favPrd.id === id);
};
