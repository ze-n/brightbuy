import React from "react";
import { Link, useLocation } from "react-router-dom";
import { styled } from "styled-components";
import { FaAngleRight } from "react-icons/fa";
const BreadCrumbs = () => {
  const location = useLocation().pathname;
  const loc = location.split("/").filter((ele) => ele != "");
  return (
    <Wrapper>
      {loc.map((ele) => {
        return (
          <Link className="link">
            {ele} <FaAngleRight />
          </Link>
        );
      })}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  /*  */
  /* colors */
  /*  */
  .link {
    color: #e16e6e;
  }
  /*  */
  /* typography */
  /*  */
  font-size: 1.2rem;
  font-weight: 600;

  .link {
    text-decoration: underline wavy 2px;
    text-underline-offset: 0.3rem;
  }

  /*  */
  /* layout */
  /*  */

  .link {
    /* arranging text and icon on same row */
    display: flex;
    /* aliging text and icon vertically center */
    align-items: center;
  }
`;

export default BreadCrumbs;
