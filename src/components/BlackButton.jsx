import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
const BlackButton = ({ children, scale, animDuration, to }) => {
  return (
    <Wrapper style={{ "--scale": scale, "--anim-duration": animDuration }}>
      <Link to={to}> {children}</Link>
    </Wrapper>
  );
};
const Wrapper = styled.a`
  /*  */
  /* colors */
  /*  */
  color: white;
  background-color: black;
  /*  */
  /* typography */
  /*  */
  font-weight: 600;
  font-size: 1.2rem;
  cursor: pointer;
  /* centering text inside anchor tag */
  text-align: center;

  /*  */
  /* layout */
  /*  */
  /* display block because want it to take all available width */
  display: block;
  /* padding */
  padding-inline: 1rem;
  padding-block: 1rem;
  /* border radius */
  border-radius: 1rem;

  /*  */
  /* animation */
  /*  */
  --scale: 0.95;
  --anim-duration: 0.3s;
  transition: transform var(--anim-duration) ease;
  &:hover,
  &:focus,
  &:active {
    transform: scale(var(--scale));
  }

  @media screen and (max-width: 750px) {
    font-size: 1rem;
  }
`;

export default BlackButton;
