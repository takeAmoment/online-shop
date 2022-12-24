import { useActions } from "hooks/actions";
import React, { FC } from "react";
import { ProductCardProps } from "types/types";
import "./CartProductCard.css";

const CartProductCard: FC<ProductCardProps> = ({ product }) => {
  const { removeProduct } = useActions();

  const removeFromCart = () => {
    removeProduct(product);
  };

  return (
    <div className="cart__product__card">
      <div className="product__card__left">
        <img src={product.image} alt={product.title} className="image_small" />
        <ul className="product__card__description">
          <li className="description__title">{product.title}</li>
          <li className="description__info">{product.category}</li>
        </ul>
      </div>
      <div className="product__card__price">
        <p className="price">{product.price}$</p>
        <div className="delete__block">
          <span className="delete__icon" onClick={removeFromCart}></span>
        </div>
      </div>
    </div>
  );
};

export default CartProductCard;
