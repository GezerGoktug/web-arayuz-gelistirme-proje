import React from "react";
import { useAccount } from "../store/auth/hooks";
import { logout } from "../store/auth/actions";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { clearCart } from "../store/cart/actions";
import { clearFavorites } from "../store/favourites/actions";
import Button from "../components/ui/Button";

const Profile = () => {
  const account = useAccount();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
    logout();
    clearCart();
    clearFavorites();
    toast.success("Çıkış başarılı");
  };
  return (
    <div className="flex flex-col items-center sm:items-start sm:flex-row gap-12 px-8 py-12 border border-slate-200 rounded-lg shadow shadow-slate-200/50">
      <div className="p-3 size-72  flex items-center justify-center rounded-full border-2 border-slate-600 outline outline-2 outline-offset-2 outline-slate-600">
        <i className="fa-solid fa-user text-[150px] "></i>
      </div>
      <div>
        <h6 className="font-semibold text-4xl mb-8">{account.username}</h6>
        <div className=" flex items-center mb-4">
          <i className="fa-solid fa-envelope z-10 bg-slate-900 text-white rounded-full p-2.5 flex-1"></i>{" "}
          <span className="bg-slate-900 -ms-1.5 text-white px-4 py-0.5 rounded-e-lg">
            {account.email}
          </span>
        </div>
        <span>Age : {account.age}</span>
        <Button
          onClick={() => handleLogout()}
          className="bg-indigo-500 block mt-4 px-3 rounded-lg font-semibold text-white"
        >
          Log out
        </Button>
      </div>
    </div>
  );
};

export default Profile;
