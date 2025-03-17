export const handleFileInput = (fileInputRef) => {
  if (fileInputRef.current) {
    fileInputRef.current.click();
  }
};

export const validFileSize = (event) => {
  const input = event.target;
  if (input.files && input.files[0]) {
    const file = input.files[0];
    const img = new Image();

    img.onload = function () {
      const width = this.width;
      const height = this.height;

      const minWidth = 100;
      const minHeight = 100;
      const maxWidth = 1000;
      const maxHeight = 1000;

      if (
        width <= minWidth ||
        height <= minHeight ||
        width >= maxWidth ||
        height >= maxHeight
      ) {
        console.log(
          "File's dementions should be between 100*100 and 1000*1000"
        );
        file.value = "";
      } else {
        console.log("File stored successfully");
      }
    };

    img.src = URL.createObjectURL(file);
  }
};
