import React from "react";
import { styled } from "styled-components";

const Title = ({ title }) => {
  return <Wrapper>{title} &rarr;</Wrapper>;
};

const Wrapper = styled.h2`
  font-size: var(--fs-lg);
  /*  */
  /* layout */
  /*  */
  margin-bottom: 2rem;
`;
export default Title;
