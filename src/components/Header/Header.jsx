import React from "react";
import { styled } from "styled-components";
import Logo from "./Logo";
import UserDp from "./UserDp";
import CartIconButton from "./CartIconButton";
import ShopDropDown from "./ShopDropDown";

const Header = () => {
  return (
    <Wrapper>
      <nav className="nav container">
        <ul className="nav__list" role="list">
          <li className="nav__items no-margin">
            <a href="#" className="nav__link">
              <ShopDropDown />
            </a>
          </li>
          <li className="nav__items">
            <a href="#" className="nav__link">
              Best Sellers
            </a>
          </li>
          <li className="nav__items logo">
            <a href="#" className="nav__link">
              <Logo />
            </a>
          </li>

          <li className="nav__items no-margin">
            <a href="#" className="nav__link">
              About Us
            </a>
          </li>
          <li className="nav__items">
            <a href="#" className="nav__link">
              Contact
            </a>
          </li>
          <li className="nav__items">
            <a href="#" className="nav__link">
              <UserDp />
            </a>
          </li>
          <li className="nav__items">
            <a href="#" className="nav__link">
              <CartIconButton />
            </a>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  /*  */
  /* colors */
  /*  */
  background: var(--clr-black);

  a {
    color: var(--clr-white);
  }

  /*  */
  /* typography */
  /*  */
  a {
    text-decoration: none;
    font-weight: 600;
    font-size: 1rem;
  }
  /*  */
  /* layout */
  /*  */
  --mh: 6rem;
  --mw: 1300px;
  --pinline: 3rem;
  width: 100vw;
  min-height: var(--mh);
  padding-inline: var(--pinline);

  /* for aligning shop dropdown menu this will be used */
  position: relative;
  /* arrnging entire navigation list in middle of header */
  .nav__list {
    min-height: var(--mh);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /* add margin between nav items */
  .nav__items {
    margin-left: 2.5rem;
  }
  /* dividing navigation into three parts */
  .nav__items.logo {
    margin-inline: auto;
  }

  /* media queries */
  @media screen and (max-width: 1000px) {
    .nav__items {
      margin-left: 1rem;
    }
  }
`;
export default Header;
