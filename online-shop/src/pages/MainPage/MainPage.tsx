import ModalCard from "components/ModalCard/ModalCard";
import ModalWindow from "components/ModalWindow/ModalWindow";
import ProductCard from "components/ProductCard/ProductCard";
import { useAppSelector } from "hooks/useSelector";
import React, { useEffect, useState } from "react";
import { useGetProductsQuery } from "redux/fakestore/fakestore.api";
import { setConstantValue } from "typescript";
import "./MainPage.css";

const MainPage = () => {
  const { product } = useAppSelector((state) => state.selectedProduct);
  const [sort, setSort] = useState<string>("asc");
  const { data, isError, isLoading } = useGetProductsQuery(sort);
  const [isActive, setIsActive] = useState<boolean>(product ? true : false);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSort(e.target.value);
  };

  useEffect(() => {
    if (product) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [product]);

  return (
    <div className="main">
      <div className="main__contant">
        {isLoading && <p>Loading...</p>}
        <div className="pagination">
          <select name="sort" id="" onChange={(e) => handleChange(e)}>
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
        </div>
        <div className="main__contant">
          <ul className="products">
            {data &&
              data.map((product) => {
                return <ProductCard key={product.id} product={product} />;
              })}
          </ul>
        </div>
      </div>
      {product && (
        <ModalWindow isActive={isActive}>
          <ModalCard product={product} />
        </ModalWindow>
      )}
    </div>
  );
};

export default MainPage;
