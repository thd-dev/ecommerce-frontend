import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import InputField from "../UiComponents/InputField";
import Button from "../UiComponents/Button";
import { useAdminContext } from "../../contexts/AdminContext";

const PageEditProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  let [intialProduct, setInitialProduct] = useState({});
  const { editProduct } = useAdminContext;
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await fetch(`${import.meta.env.VITE_APP_SERVER}/${id}`);
      if (!res) return null;
      const data = await res.json();
      // console.log(data);
      setProduct(data);
      setInitialProduct(data);
    })();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleCancle = (e) => {
    e.preventDefault();
    setProduct(intialProduct);
    setTimeout(() => navigate(-1), 1000);
  };
  const handleDeleteProduct = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(
        `${import.meta.env.VITE_APP_SERVER}/admin/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!res.ok) {
        console.log("Something is wrong, :(");
        return;
      }
      console.log("Product is deleted");
      navigate(-1);
    } catch (error) {
      console.error("Error Deleting Product, ", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();

      Object.keys({ ...intialProduct, ...product }).forEach((key) => {
        if (intialProduct[key] !== product[key]) {
          formData.append(key, product[key]);
        }
      });
      const res = await editProduct(formData);
      if (res.ok) {
        console.log("Data has been updated");
        setTimeout(() => navigate(-1), 1000);
      } else {
        console.error("Something went wrong");
      }
    } catch (error) {
      console.error("Can't process the request, ", error);
    }
  };

  return (
    <div
      className="absolute
     min-h-screen w-full bg-black top-0 left-0 z-99 text-gray-100 p-4"
    >
      <form
        className="flex flex-col gap-2 items-center"
        onSubmit={handleSubmit}
      >
        <img
          src={product.productImage}
          alt={product.productName}
          className="h-28 bg-gray-200 w-auto rounded-2xl"
        />
        <InputField
          name="productName"
          value={product.productName}
          onChange={handleChange}
        />
        <InputField
          name="subHeading"
          value={product.subHeading}
          onChange={handleChange}
        />
        <InputField
          name="description"
          value={product.description}
          onChange={handleChange}
        />
        <InputField name="tags" value={product.tags} onChange={handleChange} />
        <InputField
          name="category"
          value={product.category}
          onChange={handleChange}
        />
        <InputField
          name="price"
          type="number"
          value={product.price}
          onChange={handleChange}
        />
        <InputField
          name="stockQuantity"
          type="number"
          value={product.stockQuantity}
          onChange={handleChange}
        />
        <div className="flex gap-4 flex-wrap justify-center px-8">
          <Button
            className="border-1 text-gray-100 hover:bg-gray-800 hover:!text-gray-100 hover:!border-gray-800"
            onClick={handleCancle}
          >
            Cancel
          </Button>
          <Button
            className="bg-gray-300 text-gray-800 hover:bg-gray-800 hover:!text-gray-100 hover:!border-gray-800"
            type="submit"
          >
            Submit
          </Button>
          <Button
            onClick={handleDeleteProduct}
            className="bg-gray-300 text-gray-800 flex-1 hover:bg-gray-800 hover:!text-gray-100 hover:!border-gray-800"
          >
            Delete
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PageEditProduct;
