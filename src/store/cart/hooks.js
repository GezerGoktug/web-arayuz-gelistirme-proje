import { useSelector } from "react-redux";

export const useCart = () => useSelector((state) => state.cart.cart);
