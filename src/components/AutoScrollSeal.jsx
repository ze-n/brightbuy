import React from "react";
import { styled } from "styled-components";
const AutoScrollSeal = ({ top, rotate, z, text }) => {
  return (
    <Wrapper style={{ top: top, rotate: rotate, zIndex: z }}>
      <div className="slide-tracker">
        <div className="slide">{text}</div>
        <div className="slide">{text}</div>
        <div className="slide">{text}</div>
        <div className="slide">{text}</div>
        <div className="slide">{text}</div>
        <div className="slide">{text}</div>
        <div className="slide">{text}</div>
        <div className="slide">{text}</div>
        <div className="slide">{text}</div>
        <div className="slide">{text}</div>
      </div>
      {/* copy */}
      <div className="slide-tracker">
        <div className="slide">{text}</div>
        <div className="slide">{text}</div>
        <div className="slide">{text}</div>
        <div className="slide">{text}</div>
        <div className="slide">{text}</div>
        <div className="slide">{text}</div>
        <div className="slide">{text}</div>
        <div className="slide">{text}</div>
        <div className="slide">{text}</div>
        <div className="slide">{text}</div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* colors */
  .slide-tracker {
    background-color: var(--clr-yellow-500);
  }

  /*  */
  /* typography */
  /*  */
  .slide {
    font-weight: 900;
  }
  /*  */
  /* layout */
  /*  */
  /* positioning warpper to left most side */
  position: absolute;
  left: 0;
  /* positiong children of slide-tracher on same row */
  .slide-tracker {
    display: flex;
  }
  /* this variable represents the slide width */
  --slide-width: 20rem;
  .slide {
    width: var(--slide-width);
    /* just wanted the seal to be taller. This is easiest way to do so */
    padding-block: 0.2rem;
    /* placing text inside slide to be in center horizontally */
    display: flex;
    justify-content: center;
  }
  /* giving width to wrapper 20 times because 20 slides are there */
  width: calc(20 * var(--slide-width));
  /* there are two slide-tracker positioning them on same row */
  display: flex;

  /*  */
  /* animation */
  /*  */
  /* duration of animation */
  --anim-duration: 15s;
  /* this is just width of slide in negatives will help in animation */
  --shift: -20rem;

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(calc(10 * var(--shift)));
    }
  }
  /* setting animation */
  .slide-tracker {
    animation: scroll var(--anim-duration) infinite linear;
  }
`;

export default AutoScrollSeal;
