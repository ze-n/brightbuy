import React from "react";
import { styled } from "styled-components";
import arrow from "../assets/icons/arrow.svg";

const ArrowBtn = ({ text, fw, arrowWidth, animDuration, animeScale }) => {
  return (
    <Wrapper
      style={{
        fontWeight: fw,
        "--arrow-width": arrowWidth,
        "--anim-duration": animDuration,
        "--anim-scale": animeScale,
      }}
    >
      <p className="text">{text}</p>
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
  font-weight: 600;

  /*  */
  /* layout */
  /*  */
  /* aliging arrow and text */
  display: flex;
  flex-direction: column;
  align-items: start;

  /*  setting up arrow width */
  --arrow-width: 80%;

  .arrow {
    width: var(--arrow-width);
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
