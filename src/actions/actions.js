export const handleCart = async (userId, cart) => {

  await fetch(`http://localhost:3000/cart/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      cart: cart,
    }),
  });
};

export const handleFavourites = async (userId, favourites) => {
  await fetch(`http://localhost:3000/favourites/${userId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      favourites: favourites,
    }),
  });
};

export const setDefaultUserCartAndFavourites = async (userId) => {
  await fetch("http://localhost:3000/favourites", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      id: userId,
      favourites: [],
    }),
  });
  await fetch("http://localhost:3000/cart", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      id: userId,
      cart: [],
    }),
  });
};
