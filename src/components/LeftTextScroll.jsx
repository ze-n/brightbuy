import React from "react";
import { styled } from "styled-components";
const LeftTextScroll = ({
  text,
  top,
  bottom,
  opacity,
  slideWidth,
  // shift is width of slide in negative, this is used in animation
  shift,
  animDuration,
  fontSize,
  fontWeight,
}) => {
  return (
    <Wrapper
      style={{
        top: top,
        bottom: bottom,
        opacity: opacity,
        "--anim-duration": animDuration,
        "--slide-width": slideWidth,
        "--shift": shift,
        "--fs": fontSize,
        "--fw": fontWeight,
      }}
    >
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
  .slide-tracker {
    width: var(--slide-width);
  }
  /* centering text inside slide */
  .slide {
    display: flex;
    justify-content: center;
  }
  /* setting up width of wrapper */
  /* since there are two slide in total */
  width: calc(2 * var(--slide-width)) !important;
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
      transform: translateX(0);
    }

    to {
      transform: translateX(var(--shift));
    }
  }

  animation: leftScroll var(--anim-duration) infinite linear;

  @media screen and (max-width: 750px) {
    /* --anim-duration: 10s; */
  }
`;

export default LeftTextScroll;
