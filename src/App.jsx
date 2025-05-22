import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Favourites from "./pages/Favourites";
import ProductDetail from "./pages/ProductDetail";
import { useIsLoggedIn } from "./store/auth/hooks";
import Error from "./pages/Error";
import { toast } from "react-toastify";
import Profile from "./pages/Profile";

const PrivateRoute = () => {
  const isLoggedIn = useIsLoggedIn();

  if (!isLoggedIn) {
    setTimeout(() => {
      toast.error("Please log in to access this page");
    }, 400);
    return <Navigate to="/auth" />;
  }

  return <Outlet />;
};

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/auth" element={<Auth />} />
      </Route>
      <Route element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route element={<PrivateRoute />}>
          <Route path="/cart" element={<Cart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favourites" element={<Favourites />} />
        </Route>
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/*" element={<Error />} />
      </Route>
    </Routes>
  );
}

export default App;
