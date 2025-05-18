import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

const categories = [
  "Phone",
  "Laptop",
  "Headphones",
  "Watch",
  "Tablet",
  "E-Reader",
  "Mouse",
  "Keyboard",
  "Earbuds",
];

const brands = [
  "Apple",
  "Samsung",
  "Asus",
  "Sony",
  "Amazon",
  "Logitech",
  "Lenovo",
  "OnePlus",
  "Bose",
  "Xiaomi",
];

const colors = [
  "black",
  "natural",
  "blue",
  "gray",
  "violet",
  "space black",
  "silver",
  "white",
  "red",
  "midnight",
  "space gray",
  "pale gray",
  "storm gray",
  "green",
];

const Filter = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  const navigate = useNavigate();

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleColorChange = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleFilter = () => {
    const path = "/";

    const queryParams = [];

    if (selectedCategory) queryParams.push(`category=${selectedCategory}`);
    if (selectedBrands.length > 0)
      queryParams.push(...selectedBrands.map((b) => `brand=${b}`));
    if (selectedColors.length > 0)
      queryParams.push(...selectedColors.map((c) => `color=${c}`));
    if (minPrice) queryParams.push(`minPrice=${minPrice}`);
    if (maxPrice) queryParams.push(`maxPrice=${maxPrice}`);

    const queryString = queryParams.join("&");

    navigate(`${path}?${queryString}`);
  };

  const resetFilters = () => {
    setSelectedCategory("");
    setSelectedBrands([]);
    setSelectedColors([]);
    setMinPrice("");
    setMaxPrice("");
    navigate("/");
  };

  return (
    <div className="sm:w-[240px] border border-slate-200 p-4 rounded-lg h-max space-y-6 text-sm">
      <h3 className="font-semibold text-base">Filtreler</h3>

      <div>
        <label className="font-medium block mb-1">Kategori</label>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full border rounded p-1"
        >
          <option value="">Tümü</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="font-medium block mb-1">Marka</label>
        <div className="max-h-40 overflow-y-auto space-y-1">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
              />
              {brand}
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="font-medium block mb-1">Renk</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <label key={color} className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={selectedColors.includes(color)}
                onChange={() => handleColorChange(color)}
              />
              <span className="capitalize">{color}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="font-medium block mb-1">Fiyat Aralığı</label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className="w-full border rounded p-1"
          />
          <div className="h-[1px] w-8 bg-gray-400 " />
          <input
            type="number"
            placeholder="Max"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className="w-full border rounded p-1"
          />
        </div>
      </div>

      <Button
        onClick={() => resetFilters()}
        className="w-full bg-red-600 text-white py-1 rounded hover:bg-red-700"
      >
        Sıfırla
      </Button>
      <Button
        onClick={handleFilter}
        className="w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700"
      >
        Filtrele
      </Button>
    </div>
  );
};

export default Filter;
