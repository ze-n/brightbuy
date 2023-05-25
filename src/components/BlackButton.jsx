import React from "react";
import { styled } from "styled-components";
const BlackButton = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
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
  padding-inline: 2rem;
  padding-block: 1rem;
  /* border radius */
  border-radius: 1rem;
`;

export default BlackButton;
