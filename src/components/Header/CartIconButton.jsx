import React, { useEffect } from "react";
import { styled } from "styled-components";
import { CgShoppingCart } from "react-icons/cg";
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/UserAuthContext";
const CartIconButton = () => {
  const { liveCartProducts, getLiveCartProducts } = useCart();
  const { currentUser } = useAuth();
  useEffect(() => {
    if (currentUser) {
      const fetchLiveCartProducts = async () => {
        try {
          await getLiveCartProducts();
          console.log("Products loaded");
        } catch (error) {
          console.log("Failed to load products", error.message);
        }
      };
      fetchLiveCartProducts();
    }
  }, [currentUser]);
  if (liveCartProducts) {
    console.log(liveCartProducts.length);
  }
  return (
    <Wrapper>
      <CgShoppingCart className="cart-icon" />
      {liveCartProducts && (
        <div className="counter">{liveCartProducts.length}</div>
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /*  */
  /* typography */
  /*  */
  .cart-icon {
    font-size: var(--fs-icon);
    font-weight: 800;
  }
  .counter {
    font-size: var(--fs-cart-counter-small);
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
