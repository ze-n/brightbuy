import React from "react";
import { styled } from "styled-components";
import { useState } from "react";
import Logo from "./Logo";
import UserDp from "./UserDp";
import CartIconButton from "./CartIconButton";
import ShopDropDown from "./ShopDropDown";
import { Link } from "react-router-dom";

const Header = () => {
  const [hamburgerMenu, setHamburgerMenu] = useState(false);
  return (
    <Wrapper>
      <nav
        className={hamburgerMenu ? "nav container nav-open" : "nav container"}
        onClick={() => {
          setHamburgerMenu(!hamburgerMenu);
        }}
      >
        <ul className="nav__list" role="list">
          <li className="nav__items no-margin">
            <a
              href="#"
              className="nav__link"
              onClick={(e) => {
                setHamburgerMenu(hamburgerMenu);
                // this makes sure that when clicked click event of parent i.e, nav also not trigger
                e.stopPropagation();
              }}
            >
              <ShopDropDown />
            </a>
          </li>
          <li className="nav__items">
            <a href="#" className="nav__link">
              Best Sellers
            </a>
          </li>
          <li className="nav__items logo hide-on-mobile">
            <Link to="/" className="nav__link">
              <Logo />
            </Link>
          </li>

          <li className="nav__items no-margin">
            <Link to="/about" className="nav__link">
              About Us
            </Link>
          </li>
          <li className="nav__items">
            <Link to="/contact" className="nav__link">
              Contact
            </Link>
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

      <nav className="mobile-nav hide-on-desktop">
        <Link to="/" className="header-logo ">
          <Logo />
        </Link>
        <a href="#" className="mobile-nav__link mobile-userDp-btn">
          <UserDp />
        </a>
        <a href="#" className="mobile-nav__link mobile-cart-btn">
          <CartIconButton />
        </a>
        <div
          className={
            hamburgerMenu
              ? "hamburger-menu hamburger-menu--active"
              : "hamburger-menu"
          }
          onClick={() => {
            setHamburgerMenu(!hamburgerMenu);
          }}
        >
          <div className="bars" id="bar1"></div>
          <div className="bars" id="bar2"></div>
          <div className="bars no-margin" id="bar3"></div>
        </div>
      </nav>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  /*  */
  /* colors */
  /*  */
  background: var(--bg-header);
  color: var(--clr-header);
  .nav {
    background-color: inherit;
  }
  a {
    color: inherit;
  }
  /* hamburger menu colors */
  .bars {
    background-color: var(--clr-header);
  }

  /*  */
  /* typography */
  /*  */
  a {
    text-decoration: none;
    font-weight: 600;
  }
  .nav__link {
    font-size: var(--fs-main-nav);
  }
  /*  */
  /* layout */
  /*  */
  --mw: 1300px;
  width: 100vw;
  min-height: var(--mh-header);
  padding-inline: var(--pinline);
  padding-block: 1rem;

  /* for aligning shop dropdown menu this will be used */
  position: relative;
  /* this heigh z-index issures that header alwalys stays at top */
  z-index: 99;
  /* arrnging entire navigation list in middle of header */
  .nav__list {
    min-height: var(--mh-header);
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
    /* reducing margins to use space more effeciently */
    .nav__items {
      margin-left: 1rem;
    }
  }
  @media screen and (max-width: 750px) {
    /*  */
    /* typography */
    /*  */
    /* for font-sizes check out variables.css */
    .nav__link {
    }
    /* layout */
    /*  */
    /* reducing padding because less space is available*/
    --pinline: 2rem;
    /* mobile nav stuff */

    .mobile-nav {
      display: flex;
      align-items: center;
      gap: 1rem;
      height: var(--mh-header);
    }
    /* to create huge space between logo and other navigation */
    .header-logo {
      margin-right: auto;
    }

    /* hamburger menu stuff */
    /* giving dimensions to bars of hamburger menu seperating them with some space*/
    .bars {
      width: 1.4rem;
      height: 0.15rem;
      margin-bottom: 0.3rem;
    }
    /* adding some border radius to bars for better look */
    .bars {
      border-radius: 999px;
    }
    /* making hamburger menu look clickable */
    .hamburger-menu {
      cursor: pointer;
    }

    /* minimum height of nav */
    --nav-m-height: 800px;
    --nav-height: calc(100vh - var(--mh-header));
    .nav {
      min-height: var(--nav-m-height);
      height: var(--nav-height);
    }
    /* placing nav for smaller devices */
    .nav {
      position: absolute;
      left: 0;
      right: 0;
      top: var(--mh-header);
    }
    /* setting padding for nav */
    .nav {
      padding-inline: var(--pinline);
    }

    /* changing flex direction of nav__list to column */
    .nav__list {
      flex-direction: column;
    }
    /* increasing height of nav__list */
    .nav__list {
      min-height: var(--nav-m-height);
      height: var(--nav-height);
    }
    /* arranging flex children i.e, nav__items to be shown towards right direction */
    .nav__list {
      align-items: end;
    }
    .nav__items {
      margin: 0;
      margin-bottom: 1.5rem !important;
    }

    /*  */
    /* animations */
    /*  */
    /* toggle navigation */
    .nav {
      clip-path: circle(0% at 100% 0);
    }
    .nav-open {
      clip-path: circle(141.4% at 100% 0);
    }
    .nav {
      transition: clip-path 0.3s ease;
    }
    .hamburger-menu--active .bars {
      transform-origin: right;
    }
    .hamburger-menu--active #bar1 {
      transform: scaleX(0.6);
    }
    .hamburger-menu--active #bar2 {
      transform: scaleX(0.8);
    }
    .bars {
      transition: transform 0.3s ease;
    }
  }

  @media screen and (max-width: 400px) {
    /*  */
    /* colors */
    /*  */
    .mobile-cart-btn {
      background-color: black;
    }

    /*  */
    /* layout */
    /*  */
    /* reducing padding because less screen to work with */
    --pinline: 1rem;
    .mobile-cart-btn {
      /* repositioning mobile-cart-button to bottom right because of less space  */
      position: fixed;
      bottom: 2rem;
      right: 0;
      /* giving width and height to give it circular border radius */
      --size: 3.5rem;
      width: var(--size);
      height: var(--size);
      border-radius: 1000px;
      /* centering cart component to center of button */
      display: flex;
      justify-content: center;
      align-items: center;
      /* reducing size of button because it is too big */
      transform: scale(0.8);
    }
  }
`;
export default Header;
