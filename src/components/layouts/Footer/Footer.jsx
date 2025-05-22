import React from "react";
import Logo from "../../ui/Logo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-slate-100 border-slate-200 py-12 mt-24">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between gap-10 sm:gap-3">
          <div className="sm:w-[44%] lg:w-1/2 pe-6 lg:pe-24">
            <Logo />
            {/* commit */}
            <p className="mt-4 text-sm md:text-base">
              The Best Place for Easy and Hassle-Free Shopping, 
              Where Every Visit Feels Convenient, Comfortable, 
              and Rewarding, Making It a Joy to Discover 
              Great Deals and Quality Products.
            </p>
          </div>
          <div className="flex-1">
            <div className="md:mx-auto md:w-max">
              <h6 className="mb-2 font-semibold">Quick Links</h6>
              <ul className="flex flex-col gap-3">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/cart">Cart</Link>
                </li>
                <li>
                  <Link to="/favourites">Favourites</Link>
                </li>
                <li>
                  <Link to="/profile">Profile</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <div className="sm:ms-auto sm:w-max text-left">
              <h6 className="font-semibold mb-3 text-xl">Follow Us</h6>
              <div className="flex gap-3 lg:gap-6 items-center lg:text-lg">
                <a href="." target="_blank" rel="noopener noreferrer">
                  <div className="border border-slate-900 size-8 lg:size-9 flex items-center justify-center cursor-pointer rounded-xl transition-colors hover:text-slate-100 hover:bg-slate-900">
                    <i className="fa-brands fa-instagram"></i>
                  </div>
                </a>
                <a href="." target="_blank" rel="noopener noreferrer">
                  <div className="border border-slate-900 size-8 lg:size-9 flex items-center justify-center cursor-pointer rounded-xl transition-colors hover:text-slate-100 hover:bg-slate-900">
                    <i className="fa-brands fa-facebook"></i>
                  </div>
                </a>
                <a href="." target="_blank" rel="noopener noreferrer">
                  <div className="border border-slate-900 size-8 lg:size-9 flex items-center justify-center cursor-pointer rounded-xl transition-colors hover:text-slate-100 hover:bg-slate-900">
                    <i className="fa-brands fa-youtube"></i>
                  </div>
                </a>
                <a href="." target="_blank" rel="noopener noreferrer">
                  <div className="border border-slate-900 size-8 lg:size-9 flex items-center justify-center cursor-pointer rounded-xl transition-colors hover:text-slate-100 hover:bg-slate-900">
                    <i className="fa-brands fa-x-twitter"></i>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-300 mt-6 pt-6 text-center">
          &copy; Auora 2025 All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
