import React from "react";
import { useAdminContext } from "../contexts/AdminContext";
import ProductCard from "./UiComponents/ProductCard";

const Product = () => {
  const { productList } = useAdminContext();
  return (
    <>
      <h1 className="px-10 pt-10 text-gray-500 font-semibold">Product</h1>
      {!productList ||
      !Array.isArray(productList) ||
      productList.length === 0 ? (
        <p>No product Found</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-16 px-10 place-items-center">
          {productList.map((product) => {
            return <ProductCard product={product} />;
          })}
        </div>
      )}
    </>
  );
};

export default Product;
