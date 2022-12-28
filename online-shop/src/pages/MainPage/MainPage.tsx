import ModalCard from "components/ModalCard/ModalCard";
import ModalWindow from "components/ModalWindow/ModalWindow";
import CardLoader from "components/MyLoaders/CardLoader";
import ProductCard from "components/ProductCard/ProductCard";
import { useActions } from "hooks/actions";
import { usePagination } from "hooks/usePagination";
import { useAppSelector } from "hooks/useSelector";
import ErrorPage from "pages/ErrorPage/ErrorPage";
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
    { data: products, isLoading: isProductsLoading, isError: isProductError },
  ] = useLazyGetByCategoryQuery();
  const [isActive, setIsActive] = useState<boolean>(product ? true : false);
  const [results, setResults] = useState<IProduct[] | undefined>(data);
  const { closeProduct } = useActions();
  const {
    page,
    nextPage,
    prevPage,
    lastContentIndex,
    firstContentIndex,
    totalPages,
  } = usePagination({
    contentPerPage: 8,
    amount: results?.length ?? 0,
  });
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
  }, [products]);

  if (isError || isProductError) {
    return <ErrorPage />;
  }

  const closeWindow = () => {
    closeProduct();
  };

  return (
    <div className="main">
      <div className="main__contant">
        <div className="panel">
          <select
            name="sort"
            onChange={(e) => handleChange(e)}
            disabled={isDisable}
            className="sort__select"
          >
            <option value="asc">A - Z</option>
            <option value="desc">Z - A</option>
          </select>
          <div className="pagination">
            <span className="prev__page" onClick={prevPage}></span>
            <span className="page">
              {page} / {totalPages}
            </span>
            <span className="next__page" onClick={nextPage}></span>
          </div>
          <select
            name="category"
            onChange={(e) => changeCategory(e)}
            className="category__select"
          >
            <option value="all">All</option>
            <option value="electronics">electronics</option>
            <option value="jewelery">jewelery</option>
            <option value="men's clothing">men&apos;s clothing</option>
            <option value="women's clothing">women&apos;s clothing</option>
          </select>
        </div>
        <div className="main__contant">
          {isLoading || isProductsLoading ? (
            <CardLoader />
          ) : (
            <ul className="products">
              {results &&
                results
                  .slice(firstContentIndex, lastContentIndex)
                  .map((product) => {
                    return <ProductCard key={product.id} product={product} />;
                  })}
            </ul>
          )}
        </div>
      </div>
      {product && (
        <ModalWindow isActive={isActive} closeWindow={closeWindow}>
          <ModalCard product={product} />
        </ModalWindow>
      )}
    </div>
  );
};

export default MainPage;
