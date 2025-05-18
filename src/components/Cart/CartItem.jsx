import {
  decreaseQuantity,
  increaseQuantity,
  removeCart,
} from "../../store/cart/actions";
import Button from "../ui/Button";

const CartItem = ({ item }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 p-4 border border-slate-200 rounded-lg shadow-sm">
      <img
        src={item.image}
        alt="Ürün"
        className="size-24 object-contain mx-auto"
      />
      <div className="flex-1 w-full">
        <h3 className="font-medium text-lg">{item.title}</h3>
        <p className="text-sm text-gray-600">{item.description}</p>
        <div className="flex items-center mt-2 gap-6">
          <span className="font-semibold text-gray-800">₺{item.price}</span>
          <div className="flex items-center gap-2 ">
            <div
              onClick={() => decreaseQuantity(item.id)}
              className="size-8 border-2 border-slate-900 cursor-pointer rounded-lg flex justify-center items-center"
            >
              <i class="fa-solid fa-minus"></i>
            </div>
            <div className="bg-indigo-500 size-8 flex justify-center items-center text-white font-semibold rounded-lg ">
              {item.quantity}
            </div>
            <div
              onClick={() => increaseQuantity(item.id)}
              className="size-8 border-2 border-slate-900 cursor-pointer rounded-lg flex justify-center items-center"
            >
              <i class="fa-solid fa-plus"></i>
            </div>
          </div>
        </div>
      </div>
      <Button
        onClick={() => removeCart(item.id)}
        className="text-red-500 hover:text-red-700 text-lg"
      >
        <i className="fas fa-trash-alt"></i>
      </Button>
    </div>
  );
};

export default CartItem;
