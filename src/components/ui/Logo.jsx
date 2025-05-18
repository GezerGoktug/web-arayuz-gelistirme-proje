import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <div className="font-playfair font-semibold text-3xl flex items-center gap-3">
        <i className="fa-solid fa-bag-shopping text-slate-600"></i>
        <span className="bg-gradient-to-r text-transparent bg-clip-text from-slate-700 to-slate-900">
          Auora
        </span>
      </div>
    </Link>
  );
};

export default Logo;
