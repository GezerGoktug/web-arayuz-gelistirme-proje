import { __addFavorite, __clearFavorites, __removeFavorite } from ".";
import { store } from "../store";
import getFavourites from "./api";

export const addFavorite = (product) => store.dispatch(__addFavorite(product));
export const removeFavorite = (id) => store.dispatch(__removeFavorite(id));
export const clearFavorites = () => store.dispatch(__clearFavorites());
export const initializeFavourites = (userId) =>
  store.dispatch(getFavourites(userId));
