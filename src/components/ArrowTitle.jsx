import React from "react";
import { styled } from "styled-components";

const ArrowTitle = ({ title }) => {
  return <Wrapper className="aside-heading">{title} &rarr;</Wrapper>;
};

const Wrapper = styled.h2`
  /*  */
  /* layout */
  /*  */
  margin-bottom: 2rem;
`;
export default ArrowTitle;
