import {
  __addCart,
  __clearCart,
  __decreaseQuantity,
  __increaseQuantity,
  __removeCart,
} from ".";
import { store } from "../store";
import getCart from "./api";

export const addCart = (product) => store.dispatch(__addCart(product));
export const removeCart = (id) => store.dispatch(__removeCart(id));
export const increaseQuantity = (id) => store.dispatch(__increaseQuantity(id));
export const decreaseQuantity = (id) => store.dispatch(__decreaseQuantity(id));
export const clearCart = () => store.dispatch(__clearCart());
export const initializeCart = (userId) => store.dispatch(getCart(userId));
