import React from "react";
import { styled } from "styled-components";

const HorizontalScroll = () => {
  return (
    <Wrapper>
      <div className="slide-tracker">
        <a href="#" className="slide">
          Shoes
        </a>
        <a href="#" className="slide">
          Accessories
        </a>
        <a href="#" className="slide">
          Food
        </a>
        <a href="#" className="slide">
          Electronics
        </a>
        <a href="#" className="slide">
          Clothes
        </a>
        <a href="#" className="slide">
          Stationary
        </a>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /*  */
  /* colors */
  /*  */

  background-color: var(--clr-green-400);

  /*  */
  /* typography */
  /*  */
  .slide {
    font-weight: 600;
    font-size: var(--fs-medium);
  }
  /*  */
  /* layout */
  /*  */
  --height: 4rem;
  .slide-tracker {
    height: var(--height);
  }
  /* aliging slide to center vertically */
  .slide-tracker {
    display: flex;
    align-items: center;
    width: 100%;
    background-color: red;
    transform: translateX(-20vw);
  }
  .slide {
    display: inline-block;
    margin-inline: 8rem;
  }
`;
export default HorizontalScroll;
