import { useSelector } from "react-redux";

export const useAccount = () => useSelector((state) => state.auth.user);
export const useIsLoggedIn = () => useSelector((state) => state.auth.user) !== null;
