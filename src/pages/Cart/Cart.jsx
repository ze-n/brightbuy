import React, { useEffect } from "react";
import { styled } from "styled-components";
import CartCard from "./CartCard";

const Cart = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="cart-card">
          <CartCard />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /*  */
  /* colors */
  /*  */

  background-color: var(--bg-cart-page);
  color: var(--clr-cart-page);

  /*  */
  /* layout */
  /*  */
  /* setting up padding */
  padding-inline: var(--pinline);
  padding-block: 3rem;
  /* giving cart-card max-width and placeing it in center horizontally */
  .cart-card {
    max-width: 1000px;
    margin-inline: auto;
  }
`;
export default Cart;
