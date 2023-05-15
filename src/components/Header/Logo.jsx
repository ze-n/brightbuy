import React from "react";
import { styled } from "styled-components";
import LogoIcon from "../../assets/logos/logo.svg";

const Logo = () => {
  return (
    <Wrapper>
      <img src={LogoIcon} alt="" className="icon" />
      <span className="bright">Bright</span>Buy
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /*  */
  /* typography */
  /*  */
  font-size: var(--fs-logo);
  font-weight: 600;
  /*  */
  /* color */
  /*  */
  .bright {
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
    height: 2.5rem;
  }

  /* media query for 1000px */
  @media screen and (max-width: 1000px) {
    .icon {
      /* max-height: 2rem; */
    }
  }
`;

export default Logo;
