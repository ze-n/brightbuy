import React from "react";
import blob from "../assets/blob.svg";
import { styled } from "styled-components";
const Blob = ({
  left,
  top,
  z,
  fill,
  right,
  opacity,
  width,
  height,
  rotate,
}) => {
  return (
    <Wrapper
      style={{
        right: right,
        left: left,
        top: top,
        zIndex: z,
        rotate: rotate,
      }}
    >
      <img
        src={blob}
        alt=""
        style={{
          fill: fill,
          opacity: opacity,
          width: width,
          height: height,
        }}
      />
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /*  */
  /* colors */
  /*  */
  img {
    display: block;
    fill: var(--clr-green-400);
  }

  /*  */
  /* layout */
  /*  */
  right: 0;
  position: absolute;
  @keyframes turn {
    from {
      rotate: 0deg;
    }
    to {
      rotate: 20deg;
    }
  }
  animation: turn 5s linear infinite alternate;
`;

export default Blob;
