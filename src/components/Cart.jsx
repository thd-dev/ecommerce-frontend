import { useAdminContext } from "../contexts/AdminContext";
import Card from "./UiComponents/Card";
import { formatIndianCurrency } from "./util/formatCurrency";

const Cart = () => {
  const { cartUIitem, setcartItem } = useAdminContext();
  // console.log("ui_item", cartUIitem);

  return (
    <>
      <div className="p-8 flex flex-col gap-2">
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
    </>
  );
};

export default Cart;
