import React from "react";
import { styled } from "styled-components";
import { ReactComponent as LogoIcon } from "../../assets/svgs/logo.svg";

const Logo = () => {
  return (
    <Wrapper>
      <LogoIcon className="icon" /> <span>Bright</span>Buy
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /*  */
  /* typography */
  /*  */
  font-size: 1.5rem;
  font-weight: 600;
  /*  */
  /* color */
  /*  */
  span {
    color: var(--clr-blue-600);
  }

  /*  */
  /* layout */
  /*  */

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;
  .icon {
    height: 2rem;
  }
`;

export default Logo;
