import { configureStore } from "@reduxjs/toolkit";

import cart from "./cart/index";
import auth from "./auth/index";
import favourites from "./favourites/index";
import { handleCart, handleFavourites } from "../actions/actions";

export const store = configureStore({
  reducer: {
    cart,
    auth,
    favourites,
  },
});

store.subscribe(async () => {
  const state = store.getState();

  if (state.auth.user !== null) {
    await handleCart(state.auth.user.id, state.cart.cart);
    await handleFavourites(state.auth.user.id, state.favourites.favorites);
    localStorage.setItem(
      "favorites",
      JSON.stringify(state.favourites.favorites)
    );
    localStorage.setItem("cart", JSON.stringify(state.cart.cart));
  }
  localStorage.setItem("user", JSON.stringify(state.auth.user));
});
