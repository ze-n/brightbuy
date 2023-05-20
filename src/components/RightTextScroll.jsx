import React from "react";
import { styled } from "styled-components";
const RightTextScroll = ({
  text,
  top,
  bottom,
  opacity,
  slideWidth,
  // shift is basically width of slide in negative, this is used in animeation
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

  /* this variable represets width of slide */
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
      transform: translateX(var(--shift));
    }

    to {
      transform: translateX(0);
    }
  }

  animation: rightScroll var(--anim-duration) infinite linear;

  @media screen and (max-width: 750px) {
    /* --anim-duration: 10s !important; */
  }
`;

export default RightTextScroll;
