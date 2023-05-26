import React from "react";
import { styled } from "styled-components";
import ProductPriceTable from "./ProductPriceTable";
import BlackButton from "../../components/BlackButton";
const CartCard = () => {
  return (
    <Wrapper>
      <ProductPriceTable className="product-price-table" />
      {/* cart toatls container */}
      <div className="cart-totals-container">
        {/* cart totals heading */}
        <h2 className="cart-totals__heading">Cart Totals</h2>
        {/* art total */}
        <div className="cart-total border-bottom subtotal-container flex-between">
          <span className="heading">Subtotal</span>
          <span>$7000</span>
        </div>
        {/* cart total */}
        <div className="cart-total total-container flex-between">
          <span className="heading">Total</span>
          <span>$7010</span>
        </div>
      </div>
      {/* checkout button */}
      <div className="checkout-btn">
        <BlackButton text="Proceed to checkout" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /*  */
  /* colors */
  /*  */

  background: var(--bg-cart-card);
  color: var(--clr-cart-card);
  /*  */
  /* typography */
  /*  */

  /* setting up font sizes and font weights */
  --fs-cart-totals-heading: 1.5rem;
  --fs-cart-total: 1.2rem;
  .cart-total {
    font-size: var(--fs-cart-total);
  }
  .cart-totals__heading {
    font-size: var(--fs-cart-totals-heading);
    font-weight: 600;
  }

  /*  */
  /* layout */
  /*  */

  /* card overall padding */
  --pinline: 2rem;
  --pblock: 4rem;
  padding-inline: var(--pinline);
  padding-block: var(--pblock);
  /* adding some box shadow */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.03);
  /* adding border radius to give curved edges to card */
  border-radius: 1rem;

  /* giving border-bottom */
  .border-bottom {
    border-bottom: 1px solid black;
  }
  /* putting childs in a row and then adding space between */
  .flex-between {
    display: flex;
    justify-content: space-between;
    padding-block: 0.5rem;
  }

  /* margins */
  /* seperating ProductPriceTable from cart-totals__container */
  .cart-totals-container {
    margin-top: 3rem;
  }
  /* adding some margin between cart-totals__heading and cart-total */
  .cart-totals__heading {
    margin-bottom: 1rem;
  }
  /* adding some margin between cart total and checkout-btn */
  .checkout-btn {
    margin-top: 2rem;
  }

  @media screen and (max-width: 750px) {
    /* reducing pinline from 2rem to 1rem because of space issues */
    --pinline: 1rem;
  }
  @media screen and (max-width: 500px) {
    /* reducing font-sizes because of space issues */
    --fs-cart-totals-heading: 1.2rem;
    --fs-cart-total: 1rem;
  }
  @media screen and (max-width: 350px) {
    /* removing box-shadow and padding because of space issues */
    --pinline: 0;
    --pblock: 0;
    box-shadow: none;
  }
`;

export default CartCard;
