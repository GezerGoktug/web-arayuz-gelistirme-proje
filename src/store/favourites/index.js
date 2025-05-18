import { createSlice } from "@reduxjs/toolkit";
import getFavourites from "./api";

const getInitialFavouriteState = async () => {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  if (user !== null) {
    try {
      const res = await fetch(`http://localhost:3000/favourites/${user.id}`);
      if (!res.ok) {
        throw new Error("Başlangıç favori ürün verileri çekerken hata oluştu");
      }
      const dt = await res.json();

      return dt.favourites;
    } catch {
      return [];
    }
  }
  return [];
};
const initialState = {
  favorites: await getInitialFavouriteState(),
};

const favouriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    __addFavorite(state, action) {
      const exists = state.favorites.find(
        (item) => item.id === action.payload.id
      );
      if (!exists) {
        state.favorites.push(action.payload);
      }
    },
    __removeFavorite(state, action) {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
    },
    __clearFavorites(state) {
      state.favorites = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getFavourites.fulfilled, (state, action) => {
      state.favorites = action.payload.favourites;
    });
  },
});

export const { __addFavorite, __removeFavorite, __clearFavorites } =
  favouriteSlice.actions;
export default favouriteSlice.reducer;
