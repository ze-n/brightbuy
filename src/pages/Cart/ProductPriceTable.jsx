import React from "react";
import { styled } from "styled-components";
import keyboard from "../../assets/product1.png";
import shoes from "../../assets/product2.png";
import hoody from "../../assets/product3.png";
import { ImCross } from "react-icons/im";
const ProductPriceTable = () => {
  const cartList = [
    {
      id: 1,
      img: keyboard,
      name: "GK 16 cosmic byte",
      price: 200,
      quantity: 1,
    },
    {
      id: 2,
      img: shoes,
      name: "Canvas Black Shoes",
      price: 300,
      quantity: 3,
    },
    {
      id: 3,
      img: hoody,
      name: "Black Hoody Over-Sized ",
      price: 400,
      quantity: 2,
    },
  ];
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
          {cartList.map(({ id, img, name, price, quantity }) => {
            return (
              <tr id={id} className="text-medium">
                <td>
                  <ImCross className="cross-icon" />
                </td>
                <td className="product__img-container">
                  <img src={img} alt="" className="product__img" />
                </td>
                <td className="product__name">{name}</td>
                <td className="product__price">${price}</td>
                <td className="product__quantity">
                  <span className="quantity-box">{quantity}</span>
                </td>
                <td className="product__subtotal">${price * quantity}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <table className="mobile-table hide-on-desktop">
        {cartList.map(({ id, img, name, price, quantity }) => {
          return (
            <tr id={id} className="row">
              {/* column 1 */}
              <td>
                <img src={img} alt="" className="product__img col" />
              </td>
              {/* column 2 */}
              <td className="col">
                <p className="product__name ">{name}</p>
                <p className="product__quantity ">
                  quantity <span className="bold">{quantity} </span>
                </p>
              </td>
              {/* column 3 */}
              <td className="col">
                <p className="product__price text-regular">${price}</p>
                <p className="product__subtotal text-small">
                  <span className="bold">subtotal</span> ${quantity * price}
                </p>
              </td>
            </tr>
          );
        })}
      </table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
  }
  .quantity-box {
    /* making it inline-block, so that width works */
    display: inline-block;
    /* giving it some width */
    width: 100%;
    /* giving it a border */
    border: 1px solid var(--clr-cart-card);
    /* giving some padding */
    padding-inline: 1rem;
    padding-block: 0.5rem;
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
