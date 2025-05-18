import React from "react";
import Slider from "../components/Home/Slider";
import ProductsTop from "../components/Home/ProductsTop";
import Filter from "../components/Home/Filter";
import Products from "../components/Home/Products";

const Home = () => {
  return (
    <>
      <Slider />
      <ProductsTop />
      <div className=" flex flex-col sm:flex-row mt-6 gap-3">
        <Filter />
        <Products />
      </div>
    </>
  );
};

export default Home;
