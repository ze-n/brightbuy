import React from "react";
import { styled } from "styled-components";
const Feature = ({ img, children }) => {
  return (
    <Wrapper>
      <img src={img} alt="" className="icon" />
      <p className="text">{children}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /*  */
  /* typography */
  /*  */
  /* if children have something with .bold class this will work */
  .bold {
    font-weight: 600;
  }
  /* aligning text center */
  .text {
    text-align: center;
  }
  /*  */
  /*layout  */
  /*  */

  /* setting up max-width */
  max-width: 32ch;
  /* setting up width for icon */
  .icon {
    width: 2.5rem;
  }

  /* aliging icon and text center horizontally */
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default Feature;
