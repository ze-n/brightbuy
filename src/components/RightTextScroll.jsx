import React from "react";
import { styled } from "styled-components";
const RightTextScroll = ({ text, top, bottom, opacity, slideWidth }) => {
  return (
    <Wrapper
      style={{
        top: top,
        bottom: bottom,
        opacity: opacity,
        width: 2 * slideWidth,
      }}
    >
      <div className="slide-tracker">
        <div className="slide" style={{ width: slideWidth }}>
          {text}
        </div>
      </div>
      {/* copy */}
      <div className="slide-tracker">
        <div className="slide" style={{ width: slideWidth }}>
          {text}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /*  */
  /* typography */
  /*  */

  --fs: 200px;
  --fw: 600;
  font-size: var(--fs);
  font-weight: var(--fw);
  /*  */
  /* layout */
  /*  */
  position: absolute;
  left: 0;

  /* this variable represets width of slide */
  --slide-width: 180rem;
  .slide {
    width: var(--slide-width);
  }
  /* centering text inside slide */
  .slide {
    display: flex;
    justify-content: center;
  }
  /* setting up width of wrapper */
  /* since there are two slide in total */
  width: calc(2 * var(--slide-width));
  /* placing slide-tracker side by side */
  display: flex;

  /*  */
  /* animation */
  /*  */
  /* this is animation duration */
  --anim-duration: 15s;
  /* this is just width of slide in negatives used in animation */
  --shift: -180rem;

  @keyframes rightScroll {
    from {
      translate: calc(1 * var(--shift));
    }

    to {
      translate: 0;
    }
  }

  animation: rightScroll var(--anim-duration) infinite linear;

  @media screen and (max-width: 750px) {
    --anim-duration: 10s;
  }
`;

export default RightTextScroll;
