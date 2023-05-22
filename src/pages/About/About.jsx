import React from "react";
import { styled } from "styled-components";
import Intro from "./Intro";
import How from "./How";
import CompanyValues from "./CompanyValues";

const About = () => {
  return (
    <Wrapper>
      <Intro />
      <How />
      <CompanyValues />
    </Wrapper>
  );
};

const Wrapper = styled.div``;
export default About;
