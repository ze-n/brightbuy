import React from "react";
import { styled } from "styled-components";
import { FaFacebook, FaInstagram, FaPinterest } from "react-icons/fa";
const SocialButtonList = () => {
  return (
    <Wrapper role="list">
      <li className="social__items">
        <a href="#" className="social__link">
          <FaFacebook />
        </a>
      </li>
      <li className="social__items">
        <a href="#" className="social__link">
          <FaInstagram />
        </a>
      </li>
      <li className="social__items">
        <a href="#" className="social__link">
          <FaPinterest />
        </a>
      </li>
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  /*  */
  /* layout */
  /*  */
  display: flex;
  gap: 0.3rem;
  .social__link {
    font-size: var(--fs-icon);
  }
`;

export default SocialButtonList;
