import { store } from "../store";
import { __login, __logout, __updateProfile } from ".";

export const updateAccount = (updatedUser) =>
  store.dispatch(__updateProfile(updatedUser));
export const login = (user) => store.dispatch(__login(user));
export const logout = () => store.dispatch(__logout());
