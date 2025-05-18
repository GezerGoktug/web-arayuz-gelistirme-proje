import { toast } from "react-toastify";
import { addCart } from "../../store/cart/actions";
import { addFavorite, removeFavorite } from "../../store/favourites/actions";
import { useIsLoggedIn } from "../../store/auth/hooks";
import { useIsFavProduct } from "../../store/favourites/hooks";
import Button from "../ui/Button";

const DetailContent = ({ product }) => {
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

  const handleFavourites = () => {
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
    <div>
      <h6 className="font-semibold text-4xl mb-4">{product.title}</h6>
      <p className="text-sm text-gray-600 mb-4">{product.description}</p>
      <span className="font-semibold text-red-900 text-3xl">
        {product.price}$
      </span>
      <div className="flex items-center gap-4 my-2 text-lg mt-4 mb-6">
        <span className="font-semibold text-center rounded-lg px-3 text-base py-0.5 bg-orange-700/20 text-orange-900">
          {product.rating}
        </span>
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

      <div className="border-t border-slate-300">
        <ul className="py-4 space-y-2">
          <li className="flex gap-2">
            <div className="font-medium text-slate-600">Category :</div>
            <span>{product.category}</span>
          </li>
          <li className="flex gap-2">
            <div className="font-medium text-slate-600">Brand :</div>
            <span>{product.brand}</span>
          </li>
          <li className="flex gap-2">
            <div className="font-medium text-slate-600">Color :</div>
            <span className=" capitalize">
              {product.color.map((clr) => ` ${clr} `).join(",")}
            </span>
          </li>
        </ul>
      </div>

      <div className="flex flex-col min-[400px]:flex-row gap-4">
        <Button
          onClick={() => handleCart()}
          className=" bg-indigo-700 flex-1 text-white py-4 "
        >
          <i className="fa-solid fa-cart-shopping"></i>
          ADD TO CART
        </Button>
        <Button
          onClick={() => handleFavourites()}
          className=" bg-slate-200 flex-1  py-4 "
        >
          {isFavProduct ? (
            <>
              REMOVE FAVOURITES
              <i class="fa-solid fa-circle-xmark"></i>
            </>
          ) : (
            <>
              ADD FAVOURITES
              <i className="fa-solid fa-heart"></i>
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default DetailContent;
