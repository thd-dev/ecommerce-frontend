import { createContext, useContext, useEffect, useState } from "react";

const AdminContext = createContext();

const useAdminContext = () => useContext(AdminContext);

const AdminContextProvider = ({ children }) => {
  const [productName, setProductName] = useState("");
  const [subHeading, setSubHeading] = useState("");
  const [category, setCategoty] = useState("");
  const [description, setDescrption] = useState("");
  const [tags, setTags] = useState("");
  const [price, setPrice] = useState("");
  const [stockQuantity, setStockQuantity] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productList, setProductList] = useState({});
  const [cartItem, setCartItem] = useState([]);
  const [cartUIitem, setcartUIitem] = useState([]);
  const [alert, setAlert] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_APP_SERVER}/admin`
        );
        if (!response) console.log("Can't find respose...");
        const data = await response.json();
        setProductList(data);
      } catch (error) {
        console.error("Can't access the Server, ", error);
      }
    })();
    (async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_APP_SERVER}/order`,
          {
            credentials: "include",
          }
        );
        if (!response.ok) return console.error("....", response.json());
        const data = await response.json();
        if (!data) return console.error("fail to get the data...");
        // console.log("data: ", data);
        const { cartItems, totalAmount } = data;
        setCartItem(cartItems);
        setTotalAmount(totalAmount);
        // console.log(`cartItems: ${cartItems}`);
      } catch (error) {
        console.error("Can't fetch cart Item, ", error);
      }
    })();
  }, []);

  useEffect(() => {
    // console.log("c_list: ", cartItem);
    setcartUIitem(cartItem);
    let updateCartItem = cartItem
      .map((item) => {
        const product =
          productList &&
          productList.length > 0 &&
          Array.isArray(productList) &&
          productList.find((p_item) => {
            return String(p_item._id) === String(item.productId);
          });
        if (!product) {
          // console.log("Out of stock");
          return null;
        }
        return {
          ...product,
          qauntity: item.qauntity,
          amount: item.amount,
        };
      })
      .filter(Boolean);
    // console.log("Cart....: ", updateCartItem);

    setcartUIitem(updateCartItem);

    if (cartItem.length > 0) {
      fetch(`${import.meta.env.VITE_APP_SERVER}/order`, {
        method: "PUT",
        body: JSON.stringify(cartItem),
        headers: { "Content-Type": "application/json" },
        credentials: "include",
      });
    }
  }, [cartItem]);

  const handleAddProduct = async (e) => {
    e.preventDefault();
    // console.log("Product Image: ", productImage);

    try {
      const formData = new FormData();
      formData.append("productName", productName);
      formData.append("subHeading", subHeading);
      formData.append("category", category);
      formData.append("tags", tags);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("stockQuantity", stockQuantity);
      formData.append("productImage", productImage); // Append the file

      const response = await fetch(`${import.meta.env.VITE_APP_SERVER}/admin`, {
        method: "POST",
        body: formData, // Send FormData instead of JSON
      });

      if (response.ok) {
        // Check for successful response
        console.log("Data saved successfully!!");
        setProductName("");
        setProductImage("");
        setCategoty("");
        setStockQuantity("");
        setPrice("");
        setTags("");
        setSubHeading("");
        setDescrption("");
      } else {
        console.error(
          "Failed to save data:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Data couldn't saved in DB, ", error);
    }
  };

  const handleAddToCart = async (product) => {
    // e.preventDefault();
    // console.log("product Detail", product);
    if (product.stockQuantity < 1) return setAlert("Out of Stock");
    const required = {
      productId: product._id,
      qauntity: 1,
      amount: product.price,
    };
    let updateCart = [...cartItem];
    // console.log("product: ", product._id);

    const indexOfItem = updateCart.findIndex(
      (item) => item.productId === product._id
    );
    // console.log(indexOfItem);

    if (indexOfItem > -1) {
      updateCart[indexOfItem].qauntity += 1;
      updateCart[indexOfItem].amount =
        product.price * updateCart[indexOfItem].qauntity;

      // console.log("If");
    } else {
      updateCart.push(required);
      // console.log("else");
    }

    setCartItem(updateCart);
    // console.log("Final put body = ", updateCart);
  };

  const editProduct = async (formData) => {
    try {
      return (res = await fetch(
        `${import.meta.env.VITE_APP_SERVER}/admin/${intialProduct._id}`,
        {
          method: "PATCH",
          body: formData,
        }
      ));
    } catch {
      console.error("Error Deleting Product, ", error);
    }
  };

  const deleteCartItem = async (id) => {
    try {
      fetch(`${import.meta.env.VITE_APP_SERVER}/order/${id}`, {
        method: "DELETE",
        credentials: "include",
      }).then(console.log("item delete successfully"));
    } catch (error) {
      console.error("Can't delete Item, ", error);
    }
  };

  const handleMakeOrder = async () => {
    try {
      fetch(`${import.meta.env.VITE_APP_SERVER}/order/dispatch`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ cartItem, totalAmount }),
      });
    } catch (error) {
      console.log("Server Break, can't make order right now.. :(");
    }
  };

  // const cartData =

  return (
    <AdminContext.Provider
      value={{
        productName,
        setProductName,
        subHeading,
        setSubHeading,
        category,
        setCategoty,
        description,
        setDescrption,
        tags,
        setTags,
        price,
        setPrice,
        stockQuantity,
        setStockQuantity,
        productImage,
        setProductImage,
        handleAddProduct,
        productList,
        cartItem,
        setCartItem,
        handleAddToCart,
        cartUIitem,
        setcartUIitem,
        // cartData,
        editProduct,
        deleteCartItem,
        handleMakeOrder,
        totalAmount,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export { AdminContextProvider, useAdminContext };
