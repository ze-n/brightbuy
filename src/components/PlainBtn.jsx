import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
const PlainBtn = ({ text, to }) => {
  return (
    <Wrapper>
      <Link className="text" to={to}>
        {text}
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /*  */
  /* colors */
  /*  */
  background: var(--clr-green-400);

  /*  */
  /* typography */
  /*  */
  font-weight: 600;
  /*  */
  /* layout */
  /*  */
  /* this will be used by ::after */
  position: relative;
  /* inline-block to give padding since a are inilne by default  */
  display: inline-block;
  padding-inline: 2rem;
  padding-block: 1rem;

  /* cursor */
  cursor: pointer;

  .text {
    /* to show text above after */
    position: relative;
    z-index: 1;
  }
  /*  */
  /* animations */
  /*  */
  &::after {
    content: "";
    /* setting widht and height */
    width: 100%;
    height: 100%;
    /* positioning */
    position: absolute;
    left: 0;
    top: 0;
    /* colors */
    background: var(--gradient-orange);
    /* transition */
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  transition: color 0.3s ease, transform 0.3s ease;
  &:hover,
  &:focus,
  &:active {
    /* colors */
    color: var(--clr-black);
    transform: scale(0.9);
  }
  &:hover::after,
  &:focus::after,
  &:active::after {
    opacity: 1;
  }
`;

export default PlainBtn;
