import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { styled } from "styled-components";
const ShopDropDown = () => {
  return (
    <Wrapper>
      <div className="shop">
        Shop <RiArrowDropDownLine className="icon" />
      </div>
      <div className="dropdown"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /*  */
  /* typography */
  /*  */
  .icon {
    font-size: 2rem;
  }

  /*  */
  /* layout */
  /*  */

  /* aligning text and icon vertically */
  .shop {
    display: flex;
    align-items: center;
  }
`;

export default ShopDropDown;
