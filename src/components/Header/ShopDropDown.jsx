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
    <Wrapper>
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
    top: var(--mh);
    left: 0;
    right: 0;
    width: 100%;
    padding-inline: var(--pinline);
    padding-block: var(--pblock);
  }

  /* menu Open Close css  */
  .dropdown {
    clip-path: circle(0% at 31% 0);
    transition: clip-path 0.4s ease;
  }
  .active {
    clip-path: circle(121.8% at 30% 0);
  }
`;

export default ShopDropDown;
