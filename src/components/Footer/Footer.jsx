import React from "react";
import { styled } from "styled-components";
import Catagories from "../Catagories";
import FooterAbout from "./FooterAbout";
import FooterContact from "./FooterContact";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer__top container flex-columns">
        <div className="flex-column">
          <FooterAbout />
        </div>
        <div className="flex-column">
          <Catagories />
        </div>
        <div className="flex-column">
          <FooterContact />
        </div>
      </div>
      <div className="footer__bottom">
        <p className="footer__bottom-text container">
          Copyright © 2004-2023 BrightBuy.com Solutions Inc. All Rights
          Reserved. All other trademarks and copyrights are the property of
          their respective holders.
        </p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  /*  */
  /* colors */
  /*  */
  background-color: var(--clr-black);
  color: var(--clr-white);
  /* setting up green background color for footer__bottom */
  .footer__bottom {
    background-color: var(--clr-green-400);
  }

  /*  */
  /* typography */
  /*  */
  .footer__bottom-text {
    font-size: var(--fs-small);
    text-align: center;
  }
  /*  */
  /* layout */
  /*  */

  /* padding for footer__bottom */
  .footer__bottom {
    padding-inline: var(--pinline);
    padding-block: 0.8rem;
  }
  /* padding for footer__top */
  .footer__top {
    padding-inline: var(--pinline);
    padding-block: 2rem;
  }

  /* this is done because when header opens above footer catagory__titles were overlapping  */
  /* this fixes weird z-index issue */
  position: relative;
  z-index: 0;
`;

export default Footer;
