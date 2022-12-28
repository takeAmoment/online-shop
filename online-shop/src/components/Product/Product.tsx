import React, { FC } from "react";
import { useGetProductQuery } from "redux/fakestore/fakestore.api";
import { List } from "react-content-loader";

interface ProductProps {
  productId: number;
}

const Product: FC<ProductProps> = ({ productId }) => {
  const { data, isLoading, isError } = useGetProductQuery(productId);
  if (isError) {
    return (
      <h4 className="error__message">
        Something went wrong.... This product was not found.
      </h4>
    );
  }
  return (
    <div className="cart__product__card">
      {isLoading ? (
        <List />
      ) : (
        <div className="product__card__left">
          <img src={data?.image} alt={data?.title} className="image_small" />
          <ul className="product__card__description">
            <li className="description__title">{data?.title}</li>
            <li className="price">{data?.price}$</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Product;
