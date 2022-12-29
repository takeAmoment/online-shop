import { useActions } from "hooks/actions";
import { useAppSelector } from "hooks/useSelector";
import React, { FC, useState } from "react";
import { IProduct, ProductCardProps } from "types/types";
import "./ProductCard.css";

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { cart } = useAppSelector((state) => state.cart);
  const { selectProduct } = useActions();
  const { addProduct, removeProduct } = useActions();

  const findProduct = () => {
    const prod: IProduct | undefined = cart.find(
      (item) => item.id === product?.id
    );
    if (prod) {
      return true;
    } else {
      return false;
    }
  };
  const [isInCart, setIsInCart] = useState<boolean>(findProduct);

  const addToCart = () => {
    addProduct(product);
    setIsInCart(true);
  };

  const removeFromCart = () => {
    removeProduct(product);
    setIsInCart(false);
  };

  const openCard = () => {
    selectProduct(product);
  };

  return (
    <div className="product__card">
      <div className="card__image" onClick={openCard}>
        <img className="image" src={product.image} alt={product.title} />
      </div>
      <ul className="card__contant" onClick={openCard}>
        <li className="card__title">{product.title}</li>
        <li className="card__price">{product.price}$</li>
        <li className="card__category">{product.category}</li>
      </ul>
      {isInCart ? (
        <button className="remove__btn" onClick={removeFromCart}>
          Remove
        </button>
      ) : (
        <button className="add__btn" onClick={addToCart}>
          Add to cart
        </button>
      )}
    </div>
  );
};

export default ProductCard;
