import React, { useState, useEffect } from "react";
import Currency from "../../components/Currency";
import { ImCross } from "react-icons/im";
import { useCart } from "../../context/CartContext";
const MobileSingleCartProduct = ({
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
    <tr id={id} className="row">
      {/* column 1 */}
      <td>
        <img src={productImages[0]} alt="" className="product__img col" />
      </td>
      {/* column 2 */}
      <td className="col">
        <p className="product__name">{productName}</p>
        <p className="product__quantity">
          <div className="bold mobile-quantity-box">
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
        </p>
      </td>
      {/* column 3 */}
      <td className="col">
        <p className="product__price text-regular">
          <Currency price={productPrice}></Currency>
        </p>
        <p className="product__subtotal text-small">
          <span className="bold">subtotal</span>
          <Currency price={totalProductPrice}></Currency>
        </p>
        <p
          className="delete-product"
          onClick={() => {
            deleteProduct();
          }}
        >
          <ImCross className="cross-icon" />
          <p className="text-small">delete</p>
        </p>
      </td>
    </tr>
  );
};

export default MobileSingleCartProduct;
