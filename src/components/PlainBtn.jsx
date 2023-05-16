import React from "react";
import { styled } from "styled-components";

const PlainBtn = ({ text }) => {
  return <Wrapper>{text}</Wrapper>;
};

const Wrapper = styled.a`
  /*  */
  /* colors */
  /*  */
  background-color: var(--clr-green-400);

  /*  */
  /* typography */
  /*  */
  font-weight: 600;
  /*  */
  /* layout */
  /*  */

  display: inline-block;
  margin-top: 2rem;
  padding-inline: 2rem;
  padding-block: 1rem;
`;

export default PlainBtn;
