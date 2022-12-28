import React, { FC } from "react";
import { useGetProductQuery } from "redux/fakestore/fakestore.api";

interface ProductProps {
  productId: number;
}

const Product: FC<ProductProps> = ({ productId }) => {
  const { data, isLoading, isError } = useGetProductQuery(productId);
  return (
    <div className="cart__product__card">
      <div className="product__card__left">
        <img src={data?.image} alt={data?.title} className="image_small" />
        <ul className="product__card__description">
          <li className="description__title">{data?.title}</li>
          <li className="price">{data?.price}$</li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
