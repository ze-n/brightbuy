import React from "react";
import { styled } from "styled-components";
import arrow from "../assets/icons/arrow.svg";

const ArrowBtn = ({
  children,
  fw,
  arrowWidth,
  arrowHeight,
  animDuration,
  animeScale,
}) => {
  return (
    <Wrapper
      style={{
        "--fw": fw,
        "--arrow-width": arrowWidth,
        "--arrow-height": arrowHeight,
        "--anim-duration": animDuration,
        "--anim-scale": animeScale,
      }}
    >
      <p className="text">{children}</p>
      <img src={arrow} className="arrow"></img>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  /*  */
  /* colors */
  /*  */
  background: none;
  border: none;
  color: inherit;
  outline: none;
  /*  */
  /* typography */
  /*  */
  --fw: 600;
  font-weight: var(--fw);

  /*  */
  /* layout */
  /*  */
  /* aliging arrow and text */
  display: flex;
  flex-direction: column;
  align-items: start;

  /*  setting up arrow width */
  --arrow-height: 1rem;
  --arrow-width: 80%;
  .arrow {
    width: var(--arrow-width);
    height: var(--arrow-height);
    object-fit: cover;
    object-position: right;
  }

  /*  */
  /* animation */
  /*  */
  cursor: pointer;
  --anim-duration: 0.2s;
  --anim-scale: 1.2;
  .arrow {
    transform-origin: left;
    transition: transform var(--anim-duration) ease;
  }
  :where(&:hover, &:focus) .arrow {
    transform: scaleX(var(--anim-scale));
  }
`;

export default ArrowBtn;
