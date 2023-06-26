import React, { useEffect } from "react";
import { styled } from "styled-components";
import CartCard from "./CartCard";
import { useAuth } from "../../context/UserAuthContext";

const Cart = () => {
  const { currentUser } = useAuth();

  return (
    <Wrapper>
      <div className="container">
        {currentUser ? (
          currentUser.emailVerified ? (
            <div className="cart-card">
              <CartCard />
            </div>
          ) : (
            <p className="msg">
              We sent you an verification email. First please verify yourself.
            </p>
          )
        ) : (
          <p className="msg">Please login first</p>
        )}
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
  /* typography */
  /*  */
  p {
    text-align: center;
  }
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
