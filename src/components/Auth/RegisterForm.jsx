import { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../../store/auth/actions";
import { setDefaultUserCartAndFavourites } from "../../actions/actions";
import Input from "../ui/Input";
import Button from "../ui/Button";

const validator = (data) => {
  const { username, email, password, age } = data;

  const errorsMap = new Map();

  const usernameErrors = [];

  if (username.length < 3)
    usernameErrors.push("Username cannot be less than 3 characters");

  if (username.length > 15)
    usernameErrors.push("Username cannot be more than 15 characters");

  const emailErrors = [];

  if (email.length === 0) emailErrors.push("Email field cannot be empty");

  if (!email.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/))
    emailErrors.push("Email not in proper format");

  const passwordErrors = [];

  if (password.length < 8)
    passwordErrors.push("Password cannot be less than 8 characters");

  if (!password.match(/^(?=(.*\p{L}){4,}).*$/u))
    passwordErrors.push("Password must be at least 4 letters");

  const ageErrors = [];

  if (age < 18) ageErrors.push("If you are under 18, you cannot register");

  if (emailErrors.length > 0) errorsMap.set("email", emailErrors);
  if (usernameErrors.length > 0) errorsMap.set("username", usernameErrors);
  if (passwordErrors.length > 0) errorsMap.set("password", passwordErrors);
  if (ageErrors.length > 0) errorsMap.set("age", ageErrors);

  return errorsMap;
};

const RegisterForm = () => {
  const searchParams = useSearchParams();
  const navigate = useNavigate();
  const form = searchParams[0].get("form");

  const [errors, setErrors] = useState(null);

  const onSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
      username: e.target.username.value,
      age: Number(e.target.age.value),
    };
    const validated = validator(data);

    if (validated.size > 0) {
      const errorObj = {};
      validated.forEach((value, key) => (errorObj[key] = value));
      setErrors(errorObj);
      return;
    }

    try {
      const res = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const dt = await res.json();

      if (!res.ok) throw new Error("Registration failed");

      login(dt);

      await setDefaultUserCartAndFavourites(dt.id);

      navigate("/");
      toast.success("Registration successful");
    } catch {
      toast.error("Registration failed");
    }
  };

  if (form !== "register") return;
  return (
    <div id="register-panel">
      <h6 className="font-semibold text-3xl text-white text-center">
        Register
      </h6>

      <form onSubmit={onSubmit} className="mt-8">
        <Input
          minLength="3"
          maxLength="15"
          name="username"
          label="Username"
          inputClassName={`${
            errors?.username
              ? "bg-red-900/80 border-red-900 text-white  "
              : "border-black-400"
          } transition-colors duration-400`}
          labelClassName={`${
            errors?.username ? "text-white" : ""
          }  transition-all`}
        />
        {errors?.username &&
          errors.username.map((err) => (
            <span className="text-red-600 font-medium text-xs animate-fadeLeft">
              {err}
            </span>
          ))}

        <Input
          type="email"
          name="email"
          label="Email"
          inputClassName={`${
            errors?.email
              ? "bg-red-900/80 border-red-900 text-white"
              : "border-black-400"
          } transition-colors duration-400`}
          labelClassName={`${errors?.email ? "text-white" : ""} transition-all`}
          wrapperClassName="mt-4"
        />
        {errors?.email &&
          errors.email.map((err) => (
            <span className="text-red-600 font-medium text-xs">{err}</span>
          ))}

        <Input
          type="password"
          minLength="8"
          name="password"
          label="Password"
          inputClassName={`${
            errors?.password
              ? "bg-red-900/80 border-red-900 text-white  "
              : "border-black-400"
          } transition-colors duration-400 `}
          wrapperClassName="mt-4"
          labelClassName={`${
            errors?.password ? "text-white" : ""
          } transition-all `}
        />
        {errors?.password &&
          errors.password.map((err) => (
            <span className="text-red-600 font-medium text-xs animate-fadeLeft">
              {err}
            </span>
          ))}

        <Input
          type="number"
          label="Age"
          name="age"
          inputClassName={`${
            errors?.age
              ? "bg-red-900/80 border-red-900 text-white  "
              : "border-black-400"
          } transition-colors duration-400`}
          labelClassName={`${errors?.age ? "text-white" : ""} transition-all`}
          wrapperClassName="mt-4"
        />
        {errors?.age &&
          errors.age.map((err) => (
            <span className="text-red-600 font-medium text-xs animate-fadeLeft">
              {err}
            </span>
          ))}

        <Button
          type="submit"
          className="bg-indigo-700 text-white mt-4 w-full rounded-xl"
        >
          Submit
        </Button>
        <Link to={`/auth?form=login`}>
          <div className="chance-auth-panel text-sm text-center mt-4 cursor-pointer">
            Do you have an account? Log in
          </div>
        </Link>
      </form>
    </div>
  );
};

export default RegisterForm;
