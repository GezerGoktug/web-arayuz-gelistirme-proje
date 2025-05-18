import { toast } from "react-toastify";
import { addCart } from "../../store/cart/actions";
import { Link } from "react-router-dom";
import { addFavorite, removeFavorite } from "../../store/favourites/actions";
import { useIsLoggedIn } from "../../store/auth/hooks";
import { useIsFavProduct } from "../../store/favourites/hooks";
import Button from "../ui/Button";

const ProductCard = ({ product }) => {
  const isLoggedIn = useIsLoggedIn();

  const isFavProduct = useIsFavProduct(product?.id);

  const handleCart = () => {
    if (!isLoggedIn) {
      toast.error("Giriş yapmadan ürünleri sepete ekleyemezsiniz");
      return;
    }

    addCart(product);
    toast.success("Başarıyla sepete ürün eklendi");
  };

  const handleFavourite = () => {
    if (!isLoggedIn) {
      toast.error("Giriş yapmadan ürünleri favorilere ekleyemezsiniz");
      return;
    }

    if (!isFavProduct) {
      addFavorite(product);
      toast.success("Başarıyla ürün favorilere eklendi");
    } else {
      removeFavorite(product.id);
      toast.success("Ürün favorilerden çıkarıldı");
    }
  };
  return (
    <div className="flex flex-col">
      <div className="overflow-hidden h-48 [&_.favouriteIcon]:hover:opacity-100 [&_.favouriteIcon]:hover:right-2 relative bg-slate-100 p-4 rounded-lg">
        <Link to={`/product/${product?.id}`}>
          <img
            className="hover:scale-110 h-full object-contain mx-auto cursor-pointer transition-all"
            src={product.image}
            alt=""
          />
        </Link>
        <div
          onClick={() => handleFavourite()}
          className="favouriteIcon transition-all opacity-0 absolute right-0 top-2 size-9 flex items-center justify-center shadow-lg shadow-black/20 border border-slate-200 cursor-pointer bg-white rounded-full"
        >
          {isFavProduct ? (
            <i className="fa-solid fa-heart text-red-600"></i>
          ) : (
            <i className="fa-regular fa-heart"></i>
          )}
        </div>
      </div>
      <div className="flex flex-col flex-1 ">
        <h6 className="mt-3 mb-1 font-semibold text-lg">{product.title}</h6>
        <p className="line-clamp-1 text-sm text-slate-600">
          {product.description}
        </p>
        <div className="flex items-center gap-2 my-2 text-sm ">
          <span className="font-semibold">{product.rating}</span>
          <div className="flex gap-1">
            {Array.from({ length: 5 }, (_, i) =>
              i + 1 <= Math.round(product.rating) ? 1 : 0
            ).map((item, i) => (
              <i
                key={"rating_" + product.title + i}
                className={`fa-solid fa-star ${
                  item ? "text-orange-700" : "text-orange-700/10"
                }`}
              ></i>
            ))}
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between    ">
        <span className="font-semibold text-red-800">{product.price}$</span>
        <Button
          onClick={() => handleCart()}
          className="text-sm bg-indigo-700 text-white py-1 rounded-full "
        >
          Add cart
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
