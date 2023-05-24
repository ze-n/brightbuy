import React from "react";
import { styled } from "styled-components";
import LogoIcon from "../../assets/logos/logo.svg";

const Logo = () => {
  return (
    <Wrapper>
      <img src={LogoIcon} alt="" className="icon" />
      <span className="bright">bright</span>buy
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
    color: var(--clr-logo);
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
      /* making icon look even with logo font on this screen size */
      max-height: 2rem;
    }
  }
`;

export default Logo;
