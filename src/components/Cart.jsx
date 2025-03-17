import { useAdminContext } from "../contexts/AdminContext";
import Button from "./UiComponents/Button";
import Card from "./UiComponents/Card";
import { formatIndianCurrency } from "./util/formatCurrency";

const Cart = () => {
  const { cartUIitem, setcartItem, handleMakeOrder, totalAmount } =
    useAdminContext();
  // console.log("ui_item", cartUIitem);

  return (
    <>
      <div className="p-8 flex justify-between flex-col gap-2 bg-amber-300 min-h-screen">
        <div className="flex flex-col gap-2">
          {!cartUIitem ||
          !Array.isArray(cartUIitem) ||
          cartUIitem.length === 0 ? (
            <p>No Items</p>
          ) : (
            cartUIitem.map((items) => (
              <>
                <Card
                  product={items}
                  src={items.productImage}
                  productName={items.productName}
                  amount={items.amount}
                  key={items._id}
                  quantity={items.qauntity}
                />
              </>
            ))
          )}
        </div>
        <div className="flex flex-col gap-2">
          <p className="w-full flex justify-between">
            Total amount: <span>{formatIndianCurrency(totalAmount)}</span>
          </p>
          <Button className="bg-gray-200" onClick={handleMakeOrder}>
            Buy Now
          </Button>
        </div>
      </div>
    </>
  );
};

export default Cart;
