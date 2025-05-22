import { createSlice } from "@reduxjs/toolkit";
import getCart from "./api";

const getInitialCartState = async () => {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null;

  if (user !== null) {
    try {
      const res = await fetch(`http://localhost:3000/cart/${user.id}`);
      if (!res.ok) {
        throw new Error("Error pulling initial basket data");
      }
      const dt = await res.json();

      return dt.cart;
    } catch {
      return [];
    }
  }
  return [];
};

const initialState = {
  cart: await getInitialCartState(),
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    __addCart(state, action) {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    __removeCart(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    __increaseQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    __decreaseQuantity(state, action) {
      const item = state.cart.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.cart = state.cart.filter((item) => item.id !== action.payload);
      }
    },
    __clearCart(state) {
      state.cart = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getCart.fulfilled, (state, action) => {
      state.cart = action.payload.cart;
    });
  },
});

export const {
  __addCart,
  __removeCart,
  __increaseQuantity,
  __decreaseQuantity,
  __clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
