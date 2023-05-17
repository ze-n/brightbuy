import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { styled } from "styled-components";
import BestSellers from "./BestSellers";
import FeaturedProducts from "./FeaturedProducts";
import Catagories from "../Catagories";
import { useState } from "react";
const ShopDropDown = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <Wrapper
      onClick={() => {
        setMenuOpen(!menuOpen);
      }}
    >
      <div className="shop" onClick={() => setMenuOpen(!menuOpen)}>
        Shop <IoIosArrowDown className="icon" />
      </div>
      <div className={menuOpen ? "dropdown active" : "dropdown"}>
        <div className="flex-columns container">
          <div className="flex-column">
            <BestSellers />
          </div>
          <div className="flex-column">
            <Catagories />
          </div>
          <div className="flex-column">
            <FeaturedProducts />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /*  */
  /* colors */
  /*  */
  .dropdown {
    background-color: black;
  }
  /*  */
  /* typography */
  /*  */
  .icon {
    font-size: 1.1rem;
  }

  /*  */
  /* layout */
  /*  */

  /* aligning text and icon vertically */
  .shop {
    display: flex;
    align-items: center;
  }
  /* adding some space between shop text and icon */
  .icon {
    margin-left: 0.2rem;
    /* margin top is used because vertical alignment was still unsatisfactory */
    margin-top: 0.1rem;
  }

  /* aligning dropdown with respect to header */
  .dropdown {
    --pblock: 2rem;
    position: absolute;
    /* value of this variable is defined in Header.jsx for min height */
    top: var(--mh-header);
    left: 0;
    right: 0;
    width: 100%;
    padding-inline: var(--pinline);
    padding-block: var(--pblock);
    z-index: 1;
  }

  /* menu Open Close css  */
  .dropdown {
    clip-path: circle(0% at 11% 0);
    transition: clip-path 0.4s ease;
  }
  .active {
    clip-path: circle(141.4% at 100% 0);
  }
  /*  */
  /* media queries */
  /*  */
  @media screen and (max-width: 750px) {
    .dropdown {
      /* on moblie navigation since entire nav is alreaddy pushed down to header */
      top: 0;
      /* reducing vertical padding because on very small devices some weird shape is made for unkown reason */
      --pblock: 1rem;
    }
  }
`;

export default ShopDropDown;
