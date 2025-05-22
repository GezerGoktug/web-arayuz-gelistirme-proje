import { useEffect, useState } from "react";
import ProductCard from "../common/ProductCard";
import { useSearchParams } from "react-router-dom";
import ProductCardSkeleton from "../common/ProductCardSkeleton";
import { toast } from "react-toastify";
import Button from "../ui/Button";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState([]);
  const [error, setError] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [searchParams] = useSearchParams();

  useEffect(() => {
    const filterData = {
      color: searchParams.getAll("color"),
      brand: searchParams.getAll("brand"),
      category: searchParams.get("category"),
      minPrice: searchParams.get("minPrice"),
      maxPrice: searchParams.get("maxPrice"),
      sort: searchParams.get("sort"),
    };

    const filterResult = products?.filter((prd) => {
      let condition = true;

      if (filterData.color.length > 0) {
        if (!filterData.color.some((color) => prd.color.includes(color)))
          condition = false;
      }

      if (filterData.brand.length > 0) {
        if (!filterData.brand.some((brand) => prd.brand.includes(brand)))
          condition = false;
      }

      if (filterData.category !== null && prd.category !== filterData.category)
        condition = false;

      if (filterData.minPrice !== null && prd.price <= +filterData.minPrice)
        condition = false;

      if (filterData.maxPrice !== null && prd.price >= +filterData.maxPrice)
        condition = false;

      return condition;
    });
    if (filterData.sort === "Low_To_High") {
      filterResult.sort((a, b) => a.price - b.price);
    } else if (filterData.sort === "High_To_Low") {
      filterResult.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(filterResult);
  }, [searchParams.toString(), products]);

  const fetchProduct = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:3000/products");

      const dt = await res.json();

      setProducts(dt);
      retry.current = false;
    } catch {
      toast.error("An error occurred while withdrawing products");
      setError({ message: "An error occurred while withdrawing products" });
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchProduct();
  }, []);

  const retry = () => {
    setError(null);
    fetchProduct();
  };

  return (
    <div className="h-max flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
      {loading ? (
        Array.from({ length: 15 }, (_, i) => i + 1).map((item) => (
          <ProductCardSkeleton key={item} />
        ))
      ) : error ? (
        <div className="bg-slate-100 rounded-xl flex flex-col items-center text-center col-span-2 md:col-span-3 lg:col-span-4 xl:col-span-5 py-24 ">
          <i class="fa-solid fa-ban text-[120px]"></i>
          <h6 className="text-3xl my-5 font-semibold">Products Get Error</h6>
          <p className="font-medium">{error.message}</p>
          <Button
            onClick={() => retry()}
            className="bg-indigo-600 px-3  rounded-lg font-medium text-white mt-4"
          >
            Try Again
          </Button>
        </div>
      ) : (
        filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default Products;
