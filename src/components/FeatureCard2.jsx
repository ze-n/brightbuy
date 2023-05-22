import React from "react";
import { styled } from "styled-components";

const FeatureCard2 = ({ icon, title, text }) => {
  return (
    <Wrapper>
      <div className="icon-container">
        <img src={icon} alt="icon" />
      </div>
      <h3 className="heading-small">{title}</h3>
      <p className=" text-regular">{text}</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /*  */
  /* colors */
  /*  */

  .icon-container {
    background-color: var(--clr-white);
  }
  /*  */
  /* typography */
  /*  */
  /* aliging text center */
  text-align: center;
  /*  */
  /* layout */
  /*  */
  /* aligning icon heading and text horizontally */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* givin some space between children */
  gap: 1rem;
  /* giving max-width because hate eye travel */
  max-width: 30ch;

  .icon-container {
    /* giving circular border-radius */
    padding: 1rem;
    border-radius: 1000px;
  }
`;

export default FeatureCard2;
