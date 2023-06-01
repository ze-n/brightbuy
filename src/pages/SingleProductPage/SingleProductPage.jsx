import React from "react";
import { styled } from "styled-components";
import BreadCrumbs from "./BreadCrumbs";
import API from "./Temp";
import Images from "./Images";
import Details from "./Details";

const SingleProductPage = () => {
  const { id, name, price, rating, reviews, colors } = API;
  return (
    <Wrapper>
      <div className="container ">
        <div className="breadcrumbs">
          <BreadCrumbs />
        </div>
        <div className="product__images-details-container flex-columns">
          <div className="product__images-container flex-column">
            <Images />
          </div>
          <div className="product__details-container flex-column">
            <Details />
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  /*  */
  /* colors */
  /*  */
  background-color: var(--bg-product-page);
  color: var(--clr-product-page);

  /*  */
  /* layout */
  /*  */
  /* padding */
  --pblock: 2rem;
  padding-inline: var(--pinline);
  padding-block: var(--pblock);

  /* margins */

  /* adding some margin below breadcrumbs */
  .breadcrumbs {
    margin-bottom: 2rem;
  }
`;

export default SingleProductPage;
