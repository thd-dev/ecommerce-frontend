import React from "react";
import InputField from "./InputField";

const InputFile = ({ fileInputRef, productImage, ...props }) => {
  return (
    <InputField
      type="file"
      label="image"
      className="hidden"
      ref={fileInputRef}
      name="img-upload"
      accept=".jpg, .png, jpeg"
      {...props}
      files={productImage}
    />
  );
};

export default InputFile;
