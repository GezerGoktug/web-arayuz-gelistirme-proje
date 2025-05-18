import { createAsyncThunk } from "@reduxjs/toolkit";

const getFavourites = createAsyncThunk("favourites", async (id) => {

  const res = await fetch(`http://localhost:3000/favourites/${id}`);

  return await res.json();
});

export default getFavourites;
