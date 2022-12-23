import ProductCard from "components/ProductCard/ProductCard";
import React from "react";
import { useGetProductsQuery } from "redux/fakestore/fakestore.api";
import "./MainPage.css";

const MainPage = () => {
  const { data, isError, isLoading } = useGetProductsQuery("asc");
  return (
    <div className="main">
      <div className="main__contant">
        {isLoading && <p>Loading...</p>}
        <div className="pagination"></div>
        <div className="main__contant">
          <ul className="products">
            {data &&
              data.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
