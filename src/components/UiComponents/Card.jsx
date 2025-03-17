import { useEffect, useState } from "react";
import { formatIndianCurrency } from "../util/formatCurrency";
import Button from "./Button";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";
import { IoTrashBin } from "react-icons/io5";
import { useAdminContext } from "../../contexts/AdminContext";
const Card = ({
  src,
  product,
  productName,
  subHeading,
  quantity,
  amount,
  key,
}) => {
  const [qauntity, setQauntity] = useState(quantity);
  const { cartItem, setCartItem } = useAdminContext();
  const deleteCartItem = (e) => {
    console.log(e.currentTarget.parentElement);
    let updatedItems = [...cartItem];
    // console.log("prod: ", product);
    updatedItems
      .map((item, index) => {
        // console.log("item: ", item);

        if (item.productId === product._id)
          return updatedItems.splice(index, 1);
      })
      .filter(Boolean);
    setCartItem(updatedItems);
  };
  useEffect(() => {}, [qauntity]);
  return (
    <>
      <div
        className="group flex w-full m-auto relative overflow-hidden transition cursor-pointer bg-gray-200 rounded-3xl items-center p-8 gap-2"
        key={key}
      >
        <div className="max-h-56 flex justify-center items-center overflow-hidden rounded h-10 w-10 bg-gray-300">
          <img src={src} className="w-full" alt="just something" />
        </div>

        <div className="flex-1">
          <h2>{productName}</h2>
          <h3>Sub Heading </h3>
        </div>
        <div className="self-end">
          <h3 className="bg-gray-50 px-1 rounded flex justify-end items-center gap-2">
            <span className="text-lg">{qauntity}</span>
            <span className="text-sm leading-1">
              <FaCaretUp onClick={() => setQauntity((prev) => prev + 1)} />
              <FaCaretDown onClick={() => setQauntity((prev) => prev - 1)} />
            </span>
          </h3>
          <p>{formatIndianCurrency(amount)}</p>
        </div>

        {/* <Button className="mx-3">Buy Now</Button> */}

        <div
          className={`rounded-full absolute top-4 right-4 cursor-pointer p-2 transition transform translate-x-20 -rotate-210 group-hover:translate-x-0 group-hover:rotate-0 duration-900 ease-in 
          bg-cyan-900 text-gray-200 hover:bg-cyan-400 
            `}
          onClick={deleteCartItem}
        >
          <IoTrashBin />
        </div>
      </div>
    </>
  );
};

export default Card;
