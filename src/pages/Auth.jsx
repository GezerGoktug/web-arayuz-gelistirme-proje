import LoginForm from "../components/Auth/LoginForm";
import RegisterForm from "../components/Auth/RegisterForm";

const Auth = () => {
  return (
    <div
      id="auth-layout"
      className="bg-[url('/auth.jpg')] bg-center bg-cover flex items-center justify-center min-h-screen relative z-20"
    >
      <div className="absolute top-0 left-0 right-0 bottom-0 h-screen w-screen -z-[1] bg-black/50"></div>
      <div className="border border-slate-300 shadow rounded-lg px-6 py-4 bg-white/20 backdrop-blur-sm w-[95%] sm:w-96">
        <LoginForm />
        <RegisterForm />
      </div>
    </div>
  );
};

export default Auth;
