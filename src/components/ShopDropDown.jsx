import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { styled } from "styled-components";
const ShopDropDown = () => {
  return (
    <Wrapper>
      Shop <RiArrowDropDownLine className="icon" />
    </Wrapper>
  );
};

const Wrapper = styled.span`
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
  display: flex;
  align-items: center;
`;

export default ShopDropDown;
