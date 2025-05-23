import { useCart } from "../../store/cart/hooks";
import Button from "../ui/Button";

const Cash = () => {
  const cart = useCart();
  const totalPrice = cart.reduce(
    (acc, val) => acc + val.price * val.quantity,
    0
  );
  return (
    <div className="w-full lg:w-1/3 border border-slate-200 rounded-lg p-4 shadow-sm h-fit">
      <h3 className="text-xl font-bold mb-4">Order Summary</h3>
      <div className="flex justify-between mb-2 text-sm">
        <span>Price of Products</span>
        <span>${totalPrice}</span>
      </div>
      <div className="flex justify-between mb-4 text-sm">
        <span>Cargo</span>
        <span>$30</span>
      </div>
      <hr className="mb-4 border-slate-200" />
      <div className="flex justify-between font-bold text-lg mb-6">
        <span>Total Price</span>
        <span>${totalPrice + 30}</span>
      </div>
      <Button className="w-full bg-blue-600 text-white rounded hover:bg-blue-700">
        Make Payment
      </Button>
    </div>
  );
};

export default Cash;
