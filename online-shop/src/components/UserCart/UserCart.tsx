import Product from "components/Product/Product";
import React, { FC } from "react";
import { UserCartProps } from "types/types";
import "./UserCart.css";

const UserCart: FC<UserCartProps> = ({ cartElement }) => {
  return (
    <div>
      <h4 className="date">{cartElement.date}</h4>
      <ul className="cart__element">
        {cartElement &&
          cartElement.products.map((item) => {
            return <Product key={item.productId} productId={item.productId} />;
          })}
      </ul>
    </div>
  );
};

export default UserCart;
