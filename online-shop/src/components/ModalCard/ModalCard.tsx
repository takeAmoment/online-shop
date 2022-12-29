import React, { FC } from "react";
import { ProductCardProps } from "types/types";
import "./ModalCard.css";

const ModalCard: FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="modal__card">
      <img
        className="modal__card__image"
        src={product.image}
        alt={product.title}
      />
      <ul className="modal__card__info">
        <li className="info__item info__item_bold">{product.title}</li>
        <li className="info__item">
          <strong>Category: </strong>
          {product.category}
        </li>
        <li className="info__item">
          <strong>Description: </strong> {product.description}
        </li>
        <li className="info__item">
          <strong>Price: </strong> {product.price}$
        </li>
      </ul>
    </div>
  );
};

export default ModalCard;
