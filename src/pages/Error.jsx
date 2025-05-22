import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="py-24 flex items-center justify-center bg-gray-100 p-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The page you are looking for is not available or may have been moved. 
          Please return to the main page.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-red-800 text-white rounded-lg shadow hover:bg-red-700 transition"
        >
          Back to Main Page
        </Link>
      </div>
    </div>
  );
};

export default Error;
