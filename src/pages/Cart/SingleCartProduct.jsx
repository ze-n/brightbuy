import React, { useState, useEffect } from "react";
import Currency from "../../components/Currency";
import { ImCross } from "react-icons/im";
import { useCart } from "../../context/CartContext";
const SingleCartProduct = ({
  id,
  productImages,
  productName,
  productPrice,
  qty,
  totalProductPrice,
}) => {
  const { updateQty, deleteCartProduct } = useCart();

  const incQty = () => {
    qty = qty + 1;

    // console.log(qty, " ", updatedQty);
    updateQty(qty, id, qty * productPrice)
      .then(() => {
        console.log("incremented successfully");
      })
      .catch((error) => {
        console.log("some error occured while incrementing ", error);
      });
  };
  const decQty = () => {
    if (qty == 1) {
      return;
    } else {
      qty = qty - 1;
      updateQty(qty, id, qty * productPrice)
        .then(() => {
          console.log("decremented successfully");
        })
        .catch((error) => {
          console.log("some error occured while decrementing ", error);
        });
    }
  };

  const deleteProduct = () => {
    deleteCartProduct(id)
      .then(() => {
        console.log("product removed");
      })
      .catch((error) => {
        console.log("product deletion failed ", error.message);
      });
  };
  return (
    <>
      <tr id={id} className="text-medium">
        <td>
          <ImCross
            className="cross-icon"
            onClick={() => {
              deleteProduct();
            }}
          />
        </td>
        <td className="product__img-container">
          <img src={productImages[0]} alt="" className="product__img" />
        </td>
        <td className="product__name">{productName}</td>
        <td className="product__price">
          <Currency price={productPrice}></Currency>
        </td>
        <td className="product__quantity">
          <div className="quantity-box">
            <p
              className="dec-qty"
              onClick={() => {
                decQty();
              }}
            >
              -
            </p>
            <p className="quantity">{qty}</p>
            <p
              className="inc-qty"
              onClick={() => {
                incQty();
              }}
            >
              +
            </p>
          </div>
        </td>
        <td className="product__subtotal">
          <Currency price={qty * productPrice}></Currency>
        </td>
      </tr>
    </>
  );
};

export default SingleCartProduct;
