import React from "react";
import { styled } from "styled-components";
const ShadowBtn = ({ text }) => {
  return (
    <Wrapper>
      <a href="#" className="link text-medium">
        {text}
      </a>
      <div className="shadow"></div>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /*  */
  /* colors */
  /*  */
  .link {
    background-color: var(--clr-green-400);
  }
  .shadow {
    background-color: var(--clr-black);
  }

  /*  */
  /* typography */
  /*  */
  .link {
    font-weight: 600;
  }
  /*  */
  /* layout */
  /*  */

  /* setting up padding */
  .link {
    display: block;
    padding-block: 1rem;
  }
  /* givingn width to link */
  /* using width instead of padding-inline because going to give it width 80vw for smaller devices */
  width: 25rem;
  /* centering text inside link */
  .link {
    display: flex;
    justify-content: center;
  }
  /* relative is used to position shadow */
  position: relative;
  .shadow {
    /* positioning shadow */
    position: absolute;
    left: 0rem;
    top: 0rem;
    /* giving height and width to shadow */
    width: 100%;
    height: 100%;
  }
  .link {
    /* placing link above shadow */
    position: relative;
    z-index: 1;
  }

  /*  */
  /* animation */
  /*  */

  .shadow {
    --offset: 0.7rem;
    transform: translate(var(--offset), var(--offset));
    transition: transform 0.3s ease;
  }
  &:where(:hover, :active) .shadow {
    --offset: 0rem;
  }
  transition: transform 0.3s ease;
  &:where(:hover, :active) {
    --offset: 0.4rem;
    transform: translate(var(--offset), var(--offset));
  }

  @media screen and (max-width: 470px) {
    /* setting width to adjust according to viewport in smaller devices */
    width: 80vw;
  }
`;
export default ShadowBtn;
