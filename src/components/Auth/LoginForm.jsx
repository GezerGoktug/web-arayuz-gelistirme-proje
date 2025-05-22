import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../store/auth/actions";
import { initializeFavourites } from "../../store/favourites/actions";
import { initializeCart } from "../../store/cart/actions";
import Input from "../ui/Input";
import Button from "../ui/Button";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const navigate = useNavigate();
  const form = searchParams[0].get("form");

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      const res = await fetch(
        `http://localhost:3000/users?email=${data.email}&password=${data.password}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      const dt = await res.json();

      if (!res.ok) throw new Error("Login failed");

      if (dt.length === 0) throw new Error("User not found");

      initializeFavourites(dt[0].id);
      initializeCart(dt[0].id);
      login(dt[0]);

      navigate("/");
      toast.success("Login successful");
    } catch {
      toast.error("Login failed");
    }
  };

  if (form === "register") return;

  return (
    <div id="login-panel">
      <h6 className="font-semibold text-3xl text-white text-center">Login</h6>
      <form onSubmit={onSubmit} className="mt-8">
        <Input
          type="email"
          label="Email"
          name="email"
          wrapperClassName="mb-4"
        />

        <Input type="password" label="Password" name="password" />

        <div className="underline mt-4 text-sm cursor-pointer">
          Forgot your password?
        </div>

        <Button
          type="submit"
          className="bg-indigo-700 text-white mt-4 w-full rounded-xl"
        >
          Login
        </Button>
        <Link to={`/auth?form=register`}>
          <div className="chance-auth-panel text-sm text-center mt-4 cursor-pointer">
            Don't have an account? Sign up
          </div>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
