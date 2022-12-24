import ProductCard from "components/ProductCard/ProductCard";
import React, { useState } from "react";
import { useGetProductsQuery } from "redux/fakestore/fakestore.api";
import "./MainPage.css";

const MainPage = () => {
  const [sort, setSort] = useState<string>("asc");
  const { data, isError, isLoading } = useGetProductsQuery(sort);
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setSort(e.target.value);
    console.log(e.target.value);
  };

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
    </div>
  );
};

export default MainPage;
