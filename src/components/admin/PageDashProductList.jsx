import React, { useEffect, useState } from "react";
import { useAdminContext } from "../../contexts/AdminContext";
import { Link, Outlet } from "react-router";
import clsx from "clsx";

const PageDashProductList = () => {
  const { productList } = useAdminContext();

  return (
    <>
      <div className="flex items-center flex-col ">
        <h2 className="text-gray-600 font-semibold text-4xl my-6">Products</h2>

        <div className="flex flex-col gap-3 py-4 px-6  w-full h-full">
          {!productList ||
          !Array.isArray(productList) ||
          productList.length === 0 ? (
            <>
              <p>No product Available...</p>
            </>
          ) : (
            productList.map((product) => {
              const {
                productName,
                subHeading,
                productImage,
                price,
                stockQuantity,
                tags,
                description,
                category,
              } = product;

              return (
                <div
                  key={product._id}
                  className="flex gap-4 w-full px-3 py-2 bg-gray-200/60 rounded-3xl relative group cursor-pointer transition-all ease-in-out duration-300 overflow-hidden hover:bg-emerald-200"
                >
                  <img
                    src={`${productImage}`}
                    alt={productName}
                    className="h-28 w-auto bg-gray-300 rounded-2xl"
                  />
                  <div className="flex flex-col flex-1">
                    <h3 className="font-medium text-md text-gray-800 capitalize">
                      {productName}
                    </h3>
                    <Text>{subHeading}</Text>
                    <Text>Category: {category}</Text>
                    <Text>Price: {price}</Text>
                  </div>

                  <Text>Stock Quantity: {stockQuantity}</Text>

                  <Link
                    to={`${product._id}`}
                    className="absolute bottom-4 -right-20 rounded bg-emerald-600 text-gray-100 px-2 cursor-pointer hover:bg-gray-400  group-hover:bottom-4 group-hover:right-4 transition-all ease-in-out duration-600"
                  >
                    {" "}
                    edit
                  </Link>
                </div>
              );
            })
          )}
        </div>
      </div>

      <Outlet />
    </>
  );
};

export default PageDashProductList;

function Text({ children, className = "" }) {
  return (
    <p className={clsx(`text-gray-700 capitalize ${className}`)}>{children}</p>
  );
}
