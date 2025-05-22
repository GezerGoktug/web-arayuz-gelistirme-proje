import { useNavigate } from "react-router-dom";

const ProductsTop = () => {
  const navigate = useNavigate();
  const onChangeSorting = (val) => {
    const currentUrl = window.location.href;
    const url = new URL(currentUrl);
    if (val !== "Default") {
      url.searchParams.set("sort", val);
    } else {
      url.searchParams.delete("sort");
    }
    navigate(url.pathname + url.search);
  };
  return (
    <div className="flex justify-between items-center">
      <div>
        <h5 className="font-semibold text-4xl mb-3">Products</h5>
        <p>15 products are listed</p>
      </div>
      <select
        onChange={(e) => onChangeSorting(e.target.value)}
        className="border rounded-lg py-1 px-2"
      >
        <option value="Default">Default</option>
        <option value="Low_To_High">Low Price to High Price</option>
        <option value="High_To_Low">High Price to Low Price</option>
      </select>
    </div>
  );
};

export default ProductsTop;
