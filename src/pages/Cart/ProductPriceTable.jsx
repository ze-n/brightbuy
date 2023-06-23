import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

import SingleCartProduct from "./SingleCartProduct";
import MobileSingleCartProduct from "./MobileSingleCartProduct";
import { useCart } from "../../context/CartContext";
const ProductPriceTable = ({ liveCartProducts }) => {
  console.log(liveCartProducts, "ok i am deep here");
  return (
    <Wrapper>
      <table className="table hide-on-mobile">
        <thead>
          <tr className="text-medium">
            <th></th>
            <th></th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {liveCartProducts.map(
            ({
              id,
              productImages,
              productName,
              productPrice,
              qty,
              totalProductPrice,
            }) => {
              return (
                <SingleCartProduct
                  id={id}
                  productImages={productImages}
                  productName={productName}
                  productPrice={productPrice}
                  qty={qty}
                  totalProductPrice={totalProductPrice}
                />
              );
            }
          )}
        </tbody>
      </table>
      {/* for mobile devices */}
      <table className="mobile-table hide-on-desktop">
        {liveCartProducts.map(
          ({
            id,
            productImages,
            productName,
            productPrice,
            qty,
            totalProductPrice,
          }) => {
            return (
              <MobileSingleCartProduct
                id={id}
                productImages={productImages}
                productName={productName}
                productPrice={productPrice}
                qty={qty}
                totalProductPrice={totalProductPrice}
              />
            );
          }
        )}
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /*  */
  /* colors */
  /*  */
  .inc-qty,
  .dec-qty {
    background-color: var(--clr-black);
    color: var(--clr-white);
  }

  /*  */
  /* typography */
  /*  */
  /* want text to align towards left of cell */
  --fs-cart-total-heading: 1.5rem;
  --fs-cart-total: 1.2rem;
  td,
  th {
    text-align: start;
  }
  /* font weights */
  th,
  .product__name,
  .product__quantity {
    font-weight: 600;
  }

  /*  */
  /* layout */
  /*  */

  /* setting up padding */

  /* tabel cells padding */
  th,
  td {
    padding: 1rem;
    text-align: left;
  }

  /* setting up width */
  /* want table to take all width available */
  .table {
    width: 100%;
  }

  /* image variables */
  --product-img-height: 5rem;
  --product-img-width: 10rem;

  .product__img {
    /* giving height and width to image */
    height: var(--product-img-height);
    width: var(--product-img-width);
    /* making sure image doesn't shrink with viewport */
    min-height: var(--product-img-height);
    min-width: var(--product-img-width);
    /* making sure image doesn't lose aspect ratio */
    object-fit: contain;
  }
  /* setting up size of cross icon */
  --cross-icon-size: 1rem;
  .cross-icon {
    width: var(--cross-icon-size);
    height: var(--cross-icon-size);
    cursor: pointer;
  }
  .quantity-box {
    /* making it inline-block, so that width works */
    display: flex;
    align-items: center;
    /* giving it some width */
    width: 100%;
    /* giving it a border */
    border: 1px solid var(--clr-cart-card);
    /* giving some padding */
    padding-inline: 1rem;
    padding-block: 0.5rem;
  }
  .quantity {
    padding-inline: 0.3rem;
  }
  --quantity-btn-size: 1.3rem;
  .inc-qty,
  .dec-qty {
    display: flex;
    justify-content: center;
    align-items: center;
    height: var(--quantity-btn-size);
    width: var(--quantity-btn-size);
    cursor: pointer;
  }
  @media screen and (max-width: 900px) {
    /* reseting image sizes because of less space available */
    --product-img-height: 4rem;
    --product-img-width: 5rem;
    --cross-icon-size: 0.8rem;
  }

  @media screen and (max-width: 750px) {
    /*  */
    /* code for mobile-table */
    /*  */
    /*  */
    /* colors */
    /*  */
    .delete-product p {
      color: var(--clr-error);
    }
    /*  */
    /* typography  */
    /*  */
    /* setting font-sizes for smaller screens */
    --fs-medium: 1.2rem;
    --lh-medium: 1.5rem;
    --fs-small: 0.9rem;

    .product__name,
    .product__price {
      font-size: var(--fs-medium);
      line-height: var(--lh-medium);
    }
    .product__quantity,
    .product__subtotal {
      font-size: var(--fs-small);
    }
    /*  making it look like regular text */
    .product__quantity {
      font-weight: 400;
    }
    .delete-product p {
      font-weight: 600;
    }
    /*  */
    /* layout */
    /*  */
    /* making table take entire width */
    .mobile-table {
      width: 100%;
    }
    tr {
      /* making row to take entire and place its child on same row. */
      display: flex;
      /* row takes entire width and put extra space available between its children */
      justify-content: space-between;
      /* align childs vertically center */
      align-items: center;
    }
    /* reducing paddng inline to .5rem from 1rem because of less space */
    td,
    th {
      padding-inline: 0.5rem;
      width: 100%;
    }
    /* making column take atleast some consistent layout */
    td {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      text-align: center;
    }
    .mobile-quantity-box {
      display: flex;
      align-items: center;
      margin-top: 0.4rem;
    }
    .delete-product {
      display: flex;
      align-items: center;
      gap: 0.4rem;
      margin-top: 0.4rem;
      cursor: pointer;
    }

    .cross-icon {
      height: 0.6rem;
    }
    /* giving max-width to product name because it looks bad otherwise */
    /* and alignment of this column with other rows gets bad */
    .product__name {
      max-width: 14ch;
    }
    /* reseting images because of less space */
    --product-img-height: calc(2rem + 5vh);
    --product-img-width: calc(3rem + 12vw);
  }
  @media screen and (max-width: 500px) {
    /* resetting font-sizes and image dimensions because of less space available */
    --fs-medium: 1rem;
    --lh-medium: 1.4rem;
    --fs-small: 0.8rem;
    --product-img-width: calc(3rem + 6vw);
    --product-img-height: calc(2rem + 2vh);
  }
`;

export default ProductPriceTable;
