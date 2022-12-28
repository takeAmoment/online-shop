import CartProductCard from "components/CartProductCard/CartProductCard";
import { useAppSelector } from "hooks/useSelector";
import React from "react";
import "./CartPage.css";

const CartPage = () => {
  const { cart } = useAppSelector((state) => state.cart);
  const findSum = () => {
    const sum = cart.reduce((sum, item) => sum + Number(item.price), 0);
    return sum;
  };
  return (
    <div className="cart__container">
      <h2 className="cart__title">
        Your cart contains {cart.length} product(s)
      </h2>
      <ul className="cart__products">
        {cart.length > 0 &&
          cart.map((item) => {
            return <CartProductCard key={item.id} product={item} />;
          })}
      </ul>
      {cart.length >= 1 && <h3 className="cart__sum">Total: {findSum()}$</h3>}
    </div>
  );
};

export default CartPage;
