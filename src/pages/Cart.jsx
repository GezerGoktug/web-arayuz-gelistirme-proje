import Cash from "../components/Cart/Cash";
import CartItems from "../components/Cart/CartItems";

const Cart = () => {
  return (
    <div className="page cart">
      <h2 className="text-2xl font-bold mb-6">My Cart</h2>
      <div className="flex flex-col lg:flex-row gap-6">
        <CartItems />
        <Cash />
      </div>
    </div>
  );
};

export default Cart;
