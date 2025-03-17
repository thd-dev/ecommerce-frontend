import React from "react";
import { formatIndianCurrency } from "../util/formatCurrency";
import { Button } from "./Dbutton";
// import useAuthContext from "../../contexts/AuthContext";
import { useAdminContext } from "../../contexts/AdminContext";

const ProductCart = ({ product }) => {
  const { productName, subHeading, productImage, price } = product;
  const { handleAddToCart } = useAdminContext();
  // console.log(id);

  // const handleAddToCart = async (e) => {
  //   e.preventDefault();
  //   try {
  //     fetch(`${import.meta.env.VITE_APP_SERVER}/order`, {
  //       method: "POST",
  //       body: JSON.stringify({ productId: id, price, quantity: 1 }),
  //       headers: { "Content-Type": "application/json" },
  //       credentials: "include",
  //     });
  //   } catch (error) {
  //     console.error("Error Adding Product to Cart, ", error);
  //   }
  // };
  // console.log(product);

  return (
    <div
      key={product._id}
      className={`flex flex-col gap-2 max-w-75 w-full group cursor-pointer`}
    >
      <div className="overflow-clip bg-gray-200">
        <img
          src={productImage}
          alt={productName}
          className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="font-medium uppercase">{productName}</h2>
        <p className="text-gray-500 text-sm">{subHeading}</p>
        <p className="font-semibold text-right">
          {formatIndianCurrency(price)}
        </p>
      </div>
      <Button className="w-full" onClick={() => handleAddToCart(product)}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCart;
