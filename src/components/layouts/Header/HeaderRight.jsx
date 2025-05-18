import {
  FaCartShopping,
  FaHeart,
  FaMagnifyingGlass,
  FaUser,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useCart } from "../../../store/cart/hooks";
import { useEffect } from "react";
import $ from "jquery";

const activateTooltip = () => {
  const $tooltipItems = $(".tooltip");

  $tooltipItems.each(function () {
    const $this = $(this);

    $this.on("mouseenter", () => {
      const message = $this.data("message");

      if ($this.find(".tooltip-content").length === 0) {
        const $tooltip = $(`
          <div class="tooltip-content">
            ${message}
          </div>
        `);

        $this.append($tooltip);

        const initialTop = $tooltip.position().top;

        $tooltip
          .css({ top: initialTop + 10, opacity: 0 })
          .animate({ top: initialTop, opacity: 1 }, 200);
      }
    });

    $this.on("mouseleave", () => {
      $this.find(".tooltip-content").fadeOut(100, function () {
        $(this).remove();
      });
    });
  });
};

const HeaderRight = () => {
  const cart = useCart();

  const cartItemCount = cart.reduce((acc, val) => acc + val.quantity, 0);

  useEffect(() => {
    activateTooltip();
  }, []);
  return (
    <nav>
      <ul className="flex items-center gap-6 [&_svg]:text-lg">
        <li className="cursor-pointer  sm:hidden">
          <FaMagnifyingGlass size={20} />
        </li>

        <Link to="/cart">
          <li
            data-message="Cart"
            className="link cursor-pointer relative tooltip"
          >
            <FaCartShopping size={20} />
            <span className="absolute rounded-full text-xs text-white -top-1 -right-3 bg-red-700 size-4 flex items-center justify-center">
              {cartItemCount}
            </span>
          </li>
        </Link>
        <Link to="favourites">
          <li
            data-message="Favourites"
            className="cursor-pointer relative tooltip"
          >
            <FaHeart size={20} />
          </li>
        </Link>
        <Link to="/profile">
          <li
            data-message="Profile"
            className="cursor-pointer relative tooltip"
          >
            <FaUser size={20} />
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default HeaderRight;
