import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useProducts } from "../../context/ProductsContext";

const AddProductForm = () => {
  const { addProduct } = useProducts();
  const [productName, setProductName] = useState("");
  const [productType, setProductType] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [productBrand, setProductBrand] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [customerSupport, setCustomerSupport] = useState("");
  const [warranty, setWarranty] = useState("");
  const [productRating, setProductRating] = useState("");
  const [productReviews, setProductReviews] = useState("");

  const [productImages, setProductImages] = useState(null);
  const [imgLength, setImgLength] = useState(null);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [imgError, setImgError] = useState("");
  const [colors, setColors] = useState({
    "product-color-1": "",
    "product-color-2": "",
    "product-color-3": "",
  });
  const types = ["image/jpg", "image/jpeg", "image/png", "image/gif"];
  useEffect(() => {
    console.log("colors ", colors);
  }, [colors]);
  useEffect(() => {
    console.log("product Images ", productImages);
  }, [productImages]);
  const handleProductColors = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    const updateColors = {
      ...colors,
      [name]: value,
    };
    setColors(updateColors);
  };
  const handleProductImg = (e) => {
    e.preventDefault();
    // selectedFiles stores array of all files selected by user.
    let selectedFiles = e.target.files;
    setImgLength(selectedFiles.length);
    let images = [];

    for (let i = 0; i < selectedFiles.length; i++) {
      // extracts ith file from selectedFiles
      let selectedFile = selectedFiles[i];
      if (selectedFile) {
        // console.log(types);
        // console.log(types.includes(selectedFile.type));
        // if selected file has its type specified in types array
        if (types.includes(selectedFile.type)) {
          console.log(selectedFile.type);
          // add selectedFile in images array
          images = [...images, selectedFile];
          setImgError("");
          // storeImages array in productImages state
          if (i === selectedFiles.length - 1) {
            setProductImages(images);
          }
        } else {
          // console.log("this is bad ");
          setProductImages(null);
          setImgError(
            "Please select a valid image file type(jpg or png or gif)"
          );
        }
      } else {
        setImgError("Please select your file");
      }
    }
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    setSuccessMsg("");
    if (!productImages) {
      setImgError("you haven't selected any product image");
    } else if (
      !productName ||
      !productBrand ||
      !productDescription ||
      !productPrice ||
      !warranty ||
      !customerSupport
    ) {
      setErrorMsg("Please fill all the fields");
    } else {
      if (productImages.length === imgLength) {
        console.log(imgLength);
        addProduct(
          productImages,
          productName,
          productType,
          productDescription,
          productBrand,
          productPrice,
          productRating,
          productReviews,
          customerSupport,
          warranty,
          colors
        ).then(() => {
          setInterval(() => {
            setSuccessMsg("");
          }, 5000);
          setSuccessMsg("Product has been added to database successfully");
        });
      }
    }
  };
  return (
    <Wrapper>
      {errorMsg && <p className="error-msg">{errorMsg}</p>}
      {successMsg && <p className="success-msg">{successMsg}</p>}
      {imgError && <p className="error-msg">{imgError}</p>}
      <div className="product-title">
        <label htmlFor="product-title">Product Title</label>
        <input
          type="text"
          name="product-title"
          id="product-title"
          placeholder="Write product title here"
          onChange={(e) => {
            setProductName(e.target.value);
          }}
        />
      </div>
      <div className="product-type">
        <label htmlFor="product-type">Product Type</label>
        <input
          type="text"
          name="product-type"
          id="product-type"
          placeholder="Write product type here"
          onChange={(e) => {
            setProductType(e.target.value);
          }}
        />
      </div>
      <div className="product-description">
        <label htmlFor="product-description">Product Description</label>
        <textarea
          type="text"
          name="product-description"
          id="product-description"
          placeholder="Write product description here"
          onChange={(e) => {
            setProductDescription(e.target.value);
          }}
        />
      </div>
      <div className="product-brand">
        <label htmlFor="product-brand">Product Brand</label>
        <textarea
          type="text"
          name="product-brand"
          id="product-brand"
          placeholder="Write brand name"
          onChange={(e) => {
            setProductBrand(e.target.value);
          }}
        />
      </div>
      <div className="product-warranty">
        <label htmlFor="product-warranty">Product Warranty</label>
        <textarea
          type="text"
          name="product-warranty"
          id="product-warranty"
          placeholder="Write product warranty details here"
          onChange={(e) => {
            setWarranty(e.target.value);
          }}
        />
      </div>
      <div className="product-customer-support">
        <label htmlFor="product-customer-support">Customer Support</label>
        <textarea
          type="text"
          name="product-customer-support"
          id="product-customer-support"
          placeholder="Write details about customer support"
          onChange={(e) => {
            setCustomerSupport(e.target.value);
          }}
        />
      </div>

      <div className="product-price">
        <label htmlFor="product-price">Product Price</label>
        <input
          type="number"
          name="product-price"
          id="product-price"
          onChange={(e) => {
            setProductPrice(e.target.value);
          }}
        />
      </div>
      <div className="product-rating">
        <label htmlFor="product-rating">Product Rating</label>
        <textarea
          type="number"
          name="product-rating"
          id="product-rating"
          placeholder="Write product rating details here"
          onChange={(e) => {
            setProductRating(e.target.value);
          }}
        />
      </div>
      <div className="product-reviews">
        <label htmlFor="product-reviews">Product reviews</label>
        <textarea
          type="number"
          name="product-reviews"
          id="product-reviews"
          placeholder="Write product warranty reviews here"
          onChange={(e) => {
            setProductReviews(e.target.value);
          }}
        />
      </div>
      <div className="product-img">
        <label htmlFor="product-img">Product Image</label>
        <input
          type="file"
          id="product-img"
          name="product-img"
          multiple
          onChange={handleProductImg}
        />
      </div>
      <div className="product-colors">
        <label htmlFor="product-colors">Product Colors</label>
        <input
          type="color"
          id="product-colors"
          name="product-color-1"
          className="color-1"
          multiple
          onChange={handleProductColors}
        />
        <input
          type="color"
          id="product-colors"
          name="product-color-2"
          className="color-2"
          multiple
          onChange={handleProductColors}
        />
        <input
          type="color"
          id="product-colors"
          name="product-color-3"
          className="color-3"
          multiple
          onChange={handleProductColors}
        />
      </div>

      <button
        className="submit-btn"
        onClick={handleAddProduct}
        disabled={successMsg}
      >
        Submit
      </button>
    </Wrapper>
  );
};
const Wrapper = styled.form`
  /*  */
  /* colors */
  /*  */
  background-color: var(--bg-add-product-form);
  color: var(--clr-add-product-form);
  .error-msg {
    color: var(--clr-error);
  }
  .success-msg {
    color: var(--clr-success);
  }
  input,
  textarea {
    background: none;
    border: none;
    border-color: var(--clr-add-product-form);
  }
  input:focus,
  textarea:focus {
    outline: none;
    border-color: var(--clr-orange-400);
  }

  .submit-btn {
    color: var(--clr-black);
  }
  /*  */
  /* typography */
  /*  */

  label,
  .submit-btn {
    font-size: var(--fs-label);
    font-weight: 600;
  }
  input,
  ::placeholder {
    font-size: var(--fs-placeholder);
  }
  .error-msg,
  .success-msg {
    font-weight: 600;
    text-decoration: 2px underline wavy;
    text-underline-offset: 0.5rem;
    line-height: 2.2rem;
  }
  /*  */
  /* layout */
  /*  */
  max-width: 300px;
  /* padding */
  padding: 2rem;
  input,
  textarea {
    padding-block: 0.5rem;
  }
  .submit-btn {
    padding-inline: 0.5rem;
    padding-block: 0.5rem;
  }

  label {
    display: block;
  }
  input,
  textarea {
    border-bottom: 1px solid;
  }

  /* margins */

  input,
  textarea,
  .error-msg,
  .success-msg {
    margin-bottom: 2rem;
  }
  .submit-btn {
    margin-top: 3rem;
  }
  #product-colors {
    margin-left: 1rem;
    height: 3rem;
    width: 3rem;
  }
  #product-colors:first-of-type {
    margin-left: 0;
  }
`;

export default AddProductForm;
