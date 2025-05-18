import { createAsyncThunk } from "@reduxjs/toolkit";

const getCart = createAsyncThunk("cart", async (id) => {
  const res = await fetch(`http://localhost:3000/cart/${id}`);
  
  return await res.json();
});

export default getCart;
