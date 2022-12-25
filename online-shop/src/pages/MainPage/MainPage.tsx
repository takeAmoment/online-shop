import ModalCard from "components/ModalCard/ModalCard";
import ModalWindow from "components/ModalWindow/ModalWindow";
import ProductCard from "components/ProductCard/ProductCard";
import { useAppSelector } from "hooks/useSelector";
import React, { useEffect, useState } from "react";
import {
  useLazyGetByCategoryQuery,
  useGetProductsQuery,
} from "redux/fakestore/fakestore.api";
import { IProduct } from "types/types";
import "./MainPage.css";

const MainPage = () => {
  const { product } = useAppSelector((state) => state.selectedProduct);
  const [sort, setSort] = useState<string>("asc");
  const [isDisable, setIsDisable] = useState<boolean>(false);
  const { data, isError, isLoading } = useGetProductsQuery(sort);
  const [
    fetchProducts,
    { data: products, isLoading: isProductsLoading, isSuccess },
  ] = useLazyGetByCategoryQuery();
  const [isActive, setIsActive] = useState<boolean>(product ? true : false);
  const [results, setResults] = useState<IProduct[] | undefined>(data);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSort(e.target.value);
  };
  const changeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault;
    if (e.target.value === "all") {
      setResults(data);
      setIsDisable(false);
    } else {
      fetchProducts(e.target.value);
      setIsDisable(true);
    }
  };

  useEffect(() => {
    if (product) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  }, [product]);

  useEffect(() => {
    setResults(data);
  }, [data]);

  useEffect(() => {
    if (products) {
      setResults(products);
    }
  }, [products, isSuccess]);

  return (
    <div className="main">
      <div className="main__contant">
        {isLoading || (isProductsLoading && <p>Loading...</p>)}
        <div className="panel">
          <select
            name="sort"
            onChange={(e) => handleChange(e)}
            disabled={isDisable}
          >
            <option value="asc">A-Z</option>
            <option value="desc">Z-A</option>
          </select>
          <div className="pagination">
            <span className="prev__page"></span>
            <span className="page">1 / 2</span>
            <span className="next__page"></span>
          </div>
          <select name="category" onChange={(e) => changeCategory(e)}>
            <option value="all">All</option>
            <option value="electronics">electronics</option>
            <option value="jewelery">jewelery</option>
            <option value="men's clothing">men&apos;s clothing</option>
            <option value="women's clothing">women&apos;s clothing</option>
          </select>
        </div>
        <div className="main__contant">
          <ul className="products">
            {results &&
              results.map((product) => {
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
