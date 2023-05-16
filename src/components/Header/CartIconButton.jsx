import React from "react";
import { styled } from "styled-components";
import { CgShoppingCart } from "react-icons/cg";
const CartIconButton = () => {
  return (
    <Wrapper>
      <CgShoppingCart className="cart-icon" />
      <div className="counter">2</div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /*  */
  /* typography */
  /*  */
  .cart-icon {
    font-size: 1.8rem;
    font-weight: 800;
  }
  .counter {
    font-size: var(--fs-x-small);
  }

  /*  */
  /* colors */
  /*  */
  .counter {
    background: var(--clr-red-500);
  }
  /*  */
  /* layout */
  /*  */
  position: relative;

  .counter {
    /* size is for width and height */
    --size: 1.3rem;
    /* positioning counter to a specific position respect to wrapper */
    position: absolute;
    right: -0.5rem;
    top: -0.8rem;
    width: var(--size);
    height: var(--size);

    border-radius: 1000px;

    /* positioning text to the middle of counter */
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export default CartIconButton;
