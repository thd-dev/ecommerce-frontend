import React, { useRef } from "react";
import Button from "../UiComponents/Button";
import { useAdminContext } from "../../contexts/AdminContext";
import InputField from "../UiComponents/InputField";
import { handleFileInput, validFileSize } from "../util/inputfile";
import InputFile from "../UiComponents/InputFile";

const PageDashProduct = () => {
  const {
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
  } = useAdminContext();

  const fileInputRef = useRef(null);

  return (
    <div className="w-full flex flex-col justify-center items-center px-6">
      <form
        onSubmit={(e) => handleAddProduct(e)}
        className="w-full text-gray-600"
      >
        <div className="grid grid-cols-1 md:grid-cols-2  gap-3">
          <InputField
            type="text"
            name="productName"
            placeholder="Product Name"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
          />
          <InputField
            type="text"
            name="subHeading"
            placeholder="Sub Heading"
            value={subHeading}
            onChange={(e) => setSubHeading(e.target.value)}
          />
          <InputField
            type="text"
            name="category"
            placeholder="Category"
            value={category}
            onChange={(e) => setCategoty(e.target.value)}
          />
          <InputField
            type="text"
            name="description"
            placeholder="Discription"
            value={description}
            onChange={(e) => setDescrption(e.target.value)}
          />
          <InputField
            type="text"
            name="tags"
            placeholder="Tags"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <InputField
            type="number"
            name="price"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <InputField
            type="number"
            name="stockQuantity"
            placeholder="Stock Quantity"
            value={stockQuantity}
            onChange={(e) => setStockQuantity(e.target.value)}
          />
          <div className="grid grid-cols-2 place-items-center mx-auto">
            <p className="text-right ">{productImage.name}</p>
            <Button
              type="button"
              className="border-1"
              onClick={() => handleFileInput(fileInputRef)}
            >
              Add Image
            </Button>
          </div>
          <InputFile
            fileInputRef={fileInputRef}
            productImage={productImage}
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                setProductImage(e.target.files[0]);
                validFileSize(e);
                console.log(e.target.files[0]);
              }
            }}
          />
        </div>

        <Button type="submit" className="w-full border-1 max-w-96 mt-4 m-auto">
          Add product
        </Button>
      </form>
    </div>
  );
};

export default PageDashProduct;
