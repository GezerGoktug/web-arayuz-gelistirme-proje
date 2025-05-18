import { useCart } from "../../store/cart/hooks";
import CartItem from "./CartItem";

const CartItems = () => {
  const cart = useCart();
  return (
    <div className="flex-1 space-y-4">
      {cart.map((item) => (
        <CartItem item={item}  />
      ))}
    </div>
  );
};

export default CartItems;
