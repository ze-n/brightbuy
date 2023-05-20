import React from "react";
import { styled } from "styled-components";
const LeftTextScroll = ({ text, top, bottom, opacity }) => {
  return (
    <Wrapper style={{ top: top, bottom: bottom, opacity: opacity }}>
      <div className="slide-tracker">
        <div className="slide">{text}</div>
      </div>
      {/* copy */}
      <div className="slide-tracker">
        <div className="slide">{text}</div>
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

  /* This represents slide width */
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
  /* represents animatino duration */
  --anim-duration: 15s;
  /* just width of slide in negatives used in animation */
  --shift: -180rem;

  @keyframes leftScroll {
    from {
      translate: 0;
    }

    to {
      translate: calc(1 * var(--shift));
    }
  }
  .slide-tracker {
    animation: leftScroll var(--anim-duration) infinite linear;
  }

  @media screen and (max-width: 750px) {
    --anim-duration: 10s;
  }
`;

export default LeftTextScroll;
